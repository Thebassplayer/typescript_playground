type Result = {
  title: string;
  url: string;
  abstract: string;
};

type SearchOptions = {
  query: string;
  tags?: string[];
};

function search(query: string, tags?: string[]): Promise<Result[]> {
  let queryString = `?query=${query}`;
  if (tags && tags.length) {
    queryString += `&tags=${tags.join()}`;
  }
  return fetch(`/search${queryString}`).then(response => response.json());
}

type SearchFn = typeof search;

declare function displaySearch(
  inputId: string,
  outputId: string,
  search: SearchFn
): void;

displaySearch("searchField", "result", function (query, tags) {
  return Promise.resolve([
    {
      title: `The ${query} test book`,
      url: `/${query}-design-patterns`,
      abstract: `A practical book on ${query}`,
    },
  ]);
});
