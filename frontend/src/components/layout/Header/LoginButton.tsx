// import React from 'react';
//
// interface LoginButtonProps {
//     onClick: () => void;
// }
//
// const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => (
//     <button
//         onClick={onClick}
//         className="bg-colors-primary text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
//     >
//         Đăng nhập
//     </button>
// );
//
// export default LoginButton;

import React from 'react';
import { FaUser } from 'react-icons/fa';

const LoginButton: React.FC = () => {
    return (
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            <FaUser />
            <span>Đăng nhập</span>
        </button>
    );
};

export default LoginButton;