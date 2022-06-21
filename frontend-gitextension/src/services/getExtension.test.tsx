import { getExtensions } from './getExtension'
import { FetchMock } from "jest-fetch-mock"

const fetchMock = fetch as FetchMock

describe('getExtensions', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
  
  test('should call fetch with the correct url', async () => {
    fetchMock.once(JSON.stringify([{ sha: '123' }]))
             .once(JSON.stringify({ tree: [{ "path": "README.md" }]}))
    const urlCommits = 'https://api.github.com/repos/afdezcl/afdezcl/commits'
    const urlExt = 'https://api.github.com/repos/afdezcl/afdezcl/git/trees/123'

    const returned = await getExtensions('afdezcl', 'afdezcl')

    expect(fetch).toHaveBeenCalledWith(urlCommits)
    expect(fetch).toHaveBeenCalledWith(urlExt)
    expect(fetchMock).toHaveBeenCalledTimes(2)
    expect(returned).toEqual({"md": 1})
  })
})
