// ExpressionsAndStatements.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ExpressionsAndStatements = () => {
  const codeString = `public class ExpressionsStatementsExample {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;
        int sum = x + y; // Expression
        System.out.println("Sum: " + sum); // Statement
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Expressions and statements</h2>
      <p className="paragraph">
        Expressions are combinations of variables and operators, while statements perform actions.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default ExpressionsAndStatements;
