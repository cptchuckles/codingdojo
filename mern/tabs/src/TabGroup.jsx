import { useState, Children } from 'react'

const TabGroup = ({children}) => {
  const [activeTab, activateTab] = useState(0);

  return (
    <>
      <div className="tabHeadings">
        { Children.toArray(children).map((child, i) => (
          <a
            key={child.props.heading}
            className="tabHeading"
            style={{ backgroundColor: activeTab === i ? "#444" : "inherit"}}
            onClick={() => activateTab(i)}
          >{child.props.heading}</a>
        ))}
      </div>
      <div className="tabBody">
        { children[activeTab] }
      </div>
    </>
  )
};

export default TabGroup;
