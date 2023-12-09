// Strings.jsx
import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Strings = () => {
  const codeString = `#include <stdio.h>

  int main() {
      char greeting[] = "Hello, C Programming!";
  
      printf("%s\\n", greeting);
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Strings in C</h2>
      <p className="paragraph">
        In C, a string is an array of characters terminated by a null character ('\0'). In the example above, it declares a character array `greeting` representing a string and prints it using the `%s` format specifier.
      </p>
      <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Strings;
