import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Box, Flex } from '@chakra-ui/react'

const MainLayout = ({ children }: any) => {
  return (
    <Flex direction="column">
      <Navbar />
      <Box p={12}>{children}</Box>
      <Footer />
    </Flex>
  )
}

export default MainLayout
