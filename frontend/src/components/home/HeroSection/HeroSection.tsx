import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-background text-black py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Thiết Kế Hồ Cá Koi Đẳng Cấp
                    </h1>
                    <p className="text-xl mb-8 text-secondary">
                        Chúng tôi mang đến không gian sống đẳng cấp với hồ cá Koi độc đáo và tinh tế.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300"
                    >
                        Liên Hệ Ngay
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;