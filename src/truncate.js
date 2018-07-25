export function truncate (text, length, clamp) {
  clamp = clamp || '...'
  let node = document.createElement('div')
  node.innerHTML = text
  let content = node.textContent
  return content.length > length ? content.slice(0, length) + clamp : content
}
