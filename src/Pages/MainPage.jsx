import React from 'react';
import { Box, Heading } from "@chakra-ui/react";
// import PropTypes from 'prop-types';

const MainPage = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.100">
            <Heading>Welcome to Home</Heading>
        </Box>
    );
};

MainPage.propTypes = {
    
};

export default MainPage;