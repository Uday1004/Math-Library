export const operations = {
    sqrofnum: {
      label: "Square of Number",
      inputs: [{ name: "number", label: "Number" }],
      calculate: ([num]) => num * num,
    },
    sqrt: {
      label: "Square Root",
      inputs: [{ name: "number", label: "Number" }],
      calculate: ([num]) => Math.sqrt(num),
    },
    triangleArea: {
      label: "Area of Triangle",
      inputs: [
        { name: "base", label: "Base" },
        { name: "height", label: "Height" },
      ],
      calculate: ([base, height]) => (base * height) / 2,
    },
    squareArea: {
      label: "Area of Square",
      inputs: [{ name: "side", label: "Side Length" }],
      calculate: ([side]) => side * side,
    },
    circleArea: {
      label: "Area of Circle",
      inputs: [{ name: "radius", label: "Radius" }],
      calculate: ([radius]) => Math.PI * radius * radius,
    },
    pythagorean: {
      label: "Pythagorean Theorem",
      inputs: [
        { name: "a", label: "Side a" },
        { name: "b", label: "Side b" },
      ],
      calculate: ([a, b]) => Math.sqrt(a * a + b * b),
    },
    rectangleArea: {
      label: "Area of Rectangle",
      inputs: [
        { name: "length", label: "Length" },
        { name: "width", label: "Width" },
      ],
      calculate: ([length, width]) => length * width,
    },
    parallelogramArea: {
      label: "Area of Parallelogram",
      inputs: [
        { name: "base", label: "Base" },
        { name: "height", label: "Height" },
      ],
      calculate: ([base, height]) => base * height,
    },
    trapezoidArea: {
      label: "Area of Trapezoid",
      inputs: [
        { name: "base1", label: "Base 1" },
        { name: "base2", label: "Base 2" },
        { name: "height", label: "Height" },
      ],
      calculate: ([base1, base2, height]) => ((base1 + base2) * height) / 2,
    },
    ellipseArea: {
      label: "Area of Ellipse",
      inputs: [
        { name: "a", label: "Semi-major Axis" },
        { name: "b", label: "Semi-minor Axis" },
      ],
      calculate: ([a, b]) => Math.PI * a * b,
    },
    sphereVolume: {
      label: "Volume of Sphere",
      inputs: [{ name: "radius", label: "Radius" }],
      calculate: ([radius]) => (4 / 3) * Math.PI * Math.pow(radius, 3),
    },
    coneVolume: {
      label: "Volume of Cone",
      inputs: [
        { name: "radius", label: "Radius" },
        { name: "height", label: "Height" },
      ],
      calculate: ([radius, height]) => (1 / 3) * Math.PI * Math.pow(radius, 2) * height,
    },
    cylinderVolume: {
      label: "Volume of Cylinder",
      inputs: [
        { name: "radius", label: "Radius" },
        { name: "height", label: "Height" },
      ],
      calculate: ([radius, height]) => Math.PI * Math.pow(radius, 2) * height,
    },
    rectangularPrismVolume: {
      label: "Volume of Rectangular Prism",
      inputs: [
        { name: "length", label: "Length" },
        { name: "width", label: "Width" },
        { name: "height", label: "Height" },
      ],
      calculate: ([length, width, height]) => length * width * height,
    },
    pyramidVolume: {
      label: "Volume of Pyramid",
      inputs: [
        { name: "baseArea", label: "Base Area" },
        { name: "height", label: "Height" },
      ],
      calculate: ([baseArea, height]) => (1 / 3) * baseArea * height,
    },
    hexagonArea: {
      label: "Area of Hexagon",
      inputs: [{ name: "side", label: "Side Length" }],
      calculate: ([side]) => (3 * Math.sqrt(3) * Math.pow(side, 2)) / 2,
    },
    octagonArea: {
      label: "Area of Octagon",
      inputs: [{ name: "side", label: "Side Length" }],
      calculate: ([side]) => 2 * (1 + Math.sqrt(2)) * Math.pow(side, 2),
    },
    rhombusArea: {
      label: "Area of Rhombus",
      inputs: [
        { name: "diagonal1", label: "Diagonal 1" },
        { name: "diagonal2", label: "Diagonal 2" },
      ],
      calculate: ([diagonal1, diagonal2]) => (diagonal1 * diagonal2) / 2,
    },
    ellipseCircumference: {
      label: "Circumference of Ellipse",
      inputs: [
        { name: "a", label: "Semi-major Axis" },
        { name: "b", label: "Semi-minor Axis" },
      ],
      calculate: ([a, b]) => Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b))),
    },
    sectorArea: {
      label: "Area of Sector",
      inputs: [
        { name: "radius", label: "Radius" },
        { name: "angle", label: "Angle (in radians)" },
      ],
      calculate: ([radius, angle]) => (angle * Math.pow(radius, 2)) / 2,
    },
    sectorLength: {
      label: "Length of Sector",
      inputs: [
        { name: "radius", label: "Radius" },
        { name: "angle", label: "Angle (in radians)" },
      ],
      calculate: ([radius, angle]) => radius * angle,
    },
    surfaceAreaOfSphere: {
      label: "Surface Area of Sphere",
      inputs: [{ name: "radius", label: "Radius" }],
      calculate: ([radius]) => 4 * Math.PI * Math.pow(radius, 2),
    },
    surfaceAreaOfCone: {
      label: "Surface Area of Cone",
      inputs: [
        { name: "radius", label: "Radius" },
        { name: "slantHeight", label: "Slant Height" },
      ],
      calculate: ([radius, slantHeight]) => Math.PI * radius * (radius + slantHeight),
    },
  };
  