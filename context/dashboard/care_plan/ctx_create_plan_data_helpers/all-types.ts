import { SBSG1Props } from "./sbsg1"
import { SBSG2Props } from "./sbsg2"
import { SBSG3Props } from "./sbsg3"
import { TABSTitleChooserProps } from "./tabs-title-chooser"

export type AllDataType = {
  [key in `${typeof SBSG1Props.name}`]: typeof SBSG1Props.types
} & {
  [key in `${typeof SBSG2Props.name}`]: typeof SBSG2Props.types
} & { [key in `${typeof SBSG3Props.name}`]: typeof SBSG3Props.types } & {
  [key in `${typeof TABSTitleChooserProps.name}`]: typeof TABSTitleChooserProps.types
}

/* 

!FH0

Create all the props and types for all the components remaining
*/
