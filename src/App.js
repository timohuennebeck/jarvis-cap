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
import EditExistingLead from "./components/EditExistingLead/EditExistingLead";
import AddNewLead from "./components/AddNewLead/AddNewLead";
import EditorPage from "./pages/EditorPage/EditorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserInterfaceLYT from "./components/UserInterfaceLYT/UserInterfaceLYT";
import LoginLYT from "./components/LoginLYT/LoginLYT";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LoginLYT />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<UserInterfaceLYT />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/leads" element={<LeadsPage />} />
                    <Route path="/leads/:id" element={<EditExistingLead />} />
                    <Route path="/leads/add-new" element={<AddNewLead />} />
                    <Route path="/templates/:id" element={<TemplatesPage />} />
                    <Route path="/review" element={<ReviewPage />} />
                    <Route path="/review/:id" element={<ReviewPage />} />
                    <Route path="/editor" element={<EditorPage />} />
                    <Route path="/settings/:id" element={<SettingsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
