import React from 'react';
import '../Styles/C.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Variables = () => {
  const codeString = `#include <stdio.h>

  int main() {
      // Variable declaration and initialization
      int age = 25;
  
      // Displaying variable
      printf("Age: %d\\n", age);
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Variables in C</h2>
      <p className="paragraph">
        Variables in C are used to store and manipulate data. They must be declared before use. The example above declares an integer variable "age" and prints its value.
      </p>
      <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Variables;
