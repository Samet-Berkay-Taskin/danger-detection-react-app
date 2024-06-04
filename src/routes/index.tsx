import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import DetectionVideo from "../pages/detectionVideo";
import DetectionImage from "../pages/detectionImage";
import DownloadVideo from "../pages/downloadVideo";
import DownloadOrWatch from "../pages/downloadOrWatch";


export default function AppRoutes() {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/uploadDetectVido' element={<DetectionVideo />} />
            <Route path='/uploadDetectImage' element={<DetectionImage />} />
            <Route path='/downloadDetectVideo' element={<DownloadVideo />} />
            <Route path='/downloadOrWatch' element={<DownloadOrWatch />} />

        </Routes>
    )
}
