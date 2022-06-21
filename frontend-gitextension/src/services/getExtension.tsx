import { CommitsResponse } from "../models/github-responses/commitsResponse.interface"
import { GitHubTree, GitHubTreesResponse } from "../models/github-responses/treesReponse.interface"

const calculateFilesOcurrences = (files: string[]): Record<string, number> => {
  return files.reduce((acc: any, curr: string) => {
    if(!curr.includes('.')) return {...acc}
    const indexDoc = curr.indexOf(".")
    const fileName = curr.substring(indexDoc + 1, curr.length)
    return acc[fileName] ? ++acc[fileName] : (acc[fileName] = 1), acc
  }, {})
} 

const fromApiResponseToExtensions = (apiResponse: GitHubTreesResponse) => {
  const files = apiResponse.tree.map((item: GitHubTree) => {
    return item.path
  })
  const extensionsList = calculateFilesOcurrences(files)
  return extensionsList
}

export const getExtensions = (user: string, repo: string) => {
  const API = 'https://api.github.com/repos/'
  
  return fetch(
    `${API}${user}/${repo}/commits`
  )
    .then((response) => response.json())
    .then((data: CommitsResponse[]) => {
      const sha = data[0].sha
      return fetch(
        `${API}${user}/${repo}/git/trees/${sha}`
      )
    })
    .then((response) => response.json())
    .then(fromApiResponseToExtensions)
}