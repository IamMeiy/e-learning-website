// Pointers.jsx
import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Pointers = () => {
  const codeString = `#include <stdio.h>

  int main() {
      int number = 42;
      int* pointer = &number;
  
      printf("Value: %d\\n", *pointer);
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Pointers in C</h2>
      <p className="paragraph">
        A pointer is a variable that stores the memory address of another variable. In the example above, it declares an integer variable `number` and a pointer `pointer` that points to the address of `number`. It then prints the value stored at that memory location using the dereference operator `*`.
      </p>
      <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Pointers;
