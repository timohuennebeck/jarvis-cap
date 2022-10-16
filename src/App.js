// scss
import "./App.scss";

// pages
import HomePage from "./pages/HomePage/HomePage";
import LeadsPage from "./pages/LeadsPage/LeadsPage";
import EditorPage from "./pages/EditorPage/EditorPage";
import TemplatesPage from "./pages/TemplatesPage/TemplatesPage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";

function App() {
    return (
        <BrowserRouter>
            <HeaderMobile />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/leads" element={<LeadsPage />}>
                    <Route path="/leads/:id" />
                </Route>
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/templates" element={<TemplatesPage />}>
                    <Route path="/templates/:id" />
                </Route>
                <Route path="/review" element={<ReviewPage />}>
                    <Route path="/review/:id" />
                </Route>
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
