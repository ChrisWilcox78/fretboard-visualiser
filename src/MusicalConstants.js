const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const PENTATONIC_SCALES = [{
    name: "MINOR_PENTATONIC",
    intervals: [{
        halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "MAJOR_PENTATONIC",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            }
        ]
    }
];
const MAJOR_SCALES = [{
    name: "IONIAN",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 11,
                degree: 7
            }
        ]
    },
    {
        name: "DORIAN",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "PHRYGIAN",
        intervals: [{
            halfSteps: 1,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 8,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "LYDIAN",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 6,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 11,
                degree: 7
            }
        ]
    },
    {
        name: "MIXOLYDIAN",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "AEOLIAN",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 8,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "LOCRIAN",
        intervals: [{
                halfSteps: 1,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 6,
                degree: 5
            },
            {
                halfSteps: 8,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    }
]
const HARMONIC_MINOR_SCALES = [
    {
        name: "HARMONIC_MINOR",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 8,
                degree: 6
            },
            {
                halfSteps: 11,
                degree: 7
            }
        ]
    },
    {
        name: "LOCRIAN_NATURAL_6",
        intervals: [{
                halfSteps: 1,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 6,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
    name: "IONIAN_AUGMENTED",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 8,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 11,
                degree: 7
            }
        ]
    },
    {
        name: "DORIAN_#4",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 6,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "PHRYGIAN_DOMINANT",
        intervals: [{
            halfSteps: 1,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 8,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "LYDIAN_#2",
        intervals: [{
                halfSteps: 3,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 6,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 11,
                degree: 7
            }
        ]
    },
    {
        name: "SUPER_LOCRIAN",
        intervals: [{
                halfSteps: 1,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 4,
                degree: 4
            },
            {
                halfSteps: 6,
                degree: 5
            },
            {
                halfSteps: 8,
                degree: 6
            },
            {
                halfSteps: 9,
                degree: 7
            }
        ]
    }
]

const MELODIC_MINOR_SCALES = [
    {
        name: "MELODIC_MINOR",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 11,
                degree: 7
            }
        ]
    },
    {
        name: "PHRYGIAN_#6",
        intervals: [{
            halfSteps: 1,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "LYDIAN_AUGMENTED",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 6,
                degree: 4
            },
            {
                halfSteps: 8,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 11,
                degree: 7
            }
        ]
    },
    {
        name: "LYDIAN_DOMINANT",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 6,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 9,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "MIXOLYDIAN_b6",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 8,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "AEOLIAN_b5",
        intervals: [{
                halfSteps: 2,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 5,
                degree: 4
            },
            {
                halfSteps: 6,
                degree: 5
            },
            {
                halfSteps: 8,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "ALTERED_SCALE",
        intervals: [{
                halfSteps: 1,
                degree: 2
            },
            {
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 4,
                degree: 4
            },
            {
                halfSteps: 6,
                degree: 5
            },
            {
                halfSteps: 8,
                degree: 6
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    }
]

const ARPEGGIOS = [{
    name: "MAJOR_TRIAD",
        intervals: [{
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 7,
                degree: 5
            }
        ]
    },
    {
        name: "MINOR_TRIAD",
        intervals: [{
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 7,
                degree: 5
            }
        ]
    },
    {
        name: "AUGMENTED_TRIAD",
        intervals: [{
            halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 8,
                degree: 5
            }
        ]
    },
    {
        name: "DIMINISHED_TRIAD",
        intervals: [{
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 6,
                degree: 5
            }
        ]
    },
    {
        name: "MAJOR_SEVENTH",
        intervals: [{
            halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 11,
                degree: 7
            }
        ]
    },
    {
        name: "MINOR_SEVENTH",
        intervals: [{
            halfSteps: 3,
            degree: 3
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "DOMINANT_SEVENTH",
        intervals: [{
                halfSteps: 4,
                degree: 3
            },
            {
                halfSteps: 7,
                degree: 5
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    },
    {
        name: "MINOR_SEVEN_FLAT_FIVE",
        intervals: [{
                halfSteps: 3,
                degree: 3
            },
            {
                halfSteps: 6,
                degree: 5
            },
            {
                halfSteps: 10,
                degree: 7
            }
        ]
    }
]
const STRING_TUNINGS = [{
        note: 'e',
        stringNumber: 1
    },
    {
        note: 'b',
        stringNumber: 2
    },
    {
        note: 'g',
        stringNumber: 3
    },
    {
        note: 'D',
        stringNumber: 4
    },
    {
        note: 'A',
        stringNumber: 5
    },
    {
        note: 'E',
        stringNumber: 6
    }
];

const SCALE_FAMILIES = [{
        familyName: 'PENTATONIC',
        defaultScale: "MINOR_PENTATONIC",
        scales: PENTATONIC_SCALES
    },
    {
        familyName: 'MAJOR',
        defaultScale: "IONIAN",
        scales: MAJOR_SCALES
    },
    {
        familyName: 'HARMONIC_MINOR',
        defaultScale: "HARMONIC_MINOR",
        scales: HARMONIC_MINOR_SCALES
    },
    {
        familyName: 'MELODIC_MINOR',
        defaultScale: "MELODIC_MINOR",
        scales: MELODIC_MINOR_SCALES
    }
];
export {
    NOTES,
    SCALE_FAMILIES,
    ARPEGGIOS,
    STRING_TUNINGS
};