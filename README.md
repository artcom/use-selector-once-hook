# Use Selector Once Hook

A react hook for memoizing the redux state on mount time. It povides the state of the store on the first rendering and does not lead to re-render due to state updates. Equivalent to redux *useSelector* hook, *useSelectorOnce* expects a selector function as parameter.
## Installation

```bash
npm i @artcom/use-selector-once-hook --save
```
## Example

```javascript
import React from "react"
import { useSelectorOnce } from "@artcom/use-selector-once-hook"

const MyComponent = () => {
  const memoizedCounter = useSelectorOnce(state => state.counter)
}
```

## Tests

See [tests](./test/useSelectorOnce.test.js).

```bash
npm i && npm run test
```