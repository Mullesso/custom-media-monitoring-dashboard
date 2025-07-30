import axios from 'axios';

// Create an Axios instance configured with the API base URL.  The base URL is
// loaded from the REACT_APP_API_BASE_URL environment variable.  When
// deploying, set this variable in your environment or on Netlify.  If it
// isn’t defined, axios will default to the current origin.
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || '';
const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
});

/**
 * Fetch articles from the back‑end API.
 *
 * @param {string} query Search keywords
 * @param {string} sortBy One of 'date', 'relevance' or 'authority'
 * @returns {Promise<object[]>} Resolves with an array of article objects
 */
export async function fetchArticles(query, sortBy) {
  try {
    const response = await apiClient.get('/articles', {
      params: {
        q: query,
        sort: sortBy,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}

export default apiClient;
