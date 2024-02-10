import "../styles/main/Main.css";
import MainImage from "../components/main/MainImage";
import MainTrack from "../components/main/MainTrack";
import HeaderContainer from "./common/Headercontainer";

const MainForm = () => {
  return (
    <>
      <HeaderContainer />
      <div id="main_container">
        <MainImage></MainImage>
        <div id="main_content_container">
          <MainTrack></MainTrack>
        </div>
      </div>
    </>
  );
};

export default MainForm;
