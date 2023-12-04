'use client'

export const theme = {
    grid: {
        container: '130rem',
        gutter: '3.2rem'
    },
    border: {
        radius: {
            big: '5rem',
            small: '0.4rem'
        }
    },
    font: {
        family:
            "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        light: 300,
        normal: 400,
        bold: 600,
        sizes: {
            xsmall: '1.2rem',
            small: '1.4rem',
            medium: '1.6rem',
            large: '1.8rem',
            xlarge: '2.0rem',
            xxlarge: '2.8rem',
            huge: '5rem'
        }
    },
    colors: {
		primary: 'hsl(12, 88%, 59%)',
		secondary: 'hsl(228, 39%, 23%)',
		primaryBg: 'hsl(0, 0%, 98%)',
		secondaryBg: 'hsl(13, 100%, 96%)',
		footerBg: 'hsl(233, 12%, 13%)',
		primaryText: 'hsl(228, 39%, 23%)',
		secondaryText: 'hsl(227, 12%, 61%)',
        black: '#000',
        white: '#fff',
    },
    spacings: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
    },
    layers: {
        base: 10,
        menu: 20,
        overlay: 30,
        modal: 40,
        alwaysOnTop: 50
    },
    transition: {
        default: '0.3s ease-in-out',
        fast: '0.1s ease-in-out'
    },
    breakpoints: {
        smallHeight: '599px',
        mediumHeight: '899px',
        largeHeight: '900px',
    },
} as const
