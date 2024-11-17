const API_KEY = "W621so5AbFY_ZgjAfHYJPp_Mx0EpIMR7jPuCT3Myn2Y";
export const getPhotos = async (query, page = 1) => {
  const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();
  return {
    total: data.total,
    results: data.results.map((image) => ({
      id: image.id,
      alt: image.alt_description || "Image",
      smallUrl: image.urls.small,
      regularUrl: image.urls.regular,
      likes: image.likes,
      author: image.user.name,
    })),
    per_page: 12,
  };
};
