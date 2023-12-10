// ExceptionHandlingInJava.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ExceptionHandlingInJava = () => {
  const codeString = `public class ExceptionHandlingExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // ArithmeticException
        } catch (ArithmeticException ex) {
            System.out.println("Exception caught: " + ex.getMessage());
        }
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Exception Handling in Java</h2>
      <p className="paragraph">
        Exception handling allows the program to deal with unexpected situations. The example catches an ArithmeticException using a try-catch block.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default ExceptionHandlingInJava;
