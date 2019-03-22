export default function formatFilename(folder, filename) {
  const clean = filename
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9.]/g, '-')
  return `${folder}/${clean}`
}
