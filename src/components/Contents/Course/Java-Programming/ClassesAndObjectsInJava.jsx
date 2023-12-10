// ClassesAndObjectsInJava.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ClassesAndObjectsInJava = () => {
  const codeString = `public class Car {
    String brand;
    String model;
    int year;

    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method
    public void displayInfo() {
        System.out.println("Brand: " + brand + ", Model: " + model + ", Year: " + year);
    }

    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Camry", 2022);
        myCar.displayInfo();
    }
}`;

  return (
    <div className="section">
      <h2 className="heading">Classes and Objects in Java</h2>
      <p className="paragraph">
        Classes are blueprints for objects. Objects have attributes (fields) and behaviors (methods). The example defines a "Car" class with a constructor and a method.
      </p>
      <SyntaxHighlighter language="java" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default ClassesAndObjectsInJava;
