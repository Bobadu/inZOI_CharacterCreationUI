import React from 'react';
import { FaArrowLeft, FaHome, FaUser, FaBell, FaCog, FaHeart, FaSearch } from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <nav className="w-full p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#d2d5d7]">
            <FaArrowLeft size={14} />
          </div>
          <span className="ml-5 text-[#d2d5d7] text-xl font-medium">Wróć</span>
          <div className="mx-5 h-5 border-[1.5px] border-gray-400"></div>
          <span className="text-[#d2d5d7] text-xl">Utwórz Zoi</span>
        </div>

        <div 
          className="flex items-center justify-center px-2 py-[6.5px] rounded-full border-4 border-[#ffffff10]" 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.15)', 
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)'
          }}
        >
          <FaHome size={16} className="text-[#d2d5d7] mx-2 relative z-10" />
          <FaUser size={16} className="text-[#d2d5d7] mx-2 relative z-10" />
          <FaBell size={16} className="text-[#d2d5d7] mx-2 relative z-10" />
          <FaSearch size={16} className="text-[#d2d5d7] mx-2 relative z-10" />
          <FaCog size={16} className="text-[#d2d5d7] mx-2 relative z-10" />
          <FaHeart size={16} className="text-[#d2d5d7] mx-2 relative z-10" />
        </div>

        <div className="w-40"></div> {/* Pusty div dla balansu */}
      </div>
    </nav>
  );
};

export default NavBar;