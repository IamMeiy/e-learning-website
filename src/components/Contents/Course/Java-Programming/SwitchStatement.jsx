// SwitchStatement.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SwitchStatement = () => {
  const codeString = `public class SwitchStatementExample {
    public static void main(String[] args) {
        int dayOfWeek = 3;
        String dayName;

        switch (dayOfWeek) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            default:
                dayName = "Unknown day";
        }

        System.out.println("Day is: " + dayName);
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Switch Statement</h2>
      <p className="paragraph">
        The switch statement evaluates an expression against multiple possible case values and executes the block of code corresponding to the matched case.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default SwitchStatement;
