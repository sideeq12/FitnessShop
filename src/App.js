import { ThemeProvider } from 'styled-components';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import GlobalStyles from './styles/Globalstyle';
import { dark } from './styles/Themes';
import { useRef } from 'react';
import "locomotive-scroll/dist/locomotive-scroll.css"
import Home from './sections/home';

function App() {

  const containerRef = useRef(null)
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={dark} ref={containerRef}>
    <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
   <Home />
  </main>
</LocomotiveScrollProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
