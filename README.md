# Walverine

*Mightier than a ferret, contains "Law Rev." spelled backwards.*

Walverine extracts structured case law citations from unstructured strings of text.

## Usage

```javascript
var walverine = require('walverine');
var input = "I am a cat. Smith v. Hardibble, 111 Cal.2d 222, 555, 558, 333 Cal.3d 444 (1988)";
var cites = walverine.get_citations(input);
console.log(cites);
// =>
/*
[ { volume: 111,
    reporter: 'Cal. 2d',
    page: 222,
    lookup_index: 0,
    canonical_reporter: 'Cal.',
    extra: '555, 558, 333 Cal.3d 444',
    defendant: 'Hardibble',
    plaintiff: 'Smith',
    court: null,
    year: 1988,
    mlz_jurisdiction: 'us;ca',
    match_url: null,
    end_idx: 11,
    cert_order: null,
    disposition: null,
    match: 'Smith v. Hardibble, 111 Cal.2d 222, 555, 558, 333 Cal.3d 444 (1988)',
    seqID: 0,
    relations: [ 0, 1 ] },
  { volume: 333,
    reporter: 'Cal. 3d',
    page: 444,
    lookup_index: 0,
    canonical_reporter: 'Cal.',
    extra: null,
    defendant: 'Hardibble',
    plaintiff: 'Smith',
    court: null,
    year: 1988,
    mlz_jurisdiction: 'us;ca',
    match_url: null,
    end_idx: 14,
    cert_order: null,
    disposition: null,
    CARRY_FORWARD: true,
    match: '558, 333 Cal.3d 444 (1988)',
    seqID: 1,
    relations: [ 0, 1 ] } ]

*/
```

## Installation

`npm install walverine`

## Heritage

CourtListener (Python) -> Free Law Ferret (Javascript/Firefox Extension) -> Walverine (Javascript/Node)

### License

See LICENSE.txt