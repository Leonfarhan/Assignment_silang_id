function UserList({ users, loading, error }) {
  if (loading) return <p className="text-center text-gray-500 py-4">Loading...</p>;
  if (error) return <p className="text-center text-red-600 py-4">{error}</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">List users</h2>
      {users.length === 0 ? (
        <p className="text-center text-gray-500 py-4">There are no users.</p>
      ) : (
        <ul className="space-y-2 p-4">
          {users.map((user) => (
            <li key={user.id} className="px-4 py-3 flex justify-between items-center rounded bg-gray-100">
              <span className="text-gray-800 font-medium">{user.name}</span>
              <span className="text-gray-600 text-sm">{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList; 