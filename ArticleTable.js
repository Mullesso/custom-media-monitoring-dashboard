import React from 'react';
import { Table, Button, Badge } from 'react-bootstrap';

/**
 * ArticleTable displays a list of articles in a responsive table.  Each row
 * shows the headline, snippet, publication date, source and tier (if any).
 * Clicking the "View" button triggers the onView callback with the
 * corresponding article.
 */
function ArticleTable({ articles, onView }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Headline</th>
          <th>Snippet</th>
          <th>Date</th>
          <th>Source</th>
          <th>Tier</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, idx) => (
          <tr key={idx}>
            <td>{article.title || 'Untitled'}</td>
            <td>{article.description || (article.content ? article.content.slice(0, 120) + '…' : '')}</td>
            <td>{article.publishedAt ? article.publishedAt.split('T')[0] : ''}</td>
            <td>{article.source?.name || ''}</td>
            <td>
              {article.tier ? (
                <Badge bg={
                  article.tier === 'Top' ? 'success' : article.tier === 'Mid' ? 'warning' : 'info'
                }>
                  {article.tier}
                </Badge>
              ) : (
                ''
              )}
            </td>
            <td>
              <Button variant="outline-primary" size="sm" onClick={() => onView(article)}>
                View
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ArticleTable;