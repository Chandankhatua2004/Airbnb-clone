import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import SeeAllCard from './SeeAllCard';
import { PROPERTIES_DATA } from '../data/mockData';

/**
 * PropertySection Component
 * Renders a horizontal scrolling section of properties with a title and navigation controls.
 * 
 * @param {Object} props
 * @param {string} props.title - Title of the section.
 * @param {Object[]} props.items - Array of property items to display.
 */
const PropertySection = ({ title, items }) => {
    const scrollContainerRef = useRef(null);

    /**
     * Handles horizontal scrolling of the property list.
     * @param {string} direction - 'left' or 'right'
     */
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 240; // Approx width of one card + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="py-6 border-b border-gray-100 last:border-0">
            <div className="max-w-[1720px] mx-auto px-8 lg:px-20">
                <div className="flex items-center justify-between mb-4">
                    {/* Interactive Heading with Hover Effect */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors">
                            {title}
                        </h2>
                        <ArrowRight
                            size={20}
                            className="text-gray-900 group-hover:translate-x-1 transition-transform duration-300"
                            strokeWidth={2.5}
                        />
                    </div>

                    {/* Desktop Arrow Navigation Buttons */}
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 bg-white shadow-sm disabled:opacity-50 cursor-pointer transition-colors"
                            aria-label="Scroll left"
                        >
                            <span className="text-sm">‹</span>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 bg-white shadow-sm cursor-pointer transition-colors"
                            aria-label="Scroll right"
                        >
                            <span className="text-sm">›</span>
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar scroll-smooth snap-x snap-mandatory"
                >
                    {items.map((item) => (
                        <PropertyCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                    {/* "See All" Card at the end of the list */}
                    <SeeAllCard count={items.length} items={items} />
                </div>
            </div>
        </div>
    );
};

/**
 * FeaturedProperties Component
 * Main container for displaying lists of featured properties categorized by location/type.
 * Uses data from ../data/mockData.js
 */
const FeaturedProperties = () => {
    return (
        <div className="bg-white">
            {PROPERTIES_DATA.map((section, index) => (
                <PropertySection
                    key={index}
                    title={section.title}
                    items={section.items}
                />
            ))}
        </div>
    );
};

export default FeaturedProperties;
