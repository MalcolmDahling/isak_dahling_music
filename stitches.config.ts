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
            whiteHalfOpacity:'rgba(255,255,255,0.5)'
        }
    },

    media:{

        desktop:'(min-width:769px)',
        tablet:'(max-width:768px)',
        mobile:'(max-width:480px)', 

        menuBig:'(max-width:500px)',
        menuMedium:'(max-width:419px)',
        menuSmall:'(max-width:339px)',
    }
});