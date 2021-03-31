import React from 'react'
import * as d3 from 'd3'
import { Simulation, SimulationNodeDatum } from 'd3-force'
// import './BubbleChart.scss'
// import { Button } from '@material-ui/core'
// import { Types } from './types'

const uuid = require('react-uuid');

class BubbleNewChart extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
    this.forceData = this.setForceData(props)
  }

  componentDidMount() {
    this.animateBubbles()
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevProps.bubblesData) !== JSON.stringify(this.props.bubblesData)) {
      this.forceData = this.setForceData(this.props)
      this.animateBubbles()
    }
  }

  setForceData = ( props ) => {
    const d = []
    for (let i= 0; i < props.bubblesData.length; i++) {
      d.push({ 'size': props.bubblesData[i].size })
    }
    return d
  }

  animateBubbles = () => {
    if (this.props.bubblesData.length > 0) {
      this.simulatePositions(this.forceData)
    }
  }

  radiusScale = (value) => {
    const fx = d3.scaleSqrt().range([1, 50]).domain([this.props.minValue, this.props.maxValue])
    return fx(value)
  }

  simulatePositions = (data => {
    this.simulation = d3
      .forceSimulation()
      .nodes(data )
      .velocityDecay(0.05)
      .force('x', d3.forceX().strength(0.2))
      .force('y', d3.forceY().strength(0.2))
      .force(
        'collide',
        d3.forceCollide((d) => {
          return this.radiusScale((d).size) + 2
        })
      )
      .on('tick', () => {
        this.setState({ data })
      })
  })

  renderBubbles = (data => {
    return data.map((item, index) => {
      const { props } = this
      const fontSize = this.radiusScale((item).size) / 4
      const content = props.bubblesData.length > index ? props.bubblesData[index].name : ''
      const strokeColor = props.bubblesData.length > index ? 'darkgrey' : this.props.backgroundColor
      return (
        <g key={`g-${uuid()}`} transform={`translate(${props.width/2 + item.x - 70}, ${props.height / 2 + item.y})`}>
          <circle
            style={{ cursor: 'pointer' }}
            onClick={() => {
              this.props.selectedCircle(content)
            }}
            id="circleSvg"
            r={this.radiusScale((item).size*4)}
            fill={props.bubblesData[index].fillColor}
            stroke={strokeColor}
            strokeWidth="2"
          />
          <text
            onClick={() => {
              this.props.selectedCircle(content)
            }}
            dy="6"
            className="bubbleText"
            fill={this.props.textFillColor}
            textAnchor="middle"
            fontSize={`${fontSize}px`}
            fontWeight="normal"
          >
            {content}
          </text>
        </g>
      )
    })
  })

  render() {
    return (
        <div aria-hidden="true" id="chart">
          <svg width={1000} height={this.props.height}>
            {this.renderBubbles(this.state.data)}
          </svg>
        </div>
    )
  }
}

export default BubbleNewChart;