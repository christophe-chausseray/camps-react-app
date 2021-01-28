import React from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  border: #2f7510 2px solid;
  margin: 10px;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.55);
`;

const TabList = styled.ul`
  margin: 0 0 10px;
  padding: 0;
  background-color: #2f7510;
`;

const TabItem = styled.li`
  display: inline-block;
  position: relative;
  list-style: none;
  padding: 16px 0px;
  cursor: pointer;
  width: 49%;
  text-align: center;
  color: #dbdbdb;

  &:hover {
    color: white;
  }

  ${(props: { isSelected: boolean }) => {
    if (props.isSelected) {
      return `
        border-bottom: white 4px solid;
        color: white;
      `;
    }
  }}
`;

const TabPanel = styled.div`
  padding: 0 10px;
`;

function Tabs({ children }: { children: JSX.Element[] }) {
  const [tabIndexSelected, setTabIndexSelected] = React.useState(0);

  const changeTabSelected = (newTabIndexSelected: number) => {
    setTabIndexSelected(newTabIndexSelected);
  };

  return (
    <TabsContainer>
      <TabList aria-label="Tabs">
        {children.map((child, tabIndex) => {
          return (
            <TabItem
              key={tabIndex}
              aria-label={`${child.props.title}Tab`}
              aria-selected={tabIndex === tabIndexSelected ? 'true' : 'false'}
              onClick={() => changeTabSelected(tabIndex)}
              isSelected={tabIndex === tabIndexSelected}
            >
              {child.props.title}
            </TabItem>
          );
        })}
      </TabList>
      {children.map((child, tabIndex) => {
        if (tabIndex === tabIndexSelected) {
          return child;
        }

        return null;
      })}
    </TabsContainer>
  );
}

function Tab({ children }: { children: JSX.Element[] }) {
  return (
    <TabPanel>
        {children}
    </TabPanel>
  );
}

export { Tabs, Tab }

