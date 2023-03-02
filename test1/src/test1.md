```js


/**
 * Fake API
 */

const fakeAPI: SearchOptions = {
  query: "test",
  tags: ["fake", "api"],
};

async function fakeSearchAPI({
  query,
  tags,
}: SearchOptions): Promise<Result[]> {
  // Simulate the network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Generate some fake results
  const results: Result[] = [];
  for (let i = 0; i < 10; i++) {
    results.push({
      title: `Result ${i + 1} for query "${query}"`,
      url: `https://www.example.com/${query}/${i + 1}`,
      abstract: `This is a fake result for the query "${query}" with tag "${
        tags ? tags.join(", ") : "none"
      }".`,
    });
  }

  return results;
}

/**
 * Search for results
 */

type Result = {
  title: string;
  url: string;
  abstract: string;
};

type SearchOptions = {
  query: string;
  tags?: string[];
};

async function search({ query, tags }: SearchOptions): Promise<Result[]> {
  let queryString = `?q=${query}`;

  tags
    ? tags.length > 0
      ? (queryString += `&tags=${tags.join(",")}`)
      : (queryString = `&tags=${tags}`)
    : null;

  const response = await fetch(`/search${queryString}`);
  return (await response.json()) as Promise<Result[]>;
}

search(fakeAPI).then(result => {
  console.log(result);
});


```
