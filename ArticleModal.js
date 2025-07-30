import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';

/**
 * ArticleModal displays the full details of a selected article.  It is
 * controlled via the `show` prop.  When closed, it calls the onClose
 * callback.  The modal renders the headline, publication details, tier and
 * sentiment, followed by the article body and a link to the original
 * article.
 */
function ArticleModal({ show, article, onClose }) {
  if (!article) return null;
  const { title, publishedAt, source, content, url, tier, sentiment } = article;
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title || 'Article'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Published:</strong>{' '}
          {publishedAt ? new Date(publishedAt).toLocaleString() : 'Unknown'}
        </p>
        <p>
          <strong>Source:</strong> {source?.name || ''}
        </p>
        {tier && (
          <p>
            <strong>Tier:</strong>{' '}
            <Badge bg={tier === 'Top' ? 'success' : tier === 'Mid' ? 'warning' : 'info'}>{tier}</Badge>
          </p>
        )}
        {sentiment && (
          <p>
            <strong>Sentiment:</strong>{' '}
            <Badge bg={sentiment === 'positive' ? 'success' : sentiment === 'negative' ? 'danger' : 'secondary'}>
              {sentiment}
            </Badge>
          </p>
        )}
        {content && <div style={{ whiteSpace: 'pre-line' }}>{content}</div>}
        {url && (
          <p className="mt-3">
            <a href={url} target="_blank" rel="noopener noreferrer">
              Read original article
            </a>
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ArticleModal;