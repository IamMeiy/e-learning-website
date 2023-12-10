// HelloWorldProgramInJava.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const HelloWorldProgramInJava = () => {
  const codeString = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Hello World program in Java</h2>
      <p className="paragraph">
        A simple Java program prints "Hello, World!" to the console.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default HelloWorldProgramInJava;
