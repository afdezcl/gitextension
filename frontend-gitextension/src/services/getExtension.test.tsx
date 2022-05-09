import { getExtensions } from './getExtension'
import { FetchMock } from "jest-fetch-mock"

const fetchMock = fetch as FetchMock;

describe('getExtensions', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  
  test('should call fetch with the correct url', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{ sha: '123' }]))
    const urlCommits = 'https://api.github.com/repos/afdezcl/afdezcl/commits'
    const urlExt = 'https://api.github.com/repos/afdezcl/afdezcl/git/trees/123'

    await getExtensions('afdezcl', 'afdezcl')

    expect(fetch).toHaveBeenCalledWith(urlCommits)
    expect(fetch).toHaveBeenCalledWith(urlExt)
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  test('should throw error by a bad commits call', async () => {
    const call = fetchMock.mockResponseOnce(JSON.stringify(null))
    const urlCommits = 'https://api.github.com/repos/afdezcl/afdezcl/commits'    

    await getExtensions('afdezcl', 'afdezcl')

    expect(fetch).toHaveBeenCalledWith(urlCommits)    
    expect(fetchMock).toHaveBeenCalledTimes(1)  
    expect(call).toThrowError()  
  })
})
