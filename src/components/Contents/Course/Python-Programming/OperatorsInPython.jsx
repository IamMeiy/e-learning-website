import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const OperatorsInPython = () => {
  const codeString1 = `# Arithmetic Operators
a = 5
b = 3
sum_result = a + b      # Addition
difference_result = a - b  # Subtraction
product_result = a * b  # Multiplication
quotient_result = a / b  # Division
remainder_result = a % b # Modulus`;

  const codeString2 = `# Comparison Operators
a = 5
b = 3
equal_to_result = a == b      # Equal to
not_equal_to_result = a != b  # Not equal to
greater_than_result = a > b   # Greater than
less_than_or_equal_to_result = a <= b  # Less than or equal to`;

  const codeString3 = `# Logical Operators
x = True
y = False
logical_and_result = x and y  # Logical AND
logical_or_result = x or y    # Logical OR
logical_not_result = not x    # Logical NOT`;

  const codeString4 = `# Assignment Operators
a = 5
b = 3
a += b  # Equivalent to: a = a + b
a -= b  # Equivalent to: a = a - b
a *= b  # Equivalent to: a = a * b
a /= b  # Equivalent to: a = a / b
a %= b  # Equivalent to: a = a % b`;

  const codeString5 = `# Bitwise Operators
a = 5
b = 3
bitwise_and_result = a & b  # Bitwise AND
bitwise_or_result = a | b   # Bitwise OR
bitwise_xor_result = a ^ b  # Bitwise XOR
bitwise_not_result = ~a     # Bitwise NOT`;

  const codeString6 = `# Ternary Operator
a = 5
b = 3
max_result = a if a > b else b  # Ternary Operator`;

  return (
    <div className="section">
      <h2 className="heading">Operators in Python</h2>

      <div className="subsection">
        <h3 className="subheading">Arithmetic Operators</h3>
        <p className="paragraph">
          Arithmetic operators perform basic mathematical operations. In the example above, variables `a` and `b` are used to demonstrate addition, subtraction, multiplication, division, and modulus operations.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Comparison Operators</h3>
        <p className="paragraph">
          Comparison operators compare two values and return a boolean result. In the example above, the code checks for equality, inequality, greater than, and less than or equal to relationships between variables `a` and `b`.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Logical Operators</h3>
        <p className="paragraph">
          Logical operators perform logical operations on boolean values. In the example above, the code demonstrates logical AND, logical OR, and logical NOT operations using variables `x` and `y`.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Assignment Operators</h3>
        <p className="paragraph">
          Assignment operators are used to assign values to variables. In the example above, the code demonstrates the use of compound assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`).
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Bitwise Operators</h3>
        <p className="paragraph">
          Bitwise operators perform operations on individual bits of integers. In the example above, the code demonstrates bitwise AND, bitwise OR, bitwise XOR, and bitwise NOT operations.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString5}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Ternary Operator</h3>
        <p className="paragraph">
          The ternary operator is a shorthand way of writing an `if-else` statement. In the example above, the code finds the maximum of `a` and `b` using the ternary operator.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString6}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default OperatorsInPython;