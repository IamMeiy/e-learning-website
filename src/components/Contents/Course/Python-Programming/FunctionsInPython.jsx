import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FunctionsInPython = () => {
  const codeString1 = `# Defining a function
def greet(name):
    return f"Hello, {name}!"`;

  const codeString2 = `# Calling a function
result = greet("Alice")
print(result)`;

  const codeString3 = `# Function with default parameter
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"`;

  const codeString4 = `# Function with variable-length arguments
def calculate_sum(*args):
    return sum(args)`;

  const codeString5 = `# Function with variable-length keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")`;

  return (
    <div className="section">
      <h2 className="heading">Functions in Python</h2>

      <div className="subsection">
        <h3 className="subheading">Defining a Function</h3>
        <p className="paragraph">
          Functions are defined using the <code>def</code> keyword, followed by the function name and parameters.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Calling a Function</h3>
        <p className="paragraph">
          Functions are called by using the function name followed by parentheses containing the arguments.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Function with Default Parameter</h3>
        <p className="paragraph">
          Default parameters allow you to specify a default value for a parameter if no value is provided during the function call.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Function with Variable-Length Arguments</h3>
        <p className="paragraph">
          Functions can accept a variable number of positional arguments using the asterisk (*) syntax.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Function with Variable-Length Keyword Arguments</h3>
        <p className="paragraph">
          Functions can accept a variable number of keyword arguments using the double asterisk (**) syntax.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString5}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default FunctionsInPython;
