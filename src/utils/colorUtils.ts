// src/utils/colorUtils.ts

import { ColorPalette } from '../components/types';

// ======================================================
// 💡 くすみ系・猫の毛色をイメージしたパレット
// ======================================================
const NEKO_PALETTES: string[] = [
  // グレー系 (HEXコード)
  '#A9A9A9', // Dim Gray
  '#808080', // Gray
  '#585858', // Dark Slate Gray
  '#C0C0C0', // Silver

  // 茶系・ベージュ系
  '#B8860B', // Dark Goldenrod
  '#D2B48C', // Tan
  '#A0522D', // Sienna
  '#EEDDCC', // Papaya Whip

  // 白・黒系
  '#F5F5F5', // White Smoke
  '#36454F', // Charcoal
];

/**
 * 定義されたリストからランダムにHEXコードを選択します。
 * @returns ランダムに選択されたHEXカラーコード
 */
export const generateRandomHex = (): string => {
  const randomIndex = Math.floor(Math.random() * NEKO_PALETTES.length);
  return NEKO_PALETTES[randomIndex];
};

/**
 * 3色のランダムなパレットを生成します。
 * (Primary, Secondary, Accentの3色は重複しないように選択されます)
 * @returns ColorPalette 型のオブジェクト
 */
export const generateRandomPalette = (): ColorPalette => {
  // 3色を重複しないように選ぶロジック
  const uniqueColors = new Set<string>();
  
  // Setを使って、3色のユニークな色を取得するまで繰り返す
  while (uniqueColors.size < 3) {
    uniqueColors.add(generateRandomHex());
  }
  
  const paletteArray = Array.from(uniqueColors);

  // 3色を Primary, Secondary, Accentとして割り当てる
  return {
    primary: paletteArray[0] || NEKO_PALETTES[0],   // 猫のベースカラー
    secondary: paletteArray[1] || NEKO_PALETTES[1], // 模様の色
    accent: paletteArray[2] || NEKO_PALETTES[2],    // アクセント色
  };
};
