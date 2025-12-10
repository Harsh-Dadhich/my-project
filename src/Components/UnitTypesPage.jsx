// import React, { useState } from 'react';
// import { Search, Plus, Eye, Edit2, Trash2, Building, Wifi, Car, Dumbbell, Copy } from 'lucide-react';

// const CommercialUnits = () => {
//   const [units, setUnits] = useState([
//     {
//       id: 'LF-001A',
//       unitType: 'Office',
//       floorBuilding: '3 / Tower A',
//       area: 2500,
//       status: 'Available',
//       baseRent: 5000,
//       camRate: '8/1/2024',
//       availableFrom: '5.0%',
//       benchmarkDev: '',
//       amenities: ['parking', 'wifi']
//     },
//     {
//       id: 'LF-002B',
//       unitType: 'Retail',
//       floorBuilding: '1 / Galleria Mall',
//       area: 1200,
//       status: 'Leased',
//       baseRent: 3000,
//       camRate: '1/5/2023',
//       availableFrom: '2.0%',
//       benchmarkDev: 'negative',
//       amenities: ['parking', 'gym']
//     },
//     {
//       id: 'LF-003C',
//       unitType: 'Warehouse',
//       floorBuilding: '0 / Industrial Park 1',
//       area: 15000,
//       status: 'Under Offer',
//       baseRent: 10000,
//       camRate: '9/1/2024',
//       availableFrom: '10.0%',
//       benchmarkDev: 'positive',
//       amenities: ['parking', 'gym']
//     },
//     {
//       id: 'LF-004D',
//       unitType: 'Flex',
//       floorBuilding: '2 / Tech Campus',
//       area: 3000,
//       status: 'Maintenance',
//       baseRent: 6000,
//       camRate: '11/1/2024',
//       availableFrom: '0.0%',
//       benchmarkDev: '',
//       amenities: ['parking', 'car', 'gym']
//     },
//     {
//       id: 'LF-005E',
//       unitType: 'Office',
//       floorBuilding: '5 / Tower B',
//       area: 1800,
//       status: 'Available',
//       baseRent: 4000,
//       camRate: '7/1/2024',
//       availableFrom: '3.0%',
//       benchmarkDev: 'negative',
//       amenities: ['wifi']
//     }
//   ]);

//   const [activeTab, setActiveTab] = useState('Unit Types');
//   const [selectedUnits, setSelectedUnits] = useState([]);
//   const [filters, setFilters] = useState({
//     property: '',
//     building: '',
//     unitType: '',
//     status: '',
//     areaMin: 1000,
//     areaMax: 15000
//   });
//   const [searchTerm, setSearchTerm] = useState('');

//   const tabs = [
//     'Property Types', 'Unit Types', 'Custom Unit Fields', 'Tenant/Contact Templates',
//     'Lease Templates', 'Clause Library', 'Billing & Invoice Rules', 'Rent Escalation Templates',
//     'CAM Components', 'Ageing Buckets'
//   ];

//   const toggleUnitSelection = (unitId) => {
//     setSelectedUnits(prev => 
//       prev.includes(unitId) 
//         ? prev.filter(id => id !== unitId)
//         : [...prev, unitId]
//     );
//   };

//   const toggleSelectAll = () => {
//     if (selectedUnits.length === units.length) {
//       setSelectedUnits([]);
//     } else {
//       setSelectedUnits(units.map(u => u.id));
//     }
//   };

//   const getStatusColor = (status) => {
//     const colors = {
//       'Available': 'bg-blue-100 text-blue-800',
//       'Leased': 'bg-gray-100 text-gray-800',
//       'Under Offer': 'bg-purple-100 text-purple-800',
//       'Maintenance': 'bg-red-100 text-red-800'
//     };
//     return colors[status] || 'bg-gray-100 text-gray-800';
//   };

