import React from 'react';
import Container from '../../common/Container';
import Heading from '../../common/Typography/Heading';
import ProjectCard from './ProjectCard';

interface Project {
    id: string;
    title: string;
    imageUrl: string;
    location: string;
    completionDate: string;
}

const completedProjects: Project[] = [
    {
        id: '1',
        title: 'Khu vườn Nhật Bản',
        imageUrl: '/images/japanese-garden-project.jpg',
        location: 'Quận 2, TP.HCM',
        completionDate: 'Tháng 6, 2023'
    },
    {
        id: '2',
        title: 'Hồ Koi Resort',
        imageUrl: '/images/resort-koi-pond.jpg',
        location: 'Đà Lạt, Lâm Đồng',
        completionDate: 'Tháng 3, 2023'
    },
    {
        id: '3',
        title: 'Hồ Koi Biệt Thự',
        imageUrl: '/images/villa-koi-pond.jpg',
        location: 'Quận 9, TP.HCM',
        completionDate: 'Tháng 9, 2023'
    }
];

const CompletedProjects: React.FC = () => {
    return (
        <section className="py-16">
            <Container>
                <Heading level={2} className="text-center mb-12">
                    Dự Án Đã Hoàn Thành
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {completedProjects.map(project => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CompletedProjects;