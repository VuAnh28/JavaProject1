import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    id: string;
    title: string;
    imageUrl: string;
    location: string;
    completionDate: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, imageUrl, location, completionDate }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-1">Địa điểm: {location}</p>
                <p className="text-gray-600 mb-4">Hoàn thành: {completionDate}</p>
                <Link to={`/projects/${id}`} className="text-blue-600 hover:underline">
                    Xem chi tiết dự án
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;