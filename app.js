document.addEventListener("DOMContentLoaded", function () {
  //Id Buttons:
  const squareButton = document.getElementById("button-square"); //Square Button
  const rectangleButton = document.getElementById("button-rectangle"); //Rectangle Button
  const circleButton = document.getElementById("button-circle"); //Circle Button
  const triangleButton = document.getElementById("button-triangle"); //Triangle Button
  //Id Inputs:
  const squareLength = document.getElementById("form-square-length"); //Square Length Input
  const rectangleWidth = document.getElementById("form-rectangle-width"); //Rectangle Width Input
  const rectangleHeight = document.getElementById("form-rectangle-height"); //Rectangle Height Input
  const circleRadius = document.getElementById("form-circle-radius"); //Circle Radius Input
  const triangleHeight = document.getElementById("form-triangle-height"); //Triangle Height Input
  //SideBar Id Inputs:
  const shapeName = document.getElementById("shape-name"); //SideBar "Shape Name"
  const shapeWidth = document.getElementById("shape-width"); //Sidebar "Shape Width"
  const shapeHeight = document.getElementById("shape-height"); //Sidebar "Shape Height"
  const shapeRadius = document.getElementById("shape-radius"); //Sidebar "Shape Radius"
  const shapeArea = document.getElementById("shape-area"); //Sidebar "Shape Area"
  const shapePerimeter = document.getElementById("shape-perimeter"); //Sidebar "Shape Perimeter"
  //Container for Shapes:
  const shapeContainer = document.getElementById("div-container"); //Container for Shapes enter

  //Square
  class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
      this.top = getRandomVal();
      this.left = getRandomVal();
      this.renderSquare();
      this.squareSize();
      this.square.addEventListener("dblclick", () => this.square.remove());
      this.square.addEventListener("click", () => this.describeSquare());
    }

    squareArea() {
      return this.sideLength * this.sideLength;
    }

    squarePerimeter() {
      return 4 * this.sideLength;
    }

    renderSquare() {
      this.square = document.createElement("div");
      this.square.id = "square-id";
      this.square.classList.add("square");
      shapeContainer.appendChild(this.square);
      console.log(this);
    }

    squareSize() {
      this.square.style.top = `${this.top}px`;
      this.square.style.left = `${this.left}px`;
      this.square.style.height = `${this.sideLength}px`;
      this.square.style.width = `${this.sideLength}px`;
    }

    //sideBar text;
    describeSquare() {
      this.thePerimeter = this.squarePerimeter();
      this.theArea = this.squareArea();
      shapeName.innerHTML = `Shape: Square`;
      shapeWidth.innerHTML = `Width: ${this.sideLength}`;
      shapeHeight.innerHTML = `Height: ${this.sideLength}`;
      shapeRadius.innerHTML = `Radius: N/A`;
      shapeArea.textContent = `Area: ${this.theArea}`;
      shapePerimeter.innerHTML = `Perimeter: ${this.thePerimeter}`;
    }
  }
  squareButton.addEventListener("click", function () {
    if (squareLength.value > 250) {
      alert(
        `${squareLength.value}px square width is TOO big to fit in the canvas! Try smaller!`
      );
      this.square.remove(); //get an error, but it works
    }
    let sideLength = squareLength.value;
    new Square(sideLength);
  });

  //Rectangle
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.top = getRandomVal();
      this.left = getRandomVal();
      this.renderRectangle();
      this.rectangleSize();
      this.rectangle.addEventListener("click", () => this.describeRectangle());
      this.rectangle.addEventListener("dblclick", () =>this.rectangle.remove());
    }

    rectangleArea() {
      return this.width * this.height;
    }

    rectanglePerimeter() {
      return 2 * this.width + 2 * this.height;
    }

    renderRectangle() {
      this.rectangle = document.createElement("div");
      this.rectangle.id = "rectangle-id";
      this.rectangle.classList.add("rectangle");
      shapeContainer.appendChild(this.rectangle);
      console.log(this);
    }

    rectangleSize() {
      this.rectangle.style.top = `${this.top}px`;
      this.rectangle.style.left = `${this.left}px`;
      this.rectangle.style.width = `${this.width}px`;
      this.rectangle.style.height = `${this.height}px`;
    }

    //sideBar text
    describeRectangle() {
      this.thePerimeter = this.rectanglePerimeter();
      this.theArea = this.rectangleArea();
      shapeName.innerHTML = "Shape: Rectangle";
      shapeWidth.innerHTML = `Width: ${this.width}`;
      shapeHeight.innerHTML = `Height: ${this.height}`;
      shapeRadius.innerHTML = "Radius: N/A";
      shapeArea.textContent = `Area: ${this.theArea}`;
      shapePerimeter.innerHTML = `Perimeter: ${this.thePerimeter}`;
    }
  }
  rectangleButton.addEventListener("click", function () {
    if (rectangleWidth.value > 250) {
      alert(
        `${rectangleWidth.value}px rectangle width is TOO big to fit in the canvas! Try smaller!`
      );
      this.rectangle.remove(); //get an error, but it works.
    } else if (rectangleHeight.value > 250) {
      alert(
        `${rectangleHeight.value}px rectangle height is TOO big to fit in the canvas! Try smaller!`
      );
      this.rectangle.remove();
    }

    let width = rectangleWidth.value;
    let height = rectangleHeight.value;
    new Rectangle(width, height);
  });

  //Circle
  class Circle {
    constructor(radius) {
      this.radius = radius;
      this.top = getRandomVal();
      this.left = getRandomVal();
      this.renderCircle();
      this.circleSize();
      this.circle.addEventListener("click", () => this.describeCircle());
      this.circle.addEventListener("dblclick", () => this.circle.remove());
    }

    circleArea() {
      return Math.PI * this.radius * this.radius;
    }

    circlePerimeter() {
      return 2 * Math.PI * this.radius;
    }

    renderCircle() {
      this.circle = document.createElement("div");
      this.circle.id = "circle-id";
      this.circle.classList.add("circle");
      shapeContainer.appendChild(this.circle);
      console.log(this);
    }

    circleSize() {
      this.circle.style.top = `${this.top}px`;
      this.circle.style.left = `${this.left}px`;
      this.circle.style.width = `${this.radius}px`;
      this.circle.style.height = `${this.radius}px`;
      this.circle.style.borderRadius = `${this.radius}px`;
    }

    //sidebar text;
    describeCircle() {
      this.thePerimeter = this.circlePerimeter();
      this.theArea = this.circleArea();
      shapeName.innerHTML = "Shape: Circle";
      shapeWidth.innerHTML = `Width: N/A`;
      shapeHeight.innerHTML = `Height: N/A`;
      shapeRadius.innerHTML = `Radius: ${this.radius}`;
      shapeArea.textContent = `Area: ${this.theArea}`;
      shapePerimeter.innerHTML = `Perimeter: ${this.thePerimeter}`;
    }
  }
  circleButton.addEventListener("click", function () {
    if (circleRadius.value > 250) {
      alert(
        `${circleRadius.value}px circle radius is TOO big to fit in the canvas! Try smaller!`
      );
      this.circle.remove(); //gets an error, but it works
    }

    let radius = circleRadius.value;
    new Circle(radius);
  });

  //Triangle
  class Triangle {
    constructor(height) {
      this.height = height;
      this.top = getRandomVal();
      this.left = getRandomVal();
      this.renderTriangle();
      this.triangleSize();
      this.triangle.addEventListener("click", () => this.describeTriangle());
      this.triangle.addEventListener("dblclick", () => this.triangle.remove());
    }

    triangleArea() {
      return (this.height * this.height) / 2;
    }

    trianglePerimeter() {
      return Math.sqrt(2 * this.height * this.height * this.height);
      //not sure this is correct.....
    }

    renderTriangle() {
      this.triangle = document.createElement("div");
      this.triangle.id = "triangle-id";
      this.triangle.classList.add("triangle");
      shapeContainer.appendChild(this.triangle);
      console.log(this);
    }

    triangleSize() {
      this.triangle.style.top = `${this.top}px`;
      this.triangle.style.left = `${this.left}px`;
      this.triangle.style.borderStyle = `solid`;
      this.triangle.style.borderWidth = `0px ${this.height / 2}px ${this.height}px ${this.height / 2}px`;
      this.triangle.style.borderColor = `transparent transparent yellow transparent`;
    }

    //sidebar text;
    describeTriangle() {
      this.thePerimeter = this.trianglePerimeter();
      this.theArea = this.triangleArea();
      shapeName.innerHTML = "Shape: Triangle";
      shapeWidth.innerHTML = `Width: ${this.height}`;
      shapeHeight.innerHTML = `Height: ${this.height}`;
      shapeRadius.innerHTML = `Radius: N/A`;
      shapeArea.textContent = `Area: ${this.theArea}`;
      shapePerimeter.innerHTML = `Perimeter: ${this.thePerimeter}`;
    }
  }
  triangleButton.addEventListener("click", function () {
    if (triangleHeight.value > 250) {
      alert(
        `${triangleHeight.value}px triangle height is TOO big to fit in the canvas! Try smaller!`
      );
      this.triangle.remove();
    }

    let height = triangleHeight.value;
    new Triangle(height);
  });

  //Randomizer function for shape container
  function getRandomVal() {
    return Math.floor(Math.random() * 400);
  }
});
