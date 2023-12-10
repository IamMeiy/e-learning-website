// InheritanceAndPolymorphism.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InheritanceAndPolymorphism = () => {
  const codeString = `// Base class
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Derived class
class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.sound(); // Output: Dog barks
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Inheritance and Polymorphism</h2>
      <p className="paragraph">
        Inheritance allows a class to inherit properties and behaviors from another class. Polymorphism enables an object to take multiple forms. The example demonstrates method overriding.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default InheritanceAndPolymorphism;
