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

    theme:{
        colors:{
            black:'#000000',
            white:'#FFFFFF',
        }
    },

    media:{

        bp0:'(min-width:769px)',
        bp1:'(max-width:768px)',
        bp2:'(max-width:480px)', 
    }
});