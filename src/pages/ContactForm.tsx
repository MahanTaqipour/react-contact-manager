import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdClose } from "react-icons/io";
import useContacts from "../store";
import { useEffect, useState } from "react";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be in 10-digit format (000-000-0000)",
  }),
  email: z.string().email({ message: "Invalid email address" }),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const contact = useContacts((s) => s.currentContact);
  const addContact = useContacts((s) => s.add);
  const editContact = useContacts((s) => s.edit);
  const [isEditing, setIsEditing] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: contact,
  });

  useEffect(() => {
    reset(contact);
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }, [contact, reset]);
  const onSubmit = (data: FormData) => {
    isEditing
      ? editContact(contact.id, { id: contact.id, ...data })
      : addContact({ id: 1, ...data });
  };

  return (
    <Box
      p={8}
      // borderWidth={1}
      borderRadius="20px"
      w={"70%"}
      marginX={"auto"}
      marginTop={"20px"}
      minH={{ base: "50vh", md: "60vh", lg: "70vh" }}
      shadow={useColorModeValue(
        "0 0 10px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.3)",
        "0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.3)"
      )}
    >
      <HStack justifyContent={"space-between"} mb={"20px"}>
        <Text fontSize="xl" fontWeight={"bold"}>
          {isEditing ? `Editing ${contact.name}` : ""}
        </Text>
        <Button
          onClick={() => {
            reset({
              name: "",
              phone: "",
              email: "",
            });
            setIsEditing(false);
          }}
        >
          <IoMdClose />
        </Button>
      </HStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={10} marginTop={"px"}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="Your Name"
              {...register("name")}
              borderRadius="20px"
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.phone}>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              id="phone"
              placeholder="000-000-0000"
              {...register("phone")}
              borderRadius="20px"
            />

            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="Your Email"
              {...register("email")}
              borderRadius="20px"
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <Button
            w={"full"}
            colorScheme="teal"
            type="submit"
            isLoading={isSubmitting}
            borderRadius="20px"
          >
            {isEditing ? "Done" : "Add"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
