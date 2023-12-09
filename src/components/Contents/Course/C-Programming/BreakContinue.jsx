// BreakContinue.jsx
import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BreakContinue = () => {
  const codeString = `#include <stdio.h>

  int main() {
      for (int i = 1; i <= 5; i++) {
          if (i == 3) {
              break; // Exit the loop when i is 3
          }
  
          printf("Iteration %d\\n", i);
  
          if (i == 2) {
              continue; // Skip the rest of the loop body when i is 2
          }
  
          // Code here won't be executed when i is 2
      }
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Break and Continue in C</h2>
      <p className="paragraph">
        The `break` statement is used to exit a loop prematurely, and the `continue` statement is used to skip the rest of the loop body and move to the next iteration. In the example above, the loop exits when `i` is 3 and skips the rest of the body when `i` is 2.
      </p>
      <SyntaxHighlighter language="c" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default BreakContinue;
