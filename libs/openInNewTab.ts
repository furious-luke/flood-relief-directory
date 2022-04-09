export function openInNewTab(e: React.MouseEvent<HTMLAnchorElement>) {
  e.stopPropagation()
  e.preventDefault()
  const url = (e.target as HTMLAnchorElement).getAttribute('href') as string
  window.open(url, '_blank')?.focus()
}
