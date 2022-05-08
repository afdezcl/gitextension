import { CommitsResponse } from "../models/github-responses/commitsResponse.interface"

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
    .catch((err) => {
      console.error("Request failed", err)
    })
}