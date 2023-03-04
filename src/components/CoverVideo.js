import React from 'react'
import styled from 'styled-components'
import mainVid from "../assets/Walking Girl.mp4"

    const videoContainer = styled.section`
        width: 100%;
        height: 100vh;
        position: relative;
        video{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `
    const DarkOverlay = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        bottom : 0;
        right: 0;
        z-index: 1;
        background: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    `
    const Title = styled.div`
     position: absolute;
        top: 0;
        bottom : 0;
        left: 0;
        right: 0;
        z-index: 5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color : ${props => props.theme.text};

        div{
            display: flex;
            flex-direction: row;
        }
        h1{
        font-family: "Kaushan Script";
        font-size: ${props => props.theme.fontBig};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
        }
        h2{
            font-family:"Sirin Stencil" ;
        font-size: ${props => props.theme.fontlg};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
        font-weight: 300;
        text-transform: capitalize;
        }
    `

function CoverVideo() {
  return (
    <videoContainer>
        <DarkOverlay />
        <Title>
            <div>
                <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">W</h1>
                <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">i</h1>
                <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">b</h1>
                <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">e</h1>
            </div>
            <div><h2>
                Inspire. Create. Belive
                </h2></div>
        </Title>
        <video src={mainVid} type="video.mp4" autoPlay muted loop />
    </videoContainer>
  )
}

export default CoverVideo