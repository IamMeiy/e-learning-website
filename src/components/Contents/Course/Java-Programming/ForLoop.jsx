// ForLoop.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ForLoop = () => {
  const codeString = `public class ForLoopExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteration: " + i);
        }
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">For Loop</h2>
      <p className="paragraph">
        The for loop in Java is used for iterating over a range of values. It consists of an initialization, condition, and increment/decrement expression.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default ForLoop;
