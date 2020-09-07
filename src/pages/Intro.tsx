import React from "react";
import { TextInput, Text, Button, Box } from "@primer/components";

const Intro = () => (
  <Box>
    <TextInput placeholder="facebook" />
    <Text>/</Text>
    <TextInput placeholder="react" />
    <Button>Go!</Button>
  </Box>
);

export default Intro;
