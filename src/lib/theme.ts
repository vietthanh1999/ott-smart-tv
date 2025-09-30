export type Theme = {
  colors: {
    background: string
    textPrimary: string
    textSecondary: string
    surfaceBright: string
    surfaceInverse: string
    textInvert: string
    inverse: string
    brandRed: string
    whiteOpacity4: string
    muted: string
  },
  button: {
    backgroundColor: string
    textColor: string
    borderRadius: number
    borderColor: string
    borderWidth: number
  },
  typography: {
    fontFamilyPrimary: string
    sizes: {
      headline3: number
      headline2: number
      body1: number
    }
    lineHeights: {
      headline3: number
      headline2: number
      body1: number
    }
    weights: {
      bold: number
      semibold: number
      medium: number
    }
  }
  loaderColors: string[]
}

export const theme: Theme = {
  colors: {
    background: '#050506',
    textPrimary: '#f4f4f8',
    textSecondary: '#919196',
    surfaceBright: '#2f3037',
    surfaceInverse: '#f4f4f8',
    textInvert: '#050506',
    inverse: '#f4f4f8',
    brandRed: '#dc0000',
    whiteOpacity4: 'rgba(244,244,248,0.04)',
    muted: '#94a3b8',
  },
  button: {
    backgroundColor: '#F4F4F8',
    textColor: '#050506',
    borderRadius: 6,
    borderColor: '#000',
    borderWidth: 1,
  },
  typography: {
    fontFamilyPrimary: 'inter',
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
  loaderColors: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa'],
}

export default theme


