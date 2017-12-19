import React, { Component } from "react";
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import { arc, pie } from "d3-shape";

export default class QualityChart extends Component {
  componentDidMount() {
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node;
    const data = this.props.data;
    let r = 80;

    let color = scaleOrdinal().range(["#60b8b0", "#4ecae0", "#dc5f4b"]);

    let canvas = select(node)
      .append("svg")
      .attr("width", 180)
      .attr("height", 180);
    let group = canvas.append("g").attr("transform", "translate(90,90)");

    let arcEl = arc()
      .innerRadius(30)
      .outerRadius(r);
    let pieEl = pie().value(d => d);
    let arcs = group
      .selectAll(".arc")
      .data(pieEl(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arcEl)
      .attr("fill", (d, i) => color(i));
    arcs
      .append("text")
      .attr("transform", d => `translate(${arcEl.centroid(d)})`)
      .text(d => `${d.data}%`);
  }

  render() {
    return <div className="verticalChart" ref={node => (this.node = node)} />;
  }
}
