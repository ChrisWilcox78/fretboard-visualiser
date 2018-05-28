import React, { Component } from 'react';
import { Button, Dropdown } from 'semantic-ui-react'

import './TopControlGroup.css';
import { NOTES } from '../../MusicalConstants';

class TopControlGroup extends Component {

  static defaultProps = {
    currentRoot: undefined,
    rootChangeFn: undefined,
    showScales: undefined,
    sequenceToggleFn: undefined,
    showNotes: undefined,
    markerToggleFn: undefined
  }


  buildRootOptions() {
    return NOTES.map(note => {
      return { 
        value: note,
        text: note
      };
    });
  }

  render() {
    return (
      <div className="top-control-group">
        <span className="root-select-container select-container">
          <span className="dropdown-label">Root:</span>
          <Dropdown 
            value={this.props.currentRoot} 
            selection
            onChange={(event, option) => this.props.rootChangeFn(option.value)}
            options={this.buildRootOptions()}
            className="root-dropdown"
          />
        </span>
        <Button.Group className="sequence-buttons">
          <Button onClick={() => this.props.sequenceToggleFn(true)} active={this.props.showScales}>
            Show Scales
          </Button>
          <Button.Or/>
          <Button onClick={() => this.props.sequenceToggleFn(false)} active={!this.props.showScales}>
            Show Arpeggios
          </Button>
        </Button.Group>
        <Button.Group>
          <Button onClick={() => this.props.markerToggleFn(false)} active={!this.props.showNotes}>
            Show Degrees
          </Button>
          <Button.Or/>
          <Button onClick={() => this.props.markerToggleFn(true)} active={this.props.showNotes}>
            Show Notes
          </Button>
        </Button.Group>
      </div>
    );
  }

}

export default TopControlGroup;