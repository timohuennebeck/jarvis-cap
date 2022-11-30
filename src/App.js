// scss
import "./App.scss";

// pages
import HomePage from "./pages/HomePage/HomePage";
import LeadsPage from "./pages/LeadsPage/LeadsPage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MaintenancePage from "./pages/MaintenancePage/MaintenancePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LandingPage from "./pages/LandingPage/LandingPage";

// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// components
import EditExistingLead from "./components/EditExistingLead/EditExistingLead";
import AddNewLead from "./components/AddNewLead/AddNewLead";
import UserInterfaceLYT from "./components/UserInterfaceLYT/UserInterfaceLYT";

function App() {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <LandingPage />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserInterfaceLYT />}>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/tracker" element={<HomePage />} />

                    <Route path="/leads" element={<LeadsPage />} />
                    <Route path="/leads/:id" element={<EditExistingLead />} />
                    <Route path="/leads/add-new" element={<AddNewLead />} />

                    <Route path="/review/:id" element={<ReviewPage />} />
                    <Route path="/settings/:id" element={<SettingsPage />} />

                    <Route path="/construction" element={<MaintenancePage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
