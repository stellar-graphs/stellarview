import { getTerminusdbClient } from "@/lib/terminusdb";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (!(req.method === "POST")) throw new Error("Method not allowed");

  const { types, predicates } = JSON.parse(req.body);
  console.log(types, predicates);

  const { client, /* info, */ WOQL } = await getTerminusdbClient();

  const connectedProperties = /* WOQL.distinct("v:type",WOQL.select("v:type",  */ WOQL.and(
    

    // All types for src and dst are part of the set of types
    WOQL.or(...types.map((type: string) => WOQL.eq("v:src_type", `@schema:${type}`))),
    WOQL.or(...types.map((type: string) => WOQL.eq("v:dst_type", `@schema:${type}`))),
    // src is of kind document, and not subdoc
    WOQL.triple("v:src", "rdf:type", "v:src_type"),
    WOQL.not(WOQL.quad("v:src_type", "sys:subdocument", "v:select_2", "schema")),
    WOQL.not(WOQL.eq("v:src_type", "rdf:List")),
    // dst is of kind document, and not subdoc
    WOQL.triple("v:dst", "rdf:type", "v:dst_type"),
    WOQL.not(WOQL.quad("v:dst_type", "sys:subdocument", "v:select_1", "schema")),
    WOQL.not(WOQL.eq("v:dst_type", "rdf:List")),
    // the predicate is in the set of predicates
    WOQL.or(...predicates.map((predicate: string) => WOQL.eq("v:predicate", `@schema:${predicate}`))),
    // there is a triple that bind v:src and v:dst together
    WOQL.triple("v:src", "v:predicate", "v:dst"),
    // label
    WOQL.triple("v:src", "@schema:label", "v:src_label"),
    WOQL.triple("v:dst", "@schema:label", "v:dst_label"),

  ); /* )) */
  const result = await client.query(connectedProperties);
  const data = result.bindings;

  const edges:Array<GraphEdge> = data.map((edge: any) => ({
    // labels
    src_label: edge.src_label?.["@value"],
    dst_label: edge.dst_label?.["@value"],
    // iri
    src_iri: edge.src,
    dst_iri: edge.dst,
    //
    edge_name: edge.predicate.replace("@schema:", ""),
    //
    src_type: edge.src_type.replace("@schema:", ""),
    dst_type: edge.dst_type.replace("@schema:", ""),
  }));

  res.status(200).json(edges as any);
}

export interface GraphEdge {
  src_label: string;
  dst_label: string;
  src_iri: string;
  dst_iri: string;
  edge_name: string;
  src_type: string;
  dst_type: string;
}

// [
//   {
//       "dst": "Project/jrTmOvR-9XJkmT7L",
//       "dst_label": {
//           "@type": "xsd:string",
//           "@value": "Mything"
//       },
//       "dst_type": "@schema:Project",
//       "predicate": "@schema:predecessor",
//       "select_1": null,
//       "select_2": null,
//       "src": "Study/8opNDNWIHagAxumS",
//       "src_label": {
//           "@type": "xsd:string",
//           "@value": "My project"
//       },
//       "src_type": "@schema:Study"
//   },
//   {
//       "dst": "Project/RR-23",
//       "dst_label": {
//           "@type": "xsd:string",
//           "@value": "NASA RR-23 - Effects of Microgravity on Ocular Vascular Hydrodynamics"
//       },
//       "dst_type": "@schema:Project",
//       "predicate": "@schema:predecessor",
//       "select_1": null,
//       "select_2": null,
//       "src": "Study/OSD-379",
//       "src_label": {
//           "@type": "xsd:string",
//           "@value": "NASA OSD-379"
//       },
//       "src_type": "@schema:Study"
//   },
//   {
//       "dst": "Project/RR-23",
//       "dst_label": {
//           "@type": "xsd:string",
//           "@value": "NASA RR-23 - Effects of Microgravity on Ocular Vascular Hydrodynamics"
//       },
//       "dst_type": "@schema:Project",
//       "predicate": "@schema:predecessor",
//       "select_1": null,
//       "select_2": null,
//       "src": "Study/OSD-665",
//       "src_label": {
//           "@type": "xsd:string",
//           "@value": "NASA OSD-665"
//       },
//       "src_type": "@schema:Study"
//   },
//   {
//       "dst": "Project/RR-24",
//       "dst_label": {
//           "@type": "xsd:string",
//           "@value": "NASA RR-24 - Sample project"
//       },
//       "dst_type": "@schema:Project",
//       "predicate": "@schema:predecessor",
//       "select_1": null,
//       "select_2": null,
//       "src": "Study/Sample",
//       "src_label": {
//           "@type": "xsd:string",
//           "@value": "Sample Study"
//       },
//       "src_type": "@schema:Study"
//   },
//   {
//       "dst": "Study/OSD-379",
//       "dst_label": {
//           "@type": "xsd:string",
//           "@value": "NASA OSD-379"
//       },
//       "dst_type": "@schema:Study",
//       "predicate": "@schema:predecessor",
//       "select_1": null,
//       "select_2": null,
//       "src": "Study/Sample",
//       "src_label": {
//           "@type": "xsd:string",
//           "@value": "Sample Study"
//       },
//       "src_type": "@schema:Study"
//   },
//   {
//       "dst": "Study/OSD-665",
//       "dst_label": {
//           "@type": "xsd:string",
//           "@value": "NASA OSD-665"
//       },
//       "dst_type": "@schema:Study",
//       "predicate": "@schema:predecessor",
//       "select_1": null,
//       "select_2": null,
//       "src": "Study/Sample",
//       "src_label": {
//           "@type": "xsd:string",
//           "@value": "Sample Study"
//       },
//       "src_type": "@schema:Study"
//   }
// ]


// export const dynamic = "force-static";
