"use client";
import { CardWithChildren } from "@/components/Layouts/CardWithForm";
import { MultiSelectBasic } from "@/components/Layouts/MultiSelect";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useGetAllPredicatesQuery } from "../graphSlice/predicateApi";
import { graphSelectionActions } from "@/lib/store";
import { loadGraph } from "../graphSlice/actions";

export const SelectTypes: React.FC = () => {
  const router = useRouter();
  const { data, error, isLoading } = useGetAllPredicatesQuery(undefined);
  const currentSelection = useAppSelector((state) => state.graphSelection.predicates);
  const dispatch = useAppDispatch();
  const types = useAppSelector((state) => state.graphSelection.types);
  const predicates = useAppSelector((state) => state.graphSelection.predicates);
  return (
    <CardWithChildren
      title="Step 2/3: Edges to include"
      description="Select the type edges to include in the graph"
      next={() => dispatch(loadGraph(types, predicates, () => router.push("/graph/show-relations")))}
      prev={() => router.push("/graph/select-types")}
      nextLabel="Next"
      nextDisabled={currentSelection.length === 0}
      prevLabel="Prev"
    >
      <form>
        <div className="grid w-96 items-center gap-4">
          <div className="flex flex-col space-y-1.5 md:min-w-96">
            <Label htmlFor="framework">Included edges</Label>
            {error && <p>Error...</p>}
            {isLoading && <p>Loading...</p>}
            {data && (
              <MultiSelectBasic
                currentSelection={currentSelection}
                onSelect={(selection) => dispatch(graphSelectionActions.addPredicate(selection))}
                onDeselect={(selection) => dispatch(graphSelectionActions.removePredicate(selection))}
                selectable={data}
              />
            )}
            {/* <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" /> */}
          </div>
          {/* <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>
      </form>
    </CardWithChildren>
  );
};
