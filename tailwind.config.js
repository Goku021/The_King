// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./templates/**/*.html", // for Flask HTML templates
//         "./app.py"               // to catch class names in Flask strings
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }

/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss-pseudo-elements';

export default {
    content: [
        "./templates/**/*.html", // Flask templates
        "./app.py"               // Flask routes and classes
    ],
    theme: {
        extend: {
            content: {
                '': '', // necessary for ::after and ::before
            },
        },
    },
    plugins: [
        plugin({
            variants: ['responsive'], // optional: add 'hover', 'focus' as needed
            pseudoElements: ['after'], // or ['before', 'after'] if you want both
            classNameReplacer: {
                before: 'before',
                after: 'after'
            }
        })
    ],
};


