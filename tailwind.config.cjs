const config = {
    content: [
        "./src/**/*.{html,js,svelte,ts}"
    ],

    theme: {
        extend: {
            colors: {
                'primary': {
                    '50': '#fcfef7',
                    '100': '#f9fef0',
                    '200': '#effcd8',
                    '300': '#e5fac1',
                    '400': '#d2f693',
                    '500': '#bef264',
                    '600': '#abda5a',
                    '700': '#8fb64b',
                    '800': '#72913c',
                    '900': '#5d7731'
                },
                'secondary': {
                    '50': '#fffdf6',
                    '100': '#fffced',
                    '200': '#fff7d1',
                    '300': '#fef3b5',
                    '400': '#fee97e',
                    '500': '#fde047',
                    '600': '#e4ca40',
                    '700': '#bea835',
                    '800': '#98862b',
                    '900': '#7c6e23'
                },
                'accent': {
                    '50': '#fdfffa',
                    '100': '#fbfef5',
                    '200': '#f6fee7',
                    '300': '#f0fdd8',
                    '400': '#e4fbba',
                    '500': '#d9f99d',
                    '600': '#c3e08d',
                    '700': '#a3bb76',
                    '800': '#82955e',
                    '900': '#6a7a4d'
                },
                'info': {
                    '50': '#f5fcff',
                    '100': '#ebf9fe',
                    '200': '#ceeffd',
                    '300': '#b0e5fc',
                    '400': '#75d2fa',
                    '500': '#3ABFF8',
                    '600': '#34acdf',
                    '700': '#2c8fba',
                    '800': '#237395',
                    '900': '#1c5e7a'
                },
                'success': {
                    '50': '#f5fdfa',
                    '100': '#ebfbf5',
                    '200': '#cdf4e6',
                    '300': '#afedd6',
                    '400': '#72e0b8',
                    '500': '#36D399',
                    '600': '#31be8a',
                    '700': '#299e73',
                    '800': '#207f5c',
                    '900': '#1a674b'
                },
                'warning': {
                    '50': '#fffcf4',
                    '100': '#fff8e9',
                    '200': '#feefc8',
                    '300': '#fde5a7',
                    '400': '#fcd165',
                    '500': '#FBBD23',
                    '600': '#e2aa20',
                    '700': '#bc8e1a',
                    '800': '#977115',
                    '900': '#7b5d11'
                },
                'danger': {
                    '50': '#fff8f8',
                    '100': '#fef1f1',
                    '200': '#fddcdc',
                    '300': '#fcc7c7',
                    '400': '#fa9c9c',
                    '500': '#F87272',
                    '600': '#df6767',
                    '700': '#ba5656',
                    '800': '#954444',
                    '900': '#7a3838'
                }
            },
        },
        fontFamily: {
            'body': ['Gilroy', 'Inter', 'sans-serif'],
            'mono': ['JetBrains Mono', 'monospace'],
        },
    },
    daisyui: {
        themes: [{
            bambuild: {
                "primary": "#bef264",
                "secondary": "#4d7c0f",
                "accent": "#fde047",
                "neutral": "#374151",
                "base-100": "#111827",
                "info": "#bae6fd",
                "success": "#a7f3d0",
                "warning": "#fde68a",
                "error": "#fecaca",
            },
        }],
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('flowbite/plugin'),
        require('daisyui'),
    ],
    darkMode: 'class',
};

module.exports = config;
