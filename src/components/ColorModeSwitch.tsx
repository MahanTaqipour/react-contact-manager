import {
  HStack,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text
        whiteSpace="nowrap"
        fontWeight="bold"
        color={useColorModeValue("gray.600", "white")}
      >
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
