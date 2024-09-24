import { palettes } from "@tailus/themer-plugins"

module.exports = {
    content: [
        './index.html',
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            colors : palettes.trust
        },
    }
};