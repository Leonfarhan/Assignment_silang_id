import { useState, useEffect } from 'react';

import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import Login from './components/Login';
import axiosInstance from './utils/axiosInstance.js';

import './index.css'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const fetchUsers = async () => {
    if (!authToken) return;

    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get('/users');
      setUsers(Array.isArray(response.data) ? response.data : response.data.data || []);
    } catch (err) {
      if (err.response && err.response.status !== 401) {
        setError('Gagal memuat data pengguna.');
        console.error(err);
      }
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authToken) {
      fetchUsers();
    } else {
      setUsers([]);
    }
  }, [authToken]);

  const handleUserAdded = (newUser) => {
    fetchUsers();
  };

  const handleLoginSuccess = (token) => {
    setAuthToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
    setUsers([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl w-full mx-auto">
        {authToken ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-end mb-6">
              <button
                onClick={handleLogout}
                className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
            <AddUserForm onUserAdded={handleUserAdded} />
            <UserList users={users} loading={loading} error={error} />
          </div>
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </div>
  )
}

export default App
