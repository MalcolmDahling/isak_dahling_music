import Slider from "react-slick";
import { Song } from "../models/Song";
import { styled } from "../stitches.config";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const StyledSlider = styled(Slider, {

    margin:'auto',

    '@desktop':{
        width:'75%',
    },

    '@tablet':{
        width:'80%'
    },
});

const ButtonContainer = styled('div', {

    width:'fit-content',
    margin:'auto',
    marginTop:20,

    display:'flex',
    gap:50
});

const Button = styled('button', {

    width:15,
    height:25,
    padding:0,

    backgroundImage:'url(/images/icons/arrow_right.svg)',
    backgroundColor:'transparent',
    backgroundRepeat:'no-repeat',
    filter:'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)',
    border:'none',
    opacity:0.5,
    cursor:'pointer',
    transition:'all 250ms',

    '&:hover':{
        opacity:1,
    },

    variants:{
        direction:{
            reversed:{
                transform:'rotate(180deg)'
            }
        }
    }
});

interface props{
    songs:Song[];
}

export default function Carousel(props:props){

    const ref = useRef<any>();

    const settings = {
        speed:500,
        centerMode:true,
        slidesToShow:3,
        centerPadding:'0px',
        draggable:true,
        infinite:true,

        mobileFirst:true,
        responsive:[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
        ]

        // autoplay:true,
        // autoplaySpeed:3000,
        // pauseOnHover:true,
    };

    return(
        <>
            <div className="carousel">
                <StyledSlider {...settings} ref={ref}>

                    {
                        props.songs.map(cover => {
                            return(
                                <img src={cover.fields.image.fields.file.url} key={cover.fields.title} alt={cover.fields.title}></img>
                            );
                        })
                    }

                </StyledSlider>

                <ButtonContainer>
                    <Button onClick={() => {ref.current.slickPrev()}} direction="reversed"></Button>
                    <Button onClick={() => {ref.current.slickNext()}}></Button>
                </ButtonContainer>
            </div>
        </>
    );
}