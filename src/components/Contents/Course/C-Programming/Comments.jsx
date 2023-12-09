// Comments.jsx
import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Comments = () => {
  const codeString = `// Single-line comment

  /*
    Multi-line
    comment
  */`;
  return (
    <div className="section">
      <h2 className="heading">Comments in C</h2>
      <p className="paragraph">
        Comments in C are used to provide additional information. They are ignored by the compiler. Use "//" for single-line comments and "/* */" for multi-line comments.
      </p>
      <SyntaxHighlighter language="c" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Comments;
