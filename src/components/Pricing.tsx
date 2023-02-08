"use client";
import React from "react";
import { Box, Flex, Heading, Text, Button, Stack } from "@chakra-ui/react";
import ListItem from "./ListItem";

const Pricing = () => {
  return (
    <Box mx="6">
      <Box
        maxW="992px"
        m="auto"
        mt="-40 "
        borderRadius="xl"
        overflow="hidden"
        boxShadow="2xl"
        as="section"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box
            bg="#F0EAFB"
            p={["30px", "50px", "50px"]}
            textAlign="center"
            color="gray.900"
          >
            <Text fontSize="2xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading
              as="h3"
              fontSize={["5xl", "5xl", "6xl"]}
              fontWeight="extrabold"
              mt="4"
            >
              $329
            </Heading>
            <Text fontSize="lg" fontWeight="medium" mt="2">
              billed just once
            </Text>
            <Button
              fontSize="md"
              fontWeight="bold"
              mt="6"
              w={["220px", "282px", "282px"]}
              h="51px"
              colorScheme="#6B46C1"
              bg={"#6B46C1"}
            >
              Get Started
            </Button>
          </Box>
          <Box p={["6", "12", "12"]} color="gray.700" bg="white">
            <Text fontSize="lg" fontWeight="normal" mb="6">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="16px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
