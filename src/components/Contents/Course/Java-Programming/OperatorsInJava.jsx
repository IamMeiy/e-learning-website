// OperatorsInJava.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const OperatorsInJava = () => {
  const codeString = `public class OperatorsExample {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;
        int sum = x + y; // Addition
        int product = x * y; // Multiplication
        boolean isEqual = (x == y); // Equality check
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Operators in Java</h2>
      <p className="paragraph">
        Java supports various operators like addition, multiplication, and equality checks.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default OperatorsInJava;
