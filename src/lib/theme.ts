export type Theme = {
  colors: {
    background: string;
    textPrimary: string;
    textSecondary: string;
    surfaceBright: string;
    surfaceInverse: string;
    textInvert: string;
    inverse: string;
    brandRed: string;
    whiteOpacity4: string;
    muted: string;
    surfaceBrand: string;
    surfaceBright2: string;
    surfaceBackground: string;
    surfaceBackground2: string;
    surfaceTertiary: string;
    surfaceDisable: string
    serfaceInverse: string
    border1: string;
    border2: string;
    surfaceAccepp: string
  };
  button: {
    backgroundColor: string;
    textColor: string;
    borderRadius: number;
    borderColor: string;
    borderWidth: number;
  };
  typography: {
    fontFamilyPrimary: string;
    sizes: {
      headline3: number;
      headline2: number;
      body1: number;
    };
    lineHeights: {
      headline3: number;
      headline2: number;
      body1: number;
    };
    weights: {
      bold: number;
      semibold: number;
      medium: number;
    };
  };
  text: {
    color: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      brand: string;
      invert: string;
    };
  };
  loaderColors: string[];
};

export const theme: Theme = {
  text: {
    color: {
      primary: "#f4f4f8",
      secondary: "#919196",
      tertiary: "#76767f",
      disabled: "#45454a",
      brand: "#c70007",
      invert: "#050506",
    },
  },
  colors: {
    background: "#050506",
    textPrimary: "#f4f4f8",
    textSecondary: "#919196",
    surfaceBright: "#2f3037",
    surfaceInverse: "#f4f4f8",
    textInvert: "#050506",
    inverse: "#f4f4f8",
    brandRed: "#dc0000",
    whiteOpacity4: "rgba(244,244,248,0.04)",
    muted: "#94a3b8",
    surfaceBrand: "#c70007",
    surfaceBright2: "#45454a",
    surfaceBackground: "#050506",
    surfaceBackground2: "#26262c",
    surfaceTertiary: "#76767f",
    surfaceDisable: "#1c1d21",
    serfaceInverse: "#f4f4f8",
    border1: "#f4f4f8",
    border2: "#76767f",
    surfaceAccepp: "#ffd15b",
  },
  button: {
    backgroundColor: "#F4F4F8",
    textColor: "#050506",
    borderRadius: 6,
    borderColor: "#000",
    borderWidth: 1,
  },
  typography: {
    fontFamilyPrimary: "inter",
    sizes: {
      headline3: 48,
      headline2: 28,
      body1: 24,
    },
    lineHeights: {
      headline3: 54,
      headline2: 36,
      body1: 36,
    },
    weights: {
      bold: 700,
      semibold: 600,
      medium: 500,
    },
  },
  loaderColors: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa"],
};

export default theme;
