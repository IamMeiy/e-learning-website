// WhileLoop.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const WhileLoop = () => {
  const codeString = `public class WhileLoopExample {
    public static void main(String[] args) {
        int i = 1;

        while (i <= 5) {
            System.out.println("Iteration: " + i);
            i++;
        }
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">While Loop</h2>
      <p className="paragraph">
        The while loop in Java is used for executing a block of code repeatedly as long as a specified condition is true.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default WhileLoop;
