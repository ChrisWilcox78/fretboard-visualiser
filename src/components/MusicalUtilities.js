import {
    NOTES,
    SCALE_FAMILIES
} from '../MusicalConstants';

/**
 * Gets the musical notes for a given sequence of intervals (defined in half steps) for a given root.
 * A sequence can be an arpeggio or a scale.
 * 
 * @returns {[{note:string, degree:number}]} An array of object containing a note and the sequence degree of that note.
 * 
 * @param {string} root 
 * @param {[{halfSteps:number, degree:number}]} sequence 
 */
function getSequenceNotes(root, sequence) {
    const rootPosition = NOTES.indexOf(root);
    var notes = [{
        note: root,
        degree: 1
    }];

    sequence.forEach(scaleElement => {
        notes.push({
            note: NOTES[(rootPosition + scaleElement.halfSteps) % NOTES.length],
            degree: scaleElement.degree
        });
    });
    return notes;
}

/**
 * Gets the overall position of a note in the overall sequence of all notes starting with 'A'.
 * 
 * @returns {number}
 * 
 * @param {string} note 
 * @param {string} noteOfInterest 
 */
function getOverallNotePosition(note, noteOfInterest) {
    const noteIndex = NOTES.indexOf(note),
        stringNoteIndex = NOTES.indexOf(noteOfInterest);
    var indexDifference = noteIndex - stringNoteIndex;
    if (indexDifference > 0) {
        return indexDifference;
    } else {
        return NOTES.length + indexDifference;
    }
}

function getIntervalsForScale(scaleFamily, scaleName) {
    return SCALE_FAMILIES.find(fam => fam.familyName === scaleFamily).scales.find(scale => scale.name === scaleName).intervals;
}

export {
    getSequenceNotes,
    getOverallNotePosition,
    getIntervalsForScale
};