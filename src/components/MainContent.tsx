import React from 'react';
import { 
  FaUser, 
  FaBaby, 
  FaChild, 
  FaUserGraduate, 
  FaUserTie, 
  FaUserMd, 
  FaUserAlt, 
  FaMale, 
  FaFemale, 
  FaTransgenderAlt 
} from 'react-icons/fa';

const MainContent: React.FC = () => {
  return (
      <main className="fixed left-1/2 top-24 -translate-x-1/2 translate-y-1/2 flex justify-center z-50">
          <div className="grid grid-cols-2 gap-100 w-[60vw] justify-between">
        {/* Lewa sekcja */}
              <section>
          {/* Profil */}
          <div className="flex flex-row items-center mb-6 text-[#d2d5d7] text-xl font-[500] mr-2 gap-2">
              <span>Profil</span>
              <FaUser></FaUser>
          </div>
          
          {/* Linia */}
          <div className="w-full h-[1.3px] bg-[#d2d5d7] my-6"></div>
          
          {/* Imię i nazwisko */}
          <div className="mb-6 flex items-center gap-4">
            <p className="text-[#d2d5d7] font-medium">Imię</p>
            <input 
              type="text" 
              placeholder="Imię" 
              className="bg-[#00000020] text-[#d2d5d7] p-1 rounded-full border border-[#d2d5d7] focus:outline-none focus:border-[#ffffff50] w-32"
            />
            <input 
              type="text" 
              placeholder="Nazwisko"
              className="bg-[#00000020] text-[#d2d5d7] p-1 rounded-full border border-[#d2d5d7] focus:outline-none focus:border-[#ffffff50] w-32"
            />
          </div>
          
          {/* Grupa wiekowa */}
          <div className="mb-6">
            <p className="text-[#d2d5d7] mb-3 font-medium">Grupa wiekowa</p>
            <div className="flex justify-between">
              <IconButton icon={<FaBaby size={20} />} />
              <IconButton icon={<FaChild size={20} />} />
              <IconButton icon={<FaUserGraduate size={20} />} />
              <IconButton icon={<FaUserTie size={20} />} />
              <IconButton icon={<FaUserMd size={20} />} />
              <IconButton icon={<FaUserAlt size={20} />} />
            </div>
          </div>
          
          {/* Płeć */}
          <div>
            <p className="text-[#d2d5d7] mb-3 font-medium">Płeć</p>
            <div className="flex gap-4">
              <IconButton icon={<FaMale size={20} />} />
              <IconButton icon={<FaFemale size={20} />} />
              <IconButton icon={<FaTransgenderAlt size={20} />} />
            </div>
          </div>
        </section>
        
        {/* Prawa sekcja */}
              <section>
          {/* Tutaj zawartość prawej sekcji */}
        </section>
      </div>
    </main>
  );
};

// Komponent przycisków z ikonami
const IconButton: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <button className="h-12 w-12 bg-[#ffffff20] rounded-lg flex items-center justify-center border border-[#ffffff30] text-[#d2d5d7] hover:bg-[#ffffff30] transition-colors">
      {icon}
    </button>
  );
};

export default MainContent;