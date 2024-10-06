// const TerminusClient = require("@terminusdb/terminusdb-client");
import TerminusClient from "@terminusdb/terminusdb-client";

const token = process.env.DFRNT_TOKEN;
const client = new TerminusClient.WOQLClient(process.env.DFRNT_ENDPOINT, {
  user: process.env.DFRNT_USER,
  organization: process.env.DFRNT_TEAM,
});
client.setApiKey(token);

const terminusdb = {
  connectedClient: undefined,
  info: undefined,
};

export const getTerminusdbClient = async () => {
  if (!terminusdb.connectedClient) {
    terminusdb.info = await client.connect();
    client.db(process.env.DFRNT_DB);
    client.checkout("main");
    terminusdb.connectedClient = client;
  }
  if (!terminusdb.connectedClient) {
    throw new Error("Failed to connect to TerminusDB");
  }
  return {
    WOQL: TerminusClient.WOQL,
    info: terminusdb.info,
    client: terminusdb.connectedClient as any,
  };
};
