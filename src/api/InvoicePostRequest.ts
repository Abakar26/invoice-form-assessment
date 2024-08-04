import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CREATE_INVOICE_MUTATION } from "../queries/InvoiceQuery";

const apiUrl = process.env.REACT_APP_API_URL;

const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

export const createInvoice = async (input: any) => {
  const { data } = await client.mutate({
    mutation: CREATE_INVOICE_MUTATION,
    variables: { input },
  });

  return data.createInvoice;
};
