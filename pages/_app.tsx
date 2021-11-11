import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import styled from '@emotion/styled'

const theme = extendTheme({
  fonts: {
    heading: 'Mohave',
    body: 'Mohave',
  },
})

const Everything = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

  * {
    font-family: 'Mohave', sans-serif;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Everything>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Everything>
  )
}

export default MyApp
