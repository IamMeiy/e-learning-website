// StringsAndStringManipulation.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const StringsAndStringManipulation = () => {
  const codeString = `public class StringsExample {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "World";

        String combinedString = str1 + " " + str2;
        System.out.println("Combined String: " + combinedString);
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Strings and String Manipulation</h2>
      <p className="paragraph">
        Strings in Java are objects that represent sequences of characters. String manipulation involves operations like concatenation and substring extraction.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default StringsAndStringManipulation;
