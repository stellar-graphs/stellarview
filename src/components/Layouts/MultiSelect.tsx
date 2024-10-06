'use client'

import {
   MultiSelect,
   MultiSelectContent,
   MultiSelectItem,
   MultiSelectList,
   MultiSelectTrigger,
   MultiSelectValue,
} from '@/components/ui/multi-select'

interface MultiSelectBasicProps {
  selectable: Array<string>
  onSelect: (value: string) => void;
  onDeselect: (value: string) => void;
  currentSelection: Array<string>;
}
export const MultiSelectBasic:React.FC<MultiSelectBasicProps> = (props) =>  {
   return (
      <MultiSelect value={props.currentSelection} onSelect={props.onSelect} onDeselect={props.onDeselect}>
         <MultiSelectTrigger className="w-full">
            <MultiSelectValue placeholder="Select stack" />
         </MultiSelectTrigger>
         <MultiSelectContent>
            <MultiSelectList>
               {/* <MultiSelectGroup heading="React"> */}
               {props.selectable?.map((option) => (

                 <MultiSelectItem key={option} value={option}>{option}</MultiSelectItem>
                ))}
               {/* </MultiSelectGroup>
               <MultiSelectGroup heading="Vue">
                  <MultiSelectItem value="vue">Vue</MultiSelectItem>
                  <MultiSelectItem value="nuxt">Nuxt</MultiSelectItem>
               </MultiSelectGroup>
               <MultiSelectGroup heading="Others">
                  <MultiSelectItem value="angular">Angular</MultiSelectItem>
                  <MultiSelectItem value="svelte">Svelte</MultiSelectItem>
               </MultiSelectGroup> */}
            </MultiSelectList>
         </MultiSelectContent>
      </MultiSelect>
   )
}
