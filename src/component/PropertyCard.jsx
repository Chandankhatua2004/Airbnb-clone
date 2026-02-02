import React from 'react';
import { Heart, Star } from 'lucide-react';

/**
 * PropertyCard Component
 * Displays a single property with image, title, rating, and price.
 * optimized for responsiveness (mobile/desktop sizes).
 * 
 * @param {Object} props
 * @param {Object} props.item - Property data object containing image, title, rating, price, etc.
 */
const PropertyCard = ({ item }) => {
    return (
        <div className="min-w-[160px] w-[160px] md:min-w-[200px] md:w-[200px] cursor-pointer group snap-start">
            {/* Image Container */}
            <div className="relative aspect-[20/19] rounded-xl overflow-hidden mb-3">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-300"
                    loading="lazy"
                />

                {/* Guest Favourite Badge */}
                {item.isGuestFavourite && (
                    <div className="absolute top-2 left-2 bg-white/95 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full shadow-sm z-10">
                        <span className="text-[9px] md:text-[10px] font-bold text-black">Guest favourite</span>
                    </div>
                )}

                {/* Heart Icon (Wishlist) */}
                <button
                    className="absolute top-2 right-2 md:top-3 md:right-3 text-white hover:scale-110 active:scale-95 transition-transform z-10 focus:outline-none"
                    aria-label="Add to wishlist"
                >
                    <Heart size={20} className="fill-[#00000080] stroke-white md:w-6 md:h-6" strokeWidth={2} />
                </button>
            </div>

            {/* Content Container */}
            <div className="mt-2">
                <h3 className="font-semibold text-gray-900 text-[12px] md:text-[13px] leading-tight truncate">
                    {item.title}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-[11px] md:text-[12px] mt-0.5">
                    <span className="truncate">{item.price}</span>
                    <span className="shrink-0" aria-hidden="true">•</span>
                    <div className="flex items-center gap-0.5 shrink-0">
                        <Star size={12} className="fill-current text-gray-500" />
                        <span>{item.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
