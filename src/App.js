
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view-menu';
import menus from "./components/tree-view-menu/data"
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian />    */}

      {/* Random Color component */}
      {/* <RandomColor />       */}

      {/* Star Rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more product component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component/Menu UI component */}
      {/* <TreeView menus={menus}/> */}

      {/* /* QrCode generator */ }
      {/* <QRCodeGenerator /> */}

      {/* Light and dark mode switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* Custom tabs component  */}
      {/* <TabTest /> */}

      {/* Custom ModalPopup */}
      <ModalTest />
    </div>
  );
}

export default App;
