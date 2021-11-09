const { resolve } = require("path");

module.exports = {
    base: "./",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                sub: resolve(__dirname, "form.html"),
            },
        },
    },
};
