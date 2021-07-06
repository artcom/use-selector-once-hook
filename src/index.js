import { useRef } from "react"
import { useStore } from "react-redux"

export function useSelectorOnce(selector) {
  const store = useStore()
  const state = useRef()

  if (!state.current) {
    state.current = store.getState()
  }

  return selector(state.current)
}