//   const renderAmenityIcon = (amenity) => {
//     const icons = {
//       'parking': <Car size={14} />,
//       'wifi': <Wifi size={14} />,
//       'gym': <Dumbbell size={14} />
//     };
//     return icons[amenity] || null;
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
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">Commercial Units</h2>

//         {/* Filters */}
//         <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//           <div className="grid grid-cols-5 gap-4 mb-4">
//             <select
//               value={filters.property}
//               onChange={(e) => setFilters({...filters, property: e.target.value})}
//               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Property</option>
//               <option value="tower-a">Tower A</option>
//               <option value="tower-b">Tower B</option>
//               <option value="galleria">Galleria Mall</option>
//             </select>

//             <select
//               value={filters.building}
//               onChange={(e) => setFilters({...filters, building: e.target.value})}
//               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Building</option>
//               <option value="tower-a">Tower A</option>
//               <option value="tower-b">Tower B</option>
//             </select>

//             <select
//               value={filters.unitType}
//               onChange={(e) => setFilters({...filters, unitType: e.target.value})}
//               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Unit Type</option>
//               <option value="office">Office</option>
//               <option value="retail">Retail</option>
//               <option value="warehouse">Warehouse</option>
//               <option value="flex">Flex</option>
//             </select>

//             <select
//               value={filters.status}
//               onChange={(e) => setFilters({...filters, status: e.target.value})}
//               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Status</option>
//               <option value="available">Available</option>
//               <option value="leased">Leased</option>
//               <option value="under-offer">Under Offer</option>
//               <option value="maintenance">Maintenance</option>
//             </select>

//             <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
//               <Plus size={16} />
//               Add Unit
//             </button>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2 flex-1">
//               <span className="text-sm text-gray-600">Area:</span>
//               <input
//                 type="range"
//                 min="1000"
//                 max="15000"
//                 value={filters.areaMin}
//                 onChange={(e) => setFilters({...filters, areaMin: parseInt(e.target.value)})}
//                 className="flex-1"
//               />
//               <span className="text-sm text-gray-600 min-w-[100px]">
//                 {filters.areaMin}-{filters.areaMax} sqft
//               </span>
//             </div>

//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search units..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Units Table */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50 border-b border-gray-200">
//                 <tr>
//                   <th className="text-left py-3 px-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedUnits.length === units.length}
//                       onChange={toggleSelectAll}
//                       className="rounded"
//                     />
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Unit ID
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Unit Type
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Floor/Building
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Area (sqft)
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Base Rent
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     CAM Rate
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Available From
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Benchmark Dev.
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Amenities
//                   </th>
//                   <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {units.map((unit) => (
//                   <tr key={unit.id} className="hover:bg-gray-50">
//                     <td className="py-3 px-4">
//                       <input
//                         type="checkbox"
//                         checked={selectedUnits.includes(unit.id)}
//                         onChange={() => toggleUnitSelection(unit.id)}
//                         className="rounded"
//                       />
//                     </td>
//                     <td className="py-3 px-4 text-sm font-medium text-gray-800">{unit.id}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{unit.unitType}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{unit.floorBuilding}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{unit.area}</td>
//                     <td className="py-3 px-4">
//                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(unit.status)}`}>
//                         {unit.status}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="flex items-center gap-1">
//                         <span className="text-sm text-gray-800">${unit.baseRent}</span>
//                         <button className="text-gray-400 hover:text-gray-600">
//                           <Edit2 size={14} />
//                         </button>
//                       </div>
//                       <div className="flex items-center gap-1 mt-1">
//                         <span className="text-xs text-gray-500">15.0%</span>
//                         <button className="text-gray-400 hover:text-gray-600">
//                           <Edit2 size={12} />
//                         </button>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{unit.camRate}</td>
//                     <td className="py-3 px-4">
//                       <span className={`text-sm font-medium ${
//                         unit.availableFrom.includes('-') ? 'text-red-600' : 
//                         unit.availableFrom.includes('+') ? 'text-green-600' : 
//                         'text-gray-600'
//                       }`}>
//                         {unit.availableFrom}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="flex gap-1">
//                         <button className="text-gray-600 hover:text-gray-800">
//                           <Eye size={16} />
//                         </button>
//                         <button className="text-gray-600 hover:text-gray-800">
//                           <Edit2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="flex gap-2">
//                         {unit.amenities.map((amenity, idx) => (
//                           <span key={idx} className="text-gray-600">
//                             {renderAmenityIcon(amenity)}
//                           </span>
//                         ))}
//                       </div>
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="flex gap-2">
//                         <button className="text-blue-600 hover:text-blue-800" title="View">
//                           <Eye size={16} />
//                         </button>
//                         <button className="text-blue-600 hover:text-blue-800" title="Edit">
//                           <Edit2 size={16} />
//                         </button>
//                         <button className="text-blue-600 hover:text-blue-800" title="Copy">
//                           <Copy size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-between mt-4">
//           <div className="text-sm text-gray-600">
//             Showing 5 of 5 units
//           </div>
//           <div className="flex gap-2">
//             <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>
//               Previous
//             </button>
//             <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
//               1
//             </button>
//             <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommercialUnits;

