import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import useContacts from "../store";

const SearchBox = () => {
  const onSearch = useContacts((s) => s.onSearch);
  return (
    <InputGroup w="40%" m="0 auto">
      <InputLeftElement h="50px">
        <Icon as={FaSearch} color="gray.400" />
      </InputLeftElement>
      <Input
        h="50px"
        type="text"
        placeholder="Search..."
        bg={useColorModeValue("gray.50", "gray.700")}
        color="white"
        _placeholder={{ color: "gray.500" }}
        borderRadius="25px"
        focusBorderColor="gray.500"
        _focus={{
          shadow:
            " 0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.3)",
        }}
        onChange={(event) => onSearch(event.currentTarget.value)}
      />
    </InputGroup>
  );
};

export default SearchBox;
