import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ElementOrganisation } from './screens/ElementOrganisation/ElementOrganisation';
import { ElementDashboard } from './screens/ElementDashboard/ElementDashboard';
import { ElementReports } from './screens/ElementReports/ElementReports';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
            <li><Link to="/organisation" className="hover:text-gray-300">Organisation</Link></li>
            <li><Link to="/reports" className="hover:text-gray-300">Reports</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<ElementDashboard />} />
          <Route path="/organisation" element={<ElementOrganisation />} />
          <Route path="/reports" element={<ElementReports />} />
          <Route path="/" element={<ElementDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
