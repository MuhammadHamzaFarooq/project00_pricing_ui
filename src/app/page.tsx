"use client";

import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";

export default function Home() {
  return (
    <Box>
      <Header />
      <Pricing />
      <Features />
    </Box>
  );
}
