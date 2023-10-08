export default async function fetchMeli(
  resource: string,
  params?: Record<string, string>
) {
  return fetch(
    `${resource}${params ? `?${new URLSearchParams(params)}` : ""}`
  ).then((res) => res.json());
}
