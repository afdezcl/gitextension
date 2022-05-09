import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import useExtensions from "./useExtension"

test('should get extensions and loading correctly', () => {
  const { result } = renderHook(() => useExtensions('afdezcl', 'afdezcl'))
  
  expect(result.current).toEqual({loading: true, extensions: {}})
  act(() => {
    result.current.extensions = {md: 1, js: 2, ts: 3}
    result.current.loading = false
  })
  expect(result.current).toEqual({loading: false, extensions: {md: 1, js: 2, ts: 3}})  
})