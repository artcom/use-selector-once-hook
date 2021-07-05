import { useCallback } from "react"
import { useStore } from "react-redux"

export function useSelectorOnce(selector) {
  const store = useStore()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMemoizedState = useCallback(() => store.getState(), [])
  const storeState = getMemoizedState()

  return selector(storeState)
}
