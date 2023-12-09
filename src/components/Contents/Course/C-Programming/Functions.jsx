// Functions.jsx
import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Functions = () => {
  const codeString = `#include <stdio.h>

  // Function declaration
  int add(int a, int b);
  
  int main() {
      // Function call
      int result = add(3, 5);
  
      printf("Sum: %d\\n", result);
  
      return 0;
  }
  
  // Function definition
  int add(int a, int b) {
      return a + b;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Functions in C</h2>
      <p className="paragraph">
        A function is a block of code that performs a specific task. In the example above, it declares a function `add` that takes two integers as parameters and returns their sum. The function is then called in the `main` function.
      </p>
      <SyntaxHighlighter language="c" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Functions;
