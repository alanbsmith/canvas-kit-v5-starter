import { type as beta_Type } from "@workday/canvas-kit-labs-react/tokens";
import typeTokens from "./hierarchy";

export type Variant = keyof typeof beta_Type.variant;

type Size = "small" | "medium" | "large";
type FontWeights = "regular" | "medium" | "bold";
type FontWeightValues = FontWeights | (string & {}) | number;
type TypeLevels = "display" | "title" | "heading" | "body" | "detail";

export type TypeProps = {
  size?: "small" | "medium" | "large" | (string & {});
  fontWeight?: FontWeightValues;
  variant?: Variant | Variant[];
  level?: TypeLevels;
};

const fontWeightTokens = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const getSizeStyles = (value: Size, level: TypeLevels) => {
  return typeTokens[level][value];
};

const getFontWeightValue = (value: FontWeightValues) => {
  return fontWeightTokens[value as FontWeights] || value;
};

const getVariantStyles = (value: Variant) => {
  if (typeof value === "string") {
    return beta_Type.variant[value as Variant];
  }
  let variantStyles = {};
  (value as Variant[]).forEach((variant: Variant) => {
    variantStyles = { ...variantStyles, ...beta_Type.variant[variant] };
  });
  return variantStyles;
};

const typeProps = {
  size: getSizeStyles,
  fontWeight: getFontWeightValue,
  variant: getVariantStyles,
};

export function type<P extends TypeProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in typeProps) {
      if (key === "size") {
        const value = props[key as keyof TypeProps];
        const level = props.level as TypeLevels;
        const size = getSizeStyles(value as Size, level);
        styles = { ...styles, ...size };
      }
      if (key === "fontWeight") {
        const value = props[key as keyof TypeProps];
        const weight = getFontWeightValue(value as FontWeightValues);
        // @ts-ignore TS doesn't like adding a potentially unknown key to an object, but because we own this object, it's fine.
        styles["fontWeight"] = weight;
      }
    }
  }
  return styles;
}
