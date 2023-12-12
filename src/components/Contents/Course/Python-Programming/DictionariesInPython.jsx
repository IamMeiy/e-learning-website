import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DictionariesInPython = () => {
  const codeString1 = `# Creating a dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}`;

  const codeString2 = `# Accessing values
person_name = person["name"]
person_age = person["age"]`;

  const codeString3 = `# Modifying values
person["age"] = 31`;

  const codeString4 = `# Adding new key-value pairs
person["job"] = "Developer"`;

  const codeString5 = `# Removing key-value pairs
del person["city"]`;

  const codeString6 = `# Iterating through a dictionary
for key, value in person.items():
    print(key, value)`;

  return (
    <div className="section">
      <h2 className="heading">Dictionaries in Python</h2>

      <div className="subsection">
        <h3 className="subheading">Creating a Dictionary</h3>
        <p className="paragraph">
          Dictionaries are created by enclosing key-value pairs in curly braces, separated by commas.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Accessing Values</h3>
        <p className="paragraph">
          Values in a dictionary are accessed using the key in square brackets.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Modifying Values</h3>
        <p className="paragraph">
          Values in a dictionary can be modified by assigning a new value to a specific key.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Adding New Key-Value Pairs</h3>
        <p className="paragraph">
          New key-value pairs can be added to a dictionary by assigning a value to a new key.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Removing Key-Value Pairs</h3>
        <p className="paragraph">
          Key-value pairs can be removed from a dictionary using the <code>del</code> keyword.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString5}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Iterating Through a Dictionary</h3>
        <p className="paragraph">
          Dictionaries can be iterated using a <code>for</code> loop. The <code>items()</code> method provides key-value pairs.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString6}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DictionariesInPython;