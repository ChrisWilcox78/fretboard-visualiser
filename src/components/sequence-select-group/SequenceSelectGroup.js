import React, { Component } from 'react';

import { SCALES, ARPEGGIOS } from '../../MusicalConstants';
import './SequenceSelectGroup.css';

class SequenceSelectGroup extends Component {

  props = {
    showScales: undefined,
    currentScale: undefined,
    scaleChangeFn: undefined,
    currentArpeggio: undefined,
    arpeggioChangeFn: undefined,
    nameFormatter: undefined
  }

  buildSequenceSelect(sequenceCollection) {
    return sequenceCollection.map(sequence => {
      return <option key={sequence.name} value={sequence.name}>{this.props.nameFormatter(sequence.name)}</option>;
    });
  }

  render() {
    return (
      <div className="sequence-select-group">
        <span className="scale-select-container select-container">
          Scale:
          <select disabled={!this.props.showScales} value={this.props.currentScale} onChange={this.props.scaleChangeFn}>
            {this.buildSequenceSelect(SCALES)}
          </select>
        </span>
        <span className="arpeggio-select-container select-container">
          Arpeggio:
          <select disabled={this.props.showScales} value={this.props.currentArpeggio} onChange={this.props.arpeggioChangeFn}>
            {this.buildSequenceSelect(ARPEGGIOS)}
          </select>
        </span>
      </div>
    );
  }

}

export default SequenceSelectGroup;