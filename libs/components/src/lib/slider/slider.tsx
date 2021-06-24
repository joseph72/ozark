import './slider.module.css';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <Carousel className="pt-5" {...settings}>
      <Wrap>
        <img className="" src="assets/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img className="" src="assets/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img className="" src="assets/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <h3>4</h3>
      </Wrap>
      <Wrap>
        <h3>5</h3>
      </Wrap>
      <Wrap>
        <h3>6</h3>
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  ul li button{
    &:before{
      font-size:10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before{
    color: white;
  }
  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }

    }
`
