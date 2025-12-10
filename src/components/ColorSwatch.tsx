// src/components/ColorSwatch.tsx

import React from 'react';

type ColorSwatchProps = {
  hex: string; // 表示するHEXコード
  name: string; // 表示する色の役割（Primary, Secondaryなど）
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({ hex, name }) => {
  return (
    <div 
      className="w-full h-32 rounded-xl shadow-md p-4 flex flex-col justify-end transition-transform hover:scale-[1.05] cursor-default"
      style={{ backgroundColor: hex }} // 色を直接適用
    >
      {/* 色の役割（名前）のみを表示 */}
      <span className="text-white text-sm font-medium tracking-wider drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
        {name}
      </span>
    </div>
  );
};

export default ColorSwatch;