// Unit Types Page Component
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

// export default UnitTypesPage;

// import React, { useState } from 'react';
// import { Search, Plus, Eye, Edit2, Trash2, Building, Wifi, Car, Dumbbell, Copy } from 'lucide-react';

// const UnitTypesPage = () => {
//   const [units, setUnits] = useState([
//     {
//       id: 'LF-001A',
//       unitType: 'Office',
//       floorBuilding: '3 / Tower A',
//       area: 2500,
//       status: 'Available',
//       baseRent: 5000,
//       camRate: '8/1/2024',
//       availableFrom: '5.0%',
//       benchmarkDev: '',
//       amenities: ['parking', 'wifi']
//     },
//     {
//       id: 'LF-002B',
//       unitType: 'Retail',
//       floorBuilding: '1 / Galleria Mall',
//       area: 1200,
//       status: 'Leased',
//       baseRent: 3000,
//       camRate: '1/5/2023',
//       availableFrom: '2.0%',
//       benchmarkDev: 'negative',
//       amenities: ['parking', 'gym']
//     },
//     {
//       id: 'LF-003C',
//       unitType: 'Warehouse',
//       floorBuilding: '0 / Industrial Park 1',
//       area: 15000,
//       status: 'Under Offer',
//       baseRent: 10000,
//       camRate: '9/1/2024',
//       availableFrom: '10.0%',
//       benchmarkDev: 'positive',
//       amenities: ['parking', 'gym']
//     },
//     {
//       id: 'LF-004D',
//       unitType: 'Flex',
//       floorBuilding: '2 / Tech Campus',
//       area: 3000,
//       status: 'Maintenance',
//       baseRent: 6000,
//       camRate: '11/1/2024',
//       availableFrom: '0.0%',
//       benchmarkDev: '',
//       amenities: ['parking', 'car', 'gym']
//     },
//     {
//       id: 'LF-005E',
//       unitType: 'Office',
//       floorBuilding: '5 / Tower B',
//       area: 1800,
//       status: 'Available',
//       baseRent: 4000,
//       camRate: '7/1/2024',
//       availableFrom: '3.0%',
//       benchmarkDev: 'negative',
//       amenities: ['wifi']
//     }
//   ]);

