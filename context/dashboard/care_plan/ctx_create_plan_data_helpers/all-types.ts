import { SBSG1Props } from "./sbsg1"
import { SBSG3Props } from "./sbsg3"

export type AllDataType = {
  [key in `${typeof SBSG1Props.name}`]: typeof SBSG1Props.types
} & { [key in `${typeof SBSG3Props.name}`]: typeof SBSG3Props.types }

/* 

!FH0

Create all the props and types for all the components remaining
*/
