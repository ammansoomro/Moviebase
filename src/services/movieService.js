export const fetchMoviesFromAPI = async ({
  page = 1,
  search = "",
  itemsPerPage = 20,
}) => {
  const baseUrl = "https://yts.mx/api/v2/list_movies.json";
  const params = new URLSearchParams({
    limit: itemsPerPage,
    page,
    ...(search ? { query_term: search } : { sort_by: "year" }),
  });

  const fullUrl = `${baseUrl}?${params.toString()}`;
  const wrappedUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
    fullUrl
  )}`;

  const response = await fetch(wrappedUrl);
  const result = await response.json();
  const data = JSON.parse(result.contents);

  return {
    movies: data.data.movies || [],
    movieCount: data.data.movie_count || 0,
  };
};
