import "./index.css";

import React from "react";
import Accordian from "./components/accoridan";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QrCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/ligt-dark-mode";
import CustomScrollIndicator from "./components/custom-scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/Tic-Tac-Toe/TicTacToe";
import FeatureFlags from "./components/Feature-Flag";
import FeatureFlagGlobalState from "./components/Feature-Flag/context";
import UseFetchHookTest from "./components/Use-Fetch/test";
import UseOnclickOutSideTest from "./components/Use-Outside-Click/test";
import UseWindowResizeTest from "./components/Use-Window-Resize/test";
import ScrollToTopAndBottom from "./components/Scroll-Top-and_Bottom";

const App = () => {
  const imageUrl = "https://picsum.photos/v2/list";

  return (
    <div>
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating noOfStars={3} /> */}

      {/* Image Slider */}
      {/* <ImageSlider url={imageUrl} limit={3} /> */}

      {/* Load More Data */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component / Menu UI Component / Recursive Navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generatoe */}
      {/* <QrCodeGenerator /> */}

      {/* Light-Dark-Mode */}
      {/* <LightDarkMode /> */}

      {/* Custom Scroll Indicator */}
      {/* <CustomScrollIndicator /> */}

      {/* Custom Tabs */}
      {/* <TabTest /> */}

      {/* Custom modal PopUp */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search Auto Complete */}
      {/* <SearchAutoComplete /> */}

      {/* TicTacToe */}
      {/* <TicTacToe /> */}

      {/* Feature Flags */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* Custom Hooks Section Begin*/}
      {/* Custom Fetch Hook */}
      {/* <UseFetchHookTest /> */}

      {/* Custom Onclick Hook */}
      {/* <UseOnclickOutSideTest /> */}

      {/* Custom Window resize Hook */}
      {/* <UseWindowResizeTest /> */}
      {/* Custom Hooks Section End*/}

      {/* Scroll To Top and Bottom */}
      <ScrollToTopAndBottom />
    </div>
  );
};

export default App;
