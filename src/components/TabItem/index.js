import './index.css'

const TabItem = props => {
  const {tabDetai, clickTabItem} = props
  const {displayText,tabId} = tabDetails
  
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  
  const activeTabClass = isActive ? 'active-tab-btn' : ''
  
  return (
    <li className="tab-item-container ">
      <button type="button" className=`active-btn-tab ${activeTabClass}` onClick={onClickTabClass}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
