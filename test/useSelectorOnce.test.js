/**
 * @jest-environment jsdom
 */

import React from "react"
import { render } from "@testing-library/react"
import { Provider as StoreProvider } from "react-redux"
import { createStore } from "redux"
import { useSelectorOnce } from "../src/index"

const results = []
const reducer = (state, action) => action.type === "INCREMENT" ? state + 1 : state
let store

const TestComponent = () => {
  const count = useSelectorOnce(state => state)
  results.push(count)
  return <></>
}

describe("useSelectorOnce", () => {
  beforeEach(() => {
    results.length = 0
    const initialState = 1
    store = createStore(reducer, initialState)
  })

  it("should not re-render on store updates", async () => {
    render(
      <StoreProvider store={ store }>
        <TestComponent />
      </StoreProvider>
    )

    store.dispatch({ type: "INCREMENT" })
    await delay(20)


    const renderCount = results.length

    expect(renderCount).toBe(1)
    expect(store.getState()).toBe(2)
  })

  it("should get correct value on first render", async () => {
    render(
      <StoreProvider store={ store }>
        <TestComponent />
      </StoreProvider>
    )

    await delay(20)

    const resultOfFirstRender = results[0]
    expect(resultOfFirstRender).toBe(1)
  })
})

function delay(time) {
  return new Promise(resolve => setTimeout(() => resolve(), time))
}
