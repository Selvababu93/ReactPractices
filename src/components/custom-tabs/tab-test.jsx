import React from "react";
import Tabs from "./tabs";
import "./styles.css";

const RandomContent = () => {
  return <h1>Some Random Content</h1>;
};
const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is content for Tab 3</div>,
    },
    {
      label: "Tab 4",
      content: <RandomContent />,
    },
  ];

  const handleChange = (currentIndex) => {
    console.log(currentIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};
export default TabTest;
