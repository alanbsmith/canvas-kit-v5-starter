import { typeColors } from '@workday/canvas-colors-web';
import { CSSProperties, fontFamily, type as beta_Type } from '@workday/canvas-kit-react/tokens';

type HierarchyLevelSizes = {
  small: CSSProperties;
  medium: CSSProperties;
  large: CSSProperties;
};

export interface CanvasTypeHierarchy {
  /**
   * Intended to be used for small detail content or in tight spaces.
   * - `small`: rem(10px)
   * - `medium`: rem(12px)
   * - `large`: rem(14px)
   */
  detail: {
    /** rem(10px) */
    small: CSSProperties;
    /** rem(12px) */
    medium: CSSProperties;
    /** rem(14px) */
    large: CSSProperties;
  };
  /**
   * Intended to be used for standard body text.
   * - `small`: rem(16px)
   * - `medium`: rem(18px)
   * - `large`: rem(20px)
   */
  body: {
    /** rem(16px) */
    small: CSSProperties;
    /** rem(18px) */
    medium: CSSProperties;
    /** rem(20px) */
    large: CSSProperties;
  };
  /**
   * Intended to be used for headings and large text.
   * - `small`: rem(24px)
   * - `medium`: rem(28px)
   * - `large`: rem(32px)
   */
  heading: {
    /** rem(24px) */
    small: CSSProperties;
    /** rem(28px) */
    medium: CSSProperties;
    /** rem(32px) */
    large: CSSProperties;
  };
  /**
   * Intended to be used for large page titles.
   * - `small`: rem(40px)
   * - `medium`: rem(48px)
   * - `large`: rem(56px)
   */
  title: {
    /** rem(40px) */
    small: CSSProperties;
    /** rem(48px) */
    medium: CSSProperties;
    /** rem(56px) */
    large: CSSProperties;
  };
  /**
   * Intended for use in large heroes and images.
   * - `small`: rem(64px)
   * - `medium`: rem(80px)
   * - `large`: rem(96px)
   */
  display: {
    /** rem(64px) */
    small: CSSProperties;
    /** rem(80px) */
    medium: CSSProperties;
    /** rem(96px) */
    large: CSSProperties;
  };
  [key: string]: HierarchyLevelSizes;
}

const browserDefaultFontSize = 16;
/**
 * Converts px values into base 16 rems
 */
const rem = (pxValue: number) => {
  return `${pxValue / browserDefaultFontSize}rem`;
};

/**
 * - `detail`: Intended to be used for small detail content or in tight spaces.
 * - `body`: Intended to be used for standard body text.
 * - `heading`: Intended to be used for headings and large text.
 * - `title`: Intended to be used for large page titles.
 * - `display`: Intended for use in large heroes and images.
 *
 * The resulting rem values are based on a browser default font size of 16px.
 */
export const hierarchy: CanvasTypeHierarchy = {
  detail: {
    small: {
      fontFamily,
      fontSize: rem(10),
      lineHeight: rem(16),
      letterSpacing: rem(0.4),
      fontWeight: 400,
      color: typeColors.body,
    },
    medium: {
      fontFamily,
      fontSize: rem(12),
      lineHeight: rem(16),
      letterSpacing: rem(0.32),
      fontWeight: 400,
      color: typeColors.body,
    },
    large: {
      fontFamily,
      fontSize: rem(14),
      lineHeight: rem(20),
      letterSpacing: rem(0.24),
      fontWeight: 400,
      color: typeColors.body,
    },
  },
  body: {
    small: {
      fontFamily,
      fontSize: rem(16),
      lineHeight: rem(24),
      letterSpacing: rem(0.16),
      fontWeight: 400,
      color: typeColors.body,
    },
    medium: {
      fontFamily,
      fontSize: rem(18),
      lineHeight: rem(28),
      letterSpacing: rem(0.16),
      fontWeight: 400,
      color: typeColors.body,
    },
    large: {
      fontFamily,
      fontSize: rem(20),
      lineHeight: rem(28),
      letterSpacing: rem(0.16),
      fontWeight: 400,
      color: typeColors.body,
    },
  },
  heading: {
    small: {
      fontFamily,
      fontSize: rem(24),
      lineHeight: rem(32),
      fontWeight: 700,
      color: typeColors.heading,
    },
    medium: {
      fontFamily,
      fontSize: rem(28),
      lineHeight: rem(36),
      fontWeight: 700,
      color: typeColors.heading,
    },
    large: {
      fontFamily,
      fontSize: rem(32),
      lineHeight: rem(40),
      fontWeight: 700,
      color: typeColors.heading,
    },
  },
  title: {
    small: {
      fontFamily,
      fontSize: rem(40),
      lineHeight: rem(48),
      fontWeight: 700,
      color: typeColors.heading,
    },
    medium: {
      fontFamily,
      fontSize: rem(48),
      lineHeight: rem(56),
      fontWeight: 700,
      color: typeColors.heading,
    },
    large: {
      fontFamily,
      fontSize: rem(56),
      lineHeight: rem(64),
      fontWeight: 700,
      color: typeColors.heading,
    },
  },
  display: {
    small: {
      fontFamily,
      fontSize: rem(64),
      lineHeight: rem(80),
      fontWeight: 700,
      color: typeColors.heading,
    },
    medium: {
      fontFamily,
      fontSize: rem(80),
      lineHeight: rem(96),
      fontWeight: 700,
      color: typeColors.heading,
    },
    large: {
      fontFamily,
      fontSize: rem(96),
      lineHeight: rem(112),
      fontWeight: 700,
      color: typeColors.heading,
    },
  },
};

const hierarchyWithVariant = {
  ...hierarchy,
  variant: beta_Type.variant,
};

export default hierarchyWithVariant;
