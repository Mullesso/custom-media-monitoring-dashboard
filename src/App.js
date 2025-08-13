import React, { useState } from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';

// Import api for calling the back‑end API
import { fetchArticles } from './api';

// Import reusable UI api
import SearchBar from './SearchBar';
import Filters from './Filters';
iimport ArticleTable from './ArticleTable';
import ArticleModal from './ArticleModal';

/**
 * The App component is the root of the React front‑end.  It manages
 * application state (search query, sorting, article data, loading and
 * errors) and composes the UI from smaller components.  The UI is
 * divided into a header (search bar and filters) and a main section
 * displaying the article list.  Clicking an article opens a modal with
 * the full details.
 */
function App() {
  // Current search keyword(s) entered by the user.
  const [query, setQuery] = useState('');
  // Selected sort key: 'date', 'relevance' or 'authority'.
  const [sortBy, setSortBy] = useState('date');
  // List of articles returned by the API.
  const [articles, setArticles] = useState([]);
  // Loading state for API requests.
  const [loading, setLoading] = useState(false);
  // Error message to display if the API request fails.
  const [error, setError] = useState(null);
  // The currently selected article for viewing in the modal.
  const [selectedArticle, setSelectedArticle] = useState(null);
  // Whether the modal is shown.
  const [showModal, setShowModal] = useState(false);

  /**
   * Perform a search against the back‑end API.  If the query is empty,
   * nothing happens.  On success the articles state is updated.  On
   * failure an error message is shown.
   */
  const handleSearch = async () => {
    // Do not perform API call if the query is empty or whitespace.
    if (!query.trim()) {
      setError('Please enter a search term.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await fetchArticles(query, sortBy);
      setArticles(result || []);
    } catch (err) {
      setError('Failed to fetch articles. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Update the sort key.  The user can choose to sort by date,
   * relevance or authority.  Changing the sort key does not
   * automatically re‑query the API so that large lists are not fetched
   * unnecessarily.  To apply the new sort order, users should run
   * another search.
   *
   * @param {string} value The new sort key
   */
  const handleSortChange = (value) => {
    setSortBy(value);
  };

  /**
   * Open the article modal for the selected article.
   *
   * @param {object} article The article object to display
   */
  const handleView = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  /**
   * Close the article modal.
   */
  const handleCloseModal = () => {
      setShowModal(false);
      setSelectedArticle(null);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">Media Monitoring Dashboard</h1>
      {/* Search bar and sort filters */}
      <Row className="mb-3">
        <Col xs={12} md={8} className="mb-2">
          <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
        </Col>
        <Col xs={12} md={4} className="mb-2">
          <Filters sortBy={sortBy} onSortChange={handleSortChange} />
        </Col>
      </Row>
      {/* Alert for errors */}
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}
      {/* Show spinner while loading */}
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading…</span>
          </Spinner>
        </div>
      )}
      {/* Article table when data is available */}
      {!loading && articles.length > 0 && (
        <ArticleTable articles={articles} onView={handleView} />
      )}
      {/* Modal for viewing selected article details */}
      <ArticleModal show={showModal} article={selectedArticle} onClose={handleCloseModal} />
    </Container>
  );
}

export default App;
