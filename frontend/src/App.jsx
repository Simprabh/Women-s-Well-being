import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SafetyBanner from "./components/SafetyBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import EmergencyContactsPage from "./pages/EmergencyContactsPage";
import SafetyResourcesPage from "./pages/SafetyResourcesPage";
import EducationPage from "./pages/EducationPage";
import WomensHealthPage from "./pages/WomensHealthPage";
import AiAssistantPage from "./pages/AiAssistantPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-slate-50">
          <SafetyBanner />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/resources" element={<SafetyResourcesPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/health" element={<WomensHealthPage />} />
              <Route path="/assistant" element={<AiAssistantPage />} />

              {/* Authenticated Member Pages */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <ProtectedRoute>
                    <EmergencyContactsPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
