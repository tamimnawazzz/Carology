import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

const sampleProfile = {
  name: "Sarah Kim",
  licenseNumber: "D1234567",
  vehicleType: "Toyota Prius",
  contact: "sarah.kim@email.com"
};

const DriverDashboard = () => {
    const navigate = useNavigate();
    const [availableJobs, setAvailableJobs] = useState([]);
    const [myApplications, setMyApplications] = useState([]);
    const [cart, setCart] = useState([]);
    const [marketplaceItems, setMarketplaceItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAvailable, setIsAvailable] = useState(true);
    const [error, setError] = useState(null);
    const [driverInfo, setDriverInfo] = useState(sampleProfile);

    useEffect(() => {
        // Try to get driver info from localStorage (simulate real login info)
        const stored = localStorage.getItem('driverInfo');
        if (stored) {
            try {
                setDriverInfo(JSON.parse(stored));
            } catch {
                setDriverInfo(sampleProfile);
            }
        } else {
            setDriverInfo(sampleProfile);
        }
    }, []);

    // useEffect(() => {
    //     fetchAllData();
    // }, []);

    // const fetchAllData = async () => {
    //     setLoading(true);
    //     setError(null);
    //     try {
    //         const [jobsRes, appsRes, cartRes, marketRes, availRes] = await Promise.all([
    //             axios.get('http://localhost:3000/api/jobs/available', { withCredentials: true }),
    //             axios.get('http://localhost:3000/api/jobs/my-applications', { withCredentials: true }),
    //             axios.get('http://localhost:3000/api/cart', { withCredentials: true }),
    //             axios.get('http://localhost:3000/api/marketplace', { withCredentials: true }),
    //             axios.get('http://localhost:3000/api/driver/availability', { withCredentials: true })
    //         ]);
    //         setAvailableJobs(jobsRes.data.jobs || []);
    //         setMyApplications(appsRes.data.applications || []);
    //         setCart(cartRes.data.items || []);
    //         setMarketplaceItems(marketRes.data.items || []);
    //         setIsAvailable(availRes.data.isAvailable);
    //         setLoading(false);
    //     } catch (err) {
    //         setLoading(false);
    //         setError(err);
    //         console.error('Fetch error:', err);
    //         toast.error('Failed to fetch data: ' + (err?.response?.data?.message || err.message));
    //     }
    // };

    const handleApplyJob = async (jobId) => {
        try {
            // await axios.post(`http://localhost:3000/api/jobs/${jobId}/apply`, {}, { withCredentials: true });
            // toast.success('Application submitted successfully');
            // fetchAllData();
        } catch (err) {
            console.error('Apply job error:', err);
            // toast.error('Failed to apply for job: ' + (err?.response?.data?.message || err.message));
        }
    };

    const handleToggleAvailability = async () => {
        try {
            // await axios.post('http://localhost:3000/api/driver/toggle-availability', {
            //     isAvailable: !isAvailable
            // }, { withCredentials: true });
            setIsAvailable(!isAvailable);
            // toast.success(`You are now ${!isAvailable ? 'available' : 'not available'}`);
        } catch (err) {
            console.error('Toggle availability error:', err);
            // toast.error('Failed to update availability: ' + (err?.response?.data?.message || err.message));
        }
    };

    const handleAddToCart = async (itemId) => {
        try {
            // await axios.post('http://localhost:3000/api/cart/add', { itemId }, { withCredentials: true });
            // toast.success('Item added to cart');
            // fetchAllData();
        } catch (err) {
            console.error('Add to cart error:', err);
            // toast.error('Failed to add item to cart: ' + (err?.response?.data?.message || err.message));
        }
    };

    const handleLogout = () => {
        // You may want to call your logout API here
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 bg-white border-b">
                <h1 className="text-3xl font-bold">Driver Dashboard</h1>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/driver/profile')}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 font-medium"
                    >
                        Profile
                    </button>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-medium"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Jobs Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Job Listings</h2>
                        <p className="mb-4 text-gray-600">Browse and apply for available jobs.</p>
                        <button
                            onClick={handleToggleAvailability}
                            className={`w-full mb-2 py-2 rounded font-semibold ${isAvailable ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}
                        >
                            {isAvailable ? 'Available for Jobs' : 'Not Available'}
                        </button>
                        <button
                            onClick={() => navigate('/driver/jobs')}
                            className="w-full mb-2 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                            View Jobs
                        </button>
                    </div>
                </div>

                {/* Applications Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Applications</h2>
                        <p className="mb-4 text-gray-600">Review your job applications.</p>
                        <button
                            onClick={() => navigate('/driver/applications')}
                            className="w-full py-2 rounded bg-green-600 hover:bg-green-700 text-white font-semibold"
                        >
                            View Applications ({myApplications.length})
                        </button>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Profile</h2>
                        <p className="mb-4 text-gray-600">Manage your profile settings</p>
                        <div className="mb-2"><strong>Name:</strong> {driverInfo.name}</div>
                        <div className="mb-2"><strong>License:</strong> {driverInfo.licenseNumber}</div>
                        <div className="mb-2"><strong>Vehicle:</strong> {driverInfo.vehicleType}</div>
                        <div className="mb-2"><strong>Contact:</strong> {driverInfo.contact}</div>
                        <button
                            onClick={() => navigate('/driver/profile')}
                            className="w-full py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Cart Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
                        <p className="mb-4 text-gray-600">View your cart items</p>
                        <button
                            onClick={() => navigate('/driver/cart')}
                            className="w-full py-2 rounded bg-amber-700 hover:bg-amber-800 text-white font-semibold"
                        >
                            View Cart ({cart.length} items)
                        </button>
                    </div>
                </div>

                {/* Marketplace Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Marketplace</h2>
                        <p className="mb-4 text-gray-600">Buy and sell items</p>
                        <button
                            onClick={() => navigate('/driver/marketplace')}
                            className="w-full py-2 rounded bg-green-600 hover:bg-green-700 text-white font-semibold mb-2"
                        >
                            Browse Marketplace
                        </button>
                        <button
                            onClick={() => navigate('/driver/sell-items')}
                            className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                            Sell Items
                        </button>
                    </div>
                </div>
            </div>
            {error && (
                <div className="max-w-2xl mx-auto mt-4 p-4 bg-red-100 text-red-700 rounded">
                    <strong>Error:</strong> {error?.response?.data?.message || error.message}
                </div>
            )}
        </div>
    );
};

export default DriverDashboard; 