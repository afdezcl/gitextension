export interface GitHubTree {
  path: string,
  mode: string,
  type: string,
  sha: string,
  size: number,
  url: string
}

export interface GitHubTreesResponse {
  sha: string,
  url: string,
  type: string,
  tree: GitHubTree[],
  truncated: boolean     
}
  