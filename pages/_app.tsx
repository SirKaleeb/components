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
  @import url('https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

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
