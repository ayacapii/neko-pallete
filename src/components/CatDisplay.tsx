// src/components/CatDisplay.tsx

import React from 'react';

type CatDisplayProps = {
  onClick: () => void;
  primaryColor: string;    // 猫のベースとなる色
  secondaryColor: string;  // 猫の模様やアクセントの色
};

const CatDisplay: React.FC<CatDisplayProps> = ({ onClick, primaryColor, secondaryColor }) => {
  return (
    // クリック可能領域 (Body)
    <div 
      className="relative w-48 h-48 sm:w-64 sm:h-64 cursor-pointer p-2 transition-transform duration-300 hover:scale-[1.05]"
      onClick={onClick}
      title="クリックでパレットをランダム生成"
    >
      {/* 1. ベースの猫の体/顔 */}
      <div 
        className="w-full h-full rounded-[45%] absolute top-10 shadow-2xl transition-colors duration-500"
        style={{ backgroundColor: primaryColor, border: `4px solid ${secondaryColor}` }} // 💡 secondaryColorを境界線に使用
      >
        {/* 2. 猫の耳 (左右) */}
        {/* 左耳 */}
        <div 
          className="absolute w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] top-[-30px] left-8"
          style={{ borderBottomColor: primaryColor, borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
        >
          {/* 模様 (Secondary Color) を耳の内側に表現 */}
          <div 
            className="absolute w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] top-[15px] left-[-15px] transform translate-y-1"
            style={{ borderBottomColor: secondaryColor, borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
          ></div>
        </div>
        
        {/* 右耳 */}
        <div 
          className="absolute w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] top-[-30px] right-8"
          style={{ borderBottomColor: primaryColor, borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
        >
          {/* 模様 (Secondary Color) を耳の内側に表現 */}
          <div 
            className="absolute w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] top-[15px] left-[-15px] transform translate-y-1"
            style={{ borderBottomColor: secondaryColor, borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
          ></div>
        </div>
        
        {/* 3. 目と鼻（シンプルな表現） */}
        <div className="flex justify-center mt-12 space-x-8">
            <div className="w-4 h-4 rounded-full bg-gray-900" style={{ backgroundColor: secondaryColor }}></div>
            <div className="w-4 h-4 rounded-full bg-gray-900" style={{ backgroundColor: secondaryColor }}></div>
        </div>
        <div className="w-3 h-2 mx-auto mt-2 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
        
        <p className="text-gray-900 text-center font-bold text-sm mt-8 opacity-70">
          Click Me!
        </p>
      </div>
    </div>
  );
};

export default CatDisplay;
