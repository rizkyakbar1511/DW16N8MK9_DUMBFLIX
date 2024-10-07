export async function getData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
      },
    });
    const results = await res.json();

    return results;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
