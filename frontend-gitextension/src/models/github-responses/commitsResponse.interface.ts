export interface CommitsResponse {
  sha: string,
  node_id: string,
  url: string,
  html_url: string,
  author: {
    date: string,
    name: string,
    email: string
  },
  committer: {
    date: string,
    name: string,
    email: string
  },
  message: string,
  tree: {
    url: string,
    sha: string
  },
  parents: [
    {
      url: string,
      sha: string,
      html_url: string
    }
  ],
  verification: {
    verified: false,
    reason: string,
    signature: null,
    payload: null
  }
}