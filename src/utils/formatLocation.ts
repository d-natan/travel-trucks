export function formatLocation(location: string) {
  const parts = location.split(",");

  if (parts.length !== 2) return location;

  return `${parts[1].trim()}, ${parts[0].trim()}`;
}
