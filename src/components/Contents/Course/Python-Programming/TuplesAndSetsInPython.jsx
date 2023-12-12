import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TuplesAndSetsInPython = () => {
  const codeString1 = `# Creating a tuple
fruits = ("apple", "banana", "cherry")`;

  const codeString2 = `# Accessing elements
first_fruit = fruits[0]`;

  const codeString3 = `# Attempting to modify a tuple (will result in an error)
# fruits[0] = "orange"`;

  const codeString4 = `# Creating a set
colors = {"red", "green", "blue"}`;

  const codeString5 = `# Adding elements to a set
colors.add("yellow")`;

  const codeString6 = `# Removing elements from a set
colors.remove("red")`;

  const codeString7 = `# Checking membership in a set
is_green_present = "green" in colors`;

  return (
    <div className="section">
      <h2 className="heading">Tuples and Sets in Python</h2>

      <div className="subsection">
        <h3 className="subheading">Creating a Tuple</h3>
        <p className="paragraph">
          Tuples are created by enclosing elements in parentheses, separated by commas.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Accessing Elements</h3>
        <p className="paragraph">
          Elements in a tuple are accessed using indexing.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Attempting to Modify a Tuple</h3>
        <p className="paragraph">
          Tuples are immutable, and attempting to modify their elements will result in an error.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Creating a Set</h3>
        <p className="paragraph">
          Sets are created by enclosing elements in curly braces, separated by commas.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Adding Elements to a Set</h3>
        <p className="paragraph">
          Elements can be added to a set using the <code>add()</code> method.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString5}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Removing Elements from a Set</h3>
        <p className="paragraph">
          Elements can be removed from a set using the <code>remove()</code> method.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString6}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Checking Membership in a Set</h3>
        <p className="paragraph">
          Membership in a set can be checked using the <code>in</code> keyword.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString7}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default TuplesAndSetsInPython;
