import React from 'react';
import '../Styles/Python.css';  // Adjust the path based on your file structure
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const VariablesAndDataTypes = () => {
  const codeString = `# Variables and Data Types in Python

# Integer
num1 = 5

# Float
num2 = 3.14

# String
text = "Hello, Python!"

# Boolean
is_true = True

# Print variables
print(num1)
print(num2)
print(text)
print(is_true)
`;

  return (
    <div className="section">
      <h2 className="heading">Variables and Data Types in Python</h2>
      <p className="paragraph">
        Python is dynamically typed, meaning you don't need to declare the data type explicitly. Here, we explore integers, floats, strings, and booleans.
      </p>
      <SyntaxHighlighter language="python" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default VariablesAndDataTypes;
