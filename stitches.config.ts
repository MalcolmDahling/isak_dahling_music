import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({

    media:{

        bp0:'(max-width:768px)',
        bp1:'(max-width:480px)',
    }
});