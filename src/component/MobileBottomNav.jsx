import React from 'react';
import { Search, Heart, UserCircle } from 'lucide-react';

const MobileBottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around z-50 sm:hidden">
            {/* Explore (Active) */}
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer w-full h-full">
                <Search size={24} className="text-[#ff385c]" strokeWidth={2.5} />
                <span className="text-[10px] font-medium text-[#ff385c]">Explore</span>
            </div>

            {/* Wishlists */}
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer w-full h-full text-gray-500 hover:text-gray-900 transition-colors">
                <Heart size={24} strokeWidth={2} />
                <span className="text-[10px] font-medium">Wishlists</span>
            </div>

            {/* Log in */}
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer w-full h-full text-gray-500 hover:text-gray-900 transition-colors">
                <UserCircle size={24} strokeWidth={2} />
                <span className="text-[10px] font-medium">Log in</span>
            </div>
        </div>
    );
};

export default MobileBottomNav;
