import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ErrorHandlingInPython = () => {
  const codeString1 = `# Handling exceptions using try and except blocks
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Division by zero")`;

  const codeString2 = `# Handling multiple exceptions
try:
    result = int("abc")
except (ValueError, TypeError):
    print("Error: Invalid conversion")`;

  const codeString3 = `# Using else block in exception handling
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Error: Division by zero")
else:
    print("Result:", result)`;

  const codeString4 = `# Using finally block
try:
    file = open("example.txt", "r")
    # Perform file operations
except FileNotFoundError:
    print("Error: File not found")
finally:
    file.close()`;

  return (
    <div className="section">
      <h2 className="heading">Error Handling in Python</h2>

      <div className="subsection">
        <h3 className="subheading">Handling Exceptions</h3>
        <p className="paragraph">
          In Python, exceptions are handled using the <code>try</code> and <code>except</code> blocks. The code inside the <code>try</code> block is executed, and if an exception occurs, it is caught and handled in the <code>except</code> block.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Handling Multiple Exceptions</h3>
        <p className="paragraph">
          You can handle multiple exceptions by specifying them in a tuple within the <code>except</code> block.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Using else Block</h3>
        <p className="paragraph">
          The <code>else</code> block is executed if no exceptions occur in the <code>try</code> block.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Using finally Block</h3>
        <p className="paragraph">
          The <code>finally</code> block is always executed, whether an exception occurs or not. It is typically used for cleanup operations, such as closing files or releasing resources.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ErrorHandlingInPython;
