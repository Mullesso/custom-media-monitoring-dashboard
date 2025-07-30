import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
 * Filters component renders a select drop‑down for sorting the article list.
 * Additional filters (e.g. date range or source tier) can be added here in
 * future enhancements.  It calls the onSortChange callback when the selected
 * sort key changes.
 */
function Filters({ sortBy, onSortChange }) {
  return (
    <Form className="mb-3">
      <Row>
        <Col xs={12} md={6} lg={4} className="mb-2">
          <Form.Group controlId="sortSelect">
            <Form.Label>Sort by</Form.Label>
            <Form.Select value={sortBy} onChange={e => onSortChange(e.target.value)}>
              <option value="date">Date (newest first)</option>
              <option value="relevance">Relevance score</option>
              <option value="authority">Source credibility</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default Filters;