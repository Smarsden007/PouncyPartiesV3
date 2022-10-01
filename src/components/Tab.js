import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./index.css";

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);


 
  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <MasterDiv>
    <TabMasterDiv>
        
      <ul style={{display:'flex', flexDirection:'row', paddingBottom: '1rem'}}>
        {tabsData.map(({ tab }, idx) => (
            
          <li style={{padding:'1rem'}}>
            <TabA
              className={`nav-link ${idx === activeTab ? "active" : ""}`}
              href="test"
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </TabA>
          </li>
          
        ))}
      </ul>
      

      <SecondDiv>
        {tabsData[activeTab] && tabsData[activeTab].children}
      </SecondDiv>
    </TabMasterDiv>
    </MasterDiv>
  );
};

const TabPane = ({ children }) => {
  return <SecondDiv>{ children }</SecondDiv>;
};

Tab.TabPane = TabPane;

export default Tab;

export const TabMasterDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #E6BEAE;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
border-radius: 1rem;
width: 80vw;
`
export const SecondDiv = styled.div`
display: flex;
flex-direction: flex-start;
`
export const MasterDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100vw;
`

export const TabA = styled.a`
color: pink;
background-color: white;
&:hover {
    background-color: white;
    color: #E6BEAE;
}
`