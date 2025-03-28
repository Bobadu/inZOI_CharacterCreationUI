import React from 'react';
import { FaPaintBrush, FaPlus } from 'react-icons/fa';

const Aside: React.FC = () => {
  return (
      <aside className="fixed left-0 top-0 h-screen w-80 p-6 flex flex-col justify-between text-[#d2d5d7] z-10">
        <div className="mt-20 text-right">
          <h2 className="text-2xl font-bold mb-2">Jak wygląda ten Zoi?</h2>
          <p className="text-m opacity-80">Wprowadź w życie swój pomysł.</p>
        </div>

        <div className="mb-5 ml-2">
          <div className="flex items-center mb-3">
            <div className="flex items-center gap-2 mr-3">
              <div className="p-[4px] border-2 border-[#ffffff20] flex items-center justify-center text-xs rounded-md shadow-[0_0_5px_rgba(0,0,0,0.4)]">Ctrl</div>
              <FaPlus size={10} className="text-[#d2d5d7] self-center flex items-center" />
              <div className="p-[4px] border-2 border-[#ffffff20] flex items-center justify-center text-xs rounded-md shadow-[0_0_5px_rgba(0,0,0,0.4)]">Shift</div>
              <FaPlus size={10} className="text-[#d2d5d7] self-center flex items-center" />
              <div className="p-[4px] border-2 border-[#ffffff20] flex items-center justify-center text-xs rounded-md shadow-[0_0_5px_rgba(0,0,0,0.4)]">U</div>
            </div>
            <span className="text-sm">Ukryj interfejs użytkownika</span>
          </div>

          <button
              className="relative flex items-center justify-center border-2 border-[#ffffff20] py-1 px-12 rounded-full backdrop-blur-md shadow-[0_0_8px_rgba(255,255,255,0.1)]"
              style={{
                background: 'radial-gradient(circle, rgba(180, 255, 100, 0.15) 0%, rgba(255, 255, 255, 0.1) 70%)'
              }}
          >
            <FaPaintBrush size={14} className="absolute left-4" />
              <span className={'text-lg font-[400]'}>Studio</span>
          </button>
        </div>
      </aside>
  );
};

export default Aside;