import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'
import Logo from '../components/logo'

const Section = styled.section`
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`

function Home() {
  return (
    <Section>
        <CoverVideo />
        <Logo />
        <h2>Navbar</h2>
    </Section>
  )
}

export default Home