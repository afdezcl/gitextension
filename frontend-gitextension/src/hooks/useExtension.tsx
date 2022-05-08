import { useState, useEffect } from 'react'
import { GitHubTree, GitHubTreesResponse } from '../models/github-responses/treesReponse.interface'
import { getExtensions } from '../services/getExtension'

export default function useExtensions(user: string, repo: string) {
  const [loading, setLoading] = useState<boolean>(false)
  const [extensions, setExtensions] = useState<Record<string, number>[]>([])

  useEffect(() => {
    setLoading(true)
    getExtensions(user, repo).then((response: GitHubTreesResponse) => {
      const paths = response.tree.map((item: GitHubTree) => {
        return item.path
      })
      const files = paths.filter((item: string) => item.includes('.'))
      const extensionsList = files.reduce((acc: any, curr: string) => {
        const indexDoc = curr.indexOf(".")
        const file = curr.substring(indexDoc + 1, curr.length)
        return acc[file] ? ++acc[file] : (acc[file] = 1), acc
      }, {})
      setExtensions(extensionsList)
      setLoading(false)
    })    
  }, [user, repo])

  return { loading, extensions }
}
