import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DataTypes = () => {
  const codeString = `#include <stdio.h>

  int main() {
      int integerVar = 10;
      float floatVar = 3.14;
      char charVar = 'A';
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Data Types in C</h2>
      <p className="paragraph">
        C supports basic data types like int, float, char, etc. The example above declares variables of different data types.
      </p>
      <SyntaxHighlighter language="c" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default DataTypes;
