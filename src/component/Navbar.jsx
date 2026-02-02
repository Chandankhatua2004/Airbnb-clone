import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import airbnbLogo from '../assets/Airbnb.png';
import homeIcon from '../assets/icon-house-3d.png';
import experiencesIcon from '../assets/icon-balloon-3d.png';
import servicesIcon from '../assets/icon-bell-3d.png';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Homes');
    const [isScrolled, setIsScrolled] = useState(false);
    const [clickedTab, setClickedTab] = useState(null);

    // --- Effects ---
    // Handle scroll to toggle navbar styles (fixed/sticky behavior)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- Handlers ---
    // Handle switching tabs and triggering transient click animation
    const handleTabClick = (name) => {
        setActiveTab(name);
        setClickedTab(name);
        // Reset click state after 1s (duration of the pulse animation)
        setTimeout(() => setClickedTab(null), 1000);
    };

    // --- Configuration ---
    const tabs = [
        { name: 'Homes', icon: homeIcon, delay: '0s' },
        { name: 'Experiences', icon: experiencesIcon, badge: 'NEW', delay: '0.1s' },
        { name: 'Services', icon: servicesIcon, badge: 'NEW', delay: '0.2s' },
    ];

    return (
        <div className="w-full border-b border-gray-200 pb-2 md:pb-6 bg-white fixed top-0 left-0 right-0 z-50">
            <div className="hidden sm:flex items-center justify-between h-24 px-4 md:px-8 lg:px-20">

                {/* --- Logo Section --- */}
                <div className="flex-shrink-0 flex items-center">
                    <a
                        href="/"
                        aria-label="Airbnb homepage"
                        className="outline-none focus:outline-none border-none ring-0 focus:ring-0 bg-transparent cursor-pointer"
                        style={{ outline: 'none', border: 'none', boxShadow: 'none', background: 'transparent', WebkitTapHighlightColor: 'transparent' }}
                    >
                        <img
                            src={airbnbLogo}
                            alt="Airbnb"
                            className="h-20 md:h-24 w-auto object-contain outline-none border-none shadow-none ring-0"
                            style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                        />
                    </a>
                </div>

                {/* --- Desktop Navigation Tabs --- */}
                {/* Shows icons and text. Hidden when page is scrolled. */}
                {!isScrolled && (
                    <nav className="flex-1 flex items-center justify-center gap-2 sm:gap-4 md:gap-8 transition-opacity duration-300 min-w-0">
                        {tabs.map((tab) => (
                            <div key={tab.name} className="flex flex-col items-center group cursor-pointer" onClick={() => handleTabClick(tab.name)}>

                                <button
                                    className={`relative flex flex-col items-center justify-center px-2 py-3 rounded-full hover:bg-transparent transition-all duration-300 outline-none focus:outline-none cursor-pointer
                                    ${activeTab === tab.name
                                            ? 'opacity-100 font-semibold text-black' // Active Style
                                            : 'opacity-60 text-gray-500' // Inactive Style
                                        }
                                `}
                                >
                                    <div className="flex items-center gap-1 md:gap-1 relative">

                                        {/* Icon Wrapper (Handles Floating Animation) */}
                                        <div className={`relative flex justify-center items-center 
                                            ${(tab.name === 'Homes' && clickedTab === 'Homes') || (tab.name === 'Experiences' && activeTab === 'Experiences')
                                                ? 'animate-float-continuous'
                                                : ''}
                                        `}>
                                            {/* Icon Image (Handles Rotation/Pulse Animation) */}
                                            <div
                                                className={`relative transition-transform duration-300 group-hover:scale-105
                                                ${tab.name === 'Homes'
                                                        ? (clickedTab === 'Homes' ? 'animate-spin-active' : 'animate-3d-entrance-static')
                                                        : (tab.name === 'Experiences' && clickedTab === 'Experiences'
                                                            ? 'animate-pulse-bright' // Transient Pulse on Click
                                                            : 'animate-3d-entrance') // Default Entrance
                                                    }
                                                ${clickedTab === tab.name ? 'animate-in-out' : ''}
                                            `}
                                                style={{ animationDelay: tab.delay }}
                                            >
                                                <img src={tab.icon} alt={tab.name} className="h-9 md:h-12 w-auto object-contain shrink-0" />
                                            </div>

                                            {/* Notification Badge */}
                                            {tab.badge && (
                                                <span className="absolute -top-1 -right-2 bg-[#1b3d5c] text-white text-[9px] font-bold px-1.5 rounded-[4px] shadow-sm z-10 tracking-wider animate-fade-in-delayed">
                                                    {tab.badge}
                                                </span>
                                            )}
                                        </div>

                                        <span className={`text-sm md:text-base ${activeTab === tab.name ? 'font-bold text-black' : 'text-gray-600'} whitespace-nowrap`}>
                                            {tab.name}
                                        </span>

                                        {/* Active Tab Underline (Auto-fits content) */}
                                        {activeTab === tab.name && (
                                            <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-black opacity-80"></div>
                                        )}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </nav>
                )}

                {/* --- User Menu --- */}
                <div className="flex-shrink-0">
                    <UserMenu />
                </div>

            </div>

            {/* --- Search Bar --- */}
            <div className={`flex justify-center w-full transition-all duration-300 ${isScrolled ? 'absolute top-0 left-0 right-0 h-24 items-center z-10 pointer-events-none' : 'mt-2'}`}>
                <SearchBar isScrolled={isScrolled} icon={tabs.find(t => t.name === activeTab)?.icon || homeIcon} />
            </div>

            {/* --- Mobile Navigation --- */}
            <div className="flex sm:hidden items-center justify-around px-4 mt-6 pb-2">
                {tabs.map((tab) => (
                    <div
                        key={tab.name}
                        className="flex flex-col items-center gap-2 cursor-pointer group transition-opacity"
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {/* Icon Wrapper (Handles Floating Animation) - Same logic as desktop */}
                        <div className={`relative flex justify-center items-center 
                            ${(tab.name === 'Homes' && clickedTab === 'Homes') || (tab.name === 'Experiences' && activeTab === 'Experiences')
                                ? 'animate-float-continuous'
                                : ''}
                            ${activeTab === tab.name ? 'opacity-100 scale-105' : 'opacity-70'} transition-all duration-200
                        `}>
                            {/* Icon Image (Handles Rotation/Pulse Animation) - Same logic as desktop */}
                            <div
                                className={`relative transition-transform duration-300
                                ${tab.name === 'Homes'
                                        ? (clickedTab === 'Homes' ? 'animate-spin-active' : 'animate-3d-entrance-static')
                                        : (tab.name === 'Experiences' && clickedTab === 'Experiences'
                                            ? 'animate-pulse-bright' // Transient Pulse on Click
                                            : 'animate-3d-entrance') // Default Entrance
                                    }
                                ${clickedTab === tab.name ? 'animate-in-out' : ''}
                            `}
                                style={{ animationDelay: tab.delay }}
                            >
                                <img src={tab.icon} alt={tab.name} className="h-12 w-auto object-contain" />
                            </div>

                            {tab.badge && (
                                <span className="absolute -top-1 -right-2 bg-[#1b3d5c] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[4px] shadow-sm z-10 tracking-wider">
                                    {tab.badge}
                                </span>
                            )}
                        </div>
                        <span className={`text-xs font-medium ${activeTab === tab.name ? 'text-black' : 'text-gray-600'}`}>
                            {tab.name}
                        </span>
                        {activeTab === tab.name && (
                            <div className="w-full h-[2px] bg-black mt-1"></div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Navbar;
