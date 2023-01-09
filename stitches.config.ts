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

        desktopBig:'(min-width:1001px)',
        desktopSmall:'(max-width:1000px)',
        tablet:'(max-width:768px)',
        mobile:'(max-width:480px)', 
    }
});