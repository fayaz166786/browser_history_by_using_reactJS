import './index.css'

const HistoryItem = props => {
  const {historyObject, func} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyObject

  const onDeleteHistory = () => {
    func(id)
  }

  return (
    <li className="li-item">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="history-container-2">
        <div className="history-details">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="title-box">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <div className="del-container">
          <button type="button" testid="delete" onClick={onDeleteHistory}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
