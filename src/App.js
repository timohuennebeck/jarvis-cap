// scss
import "./App.scss";

// pages
import HomePage from "./pages/HomePage/HomePage";
import EditorPage from "./pages/EditorPage/EditorPage";
import TemplatesPage from "./pages/TemplatesPage/TemplatesPage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/templates" element={<TemplatesPage />} />
                <Route path="/review" element={<ReviewPage />}>
                    <Route path="/review/:reviewId" element={<ReviewPage />}/>
                </Route>
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
