import React from 'react';
import styles from './Box.module.css';

const Box: React.FC = () => (
  <div className={styles.Box} data-testid="Box">
    Box Component
  </div>
);

export default Box;
