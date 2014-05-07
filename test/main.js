var test = require('nodeunit');
var deepEqual = require('deep-equal');
var walverine = require('../walverine');

var singles = [
  {
    name: "Hardibble",
    text: "I am a cat. Smith v. Hardibble, 111 Cal.2d 222, 555, 558, 333 Cal.3d 444 (1988)",
    matches: [
      {
        volume: 111,
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
        relations: [ 0, 1 ]
      },
      {
        volume: 333,
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
        relations: [ 0, 1 ]
      }
    ]
  }, // end Hardribble
  {
    name: "US v. Mead",
    text: "The dissent is correct that United States v. Mead Corp., 533 U. S. 218 (2001), requires that",
    matches: [
      {
        volume: 533,
        reporter: 'U.S.',
        page: 218,
        lookup_index: 0,
        canonical_reporter: 'U.S.',
        extra: null,
        defendant: 'Mead Corp.',
        plaintiff: 'United States',
        court: null,
        year: 2001,
        mlz_jurisdiction: 'us;federal;supreme.court',
        match_url: null,
        end_idx: 12,
        cert_order: null,
        disposition: null,
        match: 'United States v. Mead Corp., 533 U. S. 218 (2001), requires that',
        seqID: 0,
        relations: [ 0 ]
      }
    ]
  }, // end US v. Mead
  {
    name: "Cellco Partnership v. FCC",
    text: "The false dichotomy between “jurisdictional” and “non-jurisdictional” agency interpretations may be no more than a bogeyman, but it is dangerous all the same. Like the Hound of the Baskervilles, it is conjured by those with greater quarry in sight: Make no mistake—the ultimate target here is Chevron itself. Savvy challengers of agency action would play the “jurisdictional” card in every case. See, e.g., Cellco Partnership v. FCC, 700 F. 3d 534, 541 (CADC 2012). Some judges would be deceived bythe specious, but scary-sounding, “jurisdictional”-“nonjurisdictional” line; others tempted by the prospect of making public policy by prescribing the meaning of am-biguous statutory commands. The effect would be to transfer any number of interpretive decisions—archetypal Chevron questions, about how best to construe an ambigu-ous term in light of competing policy interests—from the agencies that administer the statutes to federal courts.",
    matches: [
      {
        volume: 700,
        reporter: 'F.3d',
        page: 534,
        lookup_index: 0,
        canonical_reporter: 'F.',
        extra: '541',
        defendant: 'FCC',
        plaintiff: 'Cellco Partnership',
        court: 'CADC ',
        year: 2012,
        mlz_jurisdiction: 'us',
        match_url: null,
        end_idx: 68,
        cert_order: null,
        disposition: null,
        match: 'Cellco Partnership v. FCC, 700 F. 3d 534, 541 (CADC 2012). Some judges would be deceived bythe specious, but scary-sounding, “jurisdictional”-“nonjurisdictional” line; others tempted by the prospect of making public policy by prescribing the meaning of am-biguous statutory commands. The effect would be to transfer any number of interpretive decisions—archetypal Chevron questions, about how best to construe an ambigu-ous term in light of competing policy interests—from the agencies that administer the statutes to federal courts.',
        seqID: 0,
        relations: [ 0 ]
      }
    ]
  } // end Cellco Partnership
];

var testSingle = function(single) {
  exports[single.name] = function(test) {
    var actual = walverine.get_citations(single.text);
    var expected = single.matches;
    test.ok(deepEqual(actual, expected), "derp");
    test.done();
  };
};

singles.forEach(testSingle);