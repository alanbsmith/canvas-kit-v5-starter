import {
  type as typeTokens,
  typeColors
} from "@workday/canvas-kit-react/tokens";

export type Variants = keyof typeof typeTokens.variants;

type TypeColors = keyof typeof typeColors;
type FontWeights = "regular" | "medium" | "bold";
type FontWeightValues = FontWeights | (string & {}) | number;
type Sizes = "small" | "medium" | "large";
type TypeLevels = "title" | "heading" | "body" | "subtext";

export type TypeProps = {
  color?: TypeColors | (string & {});
  fontWeight?: FontWeightValues;
  level?: TypeLevels;
  variant?: Variants;
  size?: Sizes | (string & {});
};

const getTypeColorValue = (value: TypeColors | string) => {
  return typeColors[value as TypeColors] || value;
};

const getSizeStyles = (value: Sizes, level: TypeLevels) => {
  return typeTokens.levels[level][value];
};

const getFontWeightValue = (value: FontWeightValues) => {
  return typeTokens.properties.fontWeights[value as FontWeights] || value;
};

const getVariantStyles = (value: Variants) => {
  return typeTokens.variants[value as Variants];
};

const typeProps = {
  color: getTypeColorValue,
  fontWeight: getFontWeightValue,
  size: getSizeStyles,
  variant: getVariantStyles
};

export function type<P extends TypeProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in typeProps) {
      if (key === "size") {
        const value = props[key as keyof TypeProps];
        const level = props.level as TypeLevels;
        const size = getSizeStyles(value as Sizes, level);
        styles = { ...styles, ...size };
      }
      if (key === "color") {
        const value = props[key as keyof TypeProps] as TypeColors | string;
        const color = getTypeColorValue(value);
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles["color"] = color;
      }
      if (key === "fontWeight") {
        const value = props[key as keyof TypeProps];
        const weight = getFontWeightValue(value as FontWeightValues);
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles["fontWeight"] = weight;
      }
      if (key === "variant") {
        const value = props[key as keyof TypeProps] as Variants;
        const variantStyles = getVariantStyles(value);
        styles = { ...styles, ...variantStyles };
      }
    }
  }
  return styles;
}
