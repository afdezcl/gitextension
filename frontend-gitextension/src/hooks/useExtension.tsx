import { useState, useEffect } from 'react'
import { GitHubTree, GitHubTreesResponse } from '../models/github-responses/treesReponse.interface'
import { getExtensions } from '../services/getExtension'

export default function useExtensions(user: string, repo: string) {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [extensions, setExtensions] = useState<Record<string, number>>({})

  const filterFilesWithoutExtensions = (paths: string[]) => {
    const files = paths.filter((item: string) => item.includes('.'))
    return files
  }

  const createObjectOfExtensions = (files: string[]) => {
    return files.reduce((acc: any, curr: string) => {
      const indexDoc = curr.indexOf(".")
      const file = curr.substring(indexDoc + 1, curr.length)
      return acc[file] ? ++acc[file] : (acc[file] = 1), acc
    }, {})
  }

  useEffect(() => {
    setLoading(true)
    getExtensions(user, repo).then((response: GitHubTreesResponse) => {
      const paths = response.tree.map((item: GitHubTree) => {
        return item.path
      })
      const files = filterFilesWithoutExtensions(paths)
      const extensionsList = createObjectOfExtensions(files)
      setExtensions(extensionsList)
      setError(false)
    }).catch(() => {
      setError(true)
    }).finally(() => {
      setLoading(false)
    })    
  }, [user, repo])

  return { loading, extensions, error }
}
