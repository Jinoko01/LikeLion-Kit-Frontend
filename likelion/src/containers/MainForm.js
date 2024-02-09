import "../styles/main/Main.css";
import MainImage from "../components/main/MainImage";
import MainTrack from "../components/main/MainTrack";

const MainForm = () => {
    return (
        <div id="main_container">
            <MainImage></MainImage>
            <div id="main_content_container">
                <MainTrack></MainTrack>
            </div>
        </div>
    )
}

export default MainForm; 