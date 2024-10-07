import React from 'react';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const SocialLinks: React.FC = () => {
    // !TODO: Thay thế các đường dẫn mạng xã hội của dự án vào đây
    const socialLinks = [
        {icon: FaFacebookF, url: 'https://facebook.com'},
        {icon: FaTwitter, url: 'https://twitter.com'},
        {icon: FaInstagram, url: 'https://instagram.com'},
        {icon: FaLinkedinIn, url: 'https://linkedin.com'},
    ];

    return (
        <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                    <link.icon className="w-5 h-5"/>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;