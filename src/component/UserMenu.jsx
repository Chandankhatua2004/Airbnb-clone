import { Globe, Menu } from 'lucide-react';

const UserMenu = () => {
    return (
        <div className="flex items-center justify-end h-full">
            <a href="#" className="hidden xl:block text-sm font-semibold text-gray-800 px-4 py-2 hover:bg-gray-100 rounded-full transition-colors whitespace-nowrap cursor-pointer">
                Become a host
            </a>

            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors mr-1 flex items-center justify-center cursor-pointer">
                <Globe size={20} className="text-gray-800" />
            </button>

            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors mr-1 flex items-center justify-center cursor-pointer">
                <Menu size={20} className="text-gray-600 ml-1" />

            </button>
        </div>
    );
};

export default UserMenu;
