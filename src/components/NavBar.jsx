import {Avatar, Box, Flex, Heading, Spacer} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <Box p={2} backgroundColor='telegram.500'>
      <Flex alignItems='center'>
        <Link to='/'>
          <Heading as='h3'>MikMAN</Heading>
        </Link>
        <Spacer />
        <Avatar size='sm'></Avatar>
      </Flex>
    </Box>
  );
}

export default NavBar;
