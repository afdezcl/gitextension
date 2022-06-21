import { useState, useEffect } from 'react'
import { getExtensions } from '../services/getExtension'

export default function useExtensions(user: string, repo: string): { 
  loading: boolean, 
  extensions: Record<string, number> | null, 
  error: boolean 
} {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [extensions, setExtensions] = useState<Record<string, number>>({})

  useEffect(() => {
    setLoading(true)
    getExtensions(user, repo).then((extensionsList: Record<string, number>) => {
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
