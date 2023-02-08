"use client";

import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      bg="#6B46C1"
      color="gray.50"
      textAlign={["left", "left", "center"]}
      pt={["60px", "90px", "90px"]}
      pb="198px"
      px="8"
      as="section"
    >
      <Heading fontSize={["3xl", "3xl", "5xl"]} fontWeight="extrabold">
        Simple pricing for your business
      </Heading>
      <Text fontSize={["lg", "lg", "2xl"]} fontWeight="medium" pt="4">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
};

export default Header;
