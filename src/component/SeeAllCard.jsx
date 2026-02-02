import React from 'react';

/**
 * SeeAllCard Component
 * Displays a styled "See all" card with a collage of property images.
 * Features an interactive hover/active animation (fanning out cards).
 * 
 * @param {Object} props
 * @param {Object[]} props.items - Array of items to preview images from.
 */
const SeeAllCard = ({ items }) => {
    // Get first 3 images for the collage, ensuring we have data
    const previewImages = items ? items.slice(0, 3).map(item => item.image) : [];

    return (
        <div className="min-w-[160px] w-[160px] md:min-w-[200px] md:w-[200px] cursor-pointer group snap-start flex flex-col">
            <div className="relative aspect-[20/19] rounded-xl border border-gray-200 bg-white p-4 flex flex-col items-center justify-center mb-3 shadow-sm hover:shadow-lg active:shadow-md hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-out">

                {/* Image Stack Container */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 mb-3 md:mb-4">

                    {/* Back Left Image (Rotated Left) */}
                    {previewImages[1] && (
                        <div className="absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24 rotate-[-6deg] rounded-lg overflow-hidden shadow-sm border-2 border-white z-0 transform translate-y-2 -translate-x-2 
                        group-hover:rotate-[-12deg] group-hover:-translate-x-3 md:group-hover:-translate-x-4 
                        group-active:-rotate-12 group-active:-translate-x-3 md:group-active:-translate-x-4 
                        transition-transform duration-500 ease-out">
                            <img src={previewImages[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                    )}

                    {/* Back Right Image (Rotated Right) */}
                    {previewImages[2] && (
                        <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 rotate-[6deg] rounded-lg overflow-hidden shadow-sm border-2 border-white z-0 transform translate-y-2 translate-x-2 
                        group-hover:rotate-[12deg] group-hover:translate-x-3 md:group-hover:translate-x-4 
                        group-active:rotate-12 group-active:translate-x-3 md:group-active:translate-x-4 
                        transition-transform duration-500 ease-out">
                            <img src={previewImages[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                    )}

                    {/* Front Center Image (Main) */}
                    {previewImages[0] && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-md border-2 border-white z-10 
                        group-hover:scale-110 group-active:scale-110 
                        transition-transform duration-300 ease-out">
                            <img src={previewImages[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                    )}
                </div>

                <span className="text-xs md:text-sm font-medium text-gray-900">See all</span>
            </div>
            {/* Placeholder for alignment with PropertyCard text content */}
            <div className="mt-2 opacity-0" aria-hidden="true">Placeholder</div>
        </div>
    );
};

export default SeeAllCard;
