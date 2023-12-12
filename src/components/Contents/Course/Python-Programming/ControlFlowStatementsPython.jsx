import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ControlFlowStatementsPython = () => {
  const codeString1 = `# If-else statement
x = 10
if x > 0:
    print("Positive number")
else:
    print("Non-positive number")`;

  const codeString2 = `# While loop
count = 0
while count < 5:
    print("Iteration:", count)
    count += 1`;

  const codeString3 = `# For loop
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`;

  const codeString4 = `# Break statement
for num in [1, 2, 3, 4, 5]:
    if num == 4:
        break
    print(num)`;

  const codeString5 = `# Continue statement
for num in [1, 2, 3, 4, 5]:
    if num == 3:
        continue
    print(num)`;

  const codeString6 = `# Nested loops
for i in range(3):
    for j in range(2):
        print(i, j)`;

  return (
    <div className="section">
      <h2 className="heading">Control Flow Statements in Python</h2>

      <div className="subsection">
        <h3 className="subheading">If-else Statement</h3>
        <p className="paragraph">
          The if-else statement allows you to execute different code blocks based on whether a given condition is true or false.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">While Loop</h3>
        <p className="paragraph">
          The while loop repeatedly executes a block of code as long as the specified condition is true.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">For Loop</h3>
        <p className="paragraph">
          The for loop is used for iterating over a sequence (that is either a list, tuple, dictionary, set, or string).
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Break Statement</h3>
        <p className="paragraph">
          The break statement is used to exit the loop prematurely when a certain condition is met.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Continue Statement</h3>
        <p className="paragraph">
          The continue statement is used to skip the rest of the code inside a loop for the current iteration and proceed to the next iteration.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString5}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Nested Loops</h3>
        <p className="paragraph">
          Nested loops refer to a loop inside another loop. They are useful for situations where you need to iterate over multiple sequences.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString6}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ControlFlowStatementsPython;
