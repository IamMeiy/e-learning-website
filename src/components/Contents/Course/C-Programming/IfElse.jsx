// Ifelse.jsx
import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Ifelse = () => {
  const codeString = `#include <stdio.h>

  int main() {
      int num = 10;
  
      if (num > 0) {
          printf("The number is positive.\\n");
      } else {
          printf("The number is non-positive.\\n");
      }
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">If...Else in C</h2>
      <p className="paragraph">
        The `if...else` statement is used for decision-making in C. In the example above, it checks if the variable `num` is positive or non-positive and prints a corresponding message.
      </p>
      <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Ifelse;
