// import React, { useState } from 'react';
// import { Search, Trash2, Download, Plus, Eye, Edit2, Building } from 'lucide-react';

// const PropertyTypesManager = () => {
//   const [properties, setProperties] = useState([
//     {
//       id: 'PROP-001',
//       name: 'Cyber Park',
//       code: 'CP-HYD',
//       type: 'Office',
//       city: 'Hyderabad',
//       leasableArea: '80000 sq ft',
//       totalBuiltUp: '100000 sq ft'
//     },
//     {
//       id: 'PROP-002',
//       name: 'Retail Plaza',
//       code: 'RP-BLR',
//       type: 'Retail',
//       city: 'Bengaluru',
//       leasableArea: '50000 sq ft',
//       totalBuiltUp: '60000 sq ft'
//     },
//     {
//       id: 'PROP-003',
//       name: 'Residential Towers',
//       code: 'RT-MUM',
//       type: 'Residential',
//       city: 'Mumbai',
//       leasableArea: '120000 sq ft',
//       totalBuiltUp: '150000 sq ft'
//     }
//   ]);

//   const [activeTab, setActiveTab] = useState('Property Types');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterType, setFilterType] = useState('all');
//   const [filterState, setFilterState] = useState('all');
//   const [showNewPropertyModal, setShowNewPropertyModal] = useState(false);

//   const tabs = [
//     'Property Types', 'Unit Types', 'Custom Unit Fields', 'Tenant/Contact Templates',
//     'Lease Templates', 'Clause Library', 'Billing & AR Rules', 'Rent Schedule & Revenue Recognition',
//     'Approval Matrices & Rules', 'User & Role Management (RBAC)', 'Alert/Notification Rules',
//     'Integrations', 'Data Import/Export Templates', 'Audit & Versioning Settings', 'Feature Toggles'
//   ];

//   const [newProperty, setNewProperty] = useState({
//     name: '',
//     code: '',
//     type: '',
//     city: '',
//     leasableArea: '',
//     totalBuiltUp: ''
//   });

//   const filteredProperties = properties.filter(property => {
//     const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          property.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          property.city.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType.toLowerCase();
//     return matchesSearch && matchesType;
//   });

//   const handleAddProperty = () => {
//     if (!newProperty.name || !newProperty.code) return;

//     const propertyToAdd = {
//       id: `PROP-${String(properties.length + 1).padStart(3, '0')}`,
//       ...newProperty
//     };

//     setProperties([...properties, propertyToAdd]);
//     setNewProperty({
//       name: '',
//       code: '',
//       type: '',
//       city: '',
//       leasableArea: '',
//       totalBuiltUp: ''
//     });
//     setShowNewPropertyModal(false);
//   };

//   const handleDelete = (id) => {
//     setProperties(properties.filter(p => p.id !== id));
//   };

//   const handleExport = () => {
//     alert('Exporting properties...');
//   };

//   const handleBulkDelete = () => {
//     if (confirm('Are you sure you want to delete selected properties?')) {
//       alert('Bulk delete functionality');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
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
//                   ? 'border-blue-600 text-blue-600 font-medium'
//                   : 'border-transparent text-gray-600 hover:text-gray-800'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="px-6 py-6">
//         {/* Page Title and Actions */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-gray-800">Master Data - property-types</h2>
//           <div className="flex gap-3">
//             <button
//               onClick={handleBulkDelete}
//               className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
//             >
//               <Trash2 size={16} />
//               Bulk Delete
//             </button>
//             <button
//               onClick={handleExport}
//               className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
//             >
//               <Download size={16} />
//               Export
//             </button>
//             <button
//               onClick={() => setShowNewPropertyModal(true)}
//               className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
//             >
//               <Plus size={16} />
//               New Property Type
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//           <div className="flex gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <select
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="all">Filter by Type</option>
//               <option value="office">Office</option>
//               <option value="retail">Retail</option>
//               <option value="residential">Residential</option>
//             </select>
//             <select
//               value={filterState}
//               onChange={(e) => setFilterState(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="all">Filter by State</option>
//               <option value="telangana">Telangana</option>
//               <option value="karnataka">Karnataka</option>
//               <option value="maharashtra">Maharashtra</option>
//             </select>
//           </div>
//         </div>

