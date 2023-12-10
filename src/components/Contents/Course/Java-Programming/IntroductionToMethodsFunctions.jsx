// IntroductionToMethodsFunctions.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const IntroductionToMethodsFunctions = () => {
  const codeString = `public class MethodsExample {
    // Method definition
    static int addNumbers(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = addNumbers(5, 10);
        System.out.println("Sum: " + result);
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Introduction to Methods/Functions</h2>
      <p className="paragraph">
        Methods (or functions) in Java are blocks of code that perform a specific task. They are defined using the `static` keyword and can be called from other parts of the code.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default IntroductionToMethodsFunctions;
