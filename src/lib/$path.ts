export const pagesPath = {
  "blog": {
    $url: (url?: { hash?: string }) => ({ pathname: '/blog' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
