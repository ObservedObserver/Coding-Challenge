import React, { Component } from 'react';
import ReactG2 from './components/ReactG2.js'
class App extends Component {
  render() {
    // const { data } = this.props;
    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 },
    ];
    var operation = (chart) => {
      chart.interval().position('year*sales');
    }
    return <ReactG2
      data={data}
      width={600}
      height={600}
      config={operation}
    />;
  }
}

export default App;
