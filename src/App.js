// scss
import "./App.scss";

// pages
import HomePage from "./pages/HomePage/HomePage";
import LeadsPage from "./pages/LeadsPage/LeadsPage";
import TemplatesPage from "./pages/TemplatesPage/TemplatesPage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// components
import Header from "./components/Header/Header";
import SBNavigation from "./components/SBNavigation/SBNavigation";
import SBTemplates from "./components/SBTemplates/SBTemplates";

// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditExistingLead from "./components/EditExistingLead/EditExistingLead";
import AddNewLead from "./components/AddNewLead/AddNewLead";
import EditorPage from "./pages/EditorPage/EditorPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                {/* <Header /> */}
                <div className="app__structure">
                    {/* <div className="app__structure-sidebar">
                        <SBNavigation />
                        <SBTemplates />
                    </div> */}
                    <div className="app__structure-routes">
                        <Routes>
                            <Route path="/log-in" element={<LoginPage />} />
                            <Route path="/loading" element={<LoadingPage />} />
                            <Route path="/" element={<HomePage />} />
                            <Route path="/leads" element={<LeadsPage />} />
                            <Route path="/leads/:id" element={<EditExistingLead />} />
                            <Route path="/leads/add-new" element={<AddNewLead />} />
                            <Route path="/templates" element={<TemplatesPage />} />
                            <Route path="/templates/:id" />
                            <Route path="/editor" element={<EditorPage />} />
                            <Route path="/review/:id" element={<ReviewPage />} />
                            <Route path="/settings/:id" element={<SettingsPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
