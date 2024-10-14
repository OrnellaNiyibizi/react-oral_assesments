import React, { Component } from 'react';

interface TemperatureConverterState {
  celsius: number;
  fahrenheit: number;
}

class TemperatureConverter extends Component<
  object,
  TemperatureConverterState
> {
  constructor(props: object) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 32,
    };
  }

  // Convert Celsius to Fahrenheit
  convertToFahrenheit = (celsius: number) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    this.setState({ celsius, fahrenheit });
  };

  // Convert Fahrenheit to Celsius
  convertToCelsius = (fahrenheit: number) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    this.setState({ fahrenheit, celsius });
  };

  handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const celsius = parseFloat(event.target.value);
    if (!isNaN(celsius)) {
      this.convertToFahrenheit(celsius);
    }
  };

  handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fahrenheit = parseFloat(event.target.value);
    if (!isNaN(fahrenheit)) {
      this.convertToCelsius(fahrenheit);
    }
  };

  render() {
    const { celsius, fahrenheit } = this.state;

    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold text-center mb-4">
            Temperature Converter
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Celsius
            </label>
            <input
              type="number"
              value={celsius}
              onChange={this.handleCelsiusChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Fahrenheit
            </label>
            <input
              type="number"
              value={fahrenheit}
              onChange={this.handleFahrenheitChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TemperatureConverter;
