import React from 'react';
import PropTypes from 'prop-types';
import styles from './Note.module.css';

const Note = () => (
  <div className={styles.Note} data-testid="Note">
    Note Component
  </div>
);

Note.propTypes = {};

Note.defaultProps = {};

export default Note;
