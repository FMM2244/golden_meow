import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';  // no Router here
import LoginPage from './pages/LoginPage';
import ReportPage from './pages/ReportPage';
import UserPage from './pages/UserPage';
import InventoryPage from './pages/InventoryPage';
import SalesPage from './pages/SalesPage';
import AppNavbar from './components/Navbar';

function OwnerLayout({ children }) {
  return (
    <>
      <AppNavbar role="owner" />
      {children}
    </>
  );
}

function EmployeeLayout({ children }) {
  return (
    <>
      <AppNavbar role="employee" />
      {children}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/owner/reports" element={<OwnerLayout><ReportPage /></OwnerLayout>} />
      <Route path="/owner/users" element={<OwnerLayout><UserPage /></OwnerLayout>} />
      <Route path="/employee/inventory" element={<EmployeeLayout><InventoryPage /></EmployeeLayout>} />
      <Route path="/employee/sales" element={<EmployeeLayout><SalesPage /></EmployeeLayout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
