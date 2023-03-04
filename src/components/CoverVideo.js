import React from 'react'
import styled from 'styled-components'
import mainVid from "../assets/Walking Girl.mp4"

    const videoContainer = styled.section`
        width: 100%;
        height: 100%;
        position: relative;
    `

function CoverVideo() {
  return (
    <videoContainer>
        <video src={mainVid} type="video.mp4" autoPlay muted loop />
    </videoContainer>
  )
}

export default CoverVideo