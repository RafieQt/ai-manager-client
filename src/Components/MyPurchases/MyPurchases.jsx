import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../context/AuthContext";



const MyPurchases = () => {
    const { user } = use(AuthContext);
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        const fetchPurchases = async () => {
            try {
                const res = await fetch(`http://localhost:5000/purchases?email=${user.email}`);
                const data = await res.json();
                setPurchases(data);
            } catch (error) {
                console.error("Failed to fetch purchases:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPurchases();
    }, [user]);

    if (loading) {
        return <div>Loading your purchases...</div>;
    }

    if (purchases.length === 0) {
        return <div>You have no purchases yet.</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">My Purchases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {purchases.map((purchase) => (
                    <div
                        key={purchase._id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                    >
                        <h3 className="font-semibold text-lg">
                            {purchase.modelName || "Unnamed Model"}
                        </h3>
                        <p>Purchased on: {new Date(purchase.createdAt).toLocaleDateString()}</p>
                        <p>Price: ${purchase.price || "N/A"}</p>
                        <p>Seller: {purchase.seller || "Unknown"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPurchases;
