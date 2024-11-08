import ogs from 'open-graph-scraper';

/**
 * Fetches Open Graph data for a given URL.
 * @param {string} url - The URL to scrape for Open Graph metadata.
 * @returns {Promise<Object>} - An object containing Open Graph metadata.
 */
export async function scrapeOpenGraph(url) {
  if (!url) {
    throw new Error('URL is required');
  }

  const options = { url };
  const data = await ogs(options);
  const { html, result, response } = data;

  return { html, result, response };
}
