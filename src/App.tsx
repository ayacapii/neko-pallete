// src/App.tsx

import React, { useState, useCallback, useEffect } from 'react';
import ColorSwatch from './components/ColorSwatch';
import CatDisplay from './components/CatDisplay';
import { ColorPalette, ColorSwatchData } from './components/types'; // 💡 ColorSwatchData をインポート
import { generateRandomPalette } from './utils/colorUtils';

// ダミーの初期値
const initialPalette: ColorPalette = {
  primary: '#C0C0C0', 
  secondary: '#808080',
  accent: '#A9A9A9',
};

function App() {
  const [palette, setPalette] = useState<ColorPalette>(initialPalette);

  const randomizeColors = useCallback(() => {
    const newPalette = generateRandomPalette();
    setPalette(newPalette);
  }, []);

  useEffect(() => {
    randomizeColors();
  }, [randomizeColors]);

  // 💡 ColorSwatchData 型を使って、表示データを作成
  const swatches: ColorSwatchData[] = [
    { hex: palette.primary, name: 'Base Color' },
    { hex: palette.secondary, name: 'Patches' }, // 模様の色
    { hex: palette.accent, name: 'Accent' },
  ];

  return (
    <div 
      className="min-h-screen p-8"
      style={{ backgroundColor: palette.accent + '20' }}
    >
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Neko Palette Generator
        </h1>
        <p className="text-gray-500">
          クリックして、ランダムな猫の配色を生成
        </p>
      </header>

      {/* 1. 猫の表示エリア */}
      <div className="flex justify-center mb-16">
        <CatDisplay 
          onClick={randomizeColors}
          primaryColor={palette.primary} 
          // 💡 ここで secondaryColor も渡せるように、次のステップで CatDisplay を修正します
        />
      </div>

      {/* 2. 色見本スウォッチの表示エリア */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-3">
        {swatches.map((swatch, index) => (
          // Swatchコンポーネントに、hexとnameのみを渡す
          <ColorSwatch key={index} hex={swatch.hex} name={swatch.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
