import React from 'react';
import '../Styles/Python.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ObjectOrientedPython = () => {
  const codeString1 = `# Creating a class
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

# Creating an object of the class
my_car = Car(make="Toyota", model="Corolla")`;

  const codeString2 = `# Adding methods to the class
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def display_info(self):
        print(f"{self.make} {self.model}")

# Creating an object and calling a method
my_car = Car(make="Toyota", model="Corolla")
my_car.display_info()`;

  const codeString3 = `# Inheritance
class ElectricCar(Car):
    def __init__(self, make, model, battery_capacity):
        # Call the constructor of the parent class
        super().__init__(make, model)
        self.battery_capacity = battery_capacity

# Creating an object of the derived class
my_electric_car = ElectricCar(make="Tesla", model="Model S", battery_capacity="100 kWh")`;

  const codeString4 = `# Overriding methods
class ElectricCar(Car):
    def __init__(self, make, model, battery_capacity):
        super().__init__(make, model)
        self.battery_capacity = battery_capacity

    def display_info(self):
        # Override the display_info method
        print(f"{self.make} {self.model} (Electric)")

# Creating an object and calling the overridden method
my_electric_car = ElectricCar(make="Tesla", model="Model S", battery_capacity="100 kWh")
my_electric_car.display_info()`;

  return (
    
    
    <div className="section">
      <h2 className="heading">Object-Oriented Programming in Python</h2>
      <div className="subsection">
        <h3 className="subheading">Class and Object</h3>
        <p className="paragraph">
          In object-oriented programming (OOP), a <strong>class</strong> is a blueprint for creating objects. Objects are instances of a class and encapsulate data (attributes) and behaviors (methods). Let's look at an example:
        </p>
        <p className="paragraph">
          In this example, we define a <code>Car</code> class with an <code>__init__</code> method (constructor) that initializes the <code>make</code> and <code>model</code> attributes. We then create an object (<code>my_car</code>) of the <code>Car</code> class.
        </p>
      </div>

      <div className="subsection">
        <h3 className="subheading">Creating a Class</h3>
        <p className="paragraph">
          In Python, you can create a class using the <code>class</code> keyword. The <code>__init__</code> method is a special method called the constructor, which is executed when an object is created.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString1}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Adding Methods to the Class</h3>
        <p className="paragraph">
          You can add methods to a class to define the behavior of objects. Methods are functions defined within a class and are called on objects of that class.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString2}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Inheritance</h3>
        <p className="paragraph">
          Python supports inheritance, allowing a class to inherit attributes and methods from another class. The <code>super()</code> function is used to call the constructor of the parent class.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString3}
        </SyntaxHighlighter>
      </div>

      <div className="subsection">
        <h3 className="subheading">Overriding Methods</h3>
        <p className="paragraph">
          Inheritance also allows you to override methods in the derived class. This means providing a new implementation for a method that is already defined in the parent class.
        </p>
        <SyntaxHighlighter language='python' style={a11yDark}>
          {codeString4}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ObjectOrientedPython;
