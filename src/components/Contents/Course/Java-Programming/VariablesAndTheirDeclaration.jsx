// VariablesAndTheirDeclaration.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const VariablesAndTheirDeclaration = () => {
  const codeString = `public class VariablesExample {
    public static void main(String[] args) {
        int age = 25;
        float price = 19.99f;
        char grade = 'A';
        boolean isJavaFun = true;
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Variables and their declaration</h2>
      <p className="paragraph">
        Variables in Java must be declared with a specific data type before use.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default VariablesAndTheirDeclaration;
