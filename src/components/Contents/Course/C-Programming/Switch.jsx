// Switch.jsx
import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Switch = () => {
  const codeString = `#include <stdio.h>

  int main() {
      int day = 3;
  
      switch (day) {
          case 1:
              printf("Monday\\n");
              break;
          case 2:
              printf("Tuesday\\n");
              break;
          case 3:
              printf("Wednesday\\n");
              break;
          default:
              printf("Other day\\n");
      }
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Switch Statement in C</h2>
      <p className="paragraph">
        The `switch` statement is used for multi-way decision-making in C. In the example above, it prints the name of the day based on the value of the variable `day`.
      </p>
      <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Switch;
