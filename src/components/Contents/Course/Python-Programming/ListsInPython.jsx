import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ListsInPython = () => {
  const codeString1 = `# Creating a list
fruits = ["apple", "banana", "cherry"]`;

  const codeString2 = `# Accessing elements
first_fruit = fruits[0]
second_fruit = fruits[1]`;

  const codeString3 = `# Modifying elements
fruits[1] = "orange"`;

  const codeString4 = `# Adding elements
fruits.append("grape")`;

  const codeString5 = `# Removing elements
fruits.remove("banana")`;

  const codeString6 = `# Iterating through a list
for fruit in fruits:
    print(fruit)`;

  return (
    <div className="section">
      <h2 className="heading">Lists in Python</h2>

      <div className="subsection">
        <h3 className="subheading">Creating a List</h3>
        <p className="paragraph">
          Lists are created by enclosing elements in square brackets, separated by commas.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Accessing Elements</h3>
        <p className="paragraph">
          Elements in a list are accessed using index notation. Indexing starts at 0.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Modifying Elements</h3>
        <p className="paragraph">
          Elements in a list can be modified by assigning a new value to a specific index.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Adding Elements</h3>
        <p className="paragraph">
          Elements can be added to a list using the <code>append()</code> method.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Removing Elements</h3>
        <p className="paragraph">
          Elements can be removed from a list using the <code>remove()</code> method.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString5}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Iterating Through a List</h3>
        <p className="paragraph">
          Lists can be iterated using a <code>for</code> loop.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString6}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ListsInPython;
