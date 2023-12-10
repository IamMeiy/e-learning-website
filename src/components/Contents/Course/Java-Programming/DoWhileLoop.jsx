// DoWhileLoop.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DoWhileLoop = () => {
  const codeString = `public class DoWhileLoopExample {
    public static void main(String[] args) {
        int i = 1;

        do {
            System.out.println("Iteration: " + i);
            i++;
        } while (i <= 5);
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Do-While Loop</h2>
      <p className="paragraph">
        The do-while loop in Java is similar to the while loop but guarantees that the block of code is executed at least once before checking the condition.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default DoWhileLoop;
