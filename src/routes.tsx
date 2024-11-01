import { path, tr } from "framer-motion/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ContactList from "./pages/ContactList";
import ContactForm from "./pages/ContactForm";
import ContactSearch from "./pages/ContactSearch";

createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/contact/list/", element: <ContactList /> },
      { path: "/contact/add/", element: <ContactForm /> },
      { path: "/contact/search/", element: <ContactSearch /> },
    ],
  },
]);
