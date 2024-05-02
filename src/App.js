
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view-menu';
import menus from "./components/tree-view-menu/data"
import QRCodeGenerator from './components/qr-code-generator';

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

      <QRCodeGenerator />
    </div>
  );
}

export default App;
