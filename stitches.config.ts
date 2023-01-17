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
        },

        fontSizes:{

            header:'calc(30px + 3vw)',
        }
    },

    media:{

        desktop:'(min-width:769px)',
        tablet:'(max-width:768px)',
        mobile:'(max-width:480px)', 

        menu:'(max-width:442px)'
    }
});