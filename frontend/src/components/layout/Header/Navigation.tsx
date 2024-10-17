// import React from 'react';
// import {Link} from 'react-router-dom';
//
// interface NavItem {
//     text: string;
//     url: string;
// }
//
// const Navigation: React.FC = () => {
//     const navItems: NavItem[] = [
//         {text: 'Trang chủ', url: '/'},
//         {text: 'Mẫu thiết kế', url: '/designs'},
//         {text: 'Blog', url: '/blog'},
//         {text: 'Liên hệ', url: '/contact'},
//     ];
//     return (
//         <nav>
//             <ul className="flex space-x-6">
//                 {navItems.map((item, index) => (
//                     <li key={index}>
//                         <Link
//                             to={item.url}
//                             className="text-white hover:text-blue-200 transition duration-150 ease-in-out"
//                         >
//                             {item.text}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// };
//
// export default Navigation;

import React from 'react';

const Navigation: React.FC = () => {
    const navItems = ['Trang chủ', 'Mẫu thiết kế', 'Dự án', 'Blog', 'Liên hệ'];

    return (
        <nav>
            <ul className="flex space-x-6">
                {navItems.map((item) => (
                    <li key={item}>
                        <a


                            href="#"
                            className="text-gray-600 hover:text-blue-600 transition duration-300"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;