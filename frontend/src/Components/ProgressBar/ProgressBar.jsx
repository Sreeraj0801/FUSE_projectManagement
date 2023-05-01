/* eslint-disable react/prop-types */
import React from 'react';

export default function ProgressBar({ progress }) {
  const styles = {
    bar: {
      height: '8px',
      backgroundColor: '#ccc',
      borderRadius: '5px',
      position: 'relative',
      overflow: 'hidden',
    },
    filled: {
      height: '100%',
      backgroundColor: '#00C853',
      borderRadius: '5px',
      position: 'absolute',
      transition: 'width 0.3s ease',
      width: `${progress}%`,
    },
  };

  return (
    <div style={styles.bar}>
      <div style={styles.filled}></div>
    </div>
  );
}


