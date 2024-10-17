// src/components/home/FeaturedProjects/FeaturedProjects.tsx
import React from 'react';

interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    location: string;
}

const projects: Project[] = [
    {
        id: '1',
        title: 'Khu vườn Nhật Bản',
        image: '/images/japanese-garden-project.jpg',
        description: 'Dự án hồ Koi kết hợp với khu vườn Nhật Bản truyền thống.',
        location: 'Quận 2, TP.HCM'
    },
    {
        id: '2',
        title: 'Hồ Koi Resort',
        image: '/images/resort-koi-pond.jpg',
        description: 'Hệ thống hồ Koi lớn cho khu nghỉ dưỡng cao cấp.',
        location: 'Đà Lạt, Lâm Đồng'
    },
    {
        id: '3',
        title: 'Hồ Koi Biệt Thự',
        image: '/images/villa-koi-pond.jpg',
        description: 'Thiết kế và thi công hồ Koi cho biệt thự hiện đại.',
        location: 'Quận 9, TP.HCM'
    }
];

const FeaturedProjects: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Dự Án Tiêu Biểu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-2">{project.description}</p>
                                <p className="text-sm text-gray-500">Địa điểm: {project.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;