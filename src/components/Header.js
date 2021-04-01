import { useState } from 'react';
import { Flex, Box, Text, Link, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png'

const MenuItem = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      mb={8}
      p={8}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    >
      <Box>
        <Image src={logo} boxSize="96px" alt="Logo" />
      </Box>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <Text>Close</Text> : <Text>Open</Text>}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Open Mic List</MenuItem>
          <MenuItem to="/podcasts">Comedy Shows</MenuItem>
          <MenuItem to="/playlists">Book a Tour</MenuItem>
          <MenuItem to="/playlists">Venues</MenuItem>
          <MenuItem to="/playlists">News</MenuItem>
          <MenuItem to="/playlists">Podcast</MenuItem>
          <MenuItem to="/search" isLast>
            About
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
