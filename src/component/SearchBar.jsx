import React from 'react';
import { Search } from 'lucide-react';

/**
 * SearchBar Component
 * Renders the main search interface.
 * 
 * @param {Object} props
 * @param {boolean} props.isScrolled - Determines if the search bar is in "Pill" mode (scrolled) or "Expanded" mode (top).
 * @param {string} props.icon - The icon to display in the Pill mode (usually the active tab's icon).
 */
const SearchBar = ({ isScrolled, icon }) => {
    return (
        <>
            {/* --- Desktop Search Bar - Conditional Rendering --- */}
            {isScrolled ? (
                // MODE: Sticky Pill (Scrolled State)
                // A compact, clickable pill connecting to the core search entry points
                <div className="hidden sm:flex items-center justify-between bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-200 py-2.5 pl-4 pr-1 min-w-[300px] cursor-pointer animate-fadeIn pointer-events-auto">
                    <div className="flex items-center gap-4 text-sm font-semibold text-gray-800">
                        {/* Dynamic Icon from Active Tab */}
                        {icon && <img src={icon} alt="Home" className="w-9 h-9 object-contain" />}

                        <span>Anywhere</span>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <span>Anytime</span>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <span className="text-gray-500 font-normal">Add guests</span>
                    </div>

                    {/* Search Icon Button */}
                    <div className="bg-[#ff385c] text-white p-2.5 rounded-full flex items-center justify-center ml-4">
                        <Search size={14} strokeWidth={3} />
                    </div>
                </div>
            ) : (
                // MODE: Expanded Search (Default State)
                // Full search bar with inputs for 'Where', 'When', and 'Who'
                <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 pr-2 pl-0 max-w-[850px] w-full mx-auto mt-4 h-16 cursor-pointer animate-fadeIn">

                    {/* Section: Location (Where) */}
                    <div className="flex-1 h-full flex flex-col justify-center px-8 rounded-full hover:bg-[#EBEBEB] transition-colors relative group">
                        <label className="block text-xs font-bold text-gray-800">Where</label>
                        <input
                            type="text"
                            placeholder="Search destinations"
                            className="w-full text-sm text-gray-600 placeholder-gray-500 bg-transparent outline-none truncate"
                        />
                        {/* Vertical Divider */}
                        <div className="absolute right-0 top-3 bottom-3 w-px bg-gray-300 group-hover:hidden"></div>
                    </div>

                    {/* Section: Dates (When) */}
                    <div className="flex-1 h-full flex flex-col justify-center px-6 rounded-full hover:bg-[#EBEBEB] transition-colors relative group">
                        <label className="block text-xs font-bold text-gray-800">When</label>
                        <input
                            type="text"
                            placeholder="Add dates"
                            className="w-full text-sm text-gray-600 placeholder-gray-500 bg-transparent outline-none truncate"
                        />
                        <div className="absolute right-0 top-3 bottom-3 w-px bg-gray-300 group-hover:hidden"></div>
                    </div>

                    {/* Section: Guests/Service (Type) */}
                    <div className="flex-[1.2] h-full flex items-center rounded-full hover:bg-[#EBEBEB] transition-colors pl-6 pr-2">
                        <div className="flex-1 flex flex-col justify-center">
                            <label className="block text-xs font-bold text-gray-800">Type of service</label>
                            <input
                                type="text"
                                placeholder="Add service"
                                className="w-full text-sm text-gray-600 placeholder-gray-500 bg-transparent outline-none truncate"
                            />
                        </div>

                        {/* Search Submit Button */}
                        <div className="bg-[#ff385c] hover:bg-[#d93b58] text-white p-4 rounded-full transition-colors flex items-center justify-center ml-2 shadow-md">
                            <Search size={20} strokeWidth={3} />
                        </div>
                    </div>
                </div>
            )}

            {/* --- Mobile Search Bar --- */}
            {/* Simplified version for small screens */}
            <div className="flex sm:hidden items-center justify-center bg-white border border-gray-200 rounded-full shadow-md py-3 px-4 w-[90%] mx-auto mt-2 cursor-pointer relative z-10 transition-shadow hover:shadow-lg">
                <Search size={16} className="mr-3 text-black" strokeWidth={2.5} />
                <span className="text-sm font-semibold text-gray-900">Search for homes</span>
            </div>
        </>
    );
};

export default SearchBar;
