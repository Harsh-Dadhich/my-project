import React from "react";
import { Building } from "lucide-react";

// const Navbar = ({ activeTab, setActiveTab, tabs }) => {
//   return (
//     <>
//       {/* Header Section */}
//       <div className="bg-white border-b border-gray-200 px-6 py-4">
//         <div className="flex items-center gap-2 mb-4">
//           <div className="flex items-center gap-2 text-blue-600">
//             <Building size={24} />
//             <span className="font-semibold text-lg">CRE LeaseMaster</span>
//           </div>
//         </div>
//         <h1 className="text-2xl font-semibold text-gray-800">Admin Setup</h1>
//       </div>

//       {/* Tabs */}
//       <div className="bg-white border-b border-gray-200 overflow-x-auto">
//         <div className="flex px-6 min-w-max">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
//                 activeTab === tab
//                   ? "border-blue-600 text-blue-600 font-medium"
//                   : "border-transparent text-gray-600 hover:text-gray-800"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };



const Navbar = ({ activeTab, onTabChange }) => {
  const tabs = [
    'Property Types', 'Unit Types', 'Custom Unit Fields', 'Tenant/Contact Templates',
    'Lease Templates', 'Clause Library', 'Billing & AR Rules', 'Rent Schedule & Revenue Recognition',
    'Approval Matrices & Rules', 'User & Role Management (RBAC)', 'Alert/Notification Rules',
    'Integrations', 'Data Import/Export Templates', 'Audit & Versioning Settings', 'Feature Toggles'
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2 mb-4">
          {/* <div className="flex items-center gap-2 text-blue-600">
            <Building size={24} />
            <span className="font-semibold text-lg">CRE LeaseMaster</span>
          </div> */}
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">Admin Setup</h1>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 overflow-x-auto scrollbar-thin-modern">
        <div className="flex px-6 min-w-max ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600 font-medium'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;