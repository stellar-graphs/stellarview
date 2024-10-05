import { getTerminusdbClient } from "@/lib/terminusdb";

export const dynamic = "force-static";

export async function GET() {
  const { client, /* info, */ WOQL } = await getTerminusdbClient()

  client.db("Hackathons");
  client.checkout("nasa-biology");
  const connectedProperties = WOQL.distinct("v:predicate",WOQL.select("v:predicate", WOQL.and(
    WOQL.triple("v:source", "v:predicate", "v:destination"),
    WOQL.triple("v:destination", "rdf:type", "v:type"),
    WOQL.not(WOQL.quad("v:type", "sys:subdocument", "v:select", "schema")),
    WOQL.not(WOQL.eq("v:type", "rdf:List")),
  )));
  const result = await client.query(connectedProperties);
  const data = result.bindings.map((binding:any) => binding.predicate).map((item:string)=> item.replace("@schema:", ""));

  return Response.json(data);
}
