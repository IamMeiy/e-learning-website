import React from 'react';
import '../Styles/C.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Syntax = () => {
  const codeString = `#include <stdio.h>

  int main() {
      // Your C code here
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Syntax in C</h2>
      <p className="paragraph">
        C syntax is characterized by the use of semicolons, parentheses, and curly braces. The example above is a basic structure of a C program.
      </p>
      <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Syntax;
