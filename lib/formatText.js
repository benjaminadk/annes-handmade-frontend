export default function formatText(str) {
  const arr = str.replace('_', ' ').split(' ')
  return arr.map(el => el.charAt(0).toUpperCase() + el.substr(1).toLowerCase()).join(' ')
}
