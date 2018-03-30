import React, { Component } from 'react';
import G2 from '@antv/g2';
var cid = 0
class ReactG2 extends Component {
  constructor (props) {
    super(props);
    this.chartId = 'ReactG2-Charts-' + (cid++);
  }
  initCharts (props) {
    const chart = new G2.Chart({
      container: this.chartId,
      width: props.width,
      height: props.height
    });
    chart.source(props.data);
    props.config(chart);
    // chart.interval().position('year*sales');
    chart.render();
    this.chart = chart;
  }
  componentDidMount () {
    this.initCharts(this.props);
  }
  componentWillReceiveProps (newProps) {
    if (this.props.data !== newProps.data) {
      this.chart.changeData(newProps.data);
    }
    if (this.props.width !== newProps.width || this.props.height !== newProps.height) {
      this.chart.changeData(newProps.width, newProps.height);
    }
    if (this.props.config !== newProps.config) {
      newProps.config(this.chart);
    }
    this.chart.render();
  }
  componentWillUnmount () {
    this.chart.destroy();
    this.chart = null;
    this.chartId = null;
  }
  render() {
    return (
      <div id={this.chartId}></div>
    );
  }
}

export default ReactG2;
