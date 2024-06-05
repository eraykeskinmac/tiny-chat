export async function fetcher(url: RequestInfo, init?: RequestInit) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });

  const body = await res.json();
}
