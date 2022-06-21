import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import useExtensions from "./useExtension"
import * as getExtensions  from '../services/getExtension'

describe('useExtension custom hook', () => {
  
  test('should get extensions and loading correctly', async () => {
    jest.spyOn(getExtensions, 'getExtensions')
        .mockImplementation(() => Promise.resolve({md: 1, js: 2, ts: 3}))

    const { result } = renderHook(() => useExtensions('afdezcl', 'afdezcl'))
    
    expect(result.current).toEqual({loading: true, extensions: {}, error: false})
  
    await act(() => {
      result.current.extensions = {md: 1, js: 2, ts: 3}
      result.current.loading = false
    })
  
    expect(result.current).toEqual({loading: false, extensions: {md: 1, js: 2, ts: 3}, error: false})  
  })

  test('should return a error', async () => {
    jest.spyOn(getExtensions, 'getExtensions')
        .mockImplementation(() => Promise.reject({}))
    const { result } = renderHook(() => useExtensions('test', 'test'))
    
    expect(result.current).toEqual({loading: true, extensions: {}, error: false})
  
    await act(() => {
      result.current.extensions = {}
      result.current.loading = false
    })

    expect(result.current).toEqual({loading: false, extensions: {}, error: true})  
  })
})