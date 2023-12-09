// ForLoop.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ForLoop = () => {
  const codeString = `#include <stdio.h>

  int main() {
      for (int i = 1; i <= 5; i++) {
          printf("Iteration %d\\n", i);
      }
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">For Loop in C</h2>
      <p className="paragraph">
        The `for` loop is another construct for repetitive execution in C. In the example above, it prints the message for each iteration from 1 to 5.
      </p>
      <SyntaxHighlighter language="c" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default ForLoop;
