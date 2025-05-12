import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

const OwnerDashboard = () => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [applications, setApplications] = useState([]);
    const [cart, setCart] = useState([]);
    const [marketplaceItems, setMarketplaceItems] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetchAllData();
    // }, []);

    // const fetchAllData = async () => {
    //     setLoading(true);
    //     setError(null);
    //     try {
    //         const [jobsRes, appsRes, cartRes, marketRes, docsRes, reviewsRes] = await Promise.all([
    //             axios.get('http://localhost:3000/api/jobs/my-jobs', { withCredentials: true }),
    //             axios.get('http://localhost:3000/api/jobs/applications', { withCredentials: true }),
    //             axios.get('http://localhost:3000/api/cart', { withCredentials: true }),
    //             axios.get('http://localhost:3000/api/marketplace', { withCredentials: true }),
    //             axios.get('http://localhost:3000/api/owner/documents', { withCredentials: true }).catch(() => ({ data: { documents: [] } })),
    //             axios.get('http://localhost:3000/api/owner/reviews', { withCredentials: true }).catch(() => ({ data: { reviews: [] } })),
    //         ]);
    //         setJobs(jobsRes.data.jobs || []);
    //         setApplications(appsRes.data.applications || []);
    //         setCart(cartRes.data.items || []);
    //         setMarketplaceItems(marketRes.data.items || []);
    //         setDocuments(docsRes.data.documents || []);
    //         setReviews(reviewsRes.data.reviews || []);
    //         setLoading(false);
    //     } catch (err) {
    //         setLoading(false);
    //         setError(err);
    //         console.error('Fetch error:', err);
    //         toast.error('Failed to fetch data: ' + (err?.response?.data?.message || err.message));
    //     }
    // };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 bg-white border-b">
                <h1 className="text-3xl font-bold">Owner Dashboard</h1>
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate('/owner-profile')}
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
                {/* Job Posts Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Job Posts</h2>
                        <p className="mb-4 text-gray-600">Manage your job postings</p>
                        <button
                            onClick={() => navigate('/create-job')}
                            className="w-full mb-2 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                            Post New Job
                        </button>
                        <button
                            onClick={() => navigate('/owner/jobs')}
                            className="w-full py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold"
                        >
                            View Jobs
                        </button>
                    </div>
                </div>

                {/* Applications Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Applications</h2>
                        <p className="mb-4 text-gray-600">Review driver applications</p>
                        <button
                            onClick={() => navigate('/owner/applications')}
                            className="w-full py-2 rounded bg-green-600 hover:bg-green-700 text-white font-semibold"
                        >
                            View Applications
                        </button>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Profile</h2>
                        <p className="mb-4 text-gray-600">Manage your profile settings</p>
                        <button
                            onClick={() => navigate('/owner-profile')}
                            className="w-full py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Shopping Cart Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
                        <p className="mb-4 text-gray-600">View your cart items</p>
                        <button
                            onClick={() => navigate('/owner/cart')}
                            className="w-full py-2 rounded bg-amber-700 hover:bg-amber-800 text-white font-semibold"
                        >
                            View Cart
                        </button>
                    </div>
                </div>

                {/* Documents Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Documents</h2>
                        <p className="mb-4 text-gray-600">Manage your documents</p>
                        <button
                            onClick={() => navigate('/owner/documents')}
                            className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                            View Documents
                        </button>
                    </div>
                </div>

                {/* Marketplace Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Marketplace</h2>
                        <p className="mb-4 text-gray-600">Buy and sell items</p>
                        <button
                            onClick={() => navigate('/owner/marketplace')}
                            className="w-full py-2 rounded bg-green-600 hover:bg-green-700 text-white font-semibold mb-2"
                        >
                            Browse Marketplace
                        </button>
                        <button
                            onClick={() => navigate('/owner/sell-items')}
                            className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                            Sell Items
                        </button>
                    </div>
                </div>

                {/* Driver Reviews Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Driver Reviews</h2>
                        <p className="mb-4 text-gray-600">Manage driver reviews</p>
                        <button
                            onClick={() => navigate('/owner/reviews')}
                            className="w-full py-2 rounded bg-amber-700 hover:bg-amber-800 text-white font-semibold"
                        >
                            View Reviews
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

export default OwnerDashboard; 