
import './home.module.css';
import  ImgSlider  from './../slider/slider';
import styled from 'styled-components';
import Viewers from '../viewers/viewers'


/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

export default Home;


const Container = styled.main`

  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url('/assets/images/home-background.png') center / cover no-repeat
      fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }


`
