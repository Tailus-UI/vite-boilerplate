import { grays, palettes } from '@tailus/themer-plugins'

module.exports = {
    content: ['./index.html', './src/**/*.{html,js}'],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                ...palettes.trust,
                gray: grays.zinc,
            },
        },
    },
}
