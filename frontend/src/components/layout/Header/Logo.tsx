import React from 'react';
import { FaWater } from 'react-icons/fa';

const Logo: React.FC = () => {
    return (
        <div className="flex items-center space-x-2">
            <div className="relative">
                <FaWater className="text-3xl text-blue-600" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
                    魚
                </div>
            </div>
            <span className="text-xl font-bold text-gray-800">Koi Pond Co.</span>
        </div>
    );
};

export default Logo;