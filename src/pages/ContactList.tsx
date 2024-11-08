import {
  Box,
  Button,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import { useState } from "react";
// import useContacts from "../hooks/useContacts";
import { FaUserCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import useContacts from "../store";

const ContactList = () => {
  // const [data, setContacts] = useState<Contact[]>(sampleContacts);
  // in real world app =>
  const contacts = useContacts((s) => s.contacts);
  const setCurrentContact = useContacts((s) => s.setCurrentContact);
  const deleteContact = useContacts((s) => s.delete);

  return (
    <Box>
      <List>
        {contacts?.map((contact) => (
          <ListItem
            marginX={"auto"}
            key={contact.id}
            background={useColorModeValue("gray.50", "gray.700")}
            marginY={"8px"}
            padding={"8px"}
            width={"85%"}
            borderRadius={"3xl"}
            shadow={useColorModeValue(
              "0 0 10px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.3)",
              "0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.3)"
            )}
            transition="all 0.3s ease"
            _hover={{
              background: useColorModeValue("gray.100", "gray.650"),
              shadow:
                " 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.3)",
            }}
          >
            <HStack
              _hover={{ "> div > button": { visibility: "visible" } }}
              justifyContent={"space-between"}
            >
              <ListIcon as={FaUserCircle} boxSize={"50px"} />
              <Text fontSize={"1xl"}>{contact.name}</Text>
              <Text>{contact.phone}</Text>
              <Box>
                <Button
                  mx={"2px"}
                  p={"8px"}
                  background={"transparent"}
                  onClick={() => {
                    setCurrentContact({
                      id: contact.id,
                      name: contact.name,
                      phone: contact.phone,
                      email: contact.email,
                    });
                  }}
                  visibility="hidden"
                  cursor="pointer"
                  _hover={{
                    background: "transparent",
                  }}
                >
                  <Icon as={MdEdit} />
                </Button>
                <Button
                  mx={"2px"}
                  p={"8px"}
                  background={"transparent"}
                  onClick={() => {
                    deleteContact(contact.id);
                  }}
                  visibility="hidden"
                  cursor="pointer"
                  _hover={{
                    background: "transparent",
                  }}
                >
                  <Icon as={MdDelete} />
                </Button>
              </Box>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContactList;
