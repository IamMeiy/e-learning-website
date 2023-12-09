import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Constants = () => {
  const codeString = `#include <stdio.h>

  int main() {
      const int MAX_VALUE = 100;
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Constants in C</h2>
      <p className="paragraph">
        Constants are fixed values in C. You can use the "const" keyword to define them. The example above declares a constant named "MAX_VALUE."
      </p>
      <SyntaxHighlighter language="c" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Constants;
