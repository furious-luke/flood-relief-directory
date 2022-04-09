export function openInNewTab(e: React.MouseEvent<HTMLElement>) {
  e.stopPropagation()
  e.preventDefault()
  const anchor = (e.target as HTMLElement).closest('a') as HTMLAnchorElement
  const url = anchor.getAttribute('href') as string
  window.open(url, '_blank')?.focus()
}
