// Structure.jsx
import React from 'react';
import '../Styles/C.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Structure = () => {
  const codeString = `#include <stdio.h>

  // Define a structure
  struct Person {
      char name[50];
      int age;
  };
  
  int main() {
      // Declare and initialize a structure variable
      struct Person person1 = {"John Doe", 25};
  
      // Access structure members
      printf("Name: %s\\n", person1.name);
      printf("Age: %d\\n", person1.age);
  
      return 0;
  }`;
  return (
    <div className="section">
      <h2 className="heading">Structures in C</h2>
      <p className="paragraph">
        A structure is a user-defined data type that allows bundling different types of data under a single name. In the example above, it defines a structure `Person` with members `name` and `age`, declares a structure variable `person1`, and prints its members.
      </p>
      <SyntaxHighlighter language='c' style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Structure;
