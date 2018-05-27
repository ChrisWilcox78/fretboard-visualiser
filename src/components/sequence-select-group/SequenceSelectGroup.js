import React, { Component } from 'react';

import { SCALE_FAMILIES, ARPEGGIOS } from '../../MusicalConstants';
import './SequenceSelectGroup.css';

class SequenceSelectGroup extends Component {

  props = {
    showScales: undefined,
    currentScale: undefined,
    currentScaleFamily: undefined,
    scaleChangeFn: undefined,
    scaleFamilyChangeFn: undefined,
    currentArpeggio: undefined,
    arpeggioChangeFn: undefined,
    nameFormatter: undefined
  }

  buildSequenceSelect(sequenceCollection) {
    return sequenceCollection.map(sequence => {
      return <option key={sequence.name} value={sequence.name}>{this.props.nameFormatter(sequence.name)}</option>;
    });
  }

  buildFamilySelect(familyNames) {
    return familyNames.map(familyName => {
      return <option key={familyName} value={familyName}>{this.props.nameFormatter(familyName)}</option>;
    });
  }

  render() {
    return (
      <div className="sequence-select-group">
        <span className="scale-family-select-container select-container">
          Scale Family:
          <select disabled={!this.props.showScales} value={this.props.currentScaleFamily} onChange={this.props.scaleFamilyChangeFn}>
            {this.buildFamilySelect(SCALE_FAMILIES.map(fam => fam.familyName))}
          </select>
        </span>
        <span className="scale-select-container select-container">
          Scale:
          <select disabled={!this.props.showScales} value={this.props.currentScale} onChange={this.props.scaleChangeFn}>
            {this.buildSequenceSelect(SCALE_FAMILIES.find(fam => fam.familyName === this.props.currentScaleFamily).scales)}
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