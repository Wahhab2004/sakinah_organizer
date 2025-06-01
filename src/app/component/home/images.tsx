import React from 'react';
import Image from 'next/image';

const PhotoCollage: React.FC = () => {
  const photos = [
    { src: 'https://i.pinimg.com/736x/37/e8/df/37e8dfcd95bf72a1a48f5a0cc53dc90e.jpg', alt: 'Wedding 1', width: 200, height: 300 },
    { src: 'https://i.pinimg.com/736x/f8/d1/a1/f8d1a16181ade1eeaf7b12e8b701581b.jpg', alt: 'Wedding 2', width: 300, height: 400 },
    { src: 'https://i.pinimg.com/736x/67/43/f3/6743f3bab0c5108e35d32d4775977ea0.jpg', alt: 'Wedding 3', width: 150, height: 150 },
    { src: 'https://i.pinimg.com/736x/74/7a/be/747abe3e2a19cbcae608e5754172cf46.jpg', alt: 'Wedding 4', width: 200, height: 200 },
    { src: 'https://i.pinimg.com/736x/72/bd/65/72bd655fbc2cac226074c825f7236053.jpg', alt: 'Wedding 5', width: 250, height: 150 },
    { src: 'http://i.pinimg.com/736x/4a/53/72/4a5372c933101f600e3935edd9847278.jpg', alt: 'Wedding 6', width: 150, height: 200 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6B664E] via-[#F8F0CC] to-[#6B664E] animate-gradient flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
              <p className="text-white text-sm font-semibold">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCollage;