export default function AreaUsersList({users}) {
    console.log(users)
  return (
    <div className="card">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user) => (
          <tr key={user.id}>
            <td>
              <img src={user.avatar} width="40" height="40" style={{ borderRadius: "50%" }} alt={user.name + "'s Avatar"} />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                {user.role === "admin" ? (
                  <span className="badge bg-pink-500 text-white">{user.role}</span>
                ) : (
                  <span className="badge bg-green-500 text-white">{user.role}</span>
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}