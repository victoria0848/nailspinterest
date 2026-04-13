export const fetchNailImages = async (query: string) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=DIN_API_KEY`
  );

  const data = await res.json();

  return data.results.map((img: any) => ({
    id: img.id,
    url: img.urls.small,
    alt: img.alt_description,
  }));
};