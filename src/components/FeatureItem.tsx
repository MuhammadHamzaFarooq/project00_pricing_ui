"use client";
import React from "react";
import { HStack, Icon, Text, StackProps } from "@chakra-ui/react";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

const FeatureItem = (props: FeatureProps) => {
  const { children, icon, ...rest } = props;
  return (
    <HStack {...rest} spacing='24px'>
      <Icon as={icon}  />
      <Text fontSize="lg" maxW='300px' fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

export default FeatureItem;
