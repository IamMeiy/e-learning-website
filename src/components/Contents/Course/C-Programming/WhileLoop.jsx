// WhileLoop.jsx
import React from 'react';
import '../Styles/C.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const WhileLoop = () => {
  const codeString = `#include <stdio.h>

  int main() {
      int count = 1;
  
      while (count <= 5) {
          printf("Iteration %d\\n", count);
          count++;
      }
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">While Loop in C</h2>
      <p className="paragraph">
        The `while` loop is used for repetitive execution in C. In the example above, it prints the message for each iteration until the `count` reaches 5.
      </p>
      <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default WhileLoop;
