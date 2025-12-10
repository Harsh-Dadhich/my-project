import React, { useState } from 'react';
import { Eye, Edit, X } from 'lucide-react';

const TenantManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [tenants, setTenants] = useState([
    {
      id: 'T001',
      legalName: 'Apex Holdings Pvt Ltd',
      brandName: 'Apex Retail',
      tenantType: 'Retail',
      industryCategory: 'Apparel',
      creditLimit: '₹50,00,000',
      paymentTerms: 'Net 30',
      status: 'Active',
      primaryContact: 'Rahul Sharma'
    },
    {
      id: 'T002',
      legalName: 'Brightside Innovations Inc.',
      brandName: 'Bright Solutions',
      tenantType: 'Commercial',
      industryCategory: 'IT Services',
      creditLimit: '₹1,00,00,000',
      paymentTerms: 'Net 45',
      status: 'Active',
      primaryContact: 'Priya Singh'
    },
    {
      id: 'T003',
      legalName: 'Global Logistics Group',
      brandName: 'Global Cargo',
      tenantType: 'Industrial',
      industryCategory: 'Logistics',
      creditLimit: '₹25,00,000',
      paymentTerms: 'Net 15',
      status: 'Inactive',
      primaryContact: 'Amit Patel'
    },
    {
      id: 'T004',
      legalName: 'Zenith Healthcare Ltd.',
      brandName: 'Zen Clinics',
      tenantType: 'Commercial',
      industryCategory: 'Healthcare',
      creditLimit: '₹75,00,000',
      paymentTerms: 'Net 60',
      status: 'Active',
      primaryContact: 'Dr. Neha Gupta'
    },
    {
      id: 'T005',
      legalName: 'Urban Living Developers',
      brandName: 'Urban Homes',
      tenantType: 'Residential',
      industryCategory: 'Real Estate',
      creditLimit: '₹1,20,00,000',
      paymentTerms: 'Net 30',
      status: 'Blacklisted',
      primaryContact: 'Sanjay Verma'
    },
    {
      id: 'T006',
      legalName: 'Gourmet Bites Corp.',
      brandName: 'Taste Buds',
      tenantType: 'Retail',
      industryCategory: 'F&B',
      creditLimit: '₹30,00,000',
      paymentTerms: 'Net 30',
      status: 'Churned',
      primaryContact: 'Anjali Desai'
    },
    {
      id: 'T007',
      legalName: 'Future Tech Solutions',
      brandName: 'NextGen AI',
      tenantType: 'Commercial',
      industryCategory: 'IT Services',
      creditLimit: '₹80,00,000',
      paymentTerms: 'Net 45',
      status: 'Active',
      primaryContact: 'Vikram Rao'
    }
  ]);

  const [formData, setFormData] = useState({
    tenantId: '',
    legalName: '',
    brandName: '',
    shortCode: '',
    tenantType: 'Corporate',
    industryCategory: 'IT & Software',
    tenantStatus: 'Active',
    gst: '',
    pan: '',
    cin: '',
    registrationAddress: '',
    sameAsRegistration: false,
    billingAddress: '',
    creditLimit: '',
    paymentTerms: 'Net 30',
    parentCompany: '',
    brokerCode: '',
    brokerage: ''
  });

  const statusCounts = {
    active: tenants.filter(t => t.status === 'Active').length,
    inactive: tenants.filter(t => t.status === 'Inactive').length,
    blacklisted: tenants.filter(t => t.status === 'Blacklisted').length,
    churned: tenants.filter(t => t.status === 'Churned').length
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'text-green-600';
      case 'Inactive': return 'text-gray-600';
      case 'Blacklisted': return 'bg-red-100 text-red-600 px-2 py-1 rounded';
      case 'Churned': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow">
          <div className="border-b px-6 py-4 flex items-center justify-between">
            <div className="flex space-x-8">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">Overview</button>
              <button className="text-gray-600 pb-2">Contacts & Hierarchy</button>
              <button className="text-gray-600 pb-2">KYC & Documents</button>
              <button className="text-gray-600 pb-2">Communication Log</button>
            </div>
            <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Tenant Identity</h2>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Tenant ID</label>
                  <input
                    type="text"
                    name="tenantId"
                    value={formData.tenantId}
                    onChange={handleInputChange}
                    placeholder="TI00012345"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Legal Name</label>
                  <input
                    type="text"
                    name="legalName"
                    value={formData.legalName}
                    onChange={handleInputChange}
                    placeholder="ABC Real Estate Pvt. Ltd."
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Brand Name</label>
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleInputChange}
                    placeholder="ABC Properties"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Short Code</label>
                  <input
                    type="text"
                    name="shortCode"
                    value={formData.shortCode}
                    onChange={handleInputChange}
                    placeholder="ABCPROP"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Tenant Type</label>
                  <select
                    name="tenantType"
                    value={formData.tenantType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Corporate</option>
                    <option>Retail</option>
                    <option>Commercial</option>
                    <option>Residential</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Industry Category</label>
                  <select
                    name="industryCategory"
                    value={formData.industryCategory}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>IT & Software</option>
                    <option>Healthcare</option>
                    <option>Real Estate</option>
                    <option>Retail</option>
                    <option>F&B</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Tenant Status</label>
                  <select
                    name="tenantStatus"
                    value={formData.tenantStatus}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Blacklisted</option>
                    <option>Churned</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Registration & Billing</h2>
              <div className="grid grid-cols-3 gap-6 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">GST</label>
                  <input
                    type="text"
                    name="gst"
                    value={formData.gst}
                    onChange={handleInputChange}
                    placeholder="27XXXXXX7256125"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">PAN</label>
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleInputChange}
                    placeholder="ABCDE1234F"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">CIN</label>
                  <input
                    type="text"
                    name="cin"
                    value={formData.cin}
                    onChange={handleInputChange}
                    placeholder="U70100DL2007PTC180565"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Registration Address</label>
                <textarea
                  name="registrationAddress"
                  value={formData.registrationAddress}
                  onChange={handleInputChange}
                  placeholder="123, Business Park, Industrial Area, Sector 62, Noida, Uttar Pradesh, 201301"
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="sameAsRegistration"
                    checked={formData.sameAsRegistration}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Same as Registration Address
                </label>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Billing Address</label>
                <textarea
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleInputChange}
                  placeholder="Billing address will appear here"
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Financial Profile</h2>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Credit Limit (₹)</label>
                  <input
                    type="text"
                    name="creditLimit"
                    value={formData.creditLimit}
                    onChange={handleInputChange}
                    placeholder="50000.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Payment Terms</label>
                  <select
                    name="paymentTerms"
                    value={formData.paymentTerms}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Net 30</option>
                    <option>Net 15</option>
                    <option>Net 45</option>
                    <option>Net 60</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Parent/Group Company</label>
                  <input
                    type="text"
                    name="parentCompany"
                    value={formData.parentCompany}
                    onChange={handleInputChange}
                    placeholder="Global Holdings Ltd."
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Broker Code</label>
                  <input
                    type="text"
                    name="brokerCode"
                    value={formData.brokerCode}
                    onChange={handleInputChange}
                    placeholder="B56001"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Brokerage %</label>
                  <input
                    type="text"
                    name="brokerage"
                    value={formData.brokerage}
                    onChange={handleInputChange}
                    placeholder="5.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-full mx-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold">Tenants</h1>
              <button
                onClick={() => setShowForm(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center space-x-2"
              >
                <span>+</span>
                <span>Add Tenant</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search tenants..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Tenant Type</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Industry Category</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Tenant Status</option>
              </select>
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">Reset Filters</button>
            </div>
          </div>

          <div className="flex">
            <div className="flex-1 overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Actions</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Tenant ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Legal Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Brand Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Tenant Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Industry Category</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Credit Limit</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Payment Terms</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700">Primary Contact Name</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tenants.map((tenant) => (
                    <tr key={tenant.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-600 hover:text-blue-600">
                            <Eye size={16} />
                          </button>
                          <button className="p-1 text-gray-600 hover:text-blue-600">
                            <Edit size={16} />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{tenant.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{tenant.legalName}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{tenant.brandName}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{tenant.tenantType}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{tenant.industryCategory}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{tenant.creditLimit}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{tenant.paymentTerms}</td>
                      <td className={`px-4 py-3 text-sm font-medium ${getStatusColor(tenant.status)}`}>
                        {tenant.status}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{tenant.primaryContact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-64 border-l p-6">
              <h3 className="font-semibold mb-4">Tenant Status Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Tenants</span>
                  <span className="font-semibold">{statusCounts.active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Inactive Tenants</span>
                  <span className="font-semibold">{statusCounts.inactive}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Blacklisted Tenants</span>
                  <span className="font-semibold">{statusCounts.blacklisted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Churned Tenants</span>
                  <span className="font-semibold">{statusCounts.churned}</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="text-sm">
                  <div className="text-gray-600 mb-1">Active (4)</div>
                  <div className="text-gray-600 mb-1">Inactive (1)</div>
                  <div className="text-gray-600 mb-1">Blacklisted (1)</div>
                  <div className="text-gray-600 mb-1">Churned (1)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Rows per page:</span>
              <select className="px-2 py-1 border border-gray-300 rounded text-sm">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Page 1 of 1</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">&lt;</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantManagement;