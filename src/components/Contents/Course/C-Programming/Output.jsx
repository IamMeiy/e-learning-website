import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Output = () => {
  const codeString = `#include <stdio.h>

  int main() {
      printf("Hello, C Programming!\\n");
      return 0;
  }`;

  return (
    <div className="section">
      <h2 className="heading">Output in C</h2>
      <p className="paragraph">
        The `printf` function is commonly used for output in C. In this example, it prints "Hello, C Programming!" to the console.
      </p>
      <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Output;
