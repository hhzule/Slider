import  React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './slidershow.css'; 
import { Img01, Img02, Img03, Img04} from '../images/images'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display:"block" , background: "grey" , borderRadius: "15px" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" ,  borderRadius: "15px" }}
      onClick={onClick}
    />
  );
}

export const SlideShow = () => {
    let settings = {
        dots: true,
        infinite: true,
       // speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
       // autoplay: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
     // autoplaySpeed: 2000,
      pauseOnHover: true,
        initialSlide: 0,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };

 
     let images = [
       { img: Img01, name:"Zia-ullah Khan" , designation:"team leader" },
       { img: Img02, name:"Adil Altaf" , designation:"Founder AXIOM" },
       { img: Img03, name:"Amir Pinger" , designation:"CNC lead teacher" },
       { img: Img04, name:"Daniyal Nagori" , designation:"CNC teacher" },
       
      ]
      return (
        <Slider className="container" {...settings}>
          { images.map((image, i) => (
            <div  key={i}>
            <h3 className="circlediv" ><img src={image.img} alt="team"/></h3>
          <h2>{image.name}</h2>
            <h5 className="designation">{image.designation}</h5>

          </div>))
}
        </Slider>
      );
    } 


