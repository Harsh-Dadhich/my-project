import React, { useState } from 'react';
import { Search, Eye, X, Upload } from 'lucide-react';

const CommunicationLogPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [dateRange, setDateRange] = useState({ start: 'Nov 08, 2023', end: 'Dec 08, 2023' });
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [tagFilter, setTagFilter] = useState('All Tags');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  
  const [formData, setFormData] = useState({
    dateTime: '2024-07-28T10:30',
    commType: 'Email',
    recipient: 'Jane Smith (Acme Corp)',
    sender: 'John Doe (CRM User)',
    subject: 'Lease Renewal Discussion - Acme Corp',
    body: "Discussed the upcoming lease renewal for their office space at 123 Business Park. Jane confirmed receipt of the renewal terms and will review with her team by end of week. Follow-up scheduled for next Monday.",
    tags: ['Payment Reminder', 'Notice'],
    status: 'Pending',
    attachments: []
  });

  const [communications, setCommunications] = useState([
    {
      id: 1,
      date: '25 Oct 2023',
      time: '10:30',
      type: 'Email',
      subject: 'Payment Reminder for Rent',
      recipient: 'finance@globalcorp.com',
      sender: 'accounts@crebase.com',
      tags: ['Payment Reminder', 'Finance'],
      status: 'Sent'
    },
    {
      id: 2,
      date: '25 Oct 2023',
      time: '14:15',
      type: 'Call',
      subject: 'Follow-up on AC Maintenance Request',
      recipient: 'ops@globalcorp.com',
      sender: 'operations@crebase.com',
      tags: ['Maintenance Operations', 'Follow-up'],
      status: 'Acknowledged'
    },
    {
      id: 3,
      date: '20 Oct 2023',
      time: '09:00',
      type: 'Notice',
      subject: 'Annual Fire Safety Drill Schedule',
      recipient: 'management@globalcorp.com',
      sender: 'buildingmgmt@crebase.com',
      tags: ['Notice', 'Compliance', 'Safety'],
      status: 'Read'
    },
    {
      id: 4,
      date: '18 Oct 2023',
      time: '11:00',
      type: 'Email',
      subject: 'Inquiry about Lease Extension Terms',
      recipient: 'leasing@crebase.com',
      sender: 'ceo@globalcorp.com',
      tags: ['Lease Renewal', 'Inquiry'],
      status: 'Pending'
    },
    {
      id: 5,
      date: '12 Oct 2023',
      time: '16:00',
      type: 'Letter',
      subject: 'Official Welcome Letter and Lease Agreement Copy',
      recipient: 'newtenants@globalcorp.com',
      sender: 'onboarding@crebase.com',
      tags: ['Onboarding', 'Welcome'],
      status: 'Sent'
    },
    {
      id: 6,
      date: '10 Oct 2023',
      time: '09:45',
      type: 'Email',
      subject: 'Escalation: HVAC System Malfunction',
      recipient: 'operations@crebase.com',
      sender: 'facilities@globalcorp.com',
      tags: ['Escalation', 'HVAC', 'Urgent'],
      status: 'Acknowledged'
    }
  ]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleAddTag = (newTag) => {
    if (newTag && !formData.tags.includes(newTag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleSaveLog = () => {
    console.log('Saving communication log:', formData);
    alert('Communication log saved successfully!');
    setShowModal(false);
    // Reset form
    setFormData({
      dateTime: '',
      commType: 'Email',
      recipient: '',
      sender: '',
      subject: '',
      body: '',
      tags: [],
      status: 'Pending',
      attachments: []
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Sent':
        return 'text-green-700 bg-green-50';
      case 'Acknowledged':
        return 'text-blue-700 bg-blue-50';
      case 'Read':
        return 'text-purple-700 bg-purple-50';
      case 'Pending':
        return 'text-yellow-700 bg-yellow-50';
      default:
        return 'text-gray-700 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filter Communications</h2>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowModal(true);
              }}
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
            >
              <span className="text-lg">📋</span>
              Log New Communication
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="self-center">-</span>
                <input
                  type="text"
                  value={dateRange.end}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Types</option>
                <option>Email</option>
                <option>Call</option>
                <option>Notice</option>
                <option>Letter</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tag</label>
              <select
                value={tagFilter}
                onChange={(e) => setTagFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Tags</option>
                <option>Payment Reminder</option>
                <option>Maintenance</option>
                <option>Notice</option>
                <option>Lease Renewal</option>
                <option>Onboarding</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Statuses</option>
                <option>Sent</option>
                <option>Acknowledged</option>
                <option>Read</option>
                <option>Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Communication History */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Communication History</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date & Time</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Subject</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Recipient</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Sender</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Tags</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {communications.map((comm) => (
                  <tr key={comm.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">
                      <div>{comm.date}</div>
                      <div className="text-gray-500">{comm.time}</div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{comm.type}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{comm.subject}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{comm.recipient}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{comm.sender}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {comm.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(comm.status)}`}>
                        {comm.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">
                          <Search size={18} />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded">
                          <Eye size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Log New Communication - Acme Corp</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                    <input
                      type="datetime-local"
                      value={formData.dateTime}
                      onChange={(e) => handleInputChange('dateTime', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Communication Type</label>
                    <select
                      value={formData.commType}
                      onChange={(e) => handleInputChange('commType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Email</option>
                      <option>Call</option>
                      <option>Notice</option>
                      <option>Letter</option>
                      <option>Meeting</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Recipient</label>
                    <select
                      value={formData.recipient}
                      onChange={(e) => handleInputChange('recipient', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Jane Smith (Acme Corp)</option>
                      <option>John Wilson (Acme Corp)</option>
                      <option>Sarah Johnson (Acme Corp)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sender</label>
                    <select
                      value={formData.sender}
                      onChange={(e) => handleInputChange('sender', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>John Doe (CRM User)</option>
                      <option>Jane Manager (CRM User)</option>
                      <option>Bob Admin (CRM User)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Body</label>
                  <textarea
                    value={formData.body}
                    onChange={(e) => handleInputChange('body', e.target.value)}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.tags.map((tag, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tag}
                          <button
                            onClick={() => handleRemoveTag(tag)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Add a tag (ex: Escalation)"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleAddTag(e.target.value);
                          e.target.value = '';
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button
                      onClick={(e) => {
                        const input = e.target.previousSibling;
                        handleAddTag(input.value);
                        input.value = '';
                      }}
                      className="mt-2 text-sm text-blue-600 hover:text-blue-700"
                    >
                      Add
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Pending</option>
                      <option>Sent</option>
                      <option>Acknowledged</option>
                      <option>Read</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Optional Attachments</label>
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors"
                  >
                    <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                    <p className="text-sm text-gray-600 mb-2">Drag & drop files here, or click to upload</p>
                    <label className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Browse Files
                      </span>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    {formData.attachments.length > 0 && (
                      <div className="mt-4 text-left">
                        <p className="text-xs text-gray-600 font-medium mb-1">Selected files:</p>
                        {formData.attachments.map((file, idx) => (
                          <p key={idx} className="text-xs text-gray-600">• {file.name}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveLog}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Log
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunicationLogPage;