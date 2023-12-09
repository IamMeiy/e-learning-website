import React from 'react';
import '../Styles/C.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Operators = () => {
  const codeString1 = `#include <stdio.h>

  int main() {
      int a = 5, b = 3;
  
      int sum = a + b;    // Addition
      int difference = a - b;  // Subtraction
      int product = a * b;  // Multiplication
      int quotient = a / b;  // Division
      int remainder = a % b; // Modulus
  
      return 0;
  }`;

  const codeString2 = `#include <stdio.h>

  int main() {
      int a = 5, b = 3;
  
      printf("Is a equal to b? %d\\n", a == b);    // Equal to
      printf("Is a not equal to b? %d\\n", a != b); // Not equal to
      printf("Is a greater than b? %d\\n", a > b);  // Greater than
      printf("Is a less than or equal to b? %d\\n", a <= b); // Less than or equal to
  
      return 0;
  }`;

  const codeString3 = `#include <stdio.h>

  int main() {
      int x = 1, y = 0;
  
      printf("Logical AND: %d\\n", x && y);  // Logical AND
      printf("Logical OR: %d\\n", x || y);   // Logical OR
      printf("Logical NOT: %d\\n", !x);      // Logical NOT
  
      return 0;
  }`;

  const codeString4 = `#include <stdio.h>

  int main() {
      int a = 5, b = 3;
  
      a += b; // Equivalent to: a = a + b
      a -= b; // Equivalent to: a = a - b
      a *= b; // Equivalent to: a = a * b
      a /= b; // Equivalent to: a = a / b
      a %= b; // Equivalent to: a = a % b
  
      return 0;
  }`;

  const codeString5 = `#include <stdio.h>

  int main() {
      int a = 5, b = 3;
  
      int bitwiseAND = a & b; // Bitwise AND
      int bitwiseOR = a | b;  // Bitwise OR
      int bitwiseXOR = a ^ b; // Bitwise XOR
      int bitwiseNOT = ~a;    // Bitwise NOT
  
      return 0;
  }`;

  const codeString6 = `#include <stdio.h>

  int main() {
      int a = 5, b = 3;
  
      int max = (a > b) ? a : b; // Ternary Operator
  
      return 0;
  }`;
  
  return (
    <div className="section">
      <h2 className="heading">Operators in C</h2>

      <div className="subsection">
        <h3 className="subheading">Arithmetic Operators</h3>
        <p className="paragraph">
          Arithmetic operators perform basic mathematical operations. In the example above, variables `a` and `b` are used to demonstrate addition, subtraction, multiplication, division, and modulus operations.
        </p>
        <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString1}
      </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Relational Operators</h3>
        <p className="paragraph">
          Relational operators compare two values and return a boolean result. In the example above, the code checks for equality, inequality, greater than, and less than or equal to relationships between variables `a` and `b`.
        </p>
        <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString2}
      </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Logical Operators</h3>
        <p className="paragraph">
          Logical operators perform logical operations on boolean values. In the example above, the code demonstrates logical AND, logical OR, and logical NOT operations using variables `x` and `y`.
        </p>
        <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString3}
      </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Assignment Operators</h3>
        <p className="paragraph">
          Assignment operators are used to assign values to variables. In the example above, the code demonstrates the use of compound assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`).
        </p>
        <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString4}
      </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Bitwise Operators</h3>
        <p className="paragraph">
          Bitwise operators perform operations on individual bits of integers. In the example above, the code demonstrates bitwise AND, bitwise OR, bitwise XOR, and bitwise NOT operations.
        </p>
        <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString5}
      </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Ternary Operator</h3>
        <p className="paragraph">
          The ternary operator is a shorthand way of writing an `if-else` statement. In the example above, the code finds the maximum of `a` and `b` using the ternary operator.
        </p>
        <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString6}
      </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Operators;
