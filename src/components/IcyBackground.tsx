import React from 'react';

const IcyBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen -z-10"
             style={{
                 background: "radial-gradient(ellipse at center, #c8cace 20%, #616265 100%)",
             }}>
            {children}
        </div>
    );
};

export default IcyBackground;