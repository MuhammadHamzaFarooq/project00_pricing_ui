"use client";
import React from "react";
import { Box, HStack, Stack } from "@chakra-ui/react";
import FeatureItem from "./FeatureItem";
import { NoFees, MoneyBack, MonthlySubscription } from "../icons/Icons";

const Features = () => {
  return (
    <Box maxW='1024px' mx='auto' px='8' pt='60px' pb='8' >
      <Stack direction={['column', 'column', 'row']} spacing='40px'  >
        <FeatureItem icon={MoneyBack}>
          30 days money back Guarantee
        </FeatureItem>
        <FeatureItem icon={NoFees}>No setup fees 100% hassle-free</FeatureItem>
        <FeatureItem icon={MonthlySubscription}>
          No monthly subscription Pay once and for all
        </FeatureItem>
      </Stack>
    </Box>
  );
};

export default Features;
