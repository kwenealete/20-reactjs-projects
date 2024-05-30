
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
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndButtom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scrol-to-a-specific-section';

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
      {/* <ModalTest /> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* tic Tac Toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* UseFetch - custom Hook Test*/}
      {/* <UseFetchHookTest /> */}

      {/* Use Onclcik Outside Hook Test */}
      {/* <UseOnclickOutsideTest /> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndButtom /> */}

      {/* Scroll to a particular section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
