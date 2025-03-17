import React from 'react';

export function Footer(props) {
  return (
      <footer>
        <p>&copy; {new Date().getFullYear()} Rent-A-Tool. All rights reserved.</p>
      </footer>
  );
}