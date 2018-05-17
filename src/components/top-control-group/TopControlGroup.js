import React, { Component } from 'react';

import './TopControlGroup.css';
import { NOTES } from '../../MusicalConstants';

class TopControlGroup extends Component {

  props = {
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
        <button onClick={this.props.sequenceToggleFn}>
          {this.props.showScales ? "Show Arpeggios" : "Show Scales"}
        </button>
        <button onClick={this.props.markerToggleFn}>
          {this.props.showNotes ? "Show Degrees" : "Show Notes"}
        </button>
      </div>
    );
  }

}

export default TopControlGroup;