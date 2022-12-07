// scss
import "./App.scss";

// pages
import KanbanContactsPage from "./pages/KanbanContactsPage/KanbanContactsPage";
import KanbanCompaniesPage from "./pages/KanbanCompaniesPage/KanbanCompaniesPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
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
import EditExistingContact from "./components/EditExistingContact/EditExistingContact";
import AddNewContact from "./components/AddNewContact/AddNewContact";
import UserInterfaceLYT from "./components/UserInterfaceLYT/UserInterfaceLYT";
import HelpCenterPage from "./pages/HelpCenterPage/HelpCenterPage";
import CompaniesPage from "./pages/CompaniesPage/CompaniesPage";
import EditExistingCompany from "./components/EditExistingCompany/EditExistingCompany";
import AddNewCompany from "./components/AddNewCompany/AddNewCompany";

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

                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/contacts-kanban" element={<KanbanContactsPage />} />
                    <Route path="/contacts/:id" element={<EditExistingContact />} />
                    <Route path="/contacts/add-new" element={<AddNewContact />} />

                    <Route path="/companies" element={<CompaniesPage />} />
                    <Route path="/companies-kanban" element={<KanbanCompaniesPage />} />
                    <Route path="/companies/:id" element={<EditExistingCompany />} />
                    <Route path="/companies/add-new" element={<AddNewCompany />} />

                    <Route path="/review/:id" element={<ReviewPage />} />
                    <Route path="/settings" element={<SettingsPage />} />

                    <Route path="/help-center" element={<HelpCenterPage />} />

                    <Route path="/construction" element={<MaintenancePage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
