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
    FaTransgenderAlt,
    FaDice,
    FaHeart,
} from 'react-icons/fa';

const MainContent: React.FC = () => {
    return (
        <main className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center z-50">
            <div className="grid grid-cols-2 gap-100 w-[60vw] justify-between">
                {/* Lewa sekcja */}
                <section>
                    {/* Nagłówek */}
                    <div className="flex flex-row items-center mb-6 text-[#d2d5d7] text-xl font-[500] mr-2 gap-2">
                        <span>Profil</span>
                        <FaUser></FaUser>
                    </div>

                    {/* Linia */}
                    <div className="w-full h-[1.3px] bg-[#d2d5d7] my-6"></div>

                    {/* Imię i nazwisko ze zmodyfikowanymi inputami */}
                    <div className="mb-6 flex items-center justify-between">
                        <p className="text-[#d2d5d7] font-sm">Imię</p>
                        <div className="flex gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Imię"
                                    className="bg-[#00000020] text-[#d2d5d7] py-[3px] pl-4 pr-10 rounded-full border border-[#d2d5d7] focus:outline-none focus:border-[#ffffff50] w-32"
                                />
                                <FaDice className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d2d5d7]" size={14} />
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Nazwisko"
                                    className="bg-[#00000020] text-[#d2d5d7] py-[3px] pl-4 pr-10 rounded-full border border-[#d2d5d7] focus:outline-none focus:border-[#ffffff50] w-32"
                                />
                                <FaDice className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d2d5d7]" size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Grupa wiekowa */}
                    <div className="mb-6 flex justify-between items-center">
                        <p className="text-[#d2d5d7] font-sm">Grupa wiekowa</p>
                        <div className="flex gap-2">
                            <IconButton icon={<FaBaby size={20} />} rounded />
                            <IconButton icon={<FaChild size={20} />} rounded />
                            <IconButton icon={<FaUserGraduate size={20} />} rounded />
                            <IconButton icon={<FaUserTie size={20} />} rounded />
                            <IconButton icon={<FaUserMd size={20} />} rounded />
                            <IconButton icon={<FaUserAlt size={20} />} rounded />
                        </div>
                    </div>

                    {/* Płeć */}
                    <div className="flex justify-between items-center">
                        <p className="text-[#d2d5d7] font-sm">Płeć</p>
                        <div className="flex gap-4">
                            <IconButton icon={<FaMale size={20} />} rounded/>
                            <IconButton icon={<FaFemale size={20} />} rounded/>
                            <IconButton icon={<FaTransgenderAlt size={20} />} rounded/>
                        </div>
                    </div>
                    {/* Nagłówek */}
                    <div className="flex flex-row items-center mt-10 mb-6 text-[#d2d5d7] text-xl font-[500] mr-2 gap-2">
                        <span>Cecha</span>
                        <FaUser></FaUser>
                    </div>

                    {/* Linia */}
                    <div className="w-full h-[1.3px] bg-[#d2d5d7] my-6"></div>

                    {/* Pionowy prostokąt ze znakiem zapytania */}
                    <div className="flex gap-4 items-center justify-start my-6">
                        <div className="relative w-30 h-48 border-2 border-dashed border-[#d2d5d7] rounded-md flex items-center justify-center overflow-hidden">
                            {/* Gradient w tle */}
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    background: 'radial-gradient(circle, rgba(180, 255, 100, 0.15) 0%, rgba(0, 0, 0, 0.1) 70%)'
                                }}
                            />
                            {/* Znak zapytania */}
                            <span className="text-6xl font-bold text-white z-10 relative">?</span>
                        </div>
                        <button className="bg-[#ffffff10] px-2 py-1 rounded-lg hover:bg-[#ffffff0] transition-colors">
                            <span className="text-[#00000080] text-lg font-medium">Wybierz cechę</span>
                        </button>
                    </div>

                    {/* Nagłówek */}
                    <div className="flex flex-row items-center justify-between mt-10 mb-6 text-[#d2d5d7] text-xl font-[500]">
                        <span>Upragnione życie</span>
                        <span className="text-sm text-[#d2d5d7] opacity-70">(opcjonalne)</span>
                    </div>
                    {/* Linia */}
                    <div className="w-full h-[1.3px] bg-[#d2d5d7] my-6"></div>

                    {/* Wybór wymarzonego życia */}
                    <div className="flex justify-between items-center px-2 py-1 bg-[#ffffff10] rounded-lg hover:bg-[#ffffff30] transition-colors cursor-pointer">
                        <span className="text-[#00000080]">Wybierz swoje wymarzone życie</span>
                        <FaHeart size={16} className="text-[#d2d5d7]" />
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
const IconButton: React.FC<{ icon: React.ReactNode; rounded?: boolean }> = ({ icon, rounded = false }) => {
    return (
        <button className={`h-10 w-10 bg-[#ffffff20] ${rounded ? 'rounded-full' : 'rounded-lg'} flex items-center justify-center border border-[#ffffff30] text-[#fff] hover:bg-[#ffffff30] transition-colors`}>
            {icon}
        </button>
    );
};

export default MainContent;