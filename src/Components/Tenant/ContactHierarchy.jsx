import { useState } from 'react';

export default function ContactHierarchy() {
  const [primaryContact, setPrimaryContact] = useState({
    name: 'Michael Scott',
    designation: 'Regional Manager',
    mobile: '+1 (555) 100-0001',
    email: 'michael.scott@dundermifflin.com'
  });

  const [financeContact, setFinanceContact] = useState({
    name: 'Oscar Martinez',
    mobile: '+1 (555) 100-0002',
    email: 'oscar.martinez@dundermifflin.com'
  });

  const [operationsContact, setOperationsContact] = useState({
    name: 'Dwight Schrute',
    designation: 'Assistant to the Regional Manager',
    mobile: '+1 (555) 100-0003',
    email: 'dwight.schrute@dundermifflin.com'
  });

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Sarah Connor', role: 'Property Manager', email: 'sarah.connor@example.com', mobile: '+1 (555) 123-4567', escalation: 'L1', active: true },
    { id: 2, name: 'Kyle Reese', role: 'Assistant Manager', email: 'kyle.reese@example.com', mobile: '+1 (555) 987-6543', escalation: 'L2', active: true },
    { id: 3, name: 'John Doe', role: 'Building Coordinator', email: 'john.doe@example.com', mobile: '+1 (555) 111-2222', escalation: 'L3', active: false },
    { id: 4, name: 'Jane Smith', role: 'Emergency Contact', email: 'jane.smith@example.com', mobile: '+1 (555) 333-4444', escalation: 'L1', active: true },
    { id: 5, name: 'Peter Jones', role: 'Support Lead', email: 'peter.jones@example.com', mobile: '+1 (555) 555-6666', escalation: 'L2', active: true }
  ]);

  const [preferences, setPreferences] = useState({
    email: true,
    sms: false,
    tenantPortal: true,
    whatsApp: false
  });

  const [showAddContact, setShowAddContact] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    role: '',
    email: '',
    mobile: '',
    escalation: 'L1'
  });

  const toggleContact = (id) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, active: !contact.active } : contact
    ));
  };

  const handlePreferenceChange = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.role && newContact.email && newContact.mobile) {
      setContacts([...contacts, { 
        id: contacts.length + 1, 
        ...newContact, 
        active: true 
      }]);
      setNewContact({ name: '', role: '', email: '', mobile: '', escalation: 'L1' });
      setShowAddContact(false);
    }
  };

  const handleSaveChanges = () => {
    alert('Changes saved successfully!');
  };

  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl font-semibold mb-6">Contact Hierarchy</h1>

        {/* Primary Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Primary Contact */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-2 ">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Primary Contact</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Name</p>
                <input
                  type="text"
                  value={primaryContact.name}
                  onChange={(e) => setPrimaryContact({...primaryContact, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Designation</p>
                <input
                  type="text"
                  value={primaryContact.designation}
                  onChange={(e) => setPrimaryContact({...primaryContact, designation: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Mobile</p>
                <input
                  type="text"
                  value={primaryContact.mobile}
                  onChange={(e) => setPrimaryContact({...primaryContact, mobile: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Email</p>
                <input
                  type="email"
                  value={primaryContact.email}
                  onChange={(e) => setPrimaryContact({...primaryContact, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-600">Receives all legal notices and important updates.</p>
              </div>
            </div>
          </div>

          {/* Finance Contact */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Finance Contact</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Name (optional)</p>
                <input
                  type="text"
                  value={financeContact.name}
                  onChange={(e) => setFinanceContact({...financeContact, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Mobile</p>
                <input
                  type="text"
                  value={financeContact.mobile}
                  onChange={(e) => setFinanceContact({...financeContact, mobile: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Email</p>
                <input
                  type="email"
                  value={financeContact.email}
                  onChange={(e) => setFinanceContact({...financeContact, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-600">Receives Invoices and Statements of Account (SOA).</p>
              </div>
            </div>
          </div>

          {/* Operations Contact */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Operations Contact</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Name</p>
                <input
                  type="text"
                  value={operationsContact.name}
                  onChange={(e) => setOperationsContact({...operationsContact, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Designation</p>
                <input
                  type="text"
                  value={operationsContact.designation}
                  onChange={(e) => setOperationsContact({...operationsContact, designation: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Mobile</p>
                <input
                  type="text"
                  value={operationsContact.mobile}
                  onChange={(e) => setOperationsContact({...operationsContact, mobile: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Email</p>
                <input
                  type="email"
                  value={operationsContact.email}
                  onChange={(e) => setOperationsContact({...operationsContact, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pt-2">
                <p className="text-xs text-gray-600">Handles facility issues and fit-out coordination.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Contacts Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Secondary / Alternate Contacts (Escalation Path)</h2>
            <button 
              onClick={() => setShowAddContact(!showAddContact)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center gap-2"
            >
              <span>⊕</span> Add Contact
            </button>
          </div>

          {/* Add Contact Form */}
          {showAddContact && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-sm font-semibold mb-4">Add New Contact</h3>
              <div className="grid grid-cols-5 gap-3">
                <input
                  type="text"
                  placeholder="Contact Name"
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                  value={newContact.name}
                  onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Role"
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                  value={newContact.role}
                  onChange={(e) => setNewContact({...newContact, role: e.target.value})}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                  value={newContact.email}
                  onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Mobile"
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                  value={newContact.mobile}
                  onChange={(e) => setNewContact({...newContact, mobile: e.target.value})}
                />
                <select
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                  value={newContact.escalation}
                  onChange={(e) => setNewContact({...newContact, escalation: e.target.value})}
                >
                  <option>L1</option>
                  <option>L2</option>
                  <option>L3</option>
                </select>
              </div>
              <div className="flex gap-2 mt-3">
                <button 
                  onClick={handleAddContact}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
                >
                  Add
                </button>
                <button 
                  onClick={() => setShowAddContact(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Contacts Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Contact Name</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Role</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Email</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Mobile</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Escalation Level</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Active</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">{contact.name}</td>
                    <td className="py-3 px-4 text-sm">{contact.role}</td>
                    <td className="py-3 px-4 text-sm text-blue-600">{contact.email}</td>
                    <td className="py-3 px-4 text-sm">{contact.mobile}</td>
                    <td className="py-3 px-4 text-sm">{contact.escalation}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => toggleContact(contact.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          contact.active ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            contact.active ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Communication Preferences */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-2">Communication Preferences</h2>
          <p className="text-sm text-gray-600 mb-4">Select how this tenant prefers to receive notifications and reminders.</p>
          
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.email}
                onChange={() => handlePreferenceChange('email')}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm">Email</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.sms}
                onChange={() => handlePreferenceChange('sms')}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm">SMS</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.tenantPortal}
                onChange={() => handlePreferenceChange('tenantPortal')}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm">Tenant Portal</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.whatsApp}
                onChange={() => handlePreferenceChange('whatsApp')}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm">WhatsApp</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button 
            onClick={handleSaveChanges}
            className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}