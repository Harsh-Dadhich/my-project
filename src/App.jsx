import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PropertyTypesPage from "./Components/PropertyTypesPage";
import UnitTypesPage from "./Components/UnitTypesPage";
import TenantManagement from "./Components/Tenant/TenantManagement";
import ContactHierarchy  from "./Components/Tenant/ContactHierarchy";
import CustomUnitFieldForm from "./Components/CustomUnitFieldForm";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<PropertyTypesManager />} />
//         <Route path="/property-types" element={<PropertyTypesManager />} />
//         <Route path="/commercial-units" element={<CommercialUnits />} />
//       </Routes>
//     </Router>
//   );
// }

const App = () => {
  const [activeTab, setActiveTab] = useState('Property Types');

  const renderPage = () => {
    switch (activeTab) {
      case 'Property Types':
        return <PropertyTypesPage />;
      case 'Unit Types':
        return <UnitTypesPage />;
      case 'Tenant/Contact Templates':
        return <TenantManagement />;
        case 'Custom Unit Fields':
        return <CustomUnitFieldForm />;
      default:
        return <PlaceholderPage title={`Master Data - ${activeTab.toLowerCase().replace(/\s+/g, '-')}`} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      {renderPage()}
    </div>
  );
};

export default App;

