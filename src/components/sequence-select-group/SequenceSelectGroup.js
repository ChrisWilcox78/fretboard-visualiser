import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

import { SCALE_FAMILIES, ARPEGGIOS } from '../../MusicalConstants';
import './SequenceSelectGroup.css';

class SequenceSelectGroup extends Component {

  static defaultProps = {
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
      return {  
        value: sequence.name,
        text: this.props.nameFormatter(sequence.name)
      };
    });
  }

  buildFamilySelect(familyNames) {
    return familyNames.map(familyName => {
      return {
        value: familyName,
        text: this.props.nameFormatter(familyName)
      };
    });
  }

  render() {
    return (
      <div className="sequence-select-group">
        <span className="scale-family-select-container select-container">
          <span className="dropdown-label">Scale Family:</span>
          <Dropdown 
            className="scale-family-dropdown"
            disabled={!this.props.showScales} 
            value={this.props.currentScaleFamily} 
            selection
            onChange={(event, family) => this.props.scaleFamilyChangeFn(family.value)}
            options={this.buildFamilySelect(SCALE_FAMILIES.map(fam => fam.familyName))}
          />
        </span>
        <span className="scale-select-container select-container">
          <span className="dropdown-label">Scale:</span>
          <Dropdown 
            className="scale-dropdown"
            disabled={!this.props.showScales} 
            value={this.props.currentScale} 
            selection
            onChange={(event, scale) => this.props.scaleChangeFn(scale.value)}
            options={this.buildSequenceSelect(SCALE_FAMILIES.find(fam => fam.familyName === this.props.currentScaleFamily).scales)}
          />
        </span>
        <span className="arpeggio-select-container select-container">
          <span className="dropdown-label">Arpeggio:</span>
          <Dropdown 
            className="arpeggio-dropdown"
            disabled={this.props.showScales} 
            value={this.props.currentArpeggio}
            selection
            onChange={(event, arpeggio) => this.props.arpeggioChangeFn(arpeggio.value)}
            options={this.buildSequenceSelect(ARPEGGIOS)}
          />
        </span>
      </div>
    );
  }

}

export default SequenceSelectGroup;