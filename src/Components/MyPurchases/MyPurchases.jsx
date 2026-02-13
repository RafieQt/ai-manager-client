import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../context/AuthContext";
import ModelCard from "../ModelCard/ModelCard";

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

  if (loading) return <div>Loading your purchases...</div>;
  if (purchases.length === 0) return <div>You have no purchases yet.</div>;

  return (
    <div className="p-4">
      <h2 className="text-3xl text-center pt-3 font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 pb-3">My Purchases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-7xl mx-auto gap-4">
        {purchases.map((purchase) => {
          const modelData = {
            _id: purchase.modelId,
            name: purchase.modelName,
            framework: purchase.framework,
            useCase: purchase.useCase,
            image: purchase.image,
            description: purchase.description || "No description available",
          };
          return <ModelCard key={purchase._id} model={modelData} />;
        })}
      </div>
    </div>
  );
};

export default MyPurchases;
