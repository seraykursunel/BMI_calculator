import { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);

  const calculation = (a, b) => {
    return a / (b * b * 0.0001);
  };

  const bmiCalculation = useMemo(() => calculation(weight, height), [
    weight,
    height
  ]).toFixed(2);

  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <br />
      <section>
        <input
          type="range"
          id="weight"
          name="weight"
          min="40"
          max="150"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor="weight"> Kilo: {weight}kg</label>
      </section>
      <br />
      <section>
        <input
          type="range"
          id="height"
          name="height"
          min="145"
          max="220"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label htmlFor="height"> Boy: {height}cm</label>
      </section>
      <h3 className="bmi">BMI: {bmiCalculation}</h3>
    </div>
  );
}
