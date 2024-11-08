import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
        "list"`,
        lg: `"nav nav"
        "list form"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "50% 50%",
      }}
      width="100%"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem area={"list"}>
        <ContactList />
      </GridItem>

      <Show above="lg">
        <GridItem area={"form"}>
          <ContactForm />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default Layout;
