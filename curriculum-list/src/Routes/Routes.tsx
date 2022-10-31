import { Route, Routes } from "react-router-dom";
import {List} from "../components/List";
import Register from "../components/Register";

function RoutesApp() {
    return (
        <Routes>
            <Route path="/curriculumList" element={<List />} />
            <Route path="/" element={<Register />} />
        </Routes>
    )
};

export default RoutesApp;