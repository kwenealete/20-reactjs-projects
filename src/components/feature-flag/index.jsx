import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Accordian from "../accordian";
import TreeView from "../tree-view-menu";
import menus from "../tree-view-menu/data";
import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import TabTest from "../custom-tabs/tab-test";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />
    },
    {
      key: "showAccordian",
      component: <Accordian />
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />
    },
    {
      key: "showTabs",
      component: <TabTest />
    }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Kindly wait</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map(componentItem =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
