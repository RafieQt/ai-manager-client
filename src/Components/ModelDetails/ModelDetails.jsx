import React, { use, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const ModelDetails = () => {
    const modelData = useLoaderData();
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const [model, setModel] = useState(modelData);

    const {
        _id,
        name,
        framework,
        useCase,
        dataset,
        description,
        image,
        createdBy,
        purchased
    } = model;

    
    const handlePurchase = async () => {
        if (!user) {
            toast("Please login first");
            return;
        }

        const purchaseInfo = {
            modelId: _id,
            modelName: name,
            framework,
            useCase,
            image,
            createdBy,
            purchasedBy: user.email,
            purchasedAt: new Date()
        };
        console.log("Purchasing:", purchaseInfo);

        const res = await fetch("https://ai-manager-server-dun.vercel.app/purchase", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purchaseInfo)
        });

        const data = await res.json();

        if (data.success) {
            
            setModel(prev => ({
                ...prev,
                purchased: prev.purchased + 1
            }));

            toast("Model Purchased Successfully!");
        }
    };

    
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure?");
        if (!confirmDelete) return;

        await fetch(`https://ai-manager-server-dun.vercel.app/models/${_id}`, {
            method: "DELETE"
        });

        navigate("/");
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="card bg-base-100 shadow-xl">

                <figure>
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-96 object-cover"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="text-3xl font-bold">{name}</h2>

                    <div className="flex gap-3 my-3">
                        <div className="badge badge-info">{framework}</div>
                        <div className="badge badge-secondary">{useCase}</div>
                        <div className="badge badge-outline">{dataset}</div>
                    </div>

                    <p className="text-gray-600">{description}</p>

                    <p className="font-semibold mt-4">
                        Purchased {purchased} times
                    </p>

                    
                    <button
                        onClick={handlePurchase}
                        className="btn btn-primary mt-4"
                    >
                        Purchase Model
                    </button>

                    
                    {user?.email === createdBy && (
                        <div className="flex gap-3 mt-4">
                            <button className="btn btn-warning">
                                Edit
                            </button>

                            <button
                                onClick={handleDelete}
                                className="btn btn-error"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModelDetails;
