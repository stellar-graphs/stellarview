import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CardProps extends React.PropsWithChildren {
  prev?: () => void;
  next: () => void;
  nextDisabled?: boolean;
  title: string;
  description: string;
  nextLabel: string;
  prevLabel?: string;
}

export const CardWithChildren: React.FC<CardProps> = (props) => {
  
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {props.children}
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>{props.prev && <Button variant="outline" onClick={props.prev}>{props.prevLabel}</Button>}</div>
        <Button disabled={props.nextDisabled} onClick={props.next}>{props.nextLabel}</Button>
      </CardFooter>
    </Card>
  );
};