//   const [selectedUnits, setSelectedUnits] = useState([]);
//   const [filters, setFilters] = useState({
//     property: '',
//     building: '',
//     unitType: '',
//     status: '',
//     areaMin: 1000,
//     areaMax: 15000
//   });
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleUnitSelection = (unitId) => {
//     setSelectedUnits(prev =>
//       prev.includes(unitId)
//         ? prev.filter(id => id !== unitId)
//         : [...prev, unitId]
//     );
//   };

//   const toggleSelectAll = () => {
//     if (selectedUnits.length === units.length) {
//       setSelectedUnits([]);
//     } else {
//       setSelectedUnits(units.map(u => u.id));
//     }
//   };

//   const getStatusColor = (status) => {
//     const colors = {
//       'Available': 'bg-blue-100 text-blue-800',
//       'Leased': 'bg-gray-100 text-gray-800',
//       'Under Offer': 'bg-purple-100 text-purple-800',
//       'Maintenance': 'bg-red-100 text-red-800'
//     };
//     return colors[status] || 'bg-gray-100 text-gray-800';
//   };

//   const renderAmenityIcon = (amenity) => {
//     const icons = {
//       'parking': <Car size={14} />,
//       'wifi': <Wifi size={14} />,
//       'gym': <Dumbbell size={14} />
//     };
//     return icons[amenity] || null;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-6">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Unit Types</h2>

//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//         <div className="grid grid-cols-5 gap-4 mb-4">
//           <select
//             value={filters.property}
//             onChange={(e) => setFilters({ ...filters, property: e.target.value })}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Property</option>
//             <option value="tower-a">Tower A</option>
//             <option value="tower-b">Tower B</option>
//             <option value="galleria">Galleria Mall</option>
//           </select>

//           <select
//             value={filters.building}
//             onChange={(e) => setFilters({ ...filters, building: e.target.value })}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Building</option>
//             <option value="tower-a">Tower A</option>
//             <option value="tower-b">Tower B</option>
//           </select>

//           <select
//             value={filters.unitType}
//             onChange={(e) => setFilters({ ...filters, unitType: e.target.value })}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Unit Type</option>
//             <option value="office">Office</option>
//             <option value="retail">Retail</option>
//             <option value="warehouse">Warehouse</option>
//             <option value="flex">Flex</option>
//           </select>

//           <select
//             value={filters.status}
//             onChange={(e) => setFilters({ ...filters, status: e.target.value })}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Status</option>
//             <option value="available">Available</option>
//             <option value="leased">Leased</option>
//             <option value="under-offer">Under Offer</option>
//             <option value="maintenance">Maintenance</option>
//           </select>

//           <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
//             <Plus size={16} />
//             Add Unit
//           </button>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2 flex-1">
//             <span className="text-sm text-gray-600">Area:</span>
//             <input
//               type="range"
//               min="1000"
//               max="15000"
//               value={filters.areaMin}
//               onChange={(e) => setFilters({ ...filters, areaMin: parseInt(e.target.value) })}
//               className="flex-1"
//             />
//             <span className="text-sm text-gray-600 min-w-[100px]">
//               {filters.areaMin}-{filters.areaMax} sqft
//             </span>
//           </div>

//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search units..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Units Table */}
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="text-left py-3 px-4">
//                   <input
//                     type="checkbox"
//                     checked={selectedUnits.length === units.length}
//                     onChange={toggleSelectAll}
//                     className="rounded"
//                   />
//                 </th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Unit ID</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Unit Type</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Floor/Building</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Area (sqft)</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Base Rent</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">CAM Rate</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Available From</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Benchmark Dev.</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Amenities</th>
//                 <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {units.map((unit) => (
//                 <tr key={unit.id} className="hover:bg-gray-50">
//                   <td className="py-3 px-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedUnits.includes(unit.id)}
//                       onChange={() => toggleUnitSelection(unit.id)}
//                       className="rounded"
//                     />
//                   </td>
//                   <td className="py-3 px-4 text-sm font-medium text-gray-800">{unit.id}</td>
//                   <td className="py-3 px-4 text-sm text-gray-600">{unit.unitType}</td>
//                   <td className="py-3 px-4 text-sm text-gray-600">{unit.floorBuilding}</td>
//                   <td className="py-3 px-4 text-sm text-gray-600">{unit.area}</td>
//                   <td className="py-3 px-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(unit.status)}`}>
//                       {unit.status}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4">
//                     <div className="flex items-center gap-1">
//                       <span className="text-sm text-gray-800">${unit.baseRent}</span>
//                       <button className="text-gray-400 hover:text-gray-600">
//                         <Edit2 size={14} />
//                       </button>
//                     </div>
//                   </td>
//                   <td className="py-3 px-4 text-sm text-gray-600">{unit.camRate}</td>
//                   <td className="py-3 px-4">
//                     <span className={`text-sm font-medium ${
//                       unit.availableFrom.includes('-') ? 'text-red-600' : 
//                       unit.availableFrom.includes('+') ? 'text-green-600' : 
//                       'text-gray-600'
//                     }`}>
//                       {unit.availableFrom}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4">
//                     <div className="flex gap-1">
//                       <button className="text-gray-600 hover:text-gray-800">
//                         <Eye size={16} />
//                       </button>
//                       <button className="text-gray-600 hover:text-gray-800">
//                         <Edit2 size={16} />
//                       </button>
//                     </div>
//                   </td>
//                   <td className="py-3 px-4">
//                     <div className="flex gap-2">
//                       {unit.amenities.map((amenity, idx) => (
//                         <span key={idx} className="text-gray-600">
//                           {renderAmenityIcon(amenity)}
//                         </span>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="py-3 px-4">
//                     <div className="flex gap-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye size={16} />
//                       </button>
//                       <button className="text-blue-600 hover:text-blue-800" title="Edit">
//                         <Edit2 size={16} />
//                       </button>
//                       <button className="text-blue-600 hover:text-blue-800" title="Copy">
//                         <Copy size={16} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-between mt-4">
//         <div className="text-sm text-gray-600">
//           Showing {units.length} units
//         </div>
//         <div className="flex gap-2">
//           <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>
//             Previous
//           </button>
//           <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
//             1
//           </button>
//           <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UnitTypesPage;

// import React, { useState } from 'react';
// import { Search, Plus, Eye, Edit2, Wifi, Car, Dumbbell, Copy } from 'lucide-react';

// const UnitTypesPage = () => {
//   const [units] = useState([
//     {
//       id: 'LF-001A',
//       unitType: 'Office',
//       floorBuilding: '3 / Tower A',
//       area: 2500,
//       status: 'Available',
//       baseRent: 5000,
//       camRate: '8/1/2024',
//       availableFrom: '5.0%',
//       benchmarkDev: '',
//       amenities: ['parking', 'wifi']
//     },
//     {
//       id: 'LF-002B',
//       unitType: 'Retail',
//       floorBuilding: '1 / Galleria Mall',
//       area: 1200,
//       status: 'Leased',
//       baseRent: 3000,
//       camRate: '1/5/2023',
//       availableFrom: '2.0%',
//       benchmarkDev: 'negative',
//       amenities: ['parking', 'gym']
//     },
//     {
//       id: 'LF-003C',
//       unitType: 'Warehouse',
//       floorBuilding: '0 / Industrial Park 1',
//       area: 15000,
//       status: 'Under Offer',
//       baseRent: 10000,
//       camRate: '9/1/2024',
//       availableFrom: '10.0%',
//       benchmarkDev: 'positive',
//       amenities: ['parking', 'gym']
//     },
//     {
//       id: 'LF-004D',
//       unitType: 'Flex',
//       floorBuilding: '2 / Tech Campus',
//       area: 3000,
//       status: 'Maintenance',
//       baseRent: 6000,
//       camRate: '11/1/2024',
//       availableFrom: '0.0%',
//       benchmarkDev: '',
//       amenities: ['parking', 'car', 'gym']
//     },
//     {
//       id: 'LF-005E',
//       unitType: 'Office',
//       floorBuilding: '5 / Tower B',
//       area: 1800,
//       status: 'Available',
//       baseRent: 4000,
//       camRate: '7/1/2024',
//       availableFrom: '3.0%',
//       benchmarkDev: 'negative',
//       amenities: ['wifi']
//     }
//   ]);

//   const [selectedUnits, setSelectedUnits] = useState([]);
//   const [filters, setFilters] = useState({
//     property: '',
//     building: '',
//     unitType: '',
//     status: '',
//     areaMin: 1000,
//     areaMax: 15000
//   });
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleUnitSelection = (unitId) => {
//     setSelectedUnits(prev => 
//       prev.includes(unitId) 
//         ? prev.filter(id => id !== unitId)
//         : [...prev, unitId]
//     );
//   };

//   const toggleSelectAll = () => {
//     if (selectedUnits.length === units.length) {
//       setSelectedUnits([]);
//     } else {
//       setSelectedUnits(units.map(u => u.id));
//     }
//   };

//   const getStatusColor = (status) => {
//     const colors = {
//       'Available': 'bg-blue-100 text-blue-800',
//       'Leased': 'bg-gray-100 text-gray-800',
//       'Under Offer': 'bg-purple-100 text-purple-800',
//       'Maintenance': 'bg-red-100 text-red-800'
//     };
//     return colors[status] || 'bg-gray-100 text-gray-800';
//   };

//   const renderAmenityIcon = (amenity) => {
//     const icons = {
//       'parking': <Car size={14} />,
//       'wifi': <Wifi size={14} />,
//       'gym': <Dumbbell size={14} />,
//       'car': <Car size={14} />
//     };
//     return icons[amenity] || null;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-6">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Unit Types</h2>

//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//         <div className="grid grid-cols-5 gap-4 mb-4">
//           <select
//             value={filters.property}
//             onChange={(e) => setFilters({...filters, property: e.target.value})}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Property</option>
//             <option value="tower-a">Tower A</option>
//             <option value="tower-b">Tower B</option>
//             <option value="galleria">Galleria Mall</option>
//           </select>

//           <select
//             value={filters.building}
//             onChange={(e) => setFilters({...filters, building: e.target.value})}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Building</option>
//             <option value="tower-a">Tower A</option>
//             <option value="tower-b">Tower B</option>
//           </select>

//           <select
//             value={filters.unitType}
//             onChange={(e) => setFilters({...filters, unitType: e.target.value})}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Unit Type</option>
//             <option value="office">Office</option>
//             <option value="retail">Retail</option>
//             <option value="warehouse">Warehouse</option>
//             <option value="flex">Flex</option>
//           </select>

//           <select
//             value={filters.status}
//             onChange={(e) => setFilters({...filters, status: e.target.value})}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Status</option>
//             <option value="Available">Available</option>
//             <option value="Leased">Leased</option>
//             <option value="Under Offer">Under Offer</option>
//             <option value="Maintenance">Maintenance</option>
//           </select>

//           <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
//             <Plus size={16} />
//             Add Unit
//           </button>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2 flex-1">
//             <span className="text-sm text-gray-600">Area:</span>
//             <input
//               type="range"
//               min="1000"
//               max="15000"
//               value={filters.areaMin}
//               onChange={(e) => setFilters({...filters, areaMin: parseInt(e.target.value)})}
//               className="flex-1"
//             />
//             <span className="text-sm text-gray-600 min-w-[100px]">
//               {filters.areaMin}-{filters.areaMax} sqft
//             </span>
//           </div>

//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search units..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Units Table */}
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="py-3 px-4">
//                   <input
//                     type="checkbox"
//                     checked={selectedUnits.length === units.length}
//                     onChange={toggleSelectAll}
//                     className="rounded"
//                   />
//                 </th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Unit ID</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Unit Type</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Floor/Building</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Area</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Base Rent</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">CAM Rate</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Available From</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Benchmark</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Amenities</th>
//                 <th className="py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {units.map(unit => (
//                 <tr key={unit.id} className="hover:bg-gray-50">
//                   <td className="py-3 px-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedUnits.includes(unit.id)}
//                       onChange={() => toggleUnitSelection(unit.id)}
//                       className="rounded"
//                     />
//                   </td>
//                   <td className="py-3 px-4 text-sm font-medium text-gray-800">{unit.id}</td>
//                   <td className="py-3 px-4 text-sm text-gray-600">{unit.unitType}</td>
//                   <td className="py-3 px-4 text-sm text-gray-600">{unit.floorBuilding}</td>
//                   <td className="py-3 px-4 text-sm text-gray-600">{unit.area}</td>
//                   <td className="py-3 px-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(unit.status)}`}>
//                       {unit.status}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4 flex items-center gap-1">
//                     <span className="text-sm text-gray-800">${unit.baseRent}</span>
//                     <button className="text-gray-400 hover:text-gray-600"><Edit2 size={14} /></button>
//                   </td>
//                   <td className="py-3 px-4 text-sm text-gray-600">{unit.camRate}</td>
//                   <td className="py-3 px-4 text-sm font-medium text-gray-600">{unit.availableFrom}</td>
//                   <td className="py-3 px-4 text-sm font-medium">
//                     {unit.benchmarkDev === 'negative' ? '↓' : unit.benchmarkDev === 'positive' ? '↑' : '-'}
//                   </td>
//                   <td className="py-3 px-4 flex gap-2">
//                     {unit.amenities.map((a, i) => <span key={i}>{renderAmenityIcon(a)}</span>)}
//                   </td>
//                   <td className="py-3 px-4 flex gap-2">
//                     <button className="text-blue-600 hover:text-blue-800" title="View"><Eye size={16} /></button>
//                     <button className="text-blue-600 hover:text-blue-800" title="Edit"><Edit2 size={16} /></button>
//                     <button className="text-blue-600 hover:text-blue-800" title="Copy"><Copy size={16} /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UnitTypesPage;


import { useState } from 'react';
import { Search, Plus, Edit2, Eye, Trash2 } from 'lucide-react';

export default function UnitTypesPage() {
  const [selectedProperty, setSelectedProperty] = useState('all');
  const [selectedBuilding, setSelectedBuilding] = useState('all');
  const [selectedUnitType, setSelectedUnitType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [units, setUnits] = useState([
    {
      id: 'LF-001A',
      unitType: 'Office',
      floorBuilding: '3 / Tower A',
      area: '2500',
      status: 'Available',
      baseRent: '₹5,000',
      camRate: '8/1/2024',
      availableFrom: '+ 5.0%',
      benchmarkDev: '',
      amenities: ['wifi', 'parking']
    },
    {
      id: 'LF-002B',
      unitType: 'Retail',
      floorBuilding: '1 / Galleria Mall',
      area: '1200',
      status: 'Leased',
      baseRent: '₹3,000',
      camRate: '1/15/2023',
      availableFrom: '+ 2.0%',
      benchmarkDev: '',
      amenities: ['wifi', 'parking', 'security']
    },
    {
      id: 'LF-003C',
      unitType: 'Warehouse',
      floorBuilding: 'G / Industrial Park 1',
      area: '15000',
      status: 'Under Offer',
      baseRent: '₹10,000',
      camRate: '9/1/2024',
      availableFrom: '+ 10.0%',
      benchmarkDev: '',
      amenities: ['wifi', 'parking']
    },
    {
      id: 'LF-004D',
      unitType: 'Flex',
      floorBuilding: '2 / Tech Campus',
      area: '3000',
      status: 'Maintenance',
      baseRent: '₹6,000',
      camRate: '11/1/2024',
      availableFrom: '0.0%',
      benchmarkDev: '',
      amenities: ['wifi', 'gym', 'parking']
    },
    {
      id: 'LF-005E',
      unitType: 'Office',
      floorBuilding: '5 / Tower B',
      area: '1800',
      status: 'Available',
      baseRent: '₹4,000',
      camRate: '7/1/2024',
      availableFrom: '+ 3.0%',
      benchmarkDev: '',
      amenities: ['wifi']
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-blue-100 text-blue-700';
      case 'Leased':
        return 'bg-gray-100 text-gray-700';
      case 'Under Offer':
        return 'bg-yellow-100 text-yellow-700';
      case 'Maintenance':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getAvailableFromColor = (value) => {
    if (value.includes('+')) {
      if (parseFloat(value) >= 10) return 'text-green-600';
      if (parseFloat(value) >= 5) return 'text-green-500';
      return 'text-orange-500';
    }
    return 'text-gray-600';
  };

  const handleEdit = (field, unitId) => {
    console.log(`Editing ${field} for unit ${unitId}`);
  };

  const handleDelete = (unitId) => {
    if (confirm('Are you sure you want to delete this unit?')) {
      setUnits(units.filter(unit => unit.id !== unitId));
    }
  };

  const handleView = (unitId) => {
    console.log(`Viewing details for unit ${unitId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-full mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">Commercial Units</h1>

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6 p-4">
          <div className="flex items-center gap-4 flex-wrap">
            <select
              value={selectedProperty}
              onChange={(e) => setSelectedProperty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="all">Property</option>
              <option value="tower-a">Tower A</option>
              <option value="tower-b">Tower B</option>
            </select>

            <select
              value={selectedBuilding}
              onChange={(e) => setSelectedBuilding(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="all">Building</option>
              <option value="building-1">Building 1</option>
              <option value="building-2">Building 2</option>
            </select>

            <select
              value={selectedUnitType}
              onChange={(e) => setSelectedUnitType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="all">Unit Type</option>
              <option value="office">Office</option>
              <option value="retail">Retail</option>
              <option value="warehouse">Warehouse</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="all">Status</option>
              <option value="available">Available</option>
              <option value="leased">Leased</option>
              <option value="maintenance">Maintenance</option>
            </select>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Area:</span>
              <input
                type="range"
                min="1000"
                max="15000"
                className="w-32"
              />
              <span>1000-15000 sqft</span>
            </div>

            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search units..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 whitespace-nowrap ml-auto">
              <Plus className="w-4 h-4" />
              Add Unit
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Actions</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Unit ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Unit Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Floor/Building</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Area (sqft)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Base Rent</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">CAM Rate</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Available From</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Benchmark Dev.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Amenities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {units.map((unit) => (
                  <tr key={unit.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(unit.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                          title="View"
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() => handleEdit('unit', unit.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          onClick={() => handleDelete(unit.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{unit.id}</td>
                    <td className="px-4 py-3 text-sm">{unit.unitType}</td>
                    <td className="px-4 py-3 text-sm">{unit.floorBuilding}</td>
                    <td className="px-4 py-3 text-sm">{unit.area}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(unit.status)}`}>
                        {unit.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <span className="text-sm">{unit.baseRent}</span>
                        <button
                          onClick={() => handleEdit('rent', unit.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Edit2 className="w-3 h-3 text-gray-400" />
                        </button>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-xs text-gray-500">10.5%</span>
                        <button
                          onClick={() => handleEdit('percentage', unit.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Edit2 className="w-3 h-3 text-gray-400" />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{unit.camRate}</td>
                    <td className="px-4 py-3">
                      <span className={`text-sm font-medium ${getAvailableFromColor(unit.availableFrom)}`}>
                        {unit.availableFrom}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">{unit.benchmarkDev || '-'}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        {unit.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs"
                            title={amenity}
                          >
                            {amenity === 'wifi' && '📶'}
                            {amenity === 'parking' && '🅿️'}
                            {amenity === 'security' && '🔒'}
                            {amenity === 'gym' && '💪'}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing 5 of 5 units
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default UnitTypesPage;