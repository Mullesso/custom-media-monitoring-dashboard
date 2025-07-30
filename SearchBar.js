import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

/**
 * SearchBar component renders an input field and submit button.  When the
 * form is submitted, it calls the provided callback with the current search
 * string.  It is controlled by the parent via the value prop.
 */
function SearchBar({ value, onChange, onSearch }) {
  return (
    <Form onSubmit={e => { e.preventDefault(); onSearch(); }}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search for press releases or news articles..."
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;