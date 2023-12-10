// DataTypesInJava.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DataTypesInJava = () => {
  const codeString = `public class DataTypesExample {
    public static void main(String[] args) {
        int integerVar = 10;
        float floatVar = 3.14f;
        char charVar = 'A';
        boolean boolVar = true;
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Data types in Java</h2>
      <p className="paragraph">
        Java supports basic data types like int, float, char, and boolean.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default DataTypesInJava;
