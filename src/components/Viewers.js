import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="./images/viewers-disney.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/1564674844-disney.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src="./images/viewers-pixar.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/1564676714-pixar.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src="./images/viewers-marvel.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/1564676115-marvel.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src="./images/viewers-starwars.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/1608229455-star-wars.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src="./images/viewers-national.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/1564676296-national-geographic.mp4' type='video/mp4'/>
            </video>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    cursor: pointer;
    overflow: hidden;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    position: relative;

    img {
        inset: 0px;
        display: block;
        width: 100%;
        height: 100%;
        transition: opacity 500ms ease-in-out 0s;
        object-fit: cover;
        position: absolute;
        z-index: 1;
    }

    &:hover {
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        video {
            opacity: 1;
        }
    }

    video {
        width: 100%
        height: 100%
        position: absolute;
        inset: 0px;
        opacity: 0;
    }
`