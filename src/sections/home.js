import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'

const Section = styled.section`
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`

function Home() {
  return (
    <Section>
        <CoverVideo />
        <h1>Logo</h1>
        <h2>Navbar</h2>
    </Section>
  )
}

export default Home