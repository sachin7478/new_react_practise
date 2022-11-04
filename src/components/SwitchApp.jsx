import React from 'react';
import { useSelector } from 'react-redux';

const SwitchApp = (props) => {
  const selectedTab = useSelector((state)=>{return state.tabReducer.selectedTab});
  console.log(selectedTab);
  let selectedTabObj = props.config.sidebar.tabs.filter((item, index) => {
    return item.name === selectedTab;
  })[0];


  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-8 d-flex justify-content-center">
            {
              React.createElement(selectedTabObj.component, {key:selectedTabObj.name, config:selectedTabObj })
            }
          </div>
        </div>
      </div>
    </>
  )
  
}
export default SwitchApp;