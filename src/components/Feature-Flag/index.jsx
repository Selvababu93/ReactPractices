import React, { useContext } from "react";
import LightDarkMode from "../ligt-dark-mode";
import TicTacToe from "../Tic-Tac-Toe/TicTacToe";
import RandomColor from "../random-color";
import Accordian from "../accoridan";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
import TabTest from "../custom-tabs/tab-test";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];

  const checkEnabledFlags = (getCurrentKey) => {
    return enabledFlags[getCurrentKey];
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
