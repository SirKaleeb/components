import Layout from '../layouts/Main'
import { Flex, Text, Code, Image, Box } from '@chakra-ui/react'

const AboutPage = () => {
  return (
    <Layout>
      <Flex justifyContent="center" mb={16}>
        <Text as="b" fontSize="5xl">
          About{' '}
          <Code fontSize="5xl" boxShadow="2xl">
            Components
          </Code>
        </Text>
      </Flex>
      <Flex>
        <Box w="40vw" textAlign="left" px={8}>
          <Text as="b" fontSize="4xl">
            About the creator.
          </Text>
        </Box>
        <Box w="60vw">
          <Flex justifyContent="center">
            <Image
              src="/me.jpg"
              alt="Me!"
              w="50%"
              rounded="lg"
              boxShadow="2xl"
            />
          </Flex>
        </Box>
      </Flex>
      {/* <Table>
        <Tbody>
          <Tr width="50%">
            <Td></Td>
          </Tr>
          <Tr width="50%">
            <Td>
              <Flex justifyContent="center">
                <Image
                  src="/me.jpg"
                  alt="Me!"
                  w="40%"
                  rounded="lg"
                  boxShadow="2xl"
                />
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table> */}
    </Layout>
  )
}

export default AboutPage
