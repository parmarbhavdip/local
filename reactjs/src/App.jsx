import React, { Component } from 'react';

class BMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      bmi: null,
      classification: '',
    };
  }

  handleWeightChange = (e) => {
    this.setState({ weight: e.target.value });
  };

  handleHeightChange = (e) => {
    this.setState({ height: e.target.value });
  };

  calculateBMI = () => {
    const weightKg = parseFloat(this.state.weight);
    const heightM = parseFloat(this.state.height);

    if (weightKg > 0 && heightM > 0) {
      const bmi = (weightKg / (heightM * heightM)).toFixed(1);
      const classification = this.getBMIClassification(bmi);

      this.setState({ bmi, classification });
    } else {
      this.setState({
        bmi: null,
        classification: 'Please enter valid height and weight',
      });
    }
  };

  getBMIClassification = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Healthy Weight';
    if (bmi < 30) return 'Overweight';
    if (bmi < 35) return 'Obesity Class I';
    if (bmi < 40) return 'Obesity Class II';
    return 'Obesity Class III';
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>BMI Calculator</h2>

        <input
          type="number"
          placeholder="Weight (kg)"
          value={this.state.weight}
          onChange={this.handleWeightChange}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Height (m)"
          value={this.state.height}
          onChange={this.handleHeightChange}
          style={styles.input}
        />

        <button onClick={this.calculateBMI} style={styles.button}>
          Calculate BMI
        </button>

        {this.state.bmi && (
          <div>
            <p><strong>BMI:</strong> {this.state.bmi}</p>
            <p><strong>Status:</strong> {this.state.classification}</p>
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    width: '100%',
    background: '#007bff',
    color: '#fff',
    border: 'none',
  },
};

export default BMICalculator;
