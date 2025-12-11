import React, { useState } from 'react';
import { Eye, RefreshCw, Download, Upload } from 'lucide-react';

const TenantDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('KYC & Documents');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [dragActive, setDragActive] = useState(false);
  const [complianceNotes, setComplianceNotes] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [documents, setDocuments] = useState([
    {
      id: 1,
      type: 'Incorporation Certificate',
      fileName: 'XYZCorp_Incorporation_2020.pdf',
      uploadedOn: '2023-01-15',
      uploadedBy: 'Jane Doe',
      status: 'Verified'
    },
    {
      id: 2,
      type: 'GST Certificate',
      fileName: 'XYZCorp_GST_Reg_09022023.png',
      uploadedOn: '2023-02-01',
      uploadedBy: 'John Smith',
      status: 'Pending'
    },
    {
      id: 3,
      type: 'PAN Copy',
      fileName: 'XYZCorp_PAN_Card.jpeg',
      uploadedOn: '2022-11-20',
      uploadedBy: 'Jane Doe',
      status: 'Verified'
    },
    {
      id: 4,
      type: 'Audited Financials',
      fileName: 'XYZCorp_FY2022_Audit.xlsx',
      uploadedOn: '2023-03-10',
      uploadedBy: 'Finance Dept',
      status: 'Expired'
    },
    {
      id: 5,
      type: 'Board Resolution',
      fileName: 'XYZCorp_BoardRes_2023.pdf',
      uploadedOn: '2023-04-05',
      uploadedBy: 'Legal Team',
      status: 'Verified'
    },
    {
      id: 6,
      type: 'Lease Agreement',
      fileName: 'XYZCorp_Lease_Agreement_Unit4',
      uploadedOn: '2023-05-12',
      uploadedBy: 'Jane Doe',
      status: 'Outdated'
    }
  ]);

  const tabs = ['Overview', 'Contacts', 'KYC & Documents', 'Communication Log'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Verified':
        return 'text-green-700 bg-green-50';
      case 'Pending':
        return 'text-yellow-700 bg-yellow-50';
      case 'Expired':
        return 'text-red-700 bg-red-50';
      case 'Outdated':
        return 'text-gray-700 bg-gray-100';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  const handleView = (doc) => {
    alert(`Viewing document: ${doc.fileName}`);
  };

  const handleRefresh = (doc) => {
    alert(`Refreshing document: ${doc.fileName}`);
  };

  const handleDownload = (doc) => {
    alert(`Downloading document: ${doc.fileName}`);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    setUploadedFiles(prev => [...prev, ...fileArray]);
    alert(`${fileArray.length} file(s) added for upload`);
  };

  const handleUploadDocuments = () => {
    if (uploadedFiles.length === 0) {
      alert('Please select files to upload');
      return;
    }
    
    alert(`Uploading ${uploadedFiles.length} document(s) with compliance notes: ${complianceNotes || 'None'}`);
    // Clear after upload
    setUploadedFiles([]);
    setComplianceNotes('');
  };

  const filteredDocuments = documents.filter(doc => {
    const statusMatch = statusFilter === 'All Statuses' || doc.status === statusFilter;
    const typeMatch = typeFilter === 'All Types' || doc.type === typeFilter;
    return statusMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Tenant Details for Green Square Holdings LLC
          </h1>
        </div>



        {/* Required Documents Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Required Documents</h2>
            
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Statuses</option>
                <option>Verified</option>
                <option>Pending</option>
                <option>Expired</option>
                <option>Outdated</option>
              </select>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Types</option>
                <option>Incorporation Certificate</option>
                <option>GST Certificate</option>
                <option>PAN Copy</option>
                <option>Audited Financials</option>
                <option>Board Resolution</option>
                <option>Lease Agreement</option>
              </select>
            </div>
          </div>

          {/* Documents Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Document Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Uploaded File Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Uploaded On</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Uploaded By</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{doc.type}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{doc.fileName}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{doc.uploadedOn}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{doc.uploadedBy}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleView(doc)}
                          className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="View"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleRefresh(doc)}
                          className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                          title="Refresh"
                        >
                          <RefreshCw size={18} />
                        </button>
                        <button
                          onClick={() => handleDownload(doc)}
                          className="p-1.5 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
                          title="Download"
                        >
                          <Download size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upload New Documents Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Upload New Documents</h2>
          
          <div className="grid grid-cols-2 gap-6">
            {/* File Upload Area */}
            <div>
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                  dragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 bg-white'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center">
                  <Upload className="text-gray-400 mb-4" size={48} />
                  <p className="text-gray-600 mb-2">Drag & drop files here or</p>
                  <label className="cursor-pointer">
                    <span className="text-blue-600 hover:text-blue-700 font-medium">
                      Browse Files
                    </span>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileInput}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              
              {uploadedFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Selected files: {uploadedFiles.length}
                  </p>
                  <ul className="text-xs text-gray-600">
                    {uploadedFiles.map((file, idx) => (
                      <li key={idx} className="truncate">• {file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Compliance Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Compliance Notes
              </label>
              <textarea
                value={complianceNotes}
                onChange={(e) => setComplianceNotes(e.target.value)}
                placeholder="Add any specific compliance comments or notes here..."
                className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
          </div>

          {/* Upload Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleUploadDocuments}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Upload Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDetailsPage;