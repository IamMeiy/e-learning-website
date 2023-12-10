// IfStatement.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const IfStatement = () => {
  const codeString = `public class IfStatementExample {
    public static void main(String[] args) {
        int num = 15;

        if (num % 2 == 0) {
            System.out.println("Even number");
        } else {
            System.out.println("Odd number");
        }
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">If Statement</h2>
      <p className="paragraph">
        The if statement in Java is used for conditional branching. It executes a block of code if a specified condition is true.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default IfStatement;
