import { Box, Flex } from '@/app/chakra/chakra';
import React from 'react';

const Navbar = () => {
	return (
		<Flex justifyContent={'space-between'} py={6} alignItems={'center'}>
			<Box>Home</Box>
		</Flex>
	);
};

export default Navbar;
