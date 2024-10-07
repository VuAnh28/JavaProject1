
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Tìm kiếm..."
                className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
    );
};

export default SearchBar;