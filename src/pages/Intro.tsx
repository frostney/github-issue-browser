import React from "react";
import { TextInput, Text, Link, Box } from "@primer/components";

const Intro = () => (
  <Box>
    <TextInput placeholder="facebook" />
    <Text>/</Text>
    <TextInput placeholder="react" />
    <Link as="button">Go!</Link>
  </Box>
);

export default Intro;
