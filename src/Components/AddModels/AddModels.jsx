import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const AddModels = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddModel = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const framework = form.framework.value;
    const useCase = form.useCase.value;
    const dataset = form.dataset.value;
    const description = form.description.value;
    const image = form.image.value;

    const newModel = {
      name,
      framework,
      useCase,
      dataset,
      description,
      image,
      createdBy: user?.email,
      createdAt: new Date(),
      purchased: 0,
    };

    try {
      const res = await fetch("http://localhost:5000/models", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newModel),
      });

      if (!res.ok) throw new Error("Failed to add model");

      toast.success("Model added successfully!");
      navigate("/models");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Add New AI Model</h2>

        <form onSubmit={handleAddModel} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Model Name"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="text"
            name="framework"
            placeholder="Framework (e.g., PyTorch, TensorFlow)"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="text"
            name="useCase"
            placeholder="Use Case (e.g., NLP, Image Recognition)"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="text"
            name="dataset"
            placeholder="Dataset (e.g., ImageNet, LibriSpeech)"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <textarea
            name="description"
            placeholder="Model Description"
            required
            className="w-full px-4 py-2 border rounded"
            rows="4"
          ></textarea>

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            required
            className="w-full px-4 py-2 border rounded"
          />

          {/* <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add Model
          </button> */}
          <input className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition" type="submit" value="Add model" />

        </form>
      </div>
    </div>
  );
};

export default AddModels;
