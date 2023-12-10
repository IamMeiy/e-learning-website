// FileHandlingInJava.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FileHandlingInJava = () => {
  const codeString = `import java.io.FileWriter;
import java.io.IOException;

public class FileHandlingExample {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("example.txt");
            writer.write("Hello, File Handling in Java!");
            writer.close();
        } catch (IOException ex) {
            System.out.println("Exception caught: " + ex.getMessage());
        }
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">File Handling in Java</h2>
      <p className="paragraph">
        File handling allows reading from and writing to files. The example demonstrates writing to a file using FileWriter.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default FileHandlingInJava;
