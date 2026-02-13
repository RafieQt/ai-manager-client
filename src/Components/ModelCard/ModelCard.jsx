import React from 'react';
import { Link } from 'react-router';

const ModelCard = ({ model }) => {
    const { _id, name, framework, useCase, image, description } = model;

    return (
        <div className="card w-100  bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col h-90">
            {/* 1. Image (Uniform size requirement) */}
            <figure className="px-4 pt-4">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl h-55 w-full object-cover"
                />
            </figure>

            <div className="card-body flex flex-col grow p-5 text-left">
                {/* 2. Model Name */}
                <h2 className="card-title text-xl font-bold text-primary">
                    {name}
                </h2>

                {/* 3. Framework and Use Case Badges */}
                <div className="flex gap-2 my-2">
                    <div className="badge badge-outline badge-info font-medium">
                        {framework}
                    </div>
                    <div className="badge badge-outline badge-secondary font-medium text-xs">
                        {useCase}
                    </div>
                </div>

                {/* 4. Brief Description */}
                <p className="text-gray-600 text-sm line-clamp-3 grow">
                    {description}
                </p>

                {/* 5. View Details Button */}
                <div className="card-actions justify-end mt-4">
                    <Link
                        to={`/models/${_id}`}
                        className="btn btn-primary btn-sm normal-case"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;