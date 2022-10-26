// scss
import "./App.scss";

// pages
import HomePage from "./pages/HomePage/HomePage";
import LeadsPage from "./pages/LeadsPage/LeadsPage";
import TemplatesPage from "./pages/TemplatesPage/TemplatesPage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SBNavigation from "./components/SBNavigation/SBNavigation";
import SBTemplates from "./components/SBTemplates/SBTemplates";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <div className="app__structure">
                    <div className="app__structure-sidebar">
                        <SBNavigation />
                        <SBTemplates />
                    </div>
                    <div className="app__structure-routes">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/leads" element={<LeadsPage />}>
                                <Route path="/leads/:id" />
                            </Route>
                            <Route path="/templates" element={<TemplatesPage />}>
                                <Route path="/templates/:id" />
                            </Route>
                            <Route path="/review" element={<ReviewPage />}>
                                <Route path="/review/:id" />
                            </Route>
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
