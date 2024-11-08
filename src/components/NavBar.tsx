import { Box, useColorModeValue } from "@chakra-ui/react";
import SearchBox from "./SearchBox";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Box
      as="nav"
      h="70px"
      bg={useColorModeValue("white", "gray.800")}
      color="white"
      display="flex"
      alignItems="center"
      padding="25px"
      marginBottom={"20px"}
      shadow={useColorModeValue(
        "0 0 10px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.3)",
        "0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.3)"
      )}
    >
      <SearchBox />
      <ColorModeSwitch />
    </Box>
  );
};

export default NavBar;
