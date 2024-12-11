const Dashboard = ({ user }) => {
    return (
      <main>
        <h1>Welcome, {user.username}</h1>
        <p>
          This is the dashboard page where you, and only you, can see all of the meals and nutrients you've intaken.
        </p>
      </main>
    );
  };
  
  export default Dashboard;