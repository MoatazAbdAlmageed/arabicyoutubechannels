import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import tile from "../assets/pattern-tile-green.svg";

export const PatternBox = ({ showPattern = true, ...props }) => (
  <Box
    as="section"
    bg="youtube.700"
    borderTop="10px solid"
    borderColor="youtube.400"
    {...(showPattern && {
      bgImage: `url(${tile})`,
      bgSize: "1018px",
      bgPos: "top center",
    })}
    {...props}
  />
);

export const PatternBoxInner = (props) => (
  <Box
    py="80px"
    position="relative"
    zIndex="1"
    overflow="hidden"
    textAlign="center"
    maxW="640px"
    mx="auto"
    px={6}
    {...props}
  />
);

// TODO: Add the logic to show this component based on if newsletter package exists
export const Newsletter = (props) => (
  <PatternBox {...props}>
    <Box
      py="80px"
      position="relative"
      zIndex="1"
      overflow="hidden"
      textAlign="center"
      maxW="640px"
      mx="auto"
      px={6}
    >
      <Heading color="white">Never miss an update!</Heading>
      <Text mt={4} fontSize="xl" color="youtube.400">
        Receive the latest framework releases, new features, blog posts and
        tutorials.
      </Text>
      <SubscribeForm />
    </Box>
  </PatternBox>
);

const SubscribeInput = (props) => (
  <Box
    as="input"
    width="100%"
    display="block"
    bg="white"
    height="60px"
    border="none"
    px="15px"
    fontSize="1.125rem"
    placeholder="Subscribe to our newsletter"
    _placeholder={{ color: "gray.500" }}
    {...props}
  />
);

const SubscribeButton = (props) => (
  <Box
    as="button"
    transition="background-color ease .25s"
    bg="white"
    fontSize={{ base: "1.625rem" }}
    cursor="pointer"
    textAlign="center"
    color="youtube.400"
    flexShrink="0"
    height="60px"
    minWidth="60px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    _hover={{
      bg: "youtube.400",
      color: "white",
    }}
    _focus={{
      bg: "youtube.400",
      color: "white",
    }}
    {...props}
  >
    <Box
      focusable="false"
      width="40px"
      height="auto"
      as={IoIosArrowRoundForward}
    />
  </Box>
);

const SubscribeForm = (props) => (
  <Flex as="form" mt="40px" {...props}>
    <SubscribeInput />
    <SubscribeButton />
  </Flex>
);
