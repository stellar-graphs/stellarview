"use client";
import { CardWithChildren } from "@/components/Layouts/CardWithForm";
import { MultiSelectBasic } from "@/components/Layouts/MultiSelect";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { graphSelectionActions } from "@/lib/store";
import { useGetAllTypesQuery } from "../graphSlice/typeApi";
import clsx from "clsx";

export const SelectTypes: React.FC = () => {
  const router = useRouter();
  const { data, error, isLoading } = useGetAllTypesQuery(undefined);
  const graphSelection = useAppSelector((state) => state.graphSelection);
  const currentSelection = useAppSelector((state) => state.graphSelection.types);
  const dispatch = useAppDispatch();
  return (
    <CardWithChildren
      title="Step 1/3: Types to include"
      description="Select the object types to include in the graph"
      next={() => router.push("/graph/select-edges")}
      nextDisabled={currentSelection.length === 0 || graphSelection.graphName === ""}
      nextLabel="Next"
    >
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name"  className={clsx()}>Graph name</Label>
            <Input
              id="name"
              value={graphSelection.graphName}
              placeholder="Name of your graph"
              onChange={(e) => dispatch(graphSelectionActions.setGraphName(e.target.value))}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Included types</Label>
            {error && <p>Error...</p>}
            {isLoading && <p>Loading...</p>}
            {data && <MultiSelectBasic
              currentSelection={currentSelection}
              onSelect={(selection) => dispatch(graphSelectionActions.addType(selection))}
              onDeselect={(selection) => dispatch(graphSelectionActions.removeType(selection))}
              selectable={data}
            />}


            {/* <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select> */}
          </div>
        </div>
      </form>
    </CardWithChildren>
  );
};
