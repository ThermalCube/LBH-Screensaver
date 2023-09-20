import { defineConfig } from "vite";
import banner2 from 'rollup-plugin-banner2'

const copyright =
    `/*! 
 * Legacy Brawl Hub Screensaver
 * © 2023 ThermalCube. Some rights reserved.
 *
 *  
 * All images are copyright to their respective owners.
 * All product names, logos and brands used in our websites are properties of their respective owners.
 */
`;


export default defineConfig(({ mode, command }) => {

    return {
        plugins: [
            banner2(() => copyright)
        ],
        build: {
            sourcemap: 'hidden'
        }
    };
});