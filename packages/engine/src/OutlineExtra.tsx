import React from 'react';

export default function () {
  return () => {
    const styleObj = {
      color: '#ccc',
      marginLeft: 6,
      fontSize: 12,
    };

    return (
      <span style={styleObj}>123</span>
    );
  };
}