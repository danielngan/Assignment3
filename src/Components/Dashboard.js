import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (err) {
                console.error("Failed to parse user data:", err);
            }
        } else {
            console.warn("No user data in localStorage");
        }
    }, []);

    if (!user) return <p>Loading user info...</p>;

    return (
        <div className="dashboard">
            <h2>Welcome, {user.firstName}!</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
        </div>
    );
};

export default Dashboard;
