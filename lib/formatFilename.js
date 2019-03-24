export default function formatFilename(folder, filename) {
  const clean = filename
    .trim()
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9.\-()]/g, '-')
  return `${folder}/${clean}`
}