//         {/* Properties Table */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50 border-b border-gray-200">
//                 <tr>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Actions
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Property ID
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Code
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Type
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     City
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Leasable Area
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Total Built-up Area
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredProperties.map((property) => (
//                   <tr key={property.id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4">
//                       <div className="flex items-center gap-3">
//                         <button className="text-blue-600 hover:text-blue-800" title="View">
//                           <Eye size={16} />
//                         </button>
//                         <button className="text-blue-600 hover:text-blue-800" title="Edit">
//                           <Edit2 size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(property.id)}
//                           className="text-red-600 hover:text-red-800"
//                           title="Delete"
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4 text-sm text-gray-800">{property.id}</td>
//                     <td className="py-3 px-4 text-sm text-gray-800 font-medium">{property.name}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.code}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.type}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.city}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.leasableArea}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.totalBuiltUp}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* New Property Modal */}
//       {showNewPropertyModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
//             <div className="flex justify-between items-center p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-800">Add New Property Type</h3>
//               <button
//                 onClick={() => setShowNewPropertyModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <Plus size={24} className="rotate-45" />
//               </button>
//             </div>
//             <div className="p-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Property Name *
//                   </label>
//                   <input
//                     type="text"
//                     value={newProperty.name}
//                     onChange={(e) => setNewProperty({...newProperty, name: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="e.g. Cyber Park"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Property Code *
//                   </label>
//                   <input
//                     type="text"
//                     value={newProperty.code}
//                     onChange={(e) => setNewProperty({...newProperty, code: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="e.g. CP-HYD"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Type
//                   </label>
//                   <input
//                     type="text"
//                     value={newProperty.type}
//                     onChange={(e) => setNewProperty({...newProperty, type: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="e.g. Office"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     value={newProperty.city}
//                     onChange={(e) => setNewProperty({...newProperty, city: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="e.g. Hyderabad"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Leasable Area
//                   </label>
//                   <input
//                     type="text"
//                     value={newProperty.leasableArea}
//                     onChange={(e) => setNewProperty({...newProperty, leasableArea: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="e.g. 80000 sq ft"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Total Built-up Area
//                   </label>
//                   <input
//                     type="text"
//                     value={newProperty.totalBuiltUp}
//                     onChange={(e) => setNewProperty({...newProperty, totalBuiltUp: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="e.g. 100000 sq ft"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
//               <button
//                 onClick={() => setShowNewPropertyModal(false)}
//                 className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddProperty}
//                 className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
//               >
//                 Add Property
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyTypesManager;


// import React, { useState } from 'react';
// import { Search, Trash2, Download, Plus, Eye, Edit2, Building } from 'lucide-react';

// const PropertyTypesManager = () => {
//   const [properties, setProperties] = useState([
//     {
//       id: 'PROP-001',
//       name: 'Cyber Park',
//       code: 'CP-HYD',
//       type: 'Office',
//       city: 'Hyderabad',
//       leasableArea: '80000 sq ft',
//       totalBuiltUp: '100000 sq ft'
//     },
//     {
//       id: 'PROP-002',
//       name: 'Retail Plaza',
//       code: 'RP-BLR',
//       type: 'Retail',
//       city: 'Bengaluru',
//       leasableArea: '50000 sq ft',
//       totalBuiltUp: '60000 sq ft'
//     },
//     {
//       id: 'PROP-003',
//       name: 'Residential Towers',
//       code: 'RT-MUM',
//       type: 'Residential',
//       city: 'Mumbai',
//       leasableArea: '120000 sq ft',
//       totalBuiltUp: '150000 sq ft'
//     }
//   ]);

//   const [activeTab, setActiveTab] = useState('Property Types');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterType, setFilterType] = useState('all');
//   const [filterState, setFilterState] = useState('all');
//   const [showNewPropertyModal, setShowNewPropertyModal] = useState(false);

//   const tabs = [
//     'Property Types', 'Unit Types', 'Custom Unit Fields', 'Tenant/Contact Templates',
//     'Lease Templates', 'Clause Library', 'Billing & AR Rules', 'Rent Schedule & Revenue Recognition',
//     'Approval Matrices & Rules', 'User & Role Management (RBAC)', 'Alert/Notification Rules',
//     'Integrations', 'Data Import/Export Templates', 'Audit & Versioning Settings', 'Feature Toggles'
//   ];

//   const [newProperty, setNewProperty] = useState({
//     name: '',
//     code: '',
//     type: '',
//     address: '',
//     city: '',
//     state: '',
//     pinCode: '',
//     latitude: '',
//     longitude: '',
//     developerEntity: '',
//     spvName: '',
//     gstpan: '',
//     totalBuiltUp: '',
//     leasableArea: '',
//     commonArea: '',
//     ownershipType: 'Own',
//     buildings: []
//   });

//   const [expandedSections, setExpandedSections] = useState({
//     basicInfo: true,
//     location: true,
//     legalDeveloper: true,
//     areaOwnership: true,
//     buildingBlock: true
//   });

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };

//   const filteredProperties = properties.filter(property => {
//     const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          property.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          property.city.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType.toLowerCase();
//     return matchesSearch && matchesType;
//   });

//   const handleAddProperty = () => {
//     if (!newProperty.name || !newProperty.code) return;

//     const propertyToAdd = {
//       id: `PROP-${String(properties.length + 1).padStart(3, '0')}`,
//       name: newProperty.name,
//       code: newProperty.code,
//       type: newProperty.type,
//       city: newProperty.city,
//       leasableArea: newProperty.leasableArea,
//       totalBuiltUp: newProperty.totalBuiltUp
//     };

//     setProperties([...properties, propertyToAdd]);
//     setNewProperty({
//       name: '',
//       code: '',
//       type: '',
//       address: '',
//       city: '',
//       state: '',
//       pinCode: '',
//       latitude: '',
//       longitude: '',
//       developerEntity: '',
//       spvName: '',
//       gstpan: '',
//       totalBuiltUp: '',
//       leasableArea: '',
//       commonArea: '',
//       ownershipType: 'Own',
//       buildings: []
//     });
//     setExpandedSections({
//       basicInfo: true,
//       location: true,
//       legalDeveloper: true,
//       areaOwnership: true,
//       buildingBlock: true
//     });
//     setShowNewPropertyModal(false);
//   };

//   const handleDeleteProperty = () => {
//     setNewProperty({
//       name: '',
//       code: '',
//       type: '',
//       address: '',
//       city: '',
//       state: '',
//       pinCode: '',
//       latitude: '',
//       longitude: '',
//       developerEntity: '',
//       spvName: '',
//       gstpan: '',
//       totalBuiltUp: '',
//       leasableArea: '',
//       commonArea: '',
//       ownershipType: 'Own',
//       buildings: []
//     });
//     setShowNewPropertyModal(false);
//   };

//   const addBuilding = () => {
//     const newBuilding = {
//       id: newProperty.buildings.length + 1,
//       name: '',
//       floor: '',
//       buildingType: 'Office',
//       totalArea: '',
//       leasableArea: '',
//       completionDate: '',
//       occupancyDate: ''
//     };
//     setNewProperty({
//       ...newProperty,
//       buildings: [...newProperty.buildings, newBuilding]
//     });
//   };

//   const removeBuilding = (id) => {
//     setNewProperty({
//       ...newProperty,
//       buildings: newProperty.buildings.filter(b => b.id !== id)
//     });
//   };

//   const updateBuilding = (id, field, value) => {
//     setNewProperty({
//       ...newProperty,
//       buildings: newProperty.buildings.map(b => 
//         b.id === id ? { ...b, [field]: value } : b
//       )
//     });
//   };

//   const handleDelete = (id) => {
//     setProperties(properties.filter(p => p.id !== id));
//   };

//   const handleExport = () => {
//     alert('Exporting properties...');
//   };

//   const handleBulkDelete = () => {
//     if (confirm('Are you sure you want to delete selected properties?')) {
//       alert('Bulk delete functionality');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
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
//                   ? 'border-blue-600 text-blue-600 font-medium'
//                   : 'border-transparent text-gray-600 hover:text-gray-800'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="px-6 py-6">
//         {/* Page Title and Actions */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold text-gray-800">Master Data - property-types</h2>
//           <div className="flex gap-3">
//             <button
//               onClick={handleBulkDelete}
//               className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
//             >
//               <Trash2 size={16} />
//               Bulk Delete
//             </button>
//             <button
//               onClick={handleExport}
//               className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
//             >
//               <Download size={16} />
//               Export
//             </button>
//             <button
//               onClick={() => setShowNewPropertyModal(true)}
//               className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
//             >
//               <Plus size={16} />
//               New Property Type
//             </button>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//           <div className="flex gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <select
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="all">Filter by Type</option>
//               <option value="office">Office</option>
//               <option value="retail">Retail</option>
//               <option value="residential">Residential</option>
//             </select>
//             <select
//               value={filterState}
//               onChange={(e) => setFilterState(e.target.value)}
//               className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="all">Filter by State</option>
//               <option value="telangana">Telangana</option>
//               <option value="karnataka">Karnataka</option>
//               <option value="maharashtra">Maharashtra</option>
//             </select>
//           </div>
//         </div>

//         {/* Properties Table */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50 border-b border-gray-200">
//                 <tr>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Actions
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Property ID
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Code
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Type
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     City
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Leasable Area
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Total Built-up Area
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredProperties.map((property) => (
//                   <tr key={property.id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4">
//                       <div className="flex items-center gap-3">
//                         <button className="text-blue-600 hover:text-blue-800" title="View">
//                           <Eye size={16} />
//                         </button>
//                         <button className="text-blue-600 hover:text-blue-800" title="Edit">
//                           <Edit2 size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(property.id)}
//                           className="text-red-600 hover:text-red-800"
//                           title="Delete"
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4 text-sm text-gray-800">{property.id}</td>
//                     <td className="py-3 px-4 text-sm text-gray-800 font-medium">{property.name}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.code}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.type}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.city}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.leasableArea}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{property.totalBuiltUp}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* New Property Modal */}
//       {showNewPropertyModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white flex justify-between items-center p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-800">Master Data - property-types</h3>
//               <button
//                 onClick={() => setShowNewPropertyModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <Plus size={24} className="rotate-45" />
//               </button>
//             </div>
            
//             <div className="p-6 space-y-4">
//               {/* Basic Info Section */}
//               <div className="border border-gray-200 rounded-lg">
//                 <button
//                   onClick={() => toggleSection('basicInfo')}
//                   className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
//                 >
//                   <span className="font-medium text-gray-800">Basic Info</span>
//                   <span className="text-gray-500">{expandedSections.basicInfo ? '−' : '+'}</span>
//                 </button>
//                 {expandedSections.basicInfo && (
//                   <div className="p-4 grid grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Property ID
//                       </label>
//                       <input
//                         type="text"
//                         value="AUTO001"
//                         disabled
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         value={newProperty.name}
//                         onChange={(e) => setNewProperty({...newProperty, name: e.target.value})}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="e.g. Cyber Park"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Code
//                       </label>
//                       <input
//                         type="text"
//                         value={newProperty.code}
//                         onChange={(e) => setNewProperty({...newProperty, code: e.target.value})}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="e.g. CP-HYD"
//                       />
//                     </div>
//                     <div className="col-span-3">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Type
//                       </label>
//                       <select
//                         value={newProperty.type}
//                         onChange={(e) => setNewProperty({...newProperty, type: e.target.value})}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       >
//                         <option value="">Select Type</option>
//                         <option value="Office">Office</option>
//                         <option value="Retail">Retail</option>
//                         <option value="Residential">Residential</option>
//                       </select>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Location Section */}
//               <div className="border border-gray-200 rounded-lg">
//                 <button
//                   onClick={() => toggleSection('location')}
//                   className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
//                 >
//                   <span className="font-medium text-gray-800">Location</span>
//                   <span className="text-gray-500">{expandedSections.location ? '−' : '+'}</span>
//                 </button>
//                 {expandedSections.location && (
//                   <div className="p-4 space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="col-span-2">
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Address
//                         </label>
//                         <textarea
//                           value={newProperty.address}
//                           onChange={(e) => setNewProperty({...newProperty, address: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           rows="3"
//                           placeholder="Enter full address"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           City
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.city}
//                           onChange={(e) => setNewProperty({...newProperty, city: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. Hyderabad"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-3 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           State
//                         </label>
//                         <select
//                           value={newProperty.state}
//                           onChange={(e) => setNewProperty({...newProperty, state: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                           <option value="">Select State</option>
//                           <option value="Telangana">Telangana</option>
//                           <option value="Karnataka">Karnataka</option>
//                           <option value="Maharashtra">Maharashtra</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Pin Code
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.pinCode}
//                           onChange={(e) => setNewProperty({...newProperty, pinCode: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. 500081"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Latitude
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.latitude}
//                           onChange={(e) => setNewProperty({...newProperty, latitude: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. 17.44"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Longitude
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.longitude}
//                           onChange={(e) => setNewProperty({...newProperty, longitude: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. 78.48"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Legal & Developer Section */}
//               <div className="border border-gray-200 rounded-lg">
//                 <button
//                   onClick={() => toggleSection('legalDeveloper')}
//                   className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
//                 >
//                   <span className="font-medium text-gray-800">Legal & Developer</span>
//                   <span className="text-gray-500">{expandedSections.legalDeveloper ? '−' : '+'}</span>
//                 </button>
//                 {expandedSections.legalDeveloper && (
//                   <div className="p-4 space-y-4">
//                     <div className="grid grid-cols-3 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Developer Entity
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.developerEntity}
//                           onChange={(e) => setNewProperty({...newProperty, developerEntity: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. ABC Developers"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           SPV Name
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.spvName}
//                           onChange={(e) => setNewProperty({...newProperty, spvName: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. Ocean Ventures SPV"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           GST/PAN
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.gstpan}
//                           onChange={(e) => setNewProperty({...newProperty, gstpan: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. 29ABCDE1234F1Z5"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Registered Documents
//                       </label>
//                       <div className="flex gap-2">
//                         <button className="text-sm text-blue-600 hover:text-blue-800">
//                           Property Deed(2)
//                         </button>
//                         <button className="text-sm text-blue-600 hover:text-blue-800">
//                           Land Survey(3)
//                         </button>
//                         <button className="text-sm text-blue-600 hover:text-blue-800">
//                           + Add Link
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Area & Ownership Section */}
//               <div className="border border-gray-200 rounded-lg">
//                 <button
//                   onClick={() => toggleSection('areaOwnership')}
//                   className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
//                 >
//                   <span className="font-medium text-gray-800">Area & Ownership</span>
//                   <span className="text-gray-500">{expandedSections.areaOwnership ? '−' : '+'}</span>
//                 </button>
//                 {expandedSections.areaOwnership && (
//                   <div className="p-4 space-y-4">
//                     <div className="grid grid-cols-3 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Total Built-up Area (sq.ft)
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.totalBuiltUp}
//                           onChange={(e) => setNewProperty({...newProperty, totalBuiltUp: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. 100000"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Leasable Area (sq.ft)
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.leasableArea}
//                           onChange={(e) => setNewProperty({...newProperty, leasableArea: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. 80000"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Common Area %
//                         </label>
//                         <input
//                           type="text"
//                           value={newProperty.commonArea}
//                           onChange={(e) => setNewProperty({...newProperty, commonArea: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="e.g. 20"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Ownership Type
//                       </label>
//                       <div className="flex gap-4">
//                         <label className="flex items-center gap-2">
//                           <input
//                             type="radio"
//                             name="ownershipType"
//                             value="Own"
//                             checked={newProperty.ownershipType === 'Own'}
//                             onChange={(e) => setNewProperty({...newProperty, ownershipType: e.target.value})}
//                             className="text-blue-600"
//                           />
//                           <span className="text-sm text-gray-700">Own</span>
//                         </label>
//                         <label className="flex items-center gap-2">
//                           <input
//                             type="radio"
//                             name="ownershipType"
//                             value="Joint Venture"
//                             checked={newProperty.ownershipType === 'Joint Venture'}
//                             onChange={(e) => setNewProperty({...newProperty, ownershipType: e.target.value})}
//                             className="text-blue-600"
//                           />
//                           <span className="text-sm text-gray-700">Joint Venture</span>
//                         </label>
//                         <label className="flex items-center gap-2">
//                           <input
//                             type="radio"
//                             name="ownershipType"
//                             value="Leased-In"
//                             checked={newProperty.ownershipType === 'Leased-In'}
//                             onChange={(e) => setNewProperty({...newProperty, ownershipType: e.target.value})}
//                             className="text-blue-600"
//                           />
//                           <span className="text-sm text-gray-700">Leased-In</span>
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Building / Block Section */}
//               <div className="border border-gray-200 rounded-lg">
//                 <button
//                   onClick={() => toggleSection('buildingBlock')}
//                   className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
//                 >
//                   <span className="font-medium text-gray-800">Building / Block</span>
//                   <span className="text-gray-500">{expandedSections.buildingBlock ? '−' : '+'}</span>
//                 </button>
//                 {expandedSections.buildingBlock && (
//                   <div className="p-4">
//                     {newProperty.buildings.length > 0 && (
//                       <div className="overflow-x-auto mb-4">
//                         <table className="w-full text-sm">
//                           <thead className="bg-gray-50 border-b">
//                             <tr>
//                               <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Building</th>
//                               <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Name</th>
//                               <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Floor</th>
//                               <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Building Type</th>
//                               <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Total Area</th>
//                               <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Leasable Area</th>
//                               <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Completion Date</th>
//                               <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Occupancy Date</th>
//                               <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Actions</th>
//                             </tr>
//                           </thead>
//                           <tbody className="divide-y">
//                             {newProperty.buildings.map((building) => (
//                               <tr key={building.id}>
//                                 <td className="py-2 px-3">{building.id}</td>
//                                 <td className="py-2 px-3">
//                                   <input
//                                     type="text"
//                                     value={building.name}
//                                     onChange={(e) => updateBuilding(building.id, 'name', e.target.value)}
//                                     className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
//                                     placeholder="Bldg"
//                                   />
//                                 </td>
//                                 <td className="py-2 px-3">
//                                   <input
//                                     type="text"
//                                     value={building.floor}
//                                     onChange={(e) => updateBuilding(building.id, 'floor', e.target.value)}
//                                     className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
//                                     placeholder="10"
//                                   />
//                                 </td>
//                                 <td className="py-2 px-3">
//                                   <select
//                                     value={building.buildingType}
//                                     onChange={(e) => updateBuilding(building.id, 'buildingType', e.target.value)}
//                                     className="px-2 py-1 border border-gray-300 rounded text-sm"
//                                   >
//                                     <option value="Office">Office</option>
//                                     <option value="Retail">Retail</option>
//                                   </select>
//                                 </td>
//                                 <td className="py-2 px-3">
//                                   <input
//                                     type="text"
//                                     value={building.totalArea}
//                                     onChange={(e) => updateBuilding(building.id, 'totalArea', e.target.value)}
//                                     className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
//                                     placeholder="50"
//                                   />
//                                 </td>
//                                 <td className="py-2 px-3">
//                                   <input
//                                     type="text"
//                                     value={building.leasableArea}
//                                     onChange={(e) => updateBuilding(building.id, 'leasableArea', e.target.value)}
//                                     className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
//                                     placeholder="40000"
//                                   />
//                                 </td>
//                                 <td className="py-2 px-3">
//                                   <input
//                                     type="date"
//                                     value={building.completionDate}
//                                     onChange={(e) => updateBuilding(building.id, 'completionDate', e.target.value)}
//                                     className="px-2 py-1 border border-gray-300 rounded text-sm"
//                                   />
//                                 </td>
//                                 <td className="py-2 px-3">
//                                   <input
//                                     type="date"
//                                     value={building.occupancyDate}
//                                     onChange={(e) => updateBuilding(building.id, 'occupancyDate', e.target.value)}
//                                     className="px-2 py-1 border border-gray-300 rounded text-sm"
//                                   />
//                                 </td>
//                                 <td className="py-2 px-3">
//                                   <button
//                                     onClick={() => removeBuilding(building.id)}
//                                     className="text-red-600 hover:text-red-800"
//                                   >
//                                     <Trash2 size={16} />
//                                   </button>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     )}
//                     <button
//                       onClick={addBuilding}
//                       className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
//                     >
//                       <Plus size={16} />
//                       Add Building
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Bottom Action Buttons */}
//             <div className="sticky bottom-0 bg-white flex justify-end gap-3 p-6 border-t border-gray-200">
//               <button
//                 onClick={handleDeleteProperty}
//                 className="px-6 py-2 text-sm text-red-600 bg-white border border-red-300 rounded hover:bg-red-50"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={handleAddProperty}
//                 className="px-6 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyTypesManager;

