import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { ToggleScrolling } from "../atoms/ToggleScrolling";

export default function ToggleScroll(){

    const toggleScrolling = useRecoilValue(ToggleScrolling);

    function disableScrolling(e:any){
        
        if(toggleScrolling === false){
            e.preventDefault();
        }  
    }

    useEffect(() => {

        document.addEventListener('wheel', disableScrolling, { passive: false });
        document.addEventListener('touchmove', disableScrolling, { passive: false });

        return () => {
            document.removeEventListener('wheel', disableScrolling);
            document.addEventListener('touchmove', disableScrolling);
        }
    }, [toggleScrolling]);

    return(
        <>

        </>
    );
}