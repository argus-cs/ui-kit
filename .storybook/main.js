const path = require('path');

module.exports = {
    stories: ["../src/components/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@storybook/addon-toolbars",
    ],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            tsconfigPath: path.resolve(__dirname, '..', 'tsconfig.json'),
        }
    },
};
