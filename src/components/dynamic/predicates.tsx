"use client";

import { useGetAllPredicatesQuery } from "@/app/graph/graphSlice/predicateApi";

export const Predicates: React.FC = () => {
  const { data, /* error, isLoading */ } = useGetAllPredicatesQuery(undefined);
  // const { items } = useGetAllPredicatesQuery([], {
  //   selectFromResult: ({ data }: { data: any }) => ({
  //     items: data,
  //   }),
  // });

  return (
    <>
      Available predicates:
      <pre>
        {data?.map((predicate: string) => (
          <div key={predicate} className="w-full">{predicate}</div>
        ))}
      </pre>
    </>
  );
};
