import React, { Component } from 'react';

import { titleCase, replaceAll } from 'voca';

import './App.css';
import FretboardRenderer from './components/FretboardRenderer';
import Header from './components/header/Header';
import TopControlGroup from './components/top-control-group/TopControlGroup';
import SequenceSelectGroup from './components/sequence-select-group/SequenceSelectGroup';
import { SCALE_FAMILIES } from './MusicalConstants'
import { getIntervalsForScale } from './components/MusicalUtilities'


class App extends Component {
  fretboardRenderer;

  state = {
    currentScaleFamily: "PENTATONIC",
    currentScale: "MINOR_PENTATONIC",
    currentRoot: "C",
    currentArpeggio: "MAJOR_TRIAD",
    showScales: true,
    showNotes: false,
    currentSequenceName: this.formatNameForDisplay("MINOR_PENTATONIC")
  }

  componentDidMount() {
    this.fretboardRenderer = new FretboardRenderer("#svg", this.state);
    this.fretboardRenderer.updateWithScale(getIntervalsForScale(this.state.currentScaleFamily, this.state.currentScale));
  }

  formatNameForDisplay(name) {
    return replaceAll(titleCase(name), '_', ' ');
  }

  handleScaleSelection(event) {
    this.setState({ 
      currentScale: event.target.value, 
      currentSequenceName: this.formatNameForDisplay(event.target.value) 
    }, () => this.fretboardRenderer.updateWithScale(getIntervalsForScale(this.state.currentScaleFamily,this.state.currentScale)));
  }

  handleScaleFamilySelection(event) {
    let scaleFamilyToUse = event.target.value,
        scaleToUse = SCALE_FAMILIES.find(fam => fam.familyName === scaleFamilyToUse).defaultScale;
    this.setState({ 
      currentScaleFamily: scaleFamilyToUse, 
      currentScale: scaleToUse, 
      currentSequenceName: this.formatNameForDisplay(scaleToUse) }, () => this.fretboardRenderer.updateWithScale(getIntervalsForScale(this.state.currentScaleFamily, this.state.currentScale)));
  }

  handleArpeggioSelection(event) {
    this.setState({ currentArpeggio: event.target.value, currentSequenceName: this.formatNameForDisplay(event.target.value) }, () => this.fretboardRenderer.updateWithArpeggio(this.state.currentArpeggio));
  }

  handleRootSelection(event) {
    this.setState({ currentRoot: event.target.value }, () => this.fretboardRenderer.updateWithRoot(this.state.currentRoot));
  }

  handleSequenceToggle() {
    this.setState((prevState) => {
      return {
        showScales: !prevState.showScales,
        currentSequenceName: prevState.showScales ? this.formatNameForDisplay(this.state.currentArpeggio) :
          this.formatNameForDisplay(this.state.currentScale)
      };
    }, this.updateSequenceDisplay);
  }

  updateSequenceDisplay() {
    if (this.state.showScales) {
      this.fretboardRenderer.updateWithScale(getIntervalsForScale(this.state.currentScaleFamily, this.state.currentScale));
    }
    else {
      this.fretboardRenderer.updateWithArpeggio(this.state.currentArpeggio);
    }
  }

  handlePositionDisplayToggle() {
    this.setState((prevState) => {
      return { showNotes: !prevState.showNotes }
    }, this.updateMarkerDisplay);
  }

  updateMarkerDisplay() {
    if (this.state.showNotes) {
      this.fretboardRenderer.showNoteMarkers();
    }
    else {
      this.fretboardRenderer.showDegreeMarkers();
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          currentRoot={this.state.currentRoot}
          currentSequenceName={this.state.currentSequenceName}
        />
        <TopControlGroup
          currentRoot={this.state.currentRoot}
          rootChangeFn={event => this.handleRootSelection(event)}
          showScales={this.state.showScales}
          sequenceToggleFn={() => this.handleSequenceToggle()}
          showNotes={this.state.showNotes}
          markerToggleFn={() => this.handlePositionDisplayToggle()}
        />
        <SequenceSelectGroup
          showScales={this.state.showScales}
          currentScale={this.state.currentScale}
          currentScaleFamily={this.state.currentScaleFamily}
          scaleChangeFn={event => this.handleScaleSelection(event)}
          scaleFamilyChangeFn={event => this.handleScaleFamilySelection(event)}
          currentArpeggio={this.state.currentArpeggio}
          arpeggioChangeFn={event => this.handleArpeggioSelection(event)}
          nameFormatter={name => this.formatNameForDisplay(name)}
        />
        <svg id="svg"></svg>
      </div>
    );
  }
}

export default App;
