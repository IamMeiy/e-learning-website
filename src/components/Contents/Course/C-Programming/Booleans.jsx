// Booleans.jsx
import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Booleans = () => {
  const codeString = `#include <stdio.h>

  int main() {
      int a = 5, b = 3;
  
      if (a > b) {
          printf("a is greater than b\\n");
      } else {
          printf("b is greater than or equal to a\\n");
      }
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Booleans in C</h2>
      <p className="paragraph">
        Booleans in C are represented using integers, where 0 is false, and any non-zero value is true. The example above demonstrates the use of Booleans in a simple if-else statement.
      </p>
      <SyntaxHighlighter language="c" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Booleans;
