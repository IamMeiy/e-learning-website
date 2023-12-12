import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const RegularExpressionsInPython = () => {
  const codeString1 = `import re

# Basic pattern matching
pattern = r"apple"
text = "I love apples"
match = re.search(pattern, text)
if match:
    print("Match found!")
else:
    print("No match.")`;

  const codeString2 = `# Using metacharacters
pattern = r"gr.y"
text1 = "gray"
text2 = "grey"
match1 = re.search(pattern, text1)
match2 = re.search(pattern, text2)
if match1:
    print("Match found in text1!")
else:
    print("No match in text1.")
if match2:
    print("Match found in text2!")
else:
    print("No match in text2.")`;

  const codeString3 = `# Quantifiers
pattern = r"a{3}"
text1 = "aa"
text2 = "aaa"
text3 = "aaaa"
match1 = re.search(pattern, text1)
match2 = re.search(pattern, text2)
match3 = re.search(pattern, text3)
if match1:
    print("Match found in text1!")
else:
    print("No match in text1.")
if match2:
    print("Match found in text2!")
else:
    print("No match in text2.")
if match3:
    print("Match found in text3!")
else:
    print("No match in text3.")`;

  const codeString4 = `# Groups and capturing
pattern = r"(ab)+"
text1 = "ab"
text2 = "abab"
text3 = "abc"
match1 = re.search(pattern, text1)
match2 = re.search(pattern, text2)
match3 = re.search(pattern, text3)
if match1:
    print("Match found in text1!")
else:
    print("No match in text1.")
if match2:
    print("Match found in text2!")
else:
    print("No match in text2.")
if match3:
    print("Match found in text3!")
else:
    print("No match in text3.")`;

  return (
    <div className="section">
      <h2 className="heading">Regular Expressions in Python</h2>

      <div className="subsection">
        <h3 className="subheading">Basic Pattern Matching</h3>
        <p className="paragraph">
          Python's <code>re</code> module allows you to work with regular expressions. The example below demonstrates basic pattern matching using the <code>search</code> function.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Using Metacharacters</h3>
        <p className="paragraph">
          Regular expressions use metacharacters to represent classes of characters. The example below shows pattern matching using the dot (.) metacharacter to match any character.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Quantifiers</h3>
        <p className="paragraph">
          Quantifiers specify the number of occurrences of a character or group. The example below uses the curly braces to match a specific number of occurrences.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Groups and Capturing</h3>
        <p className="paragraph">
          Parentheses in regular expressions are used to create groups. The example below uses the plus (+) metacharacter to match one or more occurrences of the entire group.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default RegularExpressionsInPython;
