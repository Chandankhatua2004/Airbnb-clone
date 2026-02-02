import React from 'react';

const FooterColumn = ({ title, links }) => {
    return (
        <div className="flex flex-col">
            <h3 className="text-sm font-medium mb-4 text-[#222222] cursor-pointer">{title}</h3>
            <ul className="list-none p-0 m-0 space-y-3">
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href="#"
                            className="text-[#222222] text-sm font-normal cursor-pointer underline decoration-transparent underline-offset-2 transition-colors duration-300 hover:decoration-[#222222]"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;
