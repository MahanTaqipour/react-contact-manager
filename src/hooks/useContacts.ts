import { useQuery } from "@tanstack/react-query";
import Contact from "../entities/Contact";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Contact>("/contacts/");

const useContacts = (sort?: string) =>
  useQuery<Contact[], Error>({
    queryKey: ["contacts", sort],
    queryFn: () =>
      apiClient.getAll({
        params: {
          sort: sort,
        },
      }),
  });

export default useContacts;