import React, { useState } from 'react';
import { Search, Trash2, Download, Plus, Eye, Edit2, Building } from 'lucide-react';

// Navbar Component
// const Navbar = ({ activeTab, onTabChange }) => {
//   const tabs = [
//     'Property Types', 'Unit Types', 'Custom Unit Fields', 'Tenant/Contact Templates',
//     'Lease Templates', 'Clause Library', 'Billing & AR Rules', 'Rent Schedule & Revenue Recognition',
//     'Approval Matrices & Rules', 'User & Role Management (RBAC)', 'Alert/Notification Rules',
//     'Integrations', 'Data Import/Export Templates', 'Audit & Versioning Settings', 'Feature Toggles'
//   ];

//   return (
//     <>
//       {/* Header */}
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
//               onClick={() => onTabChange(tab)}
//               className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
//                 activeTab === tab
//                   ? 'border-blue-600 text-blue-600 font-medium'
//                   : 'border-transparent text-gray-600 hover:text-gray-800'
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

// Property Types Page Component
const PropertyTypesPage = () => {
  const [properties, setProperties] = useState([
    {
      id: 'PROP-001',
      name: 'Cyber Park',
      code: 'CP-HYD',
      type: 'Office',
      city: 'Hyderabad',
      leasableArea: '80000 sq ft',
      totalBuiltUp: '100000 sq ft'
    },
    {
      id: 'PROP-002',
      name: 'Retail Plaza',
      code: 'RP-BLR',
      type: 'Retail',
      city: 'Bengaluru',
      leasableArea: '50000 sq ft',
      totalBuiltUp: '60000 sq ft'
    },
    {
      id: 'PROP-003',
      name: 'Residential Towers',
      code: 'RT-MUM',
      type: 'Residential',
      city: 'Mumbai',
      leasableArea: '120000 sq ft',
      totalBuiltUp: '150000 sq ft'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterState, setFilterState] = useState('all');
  const [showNewPropertyModal, setShowNewPropertyModal] = useState(false);

  const [newProperty, setNewProperty] = useState({
    name: '',
    code: '',
    type: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    latitude: '',
    longitude: '',
    developerEntity: '',
    spvName: '',
    gstpan: '',
    totalBuiltUp: '',
    leasableArea: '',
    commonArea: '',
    ownershipType: 'Own',
    buildings: []
  });

  const [expandedSections, setExpandedSections] = useState({
    basicInfo: true,
    location: true,
    legalDeveloper: true,
    areaOwnership: true,
    buildingBlock: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });

  const handleAddProperty = () => {
    if (!newProperty.name || !newProperty.code) return;

    const propertyToAdd = {
      id: `PROP-${String(properties.length + 1).padStart(3, '0')}`,
      name: newProperty.name,
      code: newProperty.code,
      type: newProperty.type,
      city: newProperty.city,
      leasableArea: newProperty.leasableArea,
      totalBuiltUp: newProperty.totalBuiltUp
    };

    setProperties([...properties, propertyToAdd]);
    setNewProperty({
      name: '',
      code: '',
      type: '',
      address: '',
      city: '',
      state: '',
      pinCode: '',
      latitude: '',
      longitude: '',
      developerEntity: '',
      spvName: '',
      gstpan: '',
      totalBuiltUp: '',
      leasableArea: '',
      commonArea: '',
      ownershipType: 'Own',
      buildings: []
    });
    setExpandedSections({
      basicInfo: true,
      location: true,
      legalDeveloper: true,
      areaOwnership: true,
      buildingBlock: true
    });
    setShowNewPropertyModal(false);
  };

  const handleDeleteProperty = () => {
    setNewProperty({
      name: '',
      code: '',
      type: '',
      address: '',
      city: '',
      state: '',
      pinCode: '',
      latitude: '',
      longitude: '',
      developerEntity: '',
      spvName: '',
      gstpan: '',
      totalBuiltUp: '',
      leasableArea: '',
      commonArea: '',
      ownershipType: 'Own',
      buildings: []
    });
    setShowNewPropertyModal(false);
  };

  const addBuilding = () => {
    const newBuilding = {
      id: newProperty.buildings.length + 1,
      name: '',
      floor: '',
      buildingType: 'Office',
      totalArea: '',
      leasableArea: '',
      completionDate: '',
      occupancyDate: ''
    };
    setNewProperty({
      ...newProperty,
      buildings: [...newProperty.buildings, newBuilding]
    });
  };

  const removeBuilding = (id) => {
    setNewProperty({
      ...newProperty,
      buildings: newProperty.buildings.filter(b => b.id !== id)
    });
  };

  const updateBuilding = (id, field, value) => {
    setNewProperty({
      ...newProperty,
      buildings: newProperty.buildings.map(b => 
        b.id === id ? { ...b, [field]: value } : b
      )
    });
  };

  const handleDelete = (id) => {
    setProperties(properties.filter(p => p.id !== id));
  };

  const handleExport = () => {
    alert('Exporting properties...');
  };

  const handleBulkDelete = () => {
    if (confirm('Are you sure you want to delete selected properties?')) {
      alert('Bulk delete functionality');
    }
  };

  return (
    <div className="px-6 py-6">
      {/* Page Title and Actions */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Master Data - property-types</h2>
        <div className="flex gap-3">
          <button
            onClick={handleBulkDelete}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
          >
            <Trash2 size={16} />
            Bulk Delete
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50"
          >
            <Download size={16} />
            Export
          </button>
          <button
            onClick={() => setShowNewPropertyModal(true)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            <Plus size={16} />
            New Property Type
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Filter by Type</option>
            <option value="office">Office</option>
            <option value="retail">Retail</option>
            <option value="residential">Residential</option>
          </select>
          <select
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Filter by State</option>
            <option value="telangana">Telangana</option>
            <option value="karnataka">Karnataka</option>
            <option value="maharashtra">Maharashtra</option>
          </select>
        </div>
      </div>

      {/* Properties Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Property ID
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Code
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Type
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  City
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Leasable Area
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total Built-up Area
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProperties.map((property) => (
                <tr key={property.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <button className="text-blue-600 hover:text-blue-800" title="View">
                        <Eye size={16} />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(property.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800">{property.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-800 font-medium">{property.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{property.code}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{property.type}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{property.city}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{property.leasableArea}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{property.totalBuiltUp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Property Modal */}
      {showNewPropertyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Master Data - property-types</h3>
              <button
                onClick={() => setShowNewPropertyModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Plus size={24} className="rotate-45" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Basic Info Section */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection('basicInfo')}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                >
                  <span className="font-medium text-gray-800">Basic Info</span>
                  <span className="text-gray-500">{expandedSections.basicInfo ? '−' : '+'}</span>
                </button>
                {expandedSections.basicInfo && (
                  <div className="p-4 grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property ID
                      </label>
                      <input
                        type="text"
                        value="AUTO001"
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={newProperty.name}
                        onChange={(e) => setNewProperty({...newProperty, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. Cyber Park"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Code
                      </label>
                      <input
                        type="text"
                        value={newProperty.code}
                        onChange={(e) => setNewProperty({...newProperty, code: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. CP-HYD"
                      />
                    </div>
                    <div className="col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type
                      </label>
                      <select
                        value={newProperty.type}
                        onChange={(e) => setNewProperty({...newProperty, type: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Type</option>
                        <option value="Office">Office</option>
                        <option value="Retail">Retail</option>
                        <option value="Residential">Residential</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Location Section */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection('location')}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                >
                  <span className="font-medium text-gray-800">Location</span>
                  <span className="text-gray-500">{expandedSections.location ? '−' : '+'}</span>
                </button>
                {expandedSections.location && (
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address
                        </label>
                        <textarea
                          value={newProperty.address}
                          onChange={(e) => setNewProperty({...newProperty, address: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="3"
                          placeholder="Enter full address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={newProperty.city}
                          onChange={(e) => setNewProperty({...newProperty, city: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. Hyderabad"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State
                        </label>
                        <select
                          value={newProperty.state}
                          onChange={(e) => setNewProperty({...newProperty, state: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select State</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Maharashtra">Maharashtra</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pin Code
                        </label>
                        <input
                          type="text"
                          value={newProperty.pinCode}
                          onChange={(e) => setNewProperty({...newProperty, pinCode: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. 500081"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Latitude
                        </label>
                        <input
                          type="text"
                          value={newProperty.latitude}
                          onChange={(e) => setNewProperty({...newProperty, latitude: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. 17.44"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Longitude
                        </label>
                        <input
                          type="text"
                          value={newProperty.longitude}
                          onChange={(e) => setNewProperty({...newProperty, longitude: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. 78.48"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Legal & Developer Section */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection('legalDeveloper')}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                >
                  <span className="font-medium text-gray-800">Legal & Developer</span>
                  <span className="text-gray-500">{expandedSections.legalDeveloper ? '−' : '+'}</span>
                </button>
                {expandedSections.legalDeveloper && (
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Developer Entity
                        </label>
                        <input
                          type="text"
                          value={newProperty.developerEntity}
                          onChange={(e) => setNewProperty({...newProperty, developerEntity: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. ABC Developers"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          SPV Name
                        </label>
                        <input
                          type="text"
                          value={newProperty.spvName}
                          onChange={(e) => setNewProperty({...newProperty, spvName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. Ocean Ventures SPV"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          GST/PAN
                        </label>
                        <input
                          type="text"
                          value={newProperty.gstpan}
                          onChange={(e) => setNewProperty({...newProperty, gstpan: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. 29ABCDE1234F1Z5"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Registered Documents
                      </label>
                      <div className="flex gap-2">
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Property Deed(2)
                        </button>
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Land Survey(3)
                        </button>
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          + Add Link
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Area & Ownership Section */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection('areaOwnership')}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                >
                  <span className="font-medium text-gray-800">Area & Ownership</span>
                  <span className="text-gray-500">{expandedSections.areaOwnership ? '−' : '+'}</span>
                </button>
                {expandedSections.areaOwnership && (
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Total Built-up Area (sq.ft)
                        </label>
                        <input
                          type="text"
                          value={newProperty.totalBuiltUp}
                          onChange={(e) => setNewProperty({...newProperty, totalBuiltUp: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. 100000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Leasable Area (sq.ft)
                        </label>
                        <input
                          type="text"
                          value={newProperty.leasableArea}
                          onChange={(e) => setNewProperty({...newProperty, leasableArea: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. 80000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Common Area %
                        </label>
                        <input
                          type="text"
                          value={newProperty.commonArea}
                          onChange={(e) => setNewProperty({...newProperty, commonArea: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g. 20"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ownership Type
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="ownershipType"
                            value="Own"
                            checked={newProperty.ownershipType === 'Own'}
                            onChange={(e) => setNewProperty({...newProperty, ownershipType: e.target.value})}
                            className="text-blue-600"
                          />
                          <span className="text-sm text-gray-700">Own</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="ownershipType"
                            value="Joint Venture"
                            checked={newProperty.ownershipType === 'Joint Venture'}
                            onChange={(e) => setNewProperty({...newProperty, ownershipType: e.target.value})}
                            className="text-blue-600"
                          />
                          <span className="text-sm text-gray-700">Joint Venture</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="ownershipType"
                            value="Leased-In"
                            checked={newProperty.ownershipType === 'Leased-In'}
                            onChange={(e) => setNewProperty({...newProperty, ownershipType: e.target.value})}
                            className="text-blue-600"
                          />
                          <span className="text-sm text-gray-700">Leased-In</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Building / Block Section */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection('buildingBlock')}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                >
                  <span className="font-medium text-gray-800">Building / Block</span>
                  <span className="text-gray-500">{expandedSections.buildingBlock ? '−' : '+'}</span>
                </button>
                {expandedSections.buildingBlock && (
                  <div className="p-4">
                    {newProperty.buildings.length > 0 && (
                      <div className="overflow-x-auto mb-4">
                        <table className="w-full text-sm">
                          <thead className="bg-gray-50 border-b">
                            <tr>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Building</th>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Name</th>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Floor</th>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Building Type</th>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Total Area</th>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Leasable Area</th>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Completion Date</th>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Occupancy Date</th>
                              <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            {newProperty.buildings.map((building) => (
                              <tr key={building.id}>
                                <td className="py-2 px-3">{building.id}</td>
                                <td className="py-2 px-3">
                                  <input
                                    type="text"
                                    value={building.name}
                                    onChange={(e) => updateBuilding(building.id, 'name', e.target.value)}
                                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                                    placeholder="Bldg"
                                  />
                                </td>
                                <td className="py-2 px-3">
                                  <input
                                    type="text"
                                    value={building.floor}
                                    onChange={(e) => updateBuilding(building.id, 'floor', e.target.value)}
                                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                                    placeholder="10"
                                  />
                                </td>
                                <td className="py-2 px-3">
                                  <select
                                    value={building.buildingType}
                                    onChange={(e) => updateBuilding(building.id, 'buildingType', e.target.value)}
                                    className="px-2 py-1 border border-gray-300 rounded text-sm"
                                  >
                                    <option value="Office">Office</option>
                                    <option value="Retail">Retail</option>
                                  </select>
                                </td>
                                <td className="py-2 px-3">
                                  <input
                                    type="text"
                                    value={building.totalArea}
                                    onChange={(e) => updateBuilding(building.id, 'totalArea', e.target.value)}
                                    className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                                    placeholder="50"
                                  />
                                </td>
                                <td className="py-2 px-3">
                                  <input
                                    type="text"
                                    value={building.leasableArea}
                                    onChange={(e) => updateBuilding(building.id, 'leasableArea', e.target.value)}
                                    className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                                    placeholder="40000"
                                  />
                                </td>
                                <td className="py-2 px-3">
                                  <input
                                    type="date"
                                    value={building.completionDate}
                                    onChange={(e) => updateBuilding(building.id, 'completionDate', e.target.value)}
                                    className="px-2 py-1 border border-gray-300 rounded text-sm"
                                  />
                                </td>
                                <td className="py-2 px-3">
                                  <input
                                    type="date"
                                    value={building.occupancyDate}
                                    onChange={(e) => updateBuilding(building.id, 'occupancyDate', e.target.value)}
                                    className="px-2 py-1 border border-gray-300 rounded text-sm"
                                  />
                                </td>
                                <td className="py-2 px-3">
                                  <button
                                    onClick={() => removeBuilding(building.id)}
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    <button
                      onClick={addBuilding}
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                    >
                      <Plus size={16} />
                      Add Building
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="sticky bottom-0 bg-white flex justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={handleDeleteProperty}
                className="px-6 py-2 text-sm text-red-600 bg-white border border-red-300 rounded hover:bg-red-50"
              >
                Delete
              </button>
              <button
                onClick={handleAddProperty}
                className="px-6 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyTypesPage;


// // Unit Types Page Component
// const UnitTypesPage = () => {
//   return (
//     <div className="px-6 py-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">Master Data - unit-types</h2>
//         <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
//           <Plus size={16} />
//           New Unit Type
//         </button>
//       </div>
//       <div className="bg-white rounded-lg shadow-sm p-8 text-center">
//         <p className="text-gray-500">Unit Types page content goes here</p>
//       </div>
//     </div>
//   );
// };

// // Placeholder Page Component
// const PlaceholderPage = ({ title }) => {
//   return (
//     <div className="px-6 py-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-6">{title}</h2>
//       <div className="bg-white rounded-lg shadow-sm p-8 text-center">
//         <p className="text-gray-500">This page is under construction</p>
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   const [activeTab, setActiveTab] = useState('Property Types');

//   const renderPage = () => {
//     switch (activeTab) {
//       case 'Property Types':
//         return <PropertyTypesPage />;
//       case 'Unit Types':
//         return <UnitTypesPage />;
//       default:
//         return <PlaceholderPage title={`Master Data - ${activeTab.toLowerCase().replace(/\s+/g, '-')}`} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
//       {renderPage()}
//     </div>
//   );
// };

// export default App