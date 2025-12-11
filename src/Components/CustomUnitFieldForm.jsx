import React, { useState } from 'react';
import { Plus, Edit2, ChevronDown, FileText, Hash, Calendar, ToggleLeft, CheckSquare, Menu, Minus, Paperclip, Search } from 'lucide-react';

const CustomUnitFieldForm = () => {
  const [formData, setFormData] = useState({
    unitName: '',
    unitType: '',
    unitCode: '',
    area: '',
    floorNumber: '',
    status: '',
    availableFrom: '',
    baseRent: '',
    leaseTerm: '',
    annualEscalation: '',
    securityDeposit: '',
    financialNotes: '',
    numberOfOffices: '',
    parkingSpaces: '',
    amenities: [],
    address: '',
    city: '',
    internalNotes: '',
    leaseAgreement: null,
    marketRate: '',
    occupancyHistory: ''
  });

  const [draggedField, setDraggedField] = useState(null);

  const fieldTypes = [
    { icon: <FileText size={20} />, label: 'Text Field', type: 'text' },
    { icon: <Hash size={20} />, label: 'Number', type: 'number' },
    { icon: <ChevronDown size={20} />, label: 'Dropdown', type: 'dropdown' },
    { icon: <CheckSquare size={20} />, label: 'Multi-select', type: 'multiselect' },
    { icon: <Calendar size={20} />, label: 'Date', type: 'date' },
    { icon: <span className="text-lg">₹</span>, label: 'Currency', type: 'currency' },
    { icon: <ToggleLeft size={20} />, label: 'Toggle', type: 'toggle' },
    { icon: <CheckSquare size={20} />, label: 'Checkbox', type: 'checkbox' },
    { icon: <Menu size={20} />, label: 'Section Header', type: 'section' },
    { icon: <Minus size={20} />, label: 'Divider', type: 'divider' },
    { icon: <Paperclip size={20} />, label: 'Attachment', type: 'attachment' },
    { icon: <Search size={20} />, label: 'Lookup', type: 'lookup' }
  ];

  const amenitiesOptions = [
    'Parking', 'Elevator', 'Security', 'AC', 'Power Backup', 
    'Conference Room', 'Cafeteria', 'Gym', 'WiFi'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, leaseAgreement: file }));
    }
  };

  const handleSaveDraft = () => {
    console.log('Draft saved:', formData);
    alert('Draft layout saved successfully!');
  };

  const handlePublish = () => {
    console.log('Publishing layout:', formData);
    alert('Layout published to all properties!');
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset to standard template?')) {
      setFormData({
        unitName: '',
        unitType: '',
        unitCode: '',
        area: '',
        floorNumber: '',
        status: '',
        availableFrom: '',
        baseRent: '',
        leaseTerm: '',
        annualEscalation: '',
        securityDeposit: '',
        financialNotes: '',
        numberOfOffices: '',
        parkingSpaces: '',
        amenities: [],
        address: '',
        city: '',
        internalNotes: '',
        leaseAgreement: null,
        marketRate: '',
        occupancyHistory: ''
      });
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
        
      {/* Left Sidebar - Field Types */}
      {/* <div className="w-56 bg-white border-r border-gray-200 p-4 overflow-y-auto">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Configuration Categories →</h3>
          <p className="text-xs text-gray-500 mb-3">Master Data → Unit Form Builder</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {fieldTypes.map((field, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              draggable
              onDragStart={() => setDraggedField(field)}
            >
              <div className="text-gray-600 mb-1">{field.icon}</div>
              <span className="text-xs text-center text-gray-700">{field.label}</span>
            </button>
          ))}
        </div>
      </div> */}

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-full mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-6">Custom Unit Field</h1>
          {/* Drop Zone */}
          {/* <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center bg-white">
            <p className="text-gray-500">Drag and drop fields here to start building your form</p>
          </div> */}

          {/* Identity Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Identity</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Unit Name</label>
                <input
                  type="text"
                  value={formData.unitName}
                  onChange={(e) => handleInputChange('unitName', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Text Field"
                />
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">Required</span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Unit Type</label>
                <select
                  value={formData.unitType}
                  onChange={(e) => handleInputChange('unitType', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Dropdown</option>
                  <option value="office">Office</option>
                  <option value="retail">Retail</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="residential">Residential</option>
                </select>
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">Required</span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Unit Code</label>
                <input
                  type="text"
                  value={formData.unitCode}
                  onChange={(e) => handleInputChange('unitCode', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Text Field"
                />
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>
            </div>
          </div>

          {/* Area Details Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Area Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Area (Sq Ft)</label>
                <input
                  type="number"
                  value={formData.area}
                  onChange={(e) => handleInputChange('area', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number"
                />
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">Required</span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Floor Number</label>
                <input
                  type="number"
                  value={formData.floorNumber}
                  onChange={(e) => handleInputChange('floorNumber', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number"
                />
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>
            </div>
          </div>

          {/* Status & Availability Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Status & Availability</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Dropdown</option>
                  <option value="available">Available</option>
                  <option value="occupied">Occupied</option>
                  <option value="maintenance">Under Maintenance</option>
                </select>
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">Required</span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Available From</label>
                <input
                  type="date"
                  value={formData.availableFrom}
                  onChange={(e) => handleInputChange('availableFrom', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>
            </div>
          </div>

          {/* Rent & Charges Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Rent & Charges</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-40 text-sm font-medium">Base Rent</label>
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={formData.baseRent}
                    onChange={(e) => handleInputChange('baseRent', e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">Required</span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-40 text-sm font-medium">Lease Term (Months)</label>
                <input
                  type="number"
                  value={formData.leaseTerm}
                  onChange={(e) => handleInputChange('leaseTerm', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number"
                />
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">Required</span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-40 text-sm font-medium">Annual Escalation Rate</label>
                <input
                  type="number"
                  value={formData.annualEscalation}
                  onChange={(e) => handleInputChange('annualEscalation', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number"
                />
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>
            </div>
          </div>

          {/* Financials Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Financials</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium">Security Deposit Amount</label>
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={formData.securityDeposit}
                    onChange={(e) => handleInputChange('securityDeposit', e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium">Financial Notes</label>
                <input
                  type="text"
                  value={formData.financialNotes}
                  onChange={(e) => handleInputChange('financialNotes', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Text Field"
                />
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>
            </div>
          </div>

          {/* Physical Attributes Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Physical Attributes</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-40 text-sm font-medium">Number of Offices</label>
                <input
                  type="number"
                  value={formData.numberOfOffices}
                  onChange={(e) => handleInputChange('numberOfOffices', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number"
                />
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-40 text-sm font-medium">Parking Spaces</label>
                <input
                  type="number"
                  value={formData.parkingSpaces}
                  onChange={(e) => handleInputChange('parkingSpaces', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number"
                />
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Amenities</h2>
            
            <div className="flex items-start gap-4">
              <label className="w-32 text-sm font-medium pt-2">Amenities</label>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {amenitiesOptions.map((amenity) => (
                    <button
                      key={amenity}
                      onClick={() => handleAmenityToggle(amenity)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        formData.amenities.includes(amenity)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>
              <span className="w-20"></span>
              <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
              <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Location</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Text Field"
                />
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">Required</span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Text Field"
                />
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded">Required</span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>
            </div>
          </div>

          {/* Notes & Attachments Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Notes & Attachments</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Internal Notes</label>
                <textarea
                  value={formData.internalNotes}
                  onChange={(e) => handleInputChange('internalNotes', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Text Field"
                  rows="3"
                />
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium">Lease Agreement</label>
                <div className="flex-1">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="lease-upload"
                  />
                  <label
                    htmlFor="lease-upload"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <Paperclip size={16} />
                    <span className="text-sm">
                      {formData.leaseAgreement ? formData.leaseAgreement.name : 'Choose File'}
                    </span>
                  </label>
                </div>
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>
            </div>
          </div>

          {/* Benchmark & Analytics Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Benchmark & Analytics</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium">Market Rate Comparison</label>
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={formData.marketRate}
                    onChange={(e) => handleInputChange('marketRate', e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>

              <div className="flex items-center gap-4">
                <label className="w-48 text-sm font-medium">Occupancy History</label>
                <input
                  type="number"
                  value={formData.occupancyHistory}
                  onChange={(e) => handleInputChange('occupancyHistory', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number"
                />
                <span className="w-20"></span>
                <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Edit2 size={16} /></button>
              </div>
            </div>
          </div>

          {/* Drop Zone at Bottom */}
          {/* <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white mb-6">
            <p className="text-gray-500">Drop fields here</p>
          </div> */}

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleReset}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Reset to Standard Template
            </button>
            <button
              onClick={handleSaveDraft}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Save Draft Layout
            </button>
            <button
              onClick={handlePublish}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Publish Layout to All Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomUnitFieldForm;