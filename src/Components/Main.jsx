import React, { useState } from "react";
import { Button, TextField, MenuItem, FormControl, InputLabel, Select, Box, Typography, Card } from "@mui/material";
import { operations } from "../Components/Formulas";

export default function MathDashboard() {
  const [operation, setOperation] = useState("sqrt");
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("en"); // State to manage language

  const handleInputChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    const values = operations[operation].inputs.map((input) => {
      const value = parseFloat(inputs[input.name]);
      if (isNaN(value)) {
        throw new Error(`Invalid input for ${input.label}`);
      }
      return value;
    });

    try {
      const calculatedResult = operations[operation].calculate(values);
      setResult(calculatedResult);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Language-specific text for operations and input fields
  const text = {
    en: {
      title: "Math Operations Dashboard",
      description: "Select an operation and enter the required values",
      resultLabel: "Result: ",
      errorLabel: "Invalid input for ",
      calculateBtn: "Calculate",
      operations: {
        sqrofnum:"Square of Number",
        sqrt: "Square Root",
        triangleArea: "Area of Triangle",
        squareArea: "Area of Square",
        circleArea: "Area of Circle",
        pythagorean: "Pythagorean Theorem",
        rectangleArea: "Area of Rectangle",
        parallelogramArea: "Area of Parallelogram",
        trapezoidArea: "Area of Trapezoid",
        ellipseArea: "Area of Ellipse",
        sphereVolume: "Volume of Sphere",
        coneVolume: "Volume of Cone",
        cylinderVolume: "Volume of Cylinder",
        rectangularPrismVolume: "Volume of Rectangular Prism",
        pyramidVolume: "Volume of Pyramid",
        hexagonArea: "Area of Hexagon",
        octagonArea: "Area of Octagon",
        rhombusArea: "Area of Rhombus",
        ellipseCircumference: "Circumference of Ellipse",
        sectorArea: "Area of Sector",
        sectorLength: "Length of Sector",
        surfaceAreaOfSphere: "Surface Area of Sphere",
        surfaceAreaOfCone: "Surface Area of Cone",
        surfaceAreaOfCylinder: "Surface Area of Cylinder",
        surfaceAreaOfRectangularPrism: "Surface Area of Rectangular Prism",
        surfaceAreaOfPyramid: "Surface Area of Pyramid",
        surfaceAreaOfConeFrustum: "Surface Area of Cone Frustum",
        surfaceAreaOfSphereFrustum: "Surface Area of Sphere Frustum",
        sphereCircumference: "Circumference of Sphere",
        circleCircumference: "Circumference of Circle",
        rightTriangleHypotenuse: "Hypotenuse of Right Triangle",
        ellipseFocalLength: "Focal Length of Ellipse",
        geometricMean: "Geometric Mean",
        harmonicMean: "Harmonic Mean",
        arithmeticMean: "Arithmetic Mean",
        quadraticEquationRoots: "Quadratic Equation Roots",
        distanceFormula: "Distance Between Two Points",
        midpointFormula: "Midpoint of Two Points",
        simpleInterest: "Simple Interest",
        compoundInterest: "Compound Interest",
        speedTimeDistance: "Speed, Time, and Distance",
        force: "Force (F = ma)",
        momentum: "Momentum (p = mv)",
        work: "Work (W = F × d)",
        power: "Power (P = W/t)",
        acceleration: "Acceleration (a = Δv / Δt)",
      },
      inputLabels: {
        num1: "Number 1",
        num2: "Number 2",
        base: "Base",
        height: "Height",
        side: "Side Length",
        radius: "Radius",
        length: "Length",
        width: "Width",
        slantHeight: "Slant Height",
        baseArea: "Base Area",
        diagonal1: "Diagonal 1",
        diagonal2: "Diagonal 2",
        angle: "Angle (in radians)",
        time: "Time",
        velocity: "Velocity",
        mass: "Mass",
        distance: "Distance",
        rate: "Rate",
        principal: "Principal",
        rateOfInterest: "Rate of Interest",
        timePeriod: "Time Period",
        frequency: "Frequency",
        a: "Coefficient a",
        b: "Coefficient b",
        c: "Coefficient c",
      },
    },
    hi: {
      title: "गणित ऑपरेशन डैशबोर्ड",
      description: "एक ऑपरेशन चुनें और आवश्यक मान दर्ज करें",
      resultLabel: "परिणाम: ",
      errorLabel: "अमान्य इनपुट ",
      calculateBtn: "गणना करें",
      operations: {
        sqrofnum:"वर्ग",
        sqrt: "वर्गमूल",
        triangleArea: "त्रिभुज का क्षेत्रफल",
        squareArea: "आयत का क्षेत्रफल",
        circleArea: "वृत्त का क्षेत्रफल",
        pythagorean: "पाइथागोरस प्रमेय",
        rectangleArea: "आयत का क्षेत्रफल",
        parallelogramArea: "समांतर चतुर्भुज का क्षेत्रफल",
        trapezoidArea: "समलम्ब चौकोण का क्षेत्रफल",
        ellipseArea: "अंडाकार का क्षेत्रफल",
        sphereVolume: "गोले का आयतन",
        coneVolume: "कोण का आयतन",
        cylinderVolume: "सिलिंडर का आयतन",
        rectangularPrismVolume: "आयताकार घन का आयतन",
        pyramidVolume: "पिरामिड का आयतन",
        hexagonArea: "हैकसागन का क्षेत्रफल",
        octagonArea: "आठ कोणीय आकृति का क्षेत्रफल",
        rhombusArea: "तिरछा चतुर्भुज का क्षेत्रफल",
        ellipseCircumference: "अंडाकार की परिधि",
        sectorArea: "क्षेत्रफल का क्षेत्रफल",
        sectorLength: "क्षेत्रफल की लंबाई",
        surfaceAreaOfSphere: "गोले का सतही क्षेत्रफल",
        surfaceAreaOfCone: "कोण का सतही क्षेत्रफल",
        surfaceAreaOfCylinder: "सिलिंडर का सतही क्षेत्रफल",
        surfaceAreaOfRectangularPrism: "आयताकार घन का सतही क्षेत्रफल",
        surfaceAreaOfPyramid: "पिरामिड का सतही क्षेत्रफल",
        surfaceAreaOfConeFrustum: "कोण फ्रस्टम का सतही क्षेत्रफल",
        surfaceAreaOfSphereFrustum: "गोले फ्रस्टम का सतही क्षेत्रफल",
        sphereCircumference: "गोले की परिधि",
        circleCircumference: "वृत्त की परिधि",
        rightTriangleHypotenuse: "सही त्रिभुज का कर्ण",
        ellipseFocalLength: "अंडाकार का फोकल लंबाई",
        geometricMean: "ज्यामितीय औसत",
        harmonicMean: "हार्मोनिक औसत",
        arithmeticMean: "सांख्यिकी औसत",
        quadraticEquationRoots: "द्विघात समीकरण के मूल",
        distanceFormula: "दो बिंदुओं के बीच की दूरी",
        midpointFormula: "दो बिंदुओं का मध्य बिंदु",
        simpleInterest: "साधारण ब्याज",
        compoundInterest: "संयुग्म ब्याज",
        speedTimeDistance: "गति, समय और दूरी",
        force: "बल (F = ma)",
        momentum: "गति (p = mv)",
        work: "कार्य (W = F × d)",
        power: "शक्ति (P = W/t)",
        acceleration: "त्वरण (a = Δv / Δt)",
      },
      inputLabels: {
        num1: "संख्या 1",
        num2: "संख्या 2",
        base: "आधार",
        height: "ऊँचाई",
        side: "तरफ की लंबाई",
        radius: "त्रिज्या",
        length: "लंबाई",
        width: "चौड़ाई",
        slantHeight: "झुकी हुई ऊँचाई",
        baseArea: "आधार क्षेत्रफल",
        diagonal1: "आड़ा 1",
        diagonal2: "आड़ा 2",
        angle: "कोण (रैडियन में)",
        time: "समय",
        velocity: "वेग",
        mass: "द्रव्यमान",
        distance: "दूरी",
        rate: "दर",
        principal: "प्रारंभिक धन",
        rateOfInterest: "ब्याज दर",
        timePeriod: "समय अवधि",
        frequency: "आवृत्ति",
        a: "गुणांक a",
        b: "गुणांक b",
        c: "गुणांक c",
      },
    },
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2 }}>
        <Button variant="outlined" onClick={() => handleLanguageChange("en")}>
          English
        </Button>
        <Button variant="outlined" onClick={() => handleLanguageChange("hi")} sx={{ ml: 2 }}>
          हिंदी
        </Button>
      </Box>

      <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 4 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          {text[language].title}
        </Typography>
        <Typography variant="body1" gutterBottom align="center" color="textSecondary">
          {text[language].description}
        </Typography>

        <Box sx={{ marginTop: 3 }}>
          {/* Operation Select */}
          <FormControl fullWidth>
            <InputLabel>Operation</InputLabel>
            <Select
              value={operation}
              onChange={(e) => {
                setOperation(e.target.value);
                setInputs({});
                setResult(null);
                setError(null);
              }}
              label="Operation"
              variant="outlined"
              sx={{ mb: 2 }}
            >
              {Object.entries(operations).map(([key, { label }]) => (
                <MenuItem key={key} value={key}>
                  {text[language].operations[key]} {/* Update operation label */}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Input Fields */}
          {operations[operation].inputs.map((input) => (
            <TextField
              key={input.name}
              label={text[language].inputLabels[input.name] || input.label} 
              type="number"
              value={inputs[input.name] || ""}
              onChange={(e) => handleInputChange(input.name, e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ mb: 2 }}
              error={!!error}
              helperText={error && `${text[language].errorLabel} ${input.label}`}
            />
          ))}

          {/* Calculate Button */}
          <Button
            onClick={handleCalculate}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 2, mt: 2 }}
          >
            {text[language].calculateBtn}
          </Button>

          {/* Result and Error Messages */}
          {result !== null && (
            <Box sx={{ mt: 3, p: 2, backgroundColor: "#e8f5e9", borderRadius: 1, textAlign: "center" }}>
              <Typography variant="h6" color="success.main">
                {text[language].resultLabel} {result.toFixed(4)}
              </Typography>
            </Box>
          )}

          {error && (
            <Box sx={{ mt: 3, p: 2, backgroundColor: "#fbe9e7", borderRadius: 1, textAlign: "center" }}>
              <Typography variant="h6" color="error.main">
                {error}
              </Typography>
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  );
}
