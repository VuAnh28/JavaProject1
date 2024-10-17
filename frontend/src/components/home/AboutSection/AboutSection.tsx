import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">Về Chúng Tôi</h2>
                    <p className="mb-4">
                        Koi Pond Co. là đơn vị hàng đầu trong lĩnh vực thiết kế và thi công hồ cá Koi tại Việt Nam.
                        Với hơn 10 năm kinh nghiệm, chúng tôi tự hào mang đến những công trình hồ cá Koi đẳng cấp,
                        kết hợp giữa nghệ thuật truyền thống và công nghệ hiện đại.
                    </p>
                    <p className="mb-4">
                        Sứ mệnh của chúng tôi là tạo ra những không gian sống hài hòa, nơi con người có thể tận hưởng
                        vẻ đẹp của thiên nhiên ngay trong chính ngôi nhà của mình. Mỗi dự án của Koi Pond Co. đều được
                        thiết kế riêng biệt, phản ánh cá tính và phong cách sống của chủ nhân.
                    </p>
                    <p>
                        Với đội ngũ chuyên gia giàu kinh nghiệm và tâm huyết, chúng tôi cam kết mang đến cho khách hàng
                        những sản phẩm chất lượng cao nhất, đảm bảo tính thẩm mỹ và độ bền vững lâu dài.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;