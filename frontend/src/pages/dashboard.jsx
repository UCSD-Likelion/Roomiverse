import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { fetchProfile } from "../api";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        console.log("Dashboard - Fetching profile...");

        const profileData = await fetchProfile();

        console.log("Dashboard - Profile Data:", profileData);
        setProfile(profileData);
      } catch (err) {
        console.error("Dashboard - Error fetching profile:", err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {loading ? (
        <p>Loading profile...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
