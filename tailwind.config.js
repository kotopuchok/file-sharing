module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                deepPineGreen: {
                    50: "#4f6e77",
                    100: "#45646d",
                    200: "#3b5a63",
                    300: "#315059",
                    400: "#27464f",
                    500: "#1d3c45",
                    600: "#13323b",
                    700: "#092831",
                    800: "#001e27",
                    900: "#00141d",
                },
                orange: {
                    50: "#ff924c",
                    100: "#fa8842",
                    200: "#f07e38",
                    300: "#e6742e",
                    400: "#dc6a24",
                    500: "#d2601a",
                    600: "#c85610",
                    700: "#be4c06",
                    800: "#b44200",
                    900: "#aa3800",
                },
                lightPeach: {
                    50: "#ffffff",
                    100: "#ffffff",
                    200: "#ffffff",
                    300: "#fffff5",
                    400: "#fffbeb",
                    500: "#fff1e1",
                    600: "#f5e7d7",
                    700: "#ebddcd",
                    800: "#e1d3c3",
                    900: "#d7c9b9",
                },
            },
        },
    },
    plugins: [],
};