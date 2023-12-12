import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FileHandlingInPython = () => {
  const codeString1 = `# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, this is a text file.")`;

  const codeString2 = `# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)`;

  const codeString3 = `# Appending to a file
with open("example.txt", "a") as file:
    file.write("\\nThis is a new line added to the file.")`;

  const codeString4 = `# Using 'with' statement automatically closes the file
# File is closed outside the 'with' block`;

  return (
    <div className="section">
      <h2 className="heading">File Handling in Python</h2>

      <div className="subsection">
        <h3 className="subheading">Writing to a File</h3>
        <p className="paragraph">
          You can write to a file using the <code>open()</code> function with the mode set to "w" (write).
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Reading from a File</h3>
        <p className="paragraph">
          Reading from a file is done using the <code>open()</code> function with the mode set to "r" (read).
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Appending to a File</h3>
        <p className="paragraph">
          You can append content to an existing file using the <code>open()</code> function with the mode set to "a" (append).
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Using 'with' Statement</h3>
        <p className="paragraph">
          The <code>with</code> statement automatically closes the file after the indented block of code.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default FileHandlingInPython;
