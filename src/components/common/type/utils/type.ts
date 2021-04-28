import { type as beta_Type } from '@workday/canvas-kit-labs-react/tokens';
import { typeColors } from '@workday/canvas-kit-react/tokens';
import typeTokens from './hierarchy';

export type Variant = keyof typeof beta_Type.variant;

type TypeColors = keyof typeof typeColors;
type FontWeights = 'regular' | 'medium' | 'bold';
type FontWeightValues = FontWeights | (string & {}) | number;
type Size = 'small' | 'medium' | 'large';
type TypeLevels = 'display' | 'title' | 'heading' | 'body' | 'detail';

export type TypeProps = {
  color?: TypeColors | (string & {});
  fontWeight?: FontWeightValues;
  level?: TypeLevels;
  variant?: Variant | Variant[];
  size?: 'small' | 'medium' | 'large' | (string & {});
};

const fontWeightTokens = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const getTypeColorValue = (value: TypeColors | string) => {
  return typeColors[value as TypeColors] || value;
};

const getSizeStyles = (value: Size, level: TypeLevels) => {
  return typeTokens[level][value];
};

const getFontWeightValue = (value: FontWeightValues) => {
  return fontWeightTokens[value as FontWeights] || value;
};

const getVariantStyles = (value: Variant | Variant[]) => {
  if (typeof value === 'string') {
    return beta_Type.variant[value as Variant];
  }
  let variantStyles = {};
  (value as Variant[]).forEach((variant: Variant) => {
    variantStyles = { ...variantStyles, ...beta_Type.variant[variant] };
  });
  return variantStyles;
};

const typeProps = {
  color: getTypeColorValue,
  fontWeight: getFontWeightValue,
  size: getSizeStyles,
  variant: getVariantStyles,
};

export function type<P extends TypeProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in typeProps) {
      if (key === 'size') {
        const value = props[key as keyof TypeProps];
        const level = props.level as TypeLevels;
        const size = getSizeStyles(value as Size, level);
        styles = { ...styles, ...size };
      }
      if (key === 'color') {
        const value = props[key as keyof TypeProps] as TypeColors | string;
        const color = getTypeColorValue(value);
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles['color'] = color;
      }
      if (key === 'fontWeight') {
        const value = props[key as keyof TypeProps];
        const weight = getFontWeightValue(value as FontWeightValues);
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles['fontWeight'] = weight;
      }
      if (key === 'variant') {
        const value = props[key as keyof TypeProps] as Variant | Variant[];
        const variantStyles = getVariantStyles(value);
        styles = { ...styles, ...variantStyles };
      }
    }
  }
  console.log(props, styles);
  return styles;
}
