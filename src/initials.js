export function initials (value) {
  let initials = ''
  let parts = value.split(/[ -]/)
  for (var i = 0; i < parts.length; i++) {
    initials += parts[i].charAt(0)
  }
  if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
    initials = initials.replace(/[a-z]+/g, '')
  }
  initials = initials.substr(0, 3).toUpperCase()
  return initials
}
