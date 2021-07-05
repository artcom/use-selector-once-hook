# Use Selector Once Hook

A react hook for memoizing the redux state on mount time. By leveraging redux *useStore* and redux *useCallback*, no re-renderings are triggered on store updates. A component that uses this hook gets the state of the store at mount time on the first rendering.

## Example

```javascript
import React from "react"
import { useSelectorOnce } from "@artcom/use-selector-once-hook"

const MyComponent = ({  }) => {
  const memoizedCounter = useSelectorOnce(state => state.counter)
}
```

## Tests

Checkout the [tests](./test/useSelectorOnce.test.js).

```bash
npm i && npm run test
```