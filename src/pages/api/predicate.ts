import { getTerminusdbClient } from "@/lib/terminusdb";
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if(!(req.method === "GET")) throw new Error("Method not allowed");

  const { client, /* info, */ WOQL } = await getTerminusdbClient()

  const connectedProperties = WOQL.distinct("v:predicate",WOQL.select("v:predicate", WOQL.and(
    WOQL.triple("v:source", "v:predicate", "v:destination"),
    WOQL.triple("v:destination", "rdf:type", "v:type"),
    WOQL.not(WOQL.quad("v:type", "sys:subdocument", "v:select", "schema")),
    WOQL.not(WOQL.eq("v:type", "rdf:List")),
  )));
  const result = await client.query(connectedProperties);
  const data = result.bindings.map((binding:any) => binding.predicate).map((item:string)=> item.replace("@schema:", ""));


  res.status(200).json(data)
}


// export const dynamic = "force-static";

