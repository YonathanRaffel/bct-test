import React, { Component } from 'react';
import './App.css';
import batteryData from './battery-data.json';

class App extends Component {
  state = {
    wheel: 19,
    ac: true,
    speedValue: 55,
    temperature: 20
  };

  changeWheel19 = () => {
    this.setState({wheel: 19});
  }

  changeWheel21 = () => {
    this.setState({wheel: 21});
  }

  toggleAc = () => {
    this.setState({ac: !this.state.ac});
  }

  incSpeed = () => {
    if (this.state.speedValue >= 45 && this.state.speedValue < 70) {
      this.setState({speedValue: this.state.speedValue + 5});
    }
  }

  decSpeed = () => {
    if (this.state.speedValue > 45 && this.state.speedValue <= 70) {
      this.setState({speedValue: this.state.speedValue - 5});
    }
  }

  incTemp = () => {
    if (this.state.temperature >= -10 && this.state.temperature < 40) {
      this.setState({temperature: this.state.temperature + 10});
    }
  }

  decTemp = () => {
    if (this.state.temperature > -10 && this.state.temperature <= 40) {
      this.setState({temperature: this.state.temperature - 10});
    }
  }

  render() {
    let wheelLeft = 'wheel-left speed-' + this.state.speedValue;
    let wheelRight = 'wheel-right speed-' + this.state.speedValue;

    return (
      <div className="App">
        <header className="header">
          <img className="logo" src={require('./assets/logo.svg')} />
        </header>
        <div className="content">
          <h1>Range Per Charge</h1>
          <div className="tesla-car">
            <img className="tesla-img" src={require('./assets/tesla.jpg')} />
            <img className={wheelLeft} src={require('./assets/wheel-'+ this.state.wheel +'.png')} />
            <img className={wheelRight} src={require('./assets/wheel-'+ this.state.wheel +'.png')} />
          </div>
          <div className="models">
            <div className="model">
              <img src={require('./assets/60.svg')} />
              <h1>{batteryData['60'][this.state.wheel][this.state.ac ? 'on' : 'off'].speed[this.state.speedValue][this.state.temperature]}<span className="mi">MI</span></h1>

            </div>
            <div className="model">
              <img src={require('./assets/60d.svg')} />
              <h1>{batteryData['60D'][this.state.wheel][this.state.ac ? 'on' : 'off'].speed[this.state.speedValue][this.state.temperature]}<span className="mi">MI</span></h1>
            </div>
            <div className="model">
              <img src={require('./assets/75.svg')} />
              <h1>{batteryData['75'][this.state.wheel][this.state.ac ? 'on' : 'off'].speed[this.state.speedValue][this.state.temperature]}<span className="mi">MI</span></h1>
            </div>
            <div className="model">
              <img src={require('./assets/75d.svg')} />
              <h1>{batteryData['75D'][this.state.wheel][this.state.ac ? 'on' : 'off'].speed[this.state.speedValue][this.state.temperature]}<span className="mi">MI</span></h1>
            </div>
            <div className="model">
              <img src={require('./assets/90d.svg')} />
              <h1>{batteryData['90D'][this.state.wheel][this.state.ac ? 'on' : 'off'].speed[this.state.speedValue][this.state.temperature]}<span className="mi">MI</span></h1>
            </div>
            <div className="model">
              <img src={require('./assets/p100d.svg')} />
              <h1>{batteryData['P100D'][this.state.wheel][this.state.ac ? 'on' : 'off'].speed[this.state.speedValue][this.state.temperature]}<span className="mi">MI</span></h1>
            </div>
          </div>
          <div className="buttons">
            <div className="sections speed-section">
              <h2>Speed</h2>
              <h1>{this.state.speedValue}<span className="mi">MPH</span></h1>
              <button disabled={this.state.speedValue === 45} onClick={this.decSpeed} className="button-config dec">-</button>
              <button disabled={this.state.speedValue === 70} onClick={this.incSpeed} className="button-config inc">+</button>
            </div>
            <div className="sections temp-section">
              <h2>Outside Temperature</h2>
              <h1>{this.state.temperature}<span className="mi">°C</span></h1>
              <button disabled={this.state.temperature === -10} onClick={this.decTemp} className="button-config dec">-</button>
              <button disabled={this.state.temperature === 40} onClick={this.incTemp} className="button-config inc">+</button>
            </div>
            <div className="sections ac-section">
              <h2>{this.state.temperature >= 20 ? 'AC' : 'HEAT'}</h2>
              <h1>{this.state.ac ? 'ON' : 'OFF'}</h1>
              <button onClick={this.toggleAc} className="button-config ac">Turn {this.state.ac ? 'OFF' : 'ON'}</button>
            </div>
            <div className="sections wheel-section">
              <h2>Wheels</h2>
              <h1>{this.state.wheel}<span className="mi">"</span></h1>
              <button disabled={this.state.wheel === 19} onClick={this.changeWheel19} className="button-config wheel">19"</button>
              <button disabled={this.state.wheel === 21} onClick={this.changeWheel21} className="button-config wheel">21"</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;