import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { NewsInView } from "../atoms/NewsInView";
import { ReleasesInView } from "../atoms/ReleasesInView";

interface props{
    category:'releases' | 'news';
}

export default function TopRef(props:props){

    const {ref, inView, entry} = useInView();
    const [releasesInView, setReleasesInView] = useRecoilState(ReleasesInView);
    const [newsInView, setNewsInView] = useRecoilState(NewsInView);

    useEffect(() => {

        if(props.category === 'releases'){
            setReleasesInView(prev => ({...prev, topRefInView:inView}));
        }

        if(props.category === 'news'){
            setNewsInView(prev => ({...prev, topRefInView:inView}));
        }
    }, [inView]);

    return(
        <div ref={ref}>

        </div>
    );
}