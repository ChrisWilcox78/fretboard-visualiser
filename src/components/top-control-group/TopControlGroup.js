import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

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


  buildRootSelect() {
    return NOTES.map(note => {
      return <option key={note} value={note}>{note}</option>;
    });
  }

  render() {
    return (
      <div className="top-control-group">
        <span className="root-select-container select-container">
          Root:
          <select value={this.props.currentRoot} onChange={event => this.props.rootChangeFn(event)}>
            {this.buildRootSelect()}
          </select>
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