import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
class MyFirstChart extends Component {
  componentDidMount() {
    this.createBarChart();
  }
  componentDidUpdate() {
    this.createBarChart();
  }
  createBarChart() {
    const node = this.node;
    const data = this.props.data;
    var width = 420,
      barHeight = 20;
    const xScale = scaleLinear()
      .domain([0, max(data)])
      .range([0, width]);
    let chart = select(node)
      .attr("width", width)
      .attr("height", barHeight * data.length);
    let bar = chart
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
        return `translate(0, ${i * barHeight})`;
      });

    bar
      .append("rect")
      .attr("width", xScale)
      .attr("height", barHeight - 1);

    bar
      .append("text")
      .attr("x", d => xScale(d) - 3)
      .attr("y", barHeight / 2)
      .attr("dy", ".40em")
      .text(d => d);
  }
  render() {
    return <svg className="chart" ref={node => (this.node = node)} />;
  }
}
export default MyFirstChart;
