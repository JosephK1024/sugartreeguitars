(function(){
  "use strict";

  var MAJOR_KEYS = [{"key":"C","tonicPc":0,"sharps":0,"flats":0,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"C","chord":"C"},{"degree":2,"roman":"ii","quality":"min","note":"D","chord":"Dm"},{"degree":3,"roman":"iii","quality":"min","note":"E","chord":"Em"},{"degree":4,"roman":"IV","quality":"maj","note":"F","chord":"F"},{"degree":5,"roman":"V","quality":"maj","note":"G","chord":"G"},{"degree":6,"roman":"vi","quality":"min","note":"A","chord":"Am"},{"degree":7,"roman":"vii°","quality":"dim","note":"B","chord":"B°"}],"relativeMinor":"Am","relativeMinorPc":9},{"key":"G","tonicPc":7,"sharps":1,"flats":0,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"G","chord":"G"},{"degree":2,"roman":"ii","quality":"min","note":"A","chord":"Am"},{"degree":3,"roman":"iii","quality":"min","note":"B","chord":"Bm"},{"degree":4,"roman":"IV","quality":"maj","note":"C","chord":"C"},{"degree":5,"roman":"V","quality":"maj","note":"D","chord":"D"},{"degree":6,"roman":"vi","quality":"min","note":"E","chord":"Em"},{"degree":7,"roman":"vii°","quality":"dim","note":"F#","chord":"F#°"}],"relativeMinor":"Em","relativeMinorPc":4},{"key":"D","tonicPc":2,"sharps":2,"flats":0,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"D","chord":"D"},{"degree":2,"roman":"ii","quality":"min","note":"E","chord":"Em"},{"degree":3,"roman":"iii","quality":"min","note":"F#","chord":"F#m"},{"degree":4,"roman":"IV","quality":"maj","note":"G","chord":"G"},{"degree":5,"roman":"V","quality":"maj","note":"A","chord":"A"},{"degree":6,"roman":"vi","quality":"min","note":"B","chord":"Bm"},{"degree":7,"roman":"vii°","quality":"dim","note":"C#","chord":"C#°"}],"relativeMinor":"Bm","relativeMinorPc":11},{"key":"A","tonicPc":9,"sharps":3,"flats":0,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"A","chord":"A"},{"degree":2,"roman":"ii","quality":"min","note":"B","chord":"Bm"},{"degree":3,"roman":"iii","quality":"min","note":"C#","chord":"C#m"},{"degree":4,"roman":"IV","quality":"maj","note":"D","chord":"D"},{"degree":5,"roman":"V","quality":"maj","note":"E","chord":"E"},{"degree":6,"roman":"vi","quality":"min","note":"F#","chord":"F#m"},{"degree":7,"roman":"vii°","quality":"dim","note":"G#","chord":"G#°"}],"relativeMinor":"F#m","relativeMinorPc":6},{"key":"E","tonicPc":4,"sharps":4,"flats":0,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"E","chord":"E"},{"degree":2,"roman":"ii","quality":"min","note":"F#","chord":"F#m"},{"degree":3,"roman":"iii","quality":"min","note":"G#","chord":"G#m"},{"degree":4,"roman":"IV","quality":"maj","note":"A","chord":"A"},{"degree":5,"roman":"V","quality":"maj","note":"B","chord":"B"},{"degree":6,"roman":"vi","quality":"min","note":"C#","chord":"C#m"},{"degree":7,"roman":"vii°","quality":"dim","note":"D#","chord":"D#°"}],"relativeMinor":"C#m","relativeMinorPc":1},{"key":"B","tonicPc":11,"sharps":5,"flats":0,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"B","chord":"B"},{"degree":2,"roman":"ii","quality":"min","note":"C#","chord":"C#m"},{"degree":3,"roman":"iii","quality":"min","note":"D#","chord":"D#m"},{"degree":4,"roman":"IV","quality":"maj","note":"E","chord":"E"},{"degree":5,"roman":"V","quality":"maj","note":"F#","chord":"F#"},{"degree":6,"roman":"vi","quality":"min","note":"G#","chord":"G#m"},{"degree":7,"roman":"vii°","quality":"dim","note":"A#","chord":"A#°"}],"relativeMinor":"G#m","relativeMinorPc":8},{"key":"F#","tonicPc":6,"sharps":6,"flats":0,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"F#","chord":"F#"},{"degree":2,"roman":"ii","quality":"min","note":"G#","chord":"G#m"},{"degree":3,"roman":"iii","quality":"min","note":"A#","chord":"A#m"},{"degree":4,"roman":"IV","quality":"maj","note":"B","chord":"B"},{"degree":5,"roman":"V","quality":"maj","note":"C#","chord":"C#"},{"degree":6,"roman":"vi","quality":"min","note":"D#","chord":"D#m"},{"degree":7,"roman":"vii°","quality":"dim","note":"E#","chord":"E#°"}],"relativeMinor":"D#m","relativeMinorPc":3},{"key":"Db","tonicPc":1,"sharps":0,"flats":5,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"Db","chord":"Db"},{"degree":2,"roman":"ii","quality":"min","note":"Eb","chord":"Ebm"},{"degree":3,"roman":"iii","quality":"min","note":"F","chord":"Fm"},{"degree":4,"roman":"IV","quality":"maj","note":"Gb","chord":"Gb"},{"degree":5,"roman":"V","quality":"maj","note":"Ab","chord":"Ab"},{"degree":6,"roman":"vi","quality":"min","note":"Bb","chord":"Bbm"},{"degree":7,"roman":"vii°","quality":"dim","note":"C","chord":"C°"}],"relativeMinor":"Bbm","relativeMinorPc":10},{"key":"Ab","tonicPc":8,"sharps":0,"flats":4,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"Ab","chord":"Ab"},{"degree":2,"roman":"ii","quality":"min","note":"Bb","chord":"Bbm"},{"degree":3,"roman":"iii","quality":"min","note":"C","chord":"Cm"},{"degree":4,"roman":"IV","quality":"maj","note":"Db","chord":"Db"},{"degree":5,"roman":"V","quality":"maj","note":"Eb","chord":"Eb"},{"degree":6,"roman":"vi","quality":"min","note":"F","chord":"Fm"},{"degree":7,"roman":"vii°","quality":"dim","note":"G","chord":"G°"}],"relativeMinor":"Fm","relativeMinorPc":5},{"key":"Eb","tonicPc":3,"sharps":0,"flats":3,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"Eb","chord":"Eb"},{"degree":2,"roman":"ii","quality":"min","note":"F","chord":"Fm"},{"degree":3,"roman":"iii","quality":"min","note":"G","chord":"Gm"},{"degree":4,"roman":"IV","quality":"maj","note":"Ab","chord":"Ab"},{"degree":5,"roman":"V","quality":"maj","note":"Bb","chord":"Bb"},{"degree":6,"roman":"vi","quality":"min","note":"C","chord":"Cm"},{"degree":7,"roman":"vii°","quality":"dim","note":"D","chord":"D°"}],"relativeMinor":"Cm","relativeMinorPc":0},{"key":"Bb","tonicPc":10,"sharps":0,"flats":2,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"Bb","chord":"Bb"},{"degree":2,"roman":"ii","quality":"min","note":"C","chord":"Cm"},{"degree":3,"roman":"iii","quality":"min","note":"D","chord":"Dm"},{"degree":4,"roman":"IV","quality":"maj","note":"Eb","chord":"Eb"},{"degree":5,"roman":"V","quality":"maj","note":"F","chord":"F"},{"degree":6,"roman":"vi","quality":"min","note":"G","chord":"Gm"},{"degree":7,"roman":"vii°","quality":"dim","note":"A","chord":"A°"}],"relativeMinor":"Gm","relativeMinorPc":7},{"key":"F","tonicPc":5,"sharps":0,"flats":1,"diatonic":[{"degree":1,"roman":"I","quality":"maj","note":"F","chord":"F"},{"degree":2,"roman":"ii","quality":"min","note":"G","chord":"Gm"},{"degree":3,"roman":"iii","quality":"min","note":"A","chord":"Am"},{"degree":4,"roman":"IV","quality":"maj","note":"Bb","chord":"Bb"},{"degree":5,"roman":"V","quality":"maj","note":"C","chord":"C"},{"degree":6,"roman":"vi","quality":"min","note":"D","chord":"Dm"},{"degree":7,"roman":"vii°","quality":"dim","note":"E","chord":"E°"}],"relativeMinor":"Dm","relativeMinorPc":2}];

  var MAJOR_SHAPES = [{name:'C',pc:0},{name:'D',pc:2},{name:'E',pc:4},{name:'G',pc:7},{name:'A',pc:9}];
  var MINOR_SHAPES = [{name:'Am',pc:9},{name:'Em',pc:4},{name:'Dm',pc:2}];
  var SHARP_ORDER = ['F','C','G','D','A','E','B'];
  var FLAT_ORDER  = ['B','E','A','D','G','C','F'];
  var MINOR_ROMAN = ['i','ii°','III','iv','v','VI','VII'];
  // Diatonic 7th-chord quality by scale degree, derived from stacking thirds within
  // each scale (verified against the actual semitone content, not guessed): the
  // major scale gives maj7-min7-min7-maj7-dom7-min7-halfdim7, and natural minor
  // gives min7-halfdim7-maj7-min7-min7-maj7-dom7.
  var QUALITY_7TH_MAJOR = ['maj7','min7','min7','maj7','dom7','min7','halfdim7'];
  var QUALITY_7TH_MINOR = ['min7','halfdim7','maj7','min7','min7','maj7','dom7'];
  function seventhChordName(rootNote, qual7){
    if(qual7 === 'maj7') return rootNote + 'maj7';
    if(qual7 === 'min7') return rootNote + 'm7';
    if(qual7 === 'dom7') return rootNote + '7';
    if(qual7 === 'halfdim7') return rootNote + 'm7♭5';
    return rootNote;
  }
  // Guitar lead-sheet convention: "blue"/borrowed scale tones (b3, b5, b7) are
  // written as flats regardless of the key's own sharp/flat side. A letter-preserving
  // spelling can force a double-flat in the heavier flat keys (e.g. Ab major -> "Ebb"),
  // which nobody actually writes — so these use a fixed flat-name table instead.
  var FLAT_NAMES = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

  function bestCapo(targetPc, shapes, maxFret){
    maxFret = maxFret || 7;
    var best = null;
    for(var i=0;i<shapes.length;i++){
      var s = shapes[i];
      var fret = (targetPc - s.pc + 12) % 12;
      if(fret <= maxFret){
        if(!best || fret < best.fret) best = {shape:s.name, fret:fret};
      }
    }
    return best;
  }

  function sigText(k){
    if(k.sharps === 0 && k.flats === 0) return 'No sharps or flats';
    if(k.sharps > 0){
      var names = SHARP_ORDER.slice(0, k.sharps).join('♯, ') + '♯';
      return k.sharps + '♯ (' + names + ')';
    }
    var fnames = FLAT_ORDER.slice(0, k.flats).join('♭, ') + '♭';
    return k.flats + '♭ (' + fnames + ')';
  }

  // ---------- geometry ----------
  var CX = 320, CY = 320;
  var R_OUT_OUT = 300, R_OUT_IN = 205, R_IN_OUT = 205, R_IN_IN = 120;
  var N = 12;

  function toXY(r, deg){
    var rad = (deg - 90) * Math.PI / 180;
    return { x: CX + r*Math.cos(rad), y: CY + r*Math.sin(rad) };
  }

  function wedgePath(r1, r2, startDeg, endDeg){
    var p1 = toXY(r1, startDeg), p2 = toXY(r2, startDeg);
    var p3 = toXY(r2, endDeg),   p4 = toXY(r1, endDeg);
    return ['M', p1.x, p1.y,
            'L', p2.x, p2.y,
            'A', r2, r2, 0, 0, 1, p3.x, p3.y,
            'L', p4.x, p4.y,
            'A', r1, r1, 0, 0, 0, p1.x, p1.y,
            'Z'].join(' ');
  }

  var svgNS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs){
    var e = document.createElementNS(svgNS, tag);
    for(var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  var outerWedgesG = document.getElementById('wedges-outer');
  var innerWedgesG = document.getElementById('wedges-inner');
  var outerLabelsG = document.getElementById('labels-outer');
  var innerLabelsG = document.getElementById('labels-inner');
  var overlayG = document.getElementById('progression-overlay');

  MAJOR_KEYS.forEach(function(k, i){
    var start = i*30 - 15, end = i*30 + 15;
    var mid = i*30;

    var wOuter = el('path', {
      d: wedgePath(R_OUT_IN, R_OUT_OUT, start, end),
      class: 'wedge ring-outer',
      'data-ring': 'major',
      'data-index': i
    });
    outerWedgesG.appendChild(wOuter);

    var labelPos = toXY((R_OUT_IN + R_OUT_OUT)/2 - 6, mid);
    var lbl = el('text', { x: labelPos.x, y: labelPos.y, class: 'wedge-label' });
    lbl.textContent = k.key;
    outerLabelsG.appendChild(lbl);

    var sigPos = toXY((R_OUT_IN + R_OUT_OUT)/2 + 20, mid);
    var sig = el('text', { x: sigPos.x, y: sigPos.y, class: 'wedge-sig' });
    sig.textContent = k.sharps ? (k.sharps+'♯') : (k.flats ? (k.flats+'♭') : '0');
    outerLabelsG.appendChild(sig);

    var wInner = el('path', {
      d: wedgePath(R_IN_IN, R_IN_OUT, start, end),
      class: 'wedge ring-inner',
      'data-ring': 'minor',
      'data-index': i
    });
    innerWedgesG.appendChild(wInner);

    var innerLabelPos = toXY((R_IN_IN + R_IN_OUT)/2, mid);
    var ilbl = el('text', { x: innerLabelPos.x, y: innerLabelPos.y, class: 'wedge-label inner-label' });
    ilbl.textContent = k.relativeMinor;
    innerLabelsG.appendChild(ilbl);
  });

  // ---------- state & rendering ----------
  var state = { ring: 'major', index: 1, chordMode: 'plain' }; // start on G major

  // ---------- genre chord-family modes ----------
  // A single whole-key choice (unlike the per-chord embellishment chips below):
  // which quality replaces every diatonic chord's plain triad, all at once.
  // Plain/Folk, Jazz, Blues and Punk are mutually exclusive -- picking one clears
  // the others, since e.g. Jazz and Blues disagree about what the I chord should
  // be. See genreModeQuality() for the actual per-degree logic.
  var GENRE_MODE_INFO = {
    plain: { label:'Plain/Folk', caption:'Plain triads — the default sound for folk, country, and most singer-songwriter writing.' },
    jazz:  { label:'Jazz', caption:'Every chord gets its diatonic 7th (maj7 on I/IV, min7 on ii/iii/vi, dom7 on V, m7♭5 on vii°) — the classic jazz/bossa nova sound.' },
    blues: { label:'Blues', caption:'Dominant 7th on I, IV, and V only — the classic 12-bar sound. I7 and IV7 are borrowed color (a "correct" diatonic reading would call them maj7); V7 is already the natural diatonic answer.' },
    punk:  { label:'Punk', caption:'Every chord becomes a stripped-down power chord (root + 5th, no 3rd) — raw and genre-defining for punk, metal, and hard rock. The diminished vii° is left as-is; there’s no clean power-chord version of a diminished triad.' }
  };
  // Which existing progression template each genre mode's button click should
  // auto-highlight, keyed by ring then chordMode. Only fires once, at the moment
  // the genre button is clicked (see the click handler below) -- never on every
  // render() -- so spinning the wheel to a new key or picking a different
  // progression afterward is never silently overridden.
  var GENRE_SIGNATURE_PROGRESSION = {
    major: { jazz:'Jazz turnaround', blues:'Full 12-bar blues', punk:'The "four chords" pop progression' },
    minor: { blues:'Minor blues (i–iv–v)', punk:'i–VI–III–VII (rock/pop minor)' }
  };
  // Genre-appropriate song-part tags for the idea-capture panel below, ordered
  // most-common-first for that genre -- nothing is ever hidden, just reordered,
  // since e.g. blues *can* still have a bridge, it's just rare.
  var SONG_PART_OPTIONS = {
    plain: ['Intro','Verse','Pre-chorus','Chorus','Bridge','Solo','Outro','Other'],
    jazz:  ['Intro','Melody / Head','Solo','Bridge','Outro','Verse','Chorus','Other'],
    blues: ['Intro','Verse (12-bar)','Turnaround','Solo (12-bar)','Outro','Chorus','Bridge','Other'],
    punk:  ['Intro','Verse','Chorus','Solo','Bridge','Outro','Other']
  };
  // Returns {quality, borrowed} for one diatonic degree (i2, 0-6, already in the
  // current ring's own roman-numeral order) under the given global genre mode,
  // or null if that degree stays a plain triad under this mode (every degree
  // under Plain; ii/iii/vi/vii° under Blues, which only ever touches I/IV/V;
  // the diminished chord under Punk, which has no clean power-chord version).
  function genreModeQuality(mode, i2, isDim, quality7Table){
    if(mode === 'jazz') return { quality: quality7Table[i2], borrowed:false };
    if(mode === 'blues'){
      if(i2 === 0 || i2 === 3) return { quality:'dom7', borrowed:true };
      if(i2 === 4) return { quality:'dom7', borrowed:false };
      return null;
    }
    if(mode === 'punk'){
      if(isDim) return null;
      return { quality:'five', borrowed:false };
    }
    return null; // plain
  }
  function populateIdeaPartOptions(mode){
    var sel = document.getElementById('ideaPartSelect');
    var prevValue = sel.value;
    var opts = SONG_PART_OPTIONS[mode] || SONG_PART_OPTIONS.plain;
    sel.innerHTML = '';
    opts.forEach(function(label){
      var o = document.createElement('option');
      o.value = label;
      o.textContent = label;
      sel.appendChild(o);
    });
    if(opts.indexOf(prevValue) > -1) sel.value = prevValue; // keep your pick if it's still offered
  }
  document.getElementById('genreModeCaption').textContent = GENRE_MODE_INFO.plain.caption;
  populateIdeaPartOptions('plain');
  document.querySelectorAll('.genre-mode-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var mode = btn.getAttribute('data-mode');
      if(state.chordMode === mode) return;
      state.chordMode = mode;
      document.querySelectorAll('.genre-mode-btn').forEach(function(b){ b.classList.toggle('is-on', b === btn); });
      document.getElementById('genreModeCaption').textContent = GENRE_MODE_INFO[mode].caption;
      populateIdeaPartOptions(mode);
      render();
      var sigMap = state.ring === 'major' ? GENRE_SIGNATURE_PROGRESSION.major : GENRE_SIGNATURE_PROGRESSION.minor;
      var sigName = sigMap && sigMap[mode];
      if(sigName) activateProgressionByName(sigName);
    });
  });

  document.getElementById('tuningSelect').addEventListener('change', function(){
    applyTuning(this.value);
  });

  // Practice mode: a compact, single-screen layout (wheel + chord shapes + scales
  // only) for playing along on a laptop or tablet without scrolling. Everything
  // else (intro, progressions, capo tips, modes, reference sections) hides via
  // the .practice-hide class; the layout itself is repositioned by the
  // body.practice-mode CSS rules above — this handler just flips the class.
  document.getElementById('practiceModeToggle').addEventListener('click', function(){
    var on = document.body.classList.toggle('practice-mode');
    this.textContent = on ? 'Exit practice mode' : 'Practice mode';
    this.setAttribute('aria-pressed', String(on));
  });

  // In practice mode there's only vertical room for one set of scale
  // fretboard diagrams, so opening Modes swaps in for the main "lead notes"
  // pair instead of stacking below it (see the .panel.modes-open CSS rules).
  // Outside practice mode this class has no effect, so it's safe to always toggle it.
  document.getElementById('modesDetails').addEventListener('toggle', function(){
    document.querySelector('.panel').classList.toggle('modes-open', this.open);
  });

  function clearHighlights(){
    var all = document.querySelectorAll('.wedge');
    all.forEach(function(w){ w.classList.remove('is-selected','is-neighbor','is-relative'); });
  }

  function wedgeAt(ring, index){
    var g = ring === 'major' ? outerWedgesG : innerWedgesG;
    return g.children[((index % N)+N)%N];
  }

  function render(){
    clearHighlights();
    overlayG.innerHTML = '';
    var idx = state.index;
    var k = MAJOR_KEYS[idx];
    var ccw = MAJOR_KEYS[((idx-1)%N+N)%N]; // counterclockwise neighbor = IV
    var cw  = MAJOR_KEYS[(idx+1)%N];       // clockwise neighbor = V

    if(state.ring === 'major'){
      wedgeAt('major', idx).classList.add('is-selected');
      wedgeAt('major', idx-1).classList.add('is-neighbor');
      wedgeAt('major', idx+1).classList.add('is-neighbor');
      wedgeAt('minor', idx).classList.add('is-relative');

      document.getElementById('readoutKey').textContent = k.key + ' major';
      document.getElementById('readoutSig').textContent = sigText(k);
      document.getElementById('panelTitle').textContent = k.key + ' major';
      document.getElementById('panelSig').textContent = sigText(k) + ' · relative minor ' + k.relativeMinor;

      renderChordFamily(k.diatonic.map(function(d,i2){
        var gm = genreModeQuality(state.chordMode, i2, d.quality==='dim', QUALITY_7TH_MAJOR);
        var chord = gm ? nameForEmbellishment(d.note, gm.quality) : d.chord;
        return { roman:d.roman, chord:chord, dim: d.quality==='dim', genreBorrowed: !!(gm && gm.borrowed) };
      }), [0,3,4,5]);
      var BASE_QUALITY_MAP = {maj:'major', min:'minor', dim:'dim'};
      renderChordDiagrams(k.diatonic.map(function(d,i2){
        var gm = genreModeQuality(state.chordMode, i2, d.quality==='dim', QUALITY_7TH_MAJOR);
        var quality = gm ? gm.quality : BASE_QUALITY_MAP[d.quality];
        var chordName = gm ? nameForEmbellishment(d.note, gm.quality) : d.chord;
        return { roman:d.roman, chordName:chordName, note:d.note, rootPc:noteToPc(d.note), quality:quality, dim: d.quality==='dim', genreBorrowed: !!(gm && gm.borrowed) };
      }), k.tonicPc);
      document.getElementById('neighborNote').innerHTML =
        'On the wheel, <b>' + ccw.key + '</b> and <b>' + cw.key + '</b> sit right next to ' + k.key + ' — and sure enough, they\'re its <b>IV</b> and <b>V</b> chords. That\'s not a coincidence: neighboring keys share six of their seven notes, which is why borrowing a chord from next door (or modulating there for a chorus) almost always sounds intentional rather than off-key.';

      renderProgressions(k.diatonic, [
        {name:'Three-chord classic', idx:[0,3,4]},
        {name:'The "four chords" pop progression', idx:[0,4,5,3]},
        {name:'12-bar blues (turnaround)', idx:[0,3,0,4]},
        {name:'Full 12-bar blues', idx:[0,0,0,0,3,3,0,0,4,3,0,4]},
        {name:'Folk-rock bVII move (the Zeppelin trick)', idx:[0,'bVII',3,0]},
        {name:'Jazz turnaround', idx:[1,4,0]},
        {name:'Circle progression (walk home by fifths)', idx:[2,5,1,4,0]}
      ], 'major', k);

      renderGuitarTip(k.tonicPc, MAJOR_SHAPES, k.key, 'major');

      renderScales([
        { name:'Major pentatonic', desc:'bright, singable — folk, country, pop leads', notes: majorPentatonic(k), rootPc: k.tonicPc },
        { name:'Minor pentatonic / blues', desc:'same root, grittier — the classic rock &amp; blues lead sound', notes: tonicBluesScale(k), rootPc: k.tonicPc }
      ]);

      renderModes(k.tonicPc, k.key);
    } else {
      var rotated = k.diatonic.slice(5).concat(k.diatonic.slice(0,5)); // start at vi -> i
      var relMajorLabel = k.key + ' major';

      wedgeAt('minor', idx).classList.add('is-selected');
      wedgeAt('minor', idx-1).classList.add('is-neighbor');
      wedgeAt('minor', idx+1).classList.add('is-neighbor');
      wedgeAt('major', idx).classList.add('is-relative');

      document.getElementById('readoutKey').textContent = k.relativeMinor.replace('m',' minor');
      document.getElementById('readoutSig').textContent = sigText(k) + ' (shared with ' + k.key + ')';
      document.getElementById('panelTitle').textContent = k.relativeMinor.replace('m',' minor');
      document.getElementById('panelSig').textContent = sigText(k) + ' · relative major ' + k.key;

      renderChordFamily(rotated.map(function(d,i2){
        var gm = genreModeQuality(state.chordMode, i2, d.quality==='dim', QUALITY_7TH_MINOR);
        var chord = gm ? nameForEmbellishment(d.note, gm.quality) : d.chord;
        return { roman:MINOR_ROMAN[i2], chord:chord, dim: d.quality==='dim', genreBorrowed: !!(gm && gm.borrowed) };
      }), [0,3,4,5]);
      var BASE_QUALITY_MAP2 = {maj:'major', min:'minor', dim:'dim'};
      renderChordDiagrams(rotated.map(function(d,i2){
        var gm = genreModeQuality(state.chordMode, i2, d.quality==='dim', QUALITY_7TH_MINOR);
        var quality = gm ? gm.quality : BASE_QUALITY_MAP2[d.quality];
        var chordName = gm ? nameForEmbellishment(d.note, gm.quality) : d.chord;
        return { roman:MINOR_ROMAN[i2], chordName:chordName, note:d.note, rootPc:noteToPc(d.note), quality:quality, dim: d.quality==='dim', genreBorrowed: !!(gm && gm.borrowed) };
      }), k.tonicPc);
      document.getElementById('neighborNote').innerHTML =
        'The two minor keys beside ' + k.relativeMinor + ' on the inner ring are its <b>iv</b> and <b>v</b> chords, and its own outer-ring twin, <b>' + relMajorLabel + '</b>, is the relative major — same seven notes, same seven chords, just counted from a different starting point.';

      renderProgressions(rotated, [
        {name:'i–VI–III–VII (rock/pop minor)', idx:[0,5,2,6]},
        {name:'Minor blues (i–iv–v)', idx:[0,3,4]},
        {name:'i–VII–VI–V (harmonic pull home)', idx:[0,6,5,4], harmonicV:true},
        {name:'i–iv–VII–III', idx:[0,3,6,2]}
      ], 'minor', k);

      renderGuitarTip(k.relativeMinorPc, MINOR_SHAPES, k.relativeMinor, 'minor');

      renderScales([
        { name:'Minor pentatonic', desc:'the go-to rock &amp; blues lead scale', notes: minorPentatonicFromRotated(rotated), rootPc: k.relativeMinorPc },
        { name:'Add the blue note', desc:'bend into it, don\'t land on it', notes: minorBluesFromRotated(rotated, k.relativeMinorPc), rootPc: k.relativeMinorPc }
      ]);

      renderModes(k.relativeMinorPc, k.relativeMinor.replace('m',''));
    }
  }

  // onNoteClick is only ever passed from the scale/mode note-chip call site
  // (buildScaleBlockEl) -- the plain chord-family roman-numeral strip stays
  // display-only, so it's never passed there.
  function renderNoteChips(container, list, highlightIdx, onNoteClick){
    container.innerHTML = '';
    highlightIdx = highlightIdx || [];
    list.forEach(function(d, i){
      var chip = document.createElement('div');
      chip.className = 'chord-chip' + (highlightIdx.indexOf(i) > -1 ? ' hi' : '') + (d.blue ? ' blue' : '') + (d.dim ? ' dim' : '') + (d.genreBorrowed ? ' genre-borrowed' : '') + (onNoteClick ? ' is-clickable' : '');
      chip.innerHTML = '<span class="rn">'+d.roman+'</span><span class="cn">'+d.chord+'</span>';
      if(d.genreBorrowed) chip.title = 'Borrowed color: blues intentionally uses a dominant 7th here instead of the "correct" maj7.';
      if(onNoteClick){
        chip.setAttribute('role', 'button');
        chip.setAttribute('tabindex', '0');
        chip.title = 'Add ' + d.chord + ' to the idea you’re capturing';
        chip.addEventListener('click', function(){ onNoteClick(d); });
        chip.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); onNoteClick(d); } });
      }
      container.appendChild(chip);
    });
  }
  function renderChordFamily(list, highlightIdx){
    renderNoteChips(document.getElementById('chordFamily'), list, highlightIdx);
  }
  // ---------- embellishment chips ----------
  // Every diatonic chord's scale-degree role, expressed as an offset from the KEY'S
  // OWN TONIC (always the outer/major-ring tonic pitch class, k.tonicPc, regardless
  // of which ring is currently selected -- see below). This is what lets one small
  // function serve both rings without a second roman-numeral table: a chord's
  // available embellishments depend only on how far its root sits from the tonic
  // within the major scale, not on which roman numeral it's wearing this time.
  var MAJOR_SCALE_STEPS = [0,2,4,5,7,9,11];
  var EMBELLISHMENT_VIBE = {
    add9:  'Shimmering, dreamy, a little nostalgic — the open 9th colors the chord without changing what it does.',
    maj7:  'Soft and wistful — trades the triad’s full-stop resolution for a floaty, jazzy edge.',
    sus2:  'Open and airy — the 3rd steps aside for a ringing, unresolved suspension.',
    sus4:  'Suspended and searching, wants to resolve — hold it right before the chord change for a little pull home.',
    sus4borrowed: 'Borrowed color: this note sits just outside the key (a blues/Mixolydian move — think Hendrix or the Beatles). Very common and fully intentional, just not strictly "in key."',
    min7:  'R&B groove, moody, cinematic — softens the minor chord’s edge.',
    min9:  'Lush and cinematic, a favorite in R&B and neo-soul — one more color stacked on the min7 sound.',
    dom7:  'Heavy tension that pulls back home — the classic dominant setup right before resolving to the I chord.',
    five:  'Stripped-back, driving, or heavy — drops the 3rd entirely, so it’s neither major nor minor, just raw power.'
  };
  function embChip(quality, label, vibeKey){
    return { quality: quality, label: label, vibe: EMBELLISHMENT_VIBE[vibeKey || quality], borrowed: !!(vibeKey && vibeKey !== quality) };
  }
  // Returns the list of "try this instead" chips for a diatonic chord at rootPc,
  // given the key's tonic and which ring is active. Verified interval-by-interval
  // against the major scale (see the two theory notes below) rather than just
  // copying the user's original chord-matrix wholesale -- it's correct for every
  // degree EXCEPT two spots the matrix would otherwise get wrong:
  //  - iii gets "7" (min7) but NOT "m9": the diatonic 9th above iii's root is only
  //    a half-step up, so a true (whole-step) m9 there pulls in a non-scale tone.
  //    ii and vi don't have this problem -- their 9ths land a full step up, in key.
  //  - IV's sus4 is flagged "borrowed": sus4's 4th-above-root lands on the key's
  //    flat-7 relative to IV, not its natural 7 -- a common, intentional color
  //    (blues/Mixolydian, think Hendrix/Beatles) but not strictly diatonic, unlike
  //    I's and V's sus4, which both land squarely on scale tones.
  // vii°/ii° (degIdx 6) gets no chips at all: a diminished triad has no perfect 5th
  // for "sus4" or "5" to cleanly apply against, and its own stacked-3rd color
  // (m7b5) is already available via the +7ths toggle.
  function embellishmentsFor(rootPc, tonicPc, ring, isDim){
    if(isDim) return [];
    var degIdx = MAJOR_SCALE_STEPS.indexOf(((rootPc - tonicPc) % 12 + 12) % 12);
    if(degIdx === -1 || degIdx === 6) return [];
    var chips;
    if(degIdx === 0){ // I (or III in minor-ring numbering) -- major-role, all four safe
      chips = [embChip('add9','add9'), embChip('maj7','maj7'), embChip('sus2','sus2'), embChip('sus4','sus4')];
    } else if(degIdx === 3){ // IV (or VI in minor-ring numbering) -- major-role, sus4 borrowed
      chips = [embChip('add9','add9'), embChip('maj7','maj7'), embChip('sus2','sus2'), embChip('sus4','sus4','sus4borrowed')];
    } else if(degIdx === 1 || degIdx === 5){ // ii, vi -- minor-role, both safe
      chips = [embChip('min7','7'), embChip('min9','m9')];
    } else if(degIdx === 2){ // iii -- minor-role EXCEPTION, no m9
      chips = [embChip('min7','7')];
    } else if(degIdx === 4 && ring === 'major'){ // true V -- dominant function only exists in the major ring
      chips = [embChip('dom7','7'), embChip('sus4','sus4')];
    } else if(degIdx === 4){ // same root, minor ring (VII, natural minor has no leading tone -- no dominant pull)
      chips = [embChip('add9','add9'), embChip('sus2','sus2'), embChip('sus4','sus4')];
    } else {
      chips = [];
    }
    chips.push(embChip('five','5'));
    return chips;
  }
  // Doubles as the unified chord-naming function for the global genre modes
  // (see genreModeQuality() above) -- 'halfdim7' only ever comes from Jazz mode
  // (the vii° chord has no per-chord embellishment chips of its own), everything
  // else is shared with the per-chord "try this instead" chips below.
  function nameForEmbellishment(rootNote, quality){
    switch(quality){
      case 'add9': return rootNote + 'add9';
      case 'maj7': return rootNote + 'maj7';
      case 'sus2': return rootNote + 'sus2';
      case 'sus4': return rootNote + 'sus4';
      case 'min7': return rootNote + 'm7';
      case 'min9': return rootNote + 'm9';
      case 'dom7': return rootNote + '7';
      case 'five': return rootNote + '5';
      case 'halfdim7': return rootNote + 'm7♭5';
      default: return rootNote;
    }
  }
  // Which embellishment (if any) is currently swapped in per scale-degree roman
  // numeral. Persists across key/ring changes like chordShapePref below -- roman
  // numerals differ between rings ('V' vs 'VII'), so a preference never leaks
  // across the one edge case (the V/VII root) whose available chips actually
  // change with the ring.
  var chordEmbellishmentPref = {};

  // Remembers, per scale-degree roman numeral, whether the user has asked to see
  // the OTHER moveable shape for that chord (e.g. the A-shape barre version of
  // the IV instead of its default lowest-fret E-shape open voicing). Persists
  // across key changes on purpose — if you're practicing barre-chord versions of
  // every degree, spinning the wheel to a new key shouldn't reset that choice.
  var chordShapePref = {};
  var lastChordEntries = null;
  var lastChordTonicPc = null;
  function renderChordDiagrams(entries, tonicPc){
    lastChordEntries = entries;
    lastChordTonicPc = tonicPc;
    var wrap = document.getElementById('chordDiagrams');
    wrap.innerHTML = '';
    entries.forEach(function(e){
      var activeQuality0 = chordEmbellishmentPref[e.roman];
      // A per-chord embellishment chip fully overrides whatever the global genre
      // mode was showing for this degree -- see the interaction note in
      // embellishmentsFor() -- so the "borrowed" dashed-border flag from Blues
      // mode only applies while no chip has taken over this chord.
      var genreBorrowed = !!e.genreBorrowed && !activeQuality0;
      var cell = document.createElement('div');
      cell.className = 'chord-diagram-cell' + (e.dim ? ' dim' : '') + (genreBorrowed ? ' genre-borrowed' : '');
      if(genreBorrowed) cell.title = 'Borrowed color: blues intentionally uses a dominant 7th here instead of the "correct" maj7.';

      var chips = embellishmentsFor(e.rootPc, tonicPc, state.ring, e.dim);
      var activeQuality = chordEmbellishmentPref[e.roman];
      var activeChip = activeQuality ? chips.filter(function(c){ return c.quality === activeQuality; })[0] : null;
      if(activeQuality && !activeChip) chordEmbellishmentPref[e.roman] = null; // stale pref, e.g. after a role change

      var displayQuality = activeChip ? activeChip.quality : e.quality;
      var displayName = activeChip ? nameForEmbellishment(e.note, activeChip.quality) : e.chordName;

      var addBtn = document.createElement('button');
      addBtn.type = 'button';
      addBtn.className = 'idea-add-btn';
      addBtn.title = 'Add ' + displayName + ' to the idea you’re capturing';
      addBtn.setAttribute('aria-label', 'Add ' + displayName + ' to captured idea');
      addBtn.textContent = '♪+';
      addBtn.addEventListener('click', function(){
        addChordToSnippet(displayName);
        addBtn.classList.add('is-flash');
        setTimeout(function(){ addBtn.classList.remove('is-flash'); }, 220);
      });
      cell.appendChild(addBtn);

      var label = document.createElement('div');
      label.className = 'chord-diagram-label';
      label.innerHTML = '<span class="rn">'+e.roman+'</span><span class="cn">'+displayName+'</span>';
      cell.appendChild(label);
      var preferAlt = !!chordShapePref[e.roman];
      var result = chordVoicingFor(e.rootPc, displayQuality, preferAlt);
      cell.appendChild(buildChordDiagramSVG(result, e.rootPc));
      if(result.familyCount > 1){
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'shape-toggle-btn' + (result.isAlt ? ' is-alt' : '');
        btn.setAttribute('aria-label', 'Show the other moveable shape for ' + displayName);
        btn.title = 'Show the other moveable shape for this chord';
        btn.textContent = '⇄';
        btn.addEventListener('click', function(){
          chordShapePref[e.roman] = !chordShapePref[e.roman];
          renderChordDiagrams(lastChordEntries, lastChordTonicPc);
        });
        cell.appendChild(btn);
      }

      if(chips.length){
        var chipRow = document.createElement('div');
        chipRow.className = 'emb-chip-row';
        chips.forEach(function(chip){
          var chipBtn = document.createElement('button');
          chipBtn.type = 'button';
          var isActive = activeChip && activeChip.quality === chip.quality;
          chipBtn.className = 'emb-chip' + (isActive ? ' is-active' : '') + (chip.borrowed ? ' is-borrowed' : '');
          chipBtn.textContent = chip.label;
          chipBtn.title = chip.borrowed ? chip.label + ' (borrowed color, not strictly in key)' : chip.label;
          chipBtn.addEventListener('click', function(){
            chordEmbellishmentPref[e.roman] = isActive ? null : chip.quality;
            renderChordDiagrams(lastChordEntries, lastChordTonicPc);
          });
          chipRow.appendChild(chipBtn);
        });
        cell.appendChild(chipRow);
      }
      if(activeChip){
        var caption = document.createElement('div');
        caption.className = 'emb-vibe-caption';
        caption.textContent = activeChip.vibe;
        cell.appendChild(caption);
      }

      wrap.appendChild(cell);
    });
  }

  // ---------- idea capture ----------
  // A lightweight scratchpad, not a saved project: nothing here persists between
  // page loads (no localStorage) -- you build up a few chord/note snippets while
  // noodling, tag each with the song part it's for, and export the whole batch
  // as plain text to paste into a lyric-writing conversation with Claude (or
  // anywhere else). Deliberately needs no API key at all.
  var currentSnippetChords = [];
  var currentSnippetNotes = [];
  var savedIdeas = [];
  var ideaIdCounter = 0;

  function addChordToSnippet(name){
    currentSnippetChords.push(name);
    renderCurrentSnippetPreview();
  }
  function addNoteToSnippet(name){
    currentSnippetNotes.push(name);
    renderCurrentSnippetPreview();
  }
  function ideaToken(text, onRemove){
    var tok = document.createElement('button');
    tok.type = 'button';
    tok.className = 'idea-token';
    tok.title = 'Click to remove';
    tok.textContent = text + ' ✕';
    tok.addEventListener('click', onRemove);
    return tok;
  }
  function renderCurrentSnippetPreview(){
    var wrap = document.getElementById('ideaCurrentSnippet');
    wrap.innerHTML = '';
    if(currentSnippetChords.length === 0 && currentSnippetNotes.length === 0){
      var empty = document.createElement('span');
      empty.className = 'idea-current-empty';
      empty.textContent = 'Click chords (or scale notes below) to start building a snippet…';
      wrap.appendChild(empty);
      return;
    }
    if(currentSnippetChords.length){
      var crow = document.createElement('div');
      crow.className = 'idea-token-row';
      var clbl = document.createElement('span');
      clbl.className = 'idea-token-row-label';
      clbl.textContent = 'Chords:';
      crow.appendChild(clbl);
      currentSnippetChords.forEach(function(name, i){
        crow.appendChild(ideaToken(name, function(){ currentSnippetChords.splice(i,1); renderCurrentSnippetPreview(); }));
      });
      wrap.appendChild(crow);
    }
    if(currentSnippetNotes.length){
      var nrow = document.createElement('div');
      nrow.className = 'idea-token-row';
      var nlbl = document.createElement('span');
      nlbl.className = 'idea-token-row-label';
      nlbl.textContent = 'Notes:';
      nrow.appendChild(nlbl);
      currentSnippetNotes.forEach(function(name, i){
        nrow.appendChild(ideaToken(name, function(){ currentSnippetNotes.splice(i,1); renderCurrentSnippetPreview(); }));
      });
      wrap.appendChild(nrow);
    }
  }
  function renderSavedIdeasList(){
    var wrap = document.getElementById('ideaSavedList');
    wrap.innerHTML = '';
    document.getElementById('ideaExportRow').hidden = savedIdeas.length === 0;
    savedIdeas.forEach(function(idea){
      var row = document.createElement('div');
      row.className = 'idea-saved-row';
      var text = document.createElement('div');
      text.className = 'idea-saved-text';
      var pieces = [];
      if(idea.chords.length) pieces.push(idea.chords.join(' – '));
      if(idea.notes.length) pieces.push('notes: ' + idea.notes.join(' – '));
      text.innerHTML = '<span class="idea-saved-part">' + idea.part + '</span><span class="idea-saved-chords mono">' + pieces.join('  |  ') + '</span>' + (idea.note ? '<span class="idea-saved-note">(' + idea.note + ')</span>' : '');
      row.appendChild(text);
      var actions = document.createElement('div');
      actions.className = 'idea-saved-actions';
      var editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.className = 'idea-mini-btn';
      editBtn.textContent = 'Edit';
      editBtn.title = 'Load this idea back into the builder above to tweak it';
      editBtn.addEventListener('click', function(){
        currentSnippetChords = idea.chords.slice();
        currentSnippetNotes = idea.notes.slice();
        var partSel = document.getElementById('ideaPartSelect');
        var hasOption = false;
        for(var oi=0; oi<partSel.options.length; oi++){ if(partSel.options[oi].value === idea.part){ hasOption = true; break; } }
        if(!hasOption){
          var extraOpt = document.createElement('option');
          extraOpt.value = idea.part;
          extraOpt.textContent = idea.part;
          partSel.appendChild(extraOpt);
        }
        partSel.value = idea.part;
        document.getElementById('ideaNoteInput').value = idea.note || '';
        savedIdeas = savedIdeas.filter(function(x){ return x.id !== idea.id; });
        renderCurrentSnippetPreview();
        renderSavedIdeasList();
      });
      var delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'idea-mini-btn idea-mini-btn-danger';
      delBtn.textContent = '✕';
      delBtn.title = 'Delete this idea';
      delBtn.addEventListener('click', function(){
        savedIdeas = savedIdeas.filter(function(x){ return x.id !== idea.id; });
        renderSavedIdeasList();
      });
      actions.appendChild(editBtn);
      actions.appendChild(delBtn);
      row.appendChild(actions);
      wrap.appendChild(row);
    });
  }
  function showExportText(text){
    var out = document.getElementById('ideaExportOutput');
    var ta = document.getElementById('ideaExportTextarea');
    ta.value = text;
    out.hidden = false;
    ta.focus();
    ta.select();
  }
  document.getElementById('ideaSaveBtn').addEventListener('click', function(){
    if(currentSnippetChords.length === 0 && currentSnippetNotes.length === 0) return;
    savedIdeas.push({
      id: ++ideaIdCounter,
      part: document.getElementById('ideaPartSelect').value,
      chords: currentSnippetChords.slice(),
      notes: currentSnippetNotes.slice(),
      note: document.getElementById('ideaNoteInput').value.trim()
    });
    currentSnippetChords = [];
    currentSnippetNotes = [];
    document.getElementById('ideaNoteInput').value = '';
    renderCurrentSnippetPreview();
    renderSavedIdeasList();
  });
  document.getElementById('ideaClearBtn').addEventListener('click', function(){
    currentSnippetChords = [];
    currentSnippetNotes = [];
    document.getElementById('ideaNoteInput').value = '';
    renderCurrentSnippetPreview();
  });
  document.getElementById('ideaClearAllBtn').addEventListener('click', function(){
    savedIdeas = [];
    document.getElementById('ideaExportOutput').hidden = true;
    renderSavedIdeasList();
  });
  document.getElementById('ideaExportBtn').addEventListener('click', function(){
    var k = MAJOR_KEYS[state.index];
    var keyLabel = state.ring === 'major' ? (k.key + ' major') : k.relativeMinor.replace('m', ' minor');
    var genreLabel = GENRE_MODE_INFO[state.chordMode].label;
    var lines = ['Key: ' + keyLabel + ' | Genre feel: ' + genreLabel, ''];
    savedIdeas.forEach(function(idea){
      var bits = [];
      if(idea.chords.length) bits.push('chords: ' + idea.chords.join(' – '));
      if(idea.notes.length) bits.push('notes: ' + idea.notes.join(' – '));
      var line = idea.part.toUpperCase() + ' — ' + bits.join('; ');
      if(idea.note) line += '  (' + idea.note + ')';
      lines.push(line);
    });
    showExportText(lines.join('\n'));
  });
  document.getElementById('ideaCopyBtn').addEventListener('click', function(){
    var ta = document.getElementById('ideaExportTextarea');
    var status = document.getElementById('ideaCopyStatus');
    function ok(){ status.textContent = 'Copied!'; setTimeout(function(){ status.textContent = ''; }, 2000); }
    function fail(){ ta.focus(); ta.select(); status.textContent = 'Couldn’t copy automatically — the text is selected, press Ctrl/Cmd+C.'; }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(ta.value).then(ok, fail);
    } else {
      try{
        ta.focus(); ta.select();
        if(document.execCommand('copy')) ok(); else fail();
      }catch(e){ fail(); }
    }
  });

  // Remembers, per scale slot, which neck position the user has scrolled to
  // (see scalePositions() below). Also persists across key changes: if you're
  // working through position 3 up the neck, moving to a new key keeps you on
  // position 3 of the new key's version of that same scale.
  var scalePositionState = {};
  var lastScaleBlocks = null;
  // A "position" is just: start the same 4-fret moveable window used for the
  // default view, but anchored at a later scale tone on the low E string
  // instead of always the root. Walking every fret from the root upward for one
  // octave visits each of the scale's own notes on that string exactly once —
  // so a 5-note pentatonic naturally yields 5 positions, a 7-note mode yields 7,
  // all fully derived from the already-verified scale-tone set (no new hand-typed
  // shape data to get wrong). anchors[0] is always the root fret, matching the
  // long-standing default view exactly.
  // Fret 19 is the highest fret nearly every guitar actually has, so a 4-fret window
  // is capped to start no later than fret 16 -- for roots whose root fret already
  // sits high on the neck (e.g. C, C#, D), this simply means fewer extra positions
  // are offered rather than showing a position that doesn't physically exist on
  // most instruments. Position 1 (the root fret itself) is always <=11, so it's
  // always kept regardless.
  var MAX_POSITION_BASE_FRET = 16;
  function scalePositions(scalePcSet, rootPc){
    var rootFret = ((rootPc - STRING_PC[6]) % 12 + 12) % 12;
    var anchors = [];
    for(var f = rootFret; f < rootFret + 12 && f <= MAX_POSITION_BASE_FRET; f++){
      var pc = (STRING_PC[6] + f) % 12;
      if(scalePcSet.indexOf(pc) !== -1) anchors.push(f);
    }
    return anchors;
  }
  function buildScaleBlockEl(b, posKey, onPositionChange){
    var block = document.createElement('div');
    block.className = 'scale-block';

    var scalePcs = b.notes.map(function(n){ return noteToPc(n.note); });
    var anchors = scalePositions(scalePcs, b.rootPc);
    var posCount = anchors.length;
    if(scalePositionState[posKey] === undefined || scalePositionState[posKey] >= posCount){
      scalePositionState[posKey] = 0;
    }
    var curPos = scalePositionState[posKey];

    var head = document.createElement('div');
    head.className = 'scale-name-row';
    var name = document.createElement('div');
    name.className = 'scale-name';
    name.innerHTML = b.name + ' <span class="scale-desc">— ' + b.desc + '</span>' +
      (b.feel ? ' <span class="scale-feel">— ' + b.feel + '</span>' : '');
    head.appendChild(name);
    if(posCount > 1){
      var ctl = document.createElement('div');
      ctl.className = 'position-ctl';
      var prevBtn = document.createElement('button');
      prevBtn.type = 'button'; prevBtn.className = 'pos-btn'; prevBtn.textContent = '‹';
      prevBtn.setAttribute('aria-label', 'Previous neck position');
      var label = document.createElement('span');
      label.className = 'pos-label';
      label.textContent = 'Position ' + (curPos+1) + ' of ' + posCount;
      var nextBtn = document.createElement('button');
      nextBtn.type = 'button'; nextBtn.className = 'pos-btn'; nextBtn.textContent = '›';
      nextBtn.setAttribute('aria-label', 'Next neck position');
      prevBtn.addEventListener('click', function(){
        scalePositionState[posKey] = (scalePositionState[posKey] - 1 + posCount) % posCount;
        onPositionChange();
      });
      nextBtn.addEventListener('click', function(){
        scalePositionState[posKey] = (scalePositionState[posKey] + 1) % posCount;
        onPositionChange();
      });
      ctl.appendChild(prevBtn);
      ctl.appendChild(label);
      ctl.appendChild(nextBtn);
      head.appendChild(ctl);
    }
    block.appendChild(head);

    var row = document.createElement('div');
    row.className = 'chord-family scale-row';
    row.style.gridTemplateColumns = 'repeat(' + b.notes.length + ', 1fr)';
    block.appendChild(row);
    var bluePc = null;
    b.notes.forEach(function(n){ if(n.blue) bluePc = noteToPc(n.note); });
    // Each scale note already has one correctly-spelled letter name (from the
    // verified k.diatonic / borrowed-tone data) -- reuse it as the fretboard
    // label instead of re-deriving a name from the bare pitch class, so every
    // dot reads with the exact same spelling as the note chips above it.
    var pcToName = {};
    b.notes.forEach(function(n){ pcToName[noteToPc(n.note)] = n.note; });
    var diagram = document.createElement('div');
    diagram.className = 'scale-diagram';
    diagram.appendChild(buildScaleFretboardSVG(scalePcs, b.rootPc, bluePc, anchors[curPos], pcToName));
    block.appendChild(diagram);
    renderNoteChips(row, b.notes, [], function(d){ addNoteToSnippet(d.note); });
    return block;
  }
  function renderScales(blocks){
    lastScaleBlocks = blocks;
    var wrap = document.getElementById('scaleBlocks');
    wrap.innerHTML = '';
    blocks.forEach(function(b, idx){
      wrap.appendChild(buildScaleBlockEl(b, 'slot'+idx, function(){ renderScales(lastScaleBlocks); }));
    });
  }
  // Which mode is picked persists across key changes AND across major/minor
  // branch switches -- rootPc alone determines every mode's actual notes, so
  // there's no need to reset the pick just because you spun the wheel. Defaults
  // to Mixolydian, matching this feature's original (major-branch) starting point.
  var selectedModeKey = 'mixolydian';
  var lastModesRootPc = null;
  var lastModesTonicNote = null;
  function renderModes(rootPc, tonicNote){
    lastModesRootPc = rootPc;
    lastModesTonicNote = tonicNote;
    var wrap = document.getElementById('modesBlock');
    wrap.innerHTML = '';

    var picker = document.createElement('div');
    picker.className = 'mode-picker';
    MODE_ORDER.forEach(function(modeKey){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'mode-pick-btn' + (modeKey === selectedModeKey ? ' is-on' : '');
      btn.textContent = MODE_INFO[modeKey].label;
      btn.addEventListener('click', function(){
        selectedModeKey = modeKey;
        renderModes(lastModesRootPc, lastModesTonicNote);
      });
      picker.appendChild(btn);
    });
    wrap.appendChild(picker);

    var notes = modeScale(rootPc, tonicNote, selectedModeKey);
    if(!notes) return; // every tonic has all 7 modes defined; this shouldn't happen
    var block = {
      name: notes[0].note + ' ' + MODE_INFO[selectedModeKey].label,
      desc: MODE_INFO[selectedModeKey].desc,
      feel: MODE_INFO[selectedModeKey].feel,
      notes: notes,
      rootPc: rootPc
    };
    wrap.appendChild(buildScaleBlockEl(block, 'modes', function(){ renderModes(lastModesRootPc, lastModesTonicNote); }));
  }

  var LETTER_PC = {C:0,D:2,E:4,F:5,G:7,A:9,B:11};
  function noteToPc(name){
    var pc = LETTER_PC[name[0]];
    for(var i=1;i<name.length;i++){
      if(name[i] === '#') pc = (pc+1)%12;
      else if(name[i] === 'b') pc = (pc+11)%12;
    }
    return pc;
  }

  // ---------- moveable guitar chord shapes ----------
  // Standard tuning, open pitch classes, string 6 (low E) to string 1 (high e).
  var STRING_PC = {6:4, 5:9, 4:2, 3:7, 2:11, 1:4};
  // Every shape below is grounded in one real, standard open-position chord voicing,
  // then generalized as fret offsets relative to wherever the root falls on the
  // reference string. Verified by brute-force computing the actual notes produced
  // at all 12 roots and checking they match the intended chord tones exactly
  // (script: verify_shapes.js) — nothing here is hand-guessed.
  var CHORD_SHAPES = {
    major:    { E:{ref:6, offsets:{6:0,5:2,4:2,3:1,2:0,1:0}, mute:{}},
                A:{ref:5, offsets:{5:0,4:2,3:2,2:2,1:0}, mute:{6:true}} },
    minor:    { E:{ref:6, offsets:{6:0,5:2,4:2,3:0,2:0,1:0}, mute:{}},
                A:{ref:5, offsets:{5:0,4:2,3:2,2:1,1:0}, mute:{6:true}} },
    dom7:     { E:{ref:6, offsets:{6:0,5:2,4:0,3:1,2:0,1:0}, mute:{}},
                A:{ref:5, offsets:{5:0,4:2,3:0,2:2,1:0}, mute:{6:true}} },
    maj7:     { E:{ref:6, offsets:{6:0,5:2,4:1,3:1,2:0,1:0}, mute:{}},
                A:{ref:5, offsets:{5:0,4:2,3:1,2:2,1:0}, mute:{6:true}} },
    min7:     { E:{ref:6, offsets:{6:0,5:2,4:0,3:0,2:0,1:0}, mute:{}},
                A:{ref:5, offsets:{5:0,4:2,3:0,2:1,1:0}, mute:{6:true}} },
    // Diminished/half-diminished get the same E-shape/A-shape pair as everything
    // else, just built on a 4-string subset (they're only ever 3- or 4-note
    // chords) rather than all six strings. Verified the same way, by brute-force
    // computing the actual notes produced at all 12 roots (script:
    // verify_dim_eshape.js) — 0 mismatches, root always present, no wrong tones.
    dim:      { E:{ref:6, offsets:{6:0,5:1,4:2,3:0}, mute:{2:true,1:true}},
                A:{ref:5, offsets:{5:0,4:1,3:2,2:1}, mute:{6:true,1:true}} },
    halfdim7: { E:{ref:6, offsets:{6:0,5:1,4:0,3:0}, mute:{2:true,1:true}},
                A:{ref:5, offsets:{5:0,4:1,3:0,2:1}, mute:{6:true,1:true}} }
  };
  // preferAlt: every chord quality (including diminished and half-diminished
  // now) has both an E-shape and an A-shape moveable family — see CHORD_SHAPES
  // above — so preferAlt always has something to switch to; pass true to get
  // the OTHER one instead of the default lowest-fret pick.
  function chordShapeFor(rootPc, quality, preferAlt){
    var family = CHORD_SHAPES[quality];
    var candidates = [];
    ['E','A'].forEach(function(key){
      if(!family[key]) return;
      var shape = family[key];
      var refFret = ((rootPc - STRING_PC[shape.ref]) % 12 + 12) % 12;
      candidates.push({ shape:shape, refFret:refFret, family:key });
    });
    candidates.sort(function(a,b){ return a.refFret - b.refFret; });
    var pickIdx = (preferAlt && candidates.length > 1) ? 1 : 0;
    var pick = candidates[pickIdx];
    var frets = {};
    for(var s=6; s>=1; s--){
      if(pick.shape.mute[s]){ frets[s] = 'x'; continue; }
      if(pick.shape.offsets[s] === undefined){ frets[s] = null; continue; }
      frets[s] = pick.refFret + pick.shape.offsets[s];
    }
    return { frets: frets, baseFret: pick.refFret, family: pick.family, familyCount: candidates.length, isAlt: pickIdx === 1 };
  }

  // ---------- alternate tunings ----------
  // A tuning is just a different set of open pitch classes; STRING_PC above (mutated
  // in place by applyTuning() below, never reassigned, so every function that closed
  // over it keeps seeing the live tuning) holds whichever one is active. Scale
  // diagrams need no tuning-specific code at all -- they already just place scale
  // tones wherever they land on each string's live open pitch, for any tuning.
  // Chords are the part that needs real work: the CAGED shapes above are Standard-
  // tuning-specific tricks, so every other tuning gets its voicings from the generic
  // brute-force search further down instead.
  var STANDARD_STRING_PC = {6:4, 5:9, 4:2, 3:7, 2:11, 1:4};
  var TUNINGS = [
    { key:'standard',  label:'Standard',              notes:'E A D G B E', strings:{6:4, 5:9, 4:2, 3:7, 2:11, 1:4} },
    { key:'dropD2',    label:'Double Drop D',         notes:'D A D G B D', strings:{6:2, 5:9, 4:2, 3:7, 2:11, 1:2} },
    { key:'modalE',    label:'Modal E',               notes:'E E E E B E', strings:{6:4, 5:4, 4:4, 3:4, 2:11, 1:4} },
    { key:'modalD',    label:'Modal D',               notes:'D A D D A D', strings:{6:2, 5:9, 4:2, 3:2, 2:9,  1:2} },
    { key:'dadgad',    label:'DADGAD (Modal D/Celtic)', notes:'D A D G A D', strings:{6:2, 5:9, 4:2, 3:7, 2:9,  1:2} },
    { key:'openG',     label:'Open G',                notes:'D G D G B D', strings:{6:2, 5:7, 4:2, 3:7, 2:11, 1:2} },
    { key:'openGsus4', label:'Open Gsus4',            notes:'D G C G C D', strings:{6:2, 5:7, 4:0, 3:7, 2:0,  1:2} },
    { key:'openC6',    label:'Open C6',               notes:'C A C G C E', strings:{6:0, 5:9, 4:0, 3:7, 2:0,  1:4} },
    { key:'crosby',    label:'Custom Crosby',         notes:'E B D G A D', strings:{6:4, 5:11,4:2, 3:7, 2:9,  1:2} }
  ];
  function tuningByKey(key){
    for(var i=0;i<TUNINGS.length;i++){ if(TUNINGS[i].key === key) return TUNINGS[i]; }
    return TUNINGS[0];
  }
  var currentTuningKey = 'standard';

  // Every chord quality's stacked-thirds intervals from its own root. The last five
  // (add9, sus2, sus4, min9, five) back the "try this instead" embellishment chips
  // under each diatonic chord -- see embellishmentsFor() below -- and, unlike the
  // first seven, have no hand-modeled CAGED shape, so they always go through the
  // generic search regardless of tuning (see chordVoicingFor()).
  var CHORD_INTERVALS = {
    major:    [0,4,7],       minor:    [0,3,7],       dim:      [0,3,6],
    dom7:     [0,4,7,10],    maj7:     [0,4,7,11],    min7:     [0,3,7,10],
    halfdim7: [0,3,6,10],
    add9:     [0,4,7,2],     sus2:     [0,2,7],        sus4:     [0,5,7],
    min9:     [0,3,7,10,2],  five:     [0,7]
  };
  // Fallback tiers for the generic voicing search, most-complete first: a candidate
  // qualifies at the first tier whose intervals are ALL present among its sounded
  // notes. The 3rd is kept over the 5th (it's what actually makes a chord major vs.
  // minor), and the 7th/9th is kept over further trimming, since it's the next most
  // identifying color tone -- same priority a guitarist would use picking which
  // note to drop first when a tuning doesn't offer a full voicing nearby.
  var CHORD_TIERS = {
    major:    [[0,4,7],[0,4],[0,7],[0]],
    minor:    [[0,3,7],[0,3],[0,7],[0]],
    dim:      [[0,3,6],[0,3],[0]],
    dom7:     [[0,4,7,10],[0,4,10],[0,4,7],[0,4],[0]],
    maj7:     [[0,4,7,11],[0,4,11],[0,4,7],[0,4],[0]],
    min7:     [[0,3,7,10],[0,3,10],[0,3,7],[0,3],[0]],
    halfdim7: [[0,3,6,10],[0,3,10],[0,3,6],[0,3],[0]],
    add9:     [[0,4,7,2],[0,4,2],[0,4,7],[0,4],[0]],
    sus2:     [[0,2,7],[0,2],[0,7],[0]],
    sus4:     [[0,5,7],[0,5],[0,7],[0]],
    min9:     [[0,3,7,10,2],[0,3,10,2],[0,3,7,10],[0,3,10],[0,3,7],[0,3],[0]],
    five:     [[0,7],[0]]
  };
  // Brute-forces every mute/open/fretted combination across a fret window (6 strings
  // x up to 6 choices each = well under 50k combinations, trivial to check exhaustively)
  // and keeps only the single best one: every sounded note must be an actual chord
  // tone (never a wrong note), the root must sound, and among everything left, the
  // most complete tier wins, then the fullest-sounding, easiest-to-play voicing --
  // "easiest" meaning the root anchors the bass (this app has no slash chords, so
  // the root is always the preferred bass note) and the fewest independent finger
  // placements, where a run of ADJACENT strings sharing the same nonzero fret counts
  // as one barre/finger and anything else (a different fret, or a break via an open
  // or muted string) needs its own. Without the bass preference, a chord like Dsus4
  // could land on an open low string that happens to share some other chord tone,
  // giving a technically-correct-but-unplayable spread (e.g. fretting the low E and
  // high strings with everything in between left open) instead of the standard
  // shape a guitarist actually uses; without the finger-groups measure, the same
  // fret number on two far-apart strings was scored as if it were one cheap barre
  // even when the strings between them weren't part of it.
  function searchVoicingWindow(rootPc, requiredPcs, tiers, tuningStrings, loFret, hiFret, allowOpen){
    var stringNums = [6,5,4,3,2,1];
    var optionsPerString = stringNums.map(function(s){
      var opts = ['x'];
      if(allowOpen) opts.push(0);
      for(var f = Math.max(loFret,1); f <= hiFret; f++) opts.push(f);
      return opts;
    });
    var best = null;
    var chosen = new Array(6);
    function cmpScore(a,b){ for(var i=0;i<a.length;i++){ if(a[i]!==b[i]) return a[i]-b[i]; } return 0; }
    function evaluate(){
      var soundedPcs = [], frets = {}, playedCount = 0, maxFret = 0, minFret = null;
      var lowestStringPc = null, fingerGroups = 0, prevFret = null;
      for(var i=0;i<6;i++){
        var s = stringNums[i], v = chosen[i];
        frets[s] = v;
        if(v === 'x'){ prevFret = null; continue; }
        playedCount++;
        var pc = (tuningStrings[s] + v) % 12;
        soundedPcs.push(pc);
        if(lowestStringPc === null) lowestStringPc = pc;
        if(v > 0){
          maxFret = Math.max(maxFret, v);
          minFret = (minFret===null) ? v : Math.min(minFret, v);
          if(prevFret !== v) fingerGroups++;
          prevFret = v;
        } else {
          prevFret = null;
        }
      }
      if(playedCount < 3) return; // fewer than 3 ringing strings doesn't read as a chord
      for(var k=0;k<soundedPcs.length;k++){ if(requiredPcs.indexOf(soundedPcs[k]) === -1) return; }
      if(soundedPcs.indexOf(rootPc) === -1) return;
      var tierIdx = -1;
      for(var t=0;t<tiers.length;t++){
        var tierPcs = tiers[t].map(function(iv){ return (rootPc+iv)%12; });
        if(tierPcs.every(function(pc){ return soundedPcs.indexOf(pc) !== -1; })){ tierIdx = t; break; }
      }
      if(tierIdx === -1) return;
      var uniquePcs = {}; soundedPcs.forEach(function(pc){ uniquePcs[pc]=true; });
      var bassPenalty = (lowestStringPc !== rootPc) ? 1 : 0;
      var score = [tierIdx, bassPenalty, -playedCount, -Object.keys(uniquePcs).length, fingerGroups, maxFret-(minFret||0), maxFret];
      if(!best || cmpScore(score, best.score) < 0){
        best = { frets: Object.assign({}, frets), score: score, minFret: minFret===null?0:minFret, maxFret: maxFret };
      }
    }
    (function rec(i){
      if(i === 6){ evaluate(); return; }
      var opts = optionsPerString[i];
      for(var j=0;j<opts.length;j++){ chosen[i] = opts[j]; rec(i+1); }
    })(0);
    return best;
  }
  var genericVoicingCache = {};
  // Same return shape as chordShapeFor() above (frets/baseFret/familyCount/isAlt),
  // so every caller and every diagram-drawing function works unmodified regardless
  // of which tuning is active. Tries a fully-open window first (frets 0-4, opens
  // allowed), then moveable windows at increasing base frets, keeping up to a
  // couple of genuinely distinct results so preferAlt has something to switch to.
  function findGenericVoicing(rootPc, quality, tuningStrings, preferAlt, tuningKey){
    var cacheKey = (tuningKey||'?') + '|' + rootPc + '|' + quality;
    var cached = genericVoicingCache[cacheKey];
    if(!cached){
      var requiredPcs = CHORD_INTERVALS[quality].map(function(iv){ return (rootPc+iv)%12; });
      var tiers = CHORD_TIERS[quality];
      var candidates = [];
      function addCandidate(result, baseFretOverride){
        if(!result) return;
        var fretsJson = JSON.stringify(result.frets);
        var already = candidates.some(function(c){ return JSON.stringify(c.result.frets) === fretsJson; });
        if(already) return;
        // score[0] is searchVoicingWindow's own tier index for this exact voicing --
        // reuse it rather than recomputing, so "most complete" always means the same
        // thing here as it did when this candidate first won its own fret window.
        candidates.push({ result: result, baseFret: (baseFretOverride !== undefined) ? baseFretOverride : (result.minFret || 0), tierIdx: result.score[0] });
      }
      var openBest = searchVoicingWindow(rootPc, requiredPcs, tiers, tuningStrings, 0, 4, true);
      addCandidate(openBest, 0);
      // Keep walking up the neck until either the best possible tier for this quality
      // has actually been found, or a healthy number of distinct shapes have been
      // gathered -- NOT just "4 candidates found so far, regardless of how complete
      // they are". In most tunings a full triad and a barer power-chord both live in
      // the first window or two, so this made no visible difference. But a tuning
      // with few distinct open pitch classes (Modal E, Modal D -- most strings share
      // one open note) can need a much wider window to complete a chord than to reduce
      // it to a power chord: stopping early used to leave that fuller voicing either
      // undiscovered, or discovered but buried past the two slots the UI can ever
      // show (see the sort below).
      var bestTierSoFar = candidates.length ? candidates[0].tierIdx : tiers.length;
      for(var base=1; base<=9 && bestTierSoFar > 0 && candidates.length<6; base++){
        var r = searchVoicingWindow(rootPc, requiredPcs, tiers, tuningStrings, base, base+3, false);
        addCandidate(r);
        candidates.forEach(function(c){ if(c.tierIdx < bestTierSoFar) bestTierSoFar = c.tierIdx; });
      }
      // Present the most musically complete voicing first (lowest tier = most of the
      // chord's real tones present), and the most compact/lowest-fret among any ties
      // -- rather than whichever shape the neck-walking search merely happened to
      // reach first. This is what actually fixes the bug: collecting a fuller
      // candidate later was already possible before this change; showing it was not.
      candidates.sort(function(a,b){
        if(a.tierIdx !== b.tierIdx) return a.tierIdx - b.tierIdx;
        return a.baseFret - b.baseFret;
      });
      cached = candidates;
      genericVoicingCache[cacheKey] = cached;
    }
    if(!cached.length){
      // Nothing playable sounds clean within reach in this tuning -- mute everything
      // rather than show a voicing with a wrong note in it.
      var frets = {}; [6,5,4,3,2,1].forEach(function(s){ frets[s]='x'; });
      return { frets: frets, baseFret: 0, familyCount: 1, isAlt: false, noVoicing: true };
    }
    var pickIdx = (preferAlt && cached.length > 1) ? 1 : 0;
    var pick = cached[pickIdx];
    return { frets: pick.result.frets, baseFret: pick.baseFret, familyCount: Math.min(cached.length,2), isAlt: pickIdx===1 };
  }
  // Single entry point renderChordDiagrams() calls: Standard tuning keeps using the
  // hand-modeled CAGED shapes (chordShapeFor), every other tuning uses the generic
  // search above against whatever STRING_PC currently holds.
  function chordVoicingFor(rootPc, quality, preferAlt){
    // Hand-modeled CAGED shapes only exist for the 7 original qualities. The newer
    // embellishment qualities (add9/sus2/sus4/min9/five) have no entry in CHORD_SHAPES,
    // so they always fall through to the generic brute-force search below, even in
    // standard tuning.
    if(currentTuningKey === 'standard' && CHORD_SHAPES[quality]) return chordShapeFor(rootPc, quality, preferAlt);
    return findGenericVoicing(rootPc, quality, STRING_PC, preferAlt, currentTuningKey);
  }
  // Switches the active tuning: mutates STRING_PC's own properties in place (rather
  // than reassigning the variable) so every function that already closed over it --
  // scale diagrams, chord voicing, everything -- sees the new tuning immediately,
  // then re-renders the currently selected key under it.
  function applyTuning(key){
    var t = tuningByKey(key);
    currentTuningKey = t.key;
    [6,5,4,3,2,1].forEach(function(s){ STRING_PC[s] = t.strings[s]; });
    var caption = document.getElementById('tuningCaption');
    if(caption) caption.textContent = t.key === 'standard' ? '' : 'Tuning: ' + t.label + ' (' + t.notes + ')';
    render();
  }

  var STRING_ORDER = [6,5,4,3,2,1];
  // Left margin wide enough for a two-digit "Nfr" label without it clipping past
  // the SVG viewBox edge (viewBox has no overflow, so text drawn past x=0 vanishes).
  var DIAG_XS = {6:22,5:35,4:48,3:61,2:74,1:87};

  // Text drawn on top of a filled dot needs to flip with the dot's own color so
  // it stays readable in both themes. --accent is a mid-tone in both themes, so
  // its dedicated --accent-ink pairing is used for the root. Every other dot
  // (regular scale tones and the blue note alike) is filled with a color that's
  // deliberately the opposite brightness of --bg in both themes (--ink flips
  // dark/light with the theme; --note-blue's two theme values were picked the
  // same way) -- so --bg reads correctly on all of them without its own branch.
  function noteTextColorForInterval(interval){
    return interval === 0 ? 'var(--accent-ink)' : 'var(--bg)';
  }
  function noteColorForInterval(interval){
    if(interval === 0) return 'var(--accent)';
    if(interval === 6) return 'var(--note-blue)';
    return 'var(--ink)';
  }

  // Draws the horizontal fret lines for a diagram. The nut gets a bold, solid bar --
  // a completely different graphic (a filled block, full-strength ink color) from the
  // thin faint lines used for every actual fret -- so there's no ambiguity about which
  // one is the nut. Just as importantly, a moveable/barre position never draws this bar
  // at all, so it can never be mistaken for a diagram that starts at the nut; the "Nfr"
  // label is the only thing that marks its starting fret.
  function appendFretGrid(svg, xs, topY, rowH, rows, isOpen){
    for(var r=0; r<=rows; r++){
      var y = topY + r*rowH;
      if(r === 0 && isOpen){
        svg.appendChild(el('rect', {x:xs[6], y:y-2.5, width:(xs[1]-xs[6]), height:5,
          rx:1.2, fill:'var(--ink)'}));
      } else {
        svg.appendChild(el('line', {x1:xs[6], y1:y, x2:xs[1], y2:y,
          stroke:'var(--ink-faint)', 'stroke-width':1}));
      }
    }
  }

  // Small guitar chord diagram: strings vertical (low E left -> high e right), frets
  // horizontal going down from the nut. x/o markers above the nut for muted/open
  // strings; a "Nfr" label replaces the nut when the shape is played up the neck.
  function buildChordDiagramSVG(result, rootPc){
    var topY = 24, rowH = 18;
    var isOpenForRows = result.baseFret === 0;
    // Diagrams are normally 3 frets tall. But in a tuning where most strings share
    // one open pitch (Modal E, Modal D), the voicing search (searchVoicingWindow)
    // is allowed to reach a 4th fret past the barre to complete a chord -- see the
    // comment on that search's base..base+3 window. A fixed 3-row grid would then
    // draw that 4th-fret note's dot one row below the visible grid, cut off. Size
    // the grid to whatever fret span this particular voicing actually uses instead.
    var rows = 3;
    STRING_ORDER.forEach(function(s){
      var f = result.frets[s];
      if(f === null || f === undefined || f === 'x' || f === 0) return;
      var rowIdx = f - result.baseFret - (isOpenForRows ? 1 : 0);
      if(rowIdx + 1 > rows) rows = rowIdx + 1;
    });
    var H = topY + rows*rowH + 14;
    // viewBox starts left of x=0 to leave dedicated room for the "Nfr" position label
    // (up to 4 characters, e.g. "11fr") without it clipping or crowding the grid/markers.
    var svg = el('svg', {viewBox:'-20 0 120 ' + H, class:'fret-diagram-svg', role:'img',
      'aria-label': 'Guitar chord diagram, ' + result.baseFret + ' fret position'});
    var isOpen = result.baseFret === 0;

    appendFretGrid(svg, DIAG_XS, topY, rowH, rows, isOpen);
    STRING_ORDER.forEach(function(s){
      svg.appendChild(el('line', {x1:DIAG_XS[s], y1:topY, x2:DIAG_XS[s], y2:topY+rows*rowH,
        stroke:'var(--ink-faint)', 'stroke-width':1}));
    });
    if(!isOpen){
      var lbl = el('text', {x:-18, y:topY-2, 'text-anchor':'start',
        'font-size':10, 'font-weight':600, 'font-family':'IBM Plex Mono, monospace', fill:'var(--ink-soft)'});
      lbl.textContent = result.baseFret + 'fr';
      svg.appendChild(lbl);
    }
    STRING_ORDER.forEach(function(s){
      var f = result.frets[s];
      var mx = DIAG_XS[s];
      if(f === 'x'){
        var xt = el('text', {x:mx, y:topY-10, 'text-anchor':'middle', 'font-size':11,
          'font-family':'IBM Plex Mono, monospace', fill:'var(--ink-faint)', 'font-weight':700});
        xt.textContent = '×';
        svg.appendChild(xt);
        return;
      }
      if(f === null || f === undefined) return;
      var interval = ((STRING_PC[s] + f - rootPc) % 12 + 12) % 12;
      var color = noteColorForInterval(interval);
      if(f === 0){
        svg.appendChild(el('circle', {cx:mx, cy:topY-10, r:4, fill:'none', stroke:color, 'stroke-width':1.6}));
      } else {
        // In the open-position case (baseFret 0) the nut itself occupies "fret 0"
        // and isn't a cell in the grid -- fret 1 belongs in the very first cell,
        // right below the nut. In the moveable/barre case baseFret IS the fret
        // shown in that first cell (that's what the "Nfr" label promises), so no
        // extra shift is needed there.
        var rowIdx = f - result.baseFret - (isOpen ? 1 : 0);
        var cy = topY + rowIdx*rowH + rowH/2;
        svg.appendChild(el('circle', {cx:mx, cy:cy, r:6.5, fill:color}));
      }
    });
    return svg;
  }

  // Scale diagrams get their own, wider string spacing (independent of the chord
  // diagrams' DIAG_XS) so each dot has room for a letter-name label without
  // strings-apart dots touching -- 18 units apart with an r=8 dot leaves a clean
  // 2px gap, versus the chord diagrams' plain unlabeled 13-unit-apart dots.
  var SCALE_DIAG_XS = {6:26, 5:44, 4:62, 3:80, 2:98, 1:116};
  // Scale "position" diagram: same visual language as the chord diagrams, but wider
  // (4 fret columns) and every string is in play — no mutes. By default the window
  // is anchored to wherever the root falls on the low E string, the near-universal
  // convention for teaching a moveable pentatonic/blues box shape — but a caller
  // can pass baseFretOverride (see scalePositions()) to show the same scale anchored
  // further up the neck instead. pcToName maps each scale pitch class to its
  // already-correctly-spelled letter name (see buildScaleBlockEl) so every dot can
  // be labeled without re-deriving spelling here.
  function buildScaleFretboardSVG(scalePcSet, rootPc, bluePc, baseFretOverride, pcToName){
    var topY = 26, rowH = 20, rows = 4;
    var baseFret = (typeof baseFretOverride === 'number') ? baseFretOverride : ((rootPc - STRING_PC[6]) % 12 + 12) % 12;
    var H = topY + rows*rowH + 6;
    // viewBox starts left of x=0 to leave dedicated room for the "Nfr" position label
    // (up to 4 characters, e.g. "11fr") without it clipping or crowding the grid.
    var svg = el('svg', {viewBox:'-20 0 146 ' + H, class:'fret-diagram-svg', role:'img',
      'aria-label': 'Guitar fretboard diagram starting at fret ' + baseFret});
    var isOpen = baseFret === 0;

    appendFretGrid(svg, SCALE_DIAG_XS, topY, rowH, rows, isOpen);
    STRING_ORDER.forEach(function(s){
      svg.appendChild(el('line', {x1:SCALE_DIAG_XS[s], y1:topY, x2:SCALE_DIAG_XS[s], y2:topY+rows*rowH,
        stroke:'var(--ink-faint)', 'stroke-width':1}));
    });
    if(!isOpen){
      var lbl = el('text', {x:-18, y:topY-2, 'text-anchor':'start',
        'font-size':10, 'font-weight':600, 'font-family':'IBM Plex Mono, monospace', fill:'var(--ink-soft)'});
      lbl.textContent = baseFret + 'fr';
      svg.appendChild(lbl);
    }
    // Draws one labeled scale-tone dot. r=8 for a normal fretted note in the grid;
    // a smaller r=7 is used for an open-string note drawn above the nut (see below),
    // matching the chord diagrams' convention of keeping open notes out of the fret
    // grid entirely rather than folding fret 0 into the first playable cell.
    function drawScaleDot(cx, cy, pc, r){
      var interval = ((pc - rootPc) % 12 + 12) % 12;
      var color = pc === bluePc ? 'var(--note-blue)' : noteColorForInterval(interval);
      svg.appendChild(el('circle', {cx:cx, cy:cy, r:r, fill:color}));
      var name = pcToName && pcToName[pc];
      if(name){
        var t = el('text', {x:cx, y:cy, 'text-anchor':'middle', 'dominant-baseline':'middle',
          'font-size': name.length > 1 ? (r >= 8 ? 6.5 : 5.5) : (r >= 8 ? 8 : 7), 'font-weight':700,
          'font-family':'IBM Plex Mono, monospace', fill:noteTextColorForInterval(interval)});
        t.textContent = name;
        svg.appendChild(t);
      }
    }
    STRING_ORDER.forEach(function(s){
      // Open position: fret 0 is the nut itself, not a cell in the grid below it --
      // any scale tone that falls on the open string is drawn just above the nut,
      // exactly like the chord diagrams' open-string markers, and the grid's own
      // rows start at fret 1 instead of fret 0 (see the rowIdx->fret mapping below).
      if(isOpen){
        var openPc = STRING_PC[s] % 12;
        if(scalePcSet.indexOf(openPc) !== -1){
          drawScaleDot(SCALE_DIAG_XS[s], topY - 12, openPc, 7);
        }
      }
      for(var rowIdx=0; rowIdx<rows; rowIdx++){
        // Same reasoning as the chord diagrams: in the open case the first grid
        // cell is fret 1 (the nut already accounted for fret 0 above); in a
        // moveable/barre window the first cell is baseFret itself, per the "Nfr" label.
        var fret = isOpen ? (rowIdx + 1) : (baseFret + rowIdx);
        var pc = (STRING_PC[s] + fret) % 12;
        if(scalePcSet.indexOf(pc) === -1) continue;
        var cx = SCALE_DIAG_XS[s];
        var cy = topY + rowIdx*rowH + rowH/2;
        drawScaleDot(cx, cy, pc, 8);
      }
    });
    return svg;
  }
  // Every pitch class appears exactly once on each ring (outer index i has pc (7*i)%12,
  // since the wheel is generated in fifths; inner index is the same relation offset by
  // the relative-minor shift). Inverting that mapping locates any chord root's wedge
  // from its pitch class alone, so the visualizer can't drift out of sync with the data.
  function outerIndexForPc(pc){ return (7*pc) % 12; }
  function innerIndexForPc(pc){ return ((outerIndexForPc(pc) - 3) % 12 + 12) % 12; }

  // Borrowed chord: the flatted-seventh (bVII) major chord, a whole step below the
  // tonic. It isn't part of the diatonic seven-chord family, but it's the single
  // most common "outside" chord in blues-rock and folk-rock guitar (the move under
  // Led Zeppelin's "Rock and Roll," Neil Young's "Rockin' in the Free World," etc).
  function borrowedFlat7Entry(k){
    var note = FLAT_NAMES[((k.tonicPc + 10) % 12 + 12) % 12];
    return { note: note, quality: 'maj', chord: note, roman: 'bVII' };
  }

  // ---------- lead-melody scales ----------
  // Major pentatonic (scale degrees 1 2 3 5 6) is fully diatonic, so it's read
  // straight off the key's own chord-family notes — guaranteed to match what's
  // already on screen.
  function noteChip(note, roman, isBlue){
    return { note: note, chord: note, roman: roman, blue: !!isBlue };
  }
  function majorPentatonic(k){
    var degreeLabels = ['1','2','3','','5','6'];
    return [0,1,2,4,5].map(function(i){ return noteChip(k.diatonic[i].note, degreeLabels[i]); });
  }
  // Minor pentatonic built on the SAME root as a selected major key (not the
  // relative minor) is the classic blues/rock lead sound over major-key changes —
  // e.g. soloing in A minor pentatonic over an A-D-E blues. b3 and b7 are borrowed
  // tones with nothing else on the page to stay consistent with, so they use the
  // same flat-name table as the bVII chord above.
  function tonicMinorPentatonic(k){
    var t = k.tonicPc;
    return [
      noteChip(k.diatonic[0].note, '1'),
      noteChip(FLAT_NAMES[(t+3)%12], '♭3'),
      noteChip(k.diatonic[3].note, '4'),
      noteChip(k.diatonic[4].note, '5'),
      noteChip(FLAT_NAMES[(t+10)%12], '♭7')
    ];
  }
  function tonicBluesScale(k){
    var p = tonicMinorPentatonic(k);
    var blue = noteChip(FLAT_NAMES[(k.tonicPc+6)%12], '♭5', true);
    return [p[0], p[1], p[2], blue, p[3], p[4]];
  }
  // For a selected minor key, its own natural-minor pentatonic (1 b3 4 5 b7) is
  // fully diatonic to the rotated scale already on screen — read straight off it,
  // same reasoning as majorPentatonic above. Only the blue note (b5) is fresh.
  function minorPentatonicFromRotated(rotated){
    var degreeLabels = {0:'1', 2:'♭3', 3:'4', 4:'5', 6:'♭7'};
    return [0,2,3,4,6].map(function(i){ return noteChip(rotated[i].note, degreeLabels[i]); });
  }
  function minorBluesFromRotated(rotated, minorTonicPc){
    var p = minorPentatonicFromRotated(rotated);
    var blue = noteChip(FLAT_NAMES[(minorTonicPc+6)%12], '♭5', true);
    return [p[0], p[1], p[2], blue, p[3], p[4]];
  }

  // ---------- modes (all 7, same tonic as your selected key) ----------
  // Every mode's note SET is a rotation of some major scale's notes, but a mode's
  // SPELLING must never borrow an unrelated key's sharp/flat convention -- that was
  // the original bug here: some tonics rendered under the WRONG valid enharmonic
  // spelling (e.g. "F# Lydian" showed as "Gb Lydian") because looking up "the"
  // major key for a pitch class picks one arbitrary spelling family, not
  // necessarily the selected tonic's own. The fix: spell each degree by advancing
  // one natural letter at a time from the TONIC'S OWN letter, choosing whichever
  // accidental reproduces that degree's required pitch class. This guarantees the
  // tonic is always spelled exactly as selected (degree 0 recomputes to the same
  // spelling by construction) and every other degree gets a unique letter, never
  // borrowing anyone else's key signature. Verified for pitch-class correctness,
  // one-of-each-letter coverage, and root-matches-tonic across all 12 major/minor
  // tonics x 7 modes with 0 mismatches (see verify_mode_spelling2.js).
  var MODE_INTERVALS = {
    ionian:     [0,2,4,5,7,9,11],
    dorian:     [0,2,3,5,7,9,10],
    phrygian:   [0,1,3,5,7,8,10],
    lydian:     [0,2,4,6,7,9,11],
    mixolydian: [0,2,4,5,7,9,10],
    aeolian:    [0,2,3,5,7,8,10],
    locrian:    [0,1,3,5,6,8,10]
  };
  // `feel` is a short, few-word version of the same character `desc` describes in
  // full sentence form -- used wherever space is tight (practice mode) so the mood
  // of whichever mode you're on still comes through without wrapping the layout.
  var MODE_INFO = {
    ionian:     { label:'Ionian',     degreeLabels:['1','2','3','4','5','6','7'],
                  desc:'the major scale itself — bright, resolved, home base',
                  feel:'bright, resolved, home' },
    dorian:     { label:'Dorian',     degreeLabels:['1','2','♭3','4','5','6','♭7'],
                  desc:'minor with a raised, natural 6th — cooler and jazzier than plain minor (Santana, The Doors)',
                  feel:'cool, jazzy minor' },
    phrygian:   { label:'Phrygian',   degreeLabels:['1','♭2','♭3','4','5','♭6','♭7'],
                  desc:'minor with a flat 2nd — dark, Spanish/flamenco-tinged',
                  feel:'dark, Spanish-tinged' },
    lydian:     { label:'Lydian',     degreeLabels:['1','2','3','♯4','5','6','7'],
                  desc:'major with a raised 4th — dreamy, floating, film-score bright',
                  feel:'dreamy, floating' },
    mixolydian: { label:'Mixolydian', degreeLabels:['1','2','3','4','5','6','♭7'],
                  desc:'major with a flat 7th — bluesy, folk-rock pull (Zeppelin, Neil Young)',
                  feel:'bluesy, folk-rock' },
    aeolian:    { label:'Aeolian',    degreeLabels:['1','2','♭3','4','5','♭6','♭7'],
                  desc:'the natural minor scale itself — plain, straightforward sad',
                  feel:'plain, sad' },
    locrian:    { label:'Locrian',    degreeLabels:['1','♭2','♭3','4','♭5','♭6','♭7'],
                  desc:'minor with a flat 2nd AND flat 5th — unstable, almost never a home base',
                  feel:'unstable, tense' }
  };
  var MODE_ORDER = ['ionian','dorian','phrygian','lydian','mixolydian','aeolian','locrian'];
  var LETTER_CYCLE = ['C','D','E','F','G','A','B'];
  // Spells pitch class `pc` using natural letter `letter`, picking whichever
  // accidental (up to a double sharp/flat) reproduces that exact pitch class.
  function spellDegree(letter, pc){
    var natural = LETTER_PC[letter];
    var diff = ((pc - natural + 6) % 12 + 12) % 12 - 6; // nearest accidental, range [-6,5]
    var sym = diff > 0 ? new Array(diff+1).join('#') : diff < 0 ? new Array(-diff+1).join('b') : '';
    return letter + sym;
  }
  // Builds one mode's 7-note, correctly-spelled scale on tonic `tonicNote` by
  // walking the natural-letter cycle starting at the tonic's own letter and
  // spelling each degree from the mode's interval formula -- see comment above.
  function modeScale(tonicPc, tonicNote, modeKey){
    var intervals = MODE_INTERVALS[modeKey];
    var info = MODE_INFO[modeKey];
    var startLetterIdx = LETTER_CYCLE.indexOf(tonicNote[0]);
    if(startLetterIdx === -1) return null;
    var notes = [];
    for(var d=0; d<7; d++){
      var letter = LETTER_CYCLE[(startLetterIdx+d)%7];
      var targetPc = (tonicPc + intervals[d]) % 12;
      notes.push(noteChip(spellDegree(letter, targetPc), info.degreeLabels[d]));
    }
    return notes;
  }

  // Renders two synchronized pickers for the same set of progressions: the full
  // .prog-list (name + full chord text, normal view only) and a compact
  // .prog-list-compact (same info, smaller) that lives beside the wheel and is
  // visible in practice mode -- so switching progressions there doesn't require
  // backing out to the hidden reference section first. Both read from the same
  // `entries` and both ends of a pair stay in sync (activating one clears and
  // marks the other, matching pair too), and either one redraws the very same
  // wheel overlay, since the wheel itself is already on-screen in both views.
  // Populated fresh by every renderProgressions() call; activateProgressionByName()
  // (used by the genre-mode button click handler) looks a template up by name
  // here rather than querying the DOM, so it works identically whether the full
  // .prog-list or only the compact practice-mode list is currently visible.
  var lastProgPairs = [];
  function renderProgressions(list, templates, mode, k){
    var wrap = document.getElementById('progList');
    var wrapCompact = document.getElementById('progListCompact');
    wrap.innerHTML = '';
    wrapCompact.innerHTML = '';
    var pairs = [];
    lastProgPairs = pairs;
    var quality7Table = mode === 'major' ? QUALITY_7TH_MAJOR : QUALITY_7TH_MINOR;
    var activeGenreMode = state.chordMode;
    templates.forEach(function(t){
      var entries = t.idx.map(function(i){
        if(i === 'bVII') return borrowedFlat7Entry(k);
        return list[i];
      });
      if(t.harmonicV){
        // swap the minor v for major V for the harmonic-minor cadence (see the footnote below the wheel)
        var vPos = t.idx.indexOf(4);
        if(vPos > -1){
          entries = entries.slice();
          entries[vPos] = { note: list[4].note, quality: 'maj', chord: list[4].note, isSwappedDominant:true };
        }
      }
      // Displayed chord text respects whichever global genre mode is active,
      // same lookup renderChordFamily/renderChordDiagrams use above -- so e.g.
      // "12-bar blues (turnaround)" reads G-C-G-D under Plain but G7-C7-G7-D7
      // once Blues mode is on. The one exception is the harmonic-minor V swap:
      // that chord is ALWAYS a genuine major-quality dominant by construction
      // (that's the whole reason it's swapped in), so under Jazz or Blues it's
      // always dom7 -- looking its table entry up by degree index would wrongly
      // call a real major chord "min7" (that index's *natural* minor-key answer).
      var chordsText = entries.map(function(e, pos){
        var i = t.idx[pos];
        if(i === 'bVII') return e.chord; // borrowed flat-7 stays a plain major regardless of genre mode
        var gm;
        if(e.isSwappedDominant){
          if(activeGenreMode === 'jazz' || activeGenreMode === 'blues') gm = { quality:'dom7' };
          else if(activeGenreMode === 'punk') gm = { quality:'five' };
          else gm = null;
        } else {
          gm = genreModeQuality(activeGenreMode, i, e.quality === 'dim', quality7Table);
        }
        return gm ? nameForEmbellishment(e.note, gm.quality) : e.chord;
      }).join(' – ');

      var btn = document.createElement('button');
      btn.className = 'prog-btn';
      btn.type = 'button';
      btn.innerHTML = '<span class="p-name">'+t.name+'</span><span class="p-chords mono">'+chordsText+'</span>';

      var cbtn = document.createElement('button');
      cbtn.className = 'prog-btn-compact';
      cbtn.type = 'button';
      cbtn.title = t.name;
      cbtn.innerHTML = '<span class="pc-name">'+t.name+'</span><span class="pc-chords mono">'+chordsText+'</span>';

      var pair = { name: t.name, btn: btn, cbtn: cbtn };
      pairs.push(pair);
      function activate(){
        var wasActive = pair.btn.classList.contains('is-active');
        pairs.forEach(function(p){ p.btn.classList.remove('is-active'); p.cbtn.classList.remove('is-active'); });
        overlayG.innerHTML = '';
        if(!wasActive){
          pair.btn.classList.add('is-active');
          pair.cbtn.classList.add('is-active');
          drawProgressionPath(entries);
        }
      }
      pair.activate = activate;
      btn.addEventListener('click', activate);
      cbtn.addEventListener('click', activate);

      wrap.appendChild(btn);
      wrapCompact.appendChild(cbtn);
    });
  }
  function activateProgressionByName(name){
    var p = lastProgPairs.filter(function(p){ return p.name === name; })[0];
    if(p) p.activate();
  }

  function drawProgressionPath(entries){
    // The wedge's chord-name label and key-signature text both sit exactly on the
    // wedge's mid-angle (see labelPos/sigPos above) — so a path marker placed there
    // sits directly on top of the chord name, hiding the very thing you need to
    // read. Push each marker off to one side of the wedge (still well clear of the
    // 30°-wide wedge's own boundary) so the letter stays visible underneath.
    var PATH_ANGLE_OFFSET = -9;
    var visitCounts = {};
    // Marker circles are r=11 (plus a 2px halo stroke), so two of them need their
    // centers roughly 28+ units apart to read as separate dots rather than one
    // blob swallowing the other's number. Alternate the repeat nudge in and out
    // from the base radius (rather than only outward) so it stays centered on
    // the wedge and doesn't march a 3rd/4th revisit past the ring's outer edge.
    function revisitNudge(visit){
      if(visit === 0) return 0;
      var mag = Math.min(Math.ceil(visit/2) * 30, 40);
      return (visit % 2 === 1) ? mag : -mag;
    }
    var pts = entries.map(function(e){
      var pc = noteToPc(e.note);
      var ring = (e.quality === 'min') ? 'minor' : 'major'; // maj and dim roots both live on the outer ring
      var i = ring === 'major' ? outerIndexForPc(pc) : innerIndexForPc(pc);
      var baseR = ring === 'major' ? (R_OUT_IN+R_OUT_OUT)/2 : (R_IN_IN+R_IN_OUT)/2;
      // A progression that revisits the same wedge (e.g. the I in a I-IV-I-V
      // turnaround) nudges the radius so the repeat stops don't land on top of
      // each other -- or, worse, on top of the first stop's marker.
      var visitKey = ring + i;
      var visit = visitCounts[visitKey] || 0;
      visitCounts[visitKey] = visit + 1;
      return toXY(baseR + revisitNudge(visit), i*30 + PATH_ANGLE_OFFSET);
    });

    // Ink (not the brass accent) so the path never blends into an amber-highlighted
    // root wedge; a thin surface-colored halo around each dot keeps it crisp against
    // whichever wedge color (selected/neighbor/relative) it happens to land on.
    var defs = el('defs', {});
    var marker = el('marker', {id:'arrowhead', markerWidth:'8', markerHeight:'8', refX:'6', refY:'3', orient:'auto'});
    var arrow = el('path', {d:'M0,0 L6,3 L0,6 Z', fill:'var(--ink)'});
    marker.appendChild(arrow);
    defs.appendChild(marker);
    overlayG.appendChild(defs);

    for(var i=0;i<pts.length-1;i++){
      var line = el('line', {
        x1:pts[i].x, y1:pts[i].y, x2:pts[i+1].x, y2:pts[i+1].y,
        stroke:'var(--ink)', 'stroke-width':2.5, 'marker-end':'url(#arrowhead)', opacity:0.85
      });
      overlayG.appendChild(line);
    }
    pts.forEach(function(p, i){
      var c = el('circle', {cx:p.x, cy:p.y, r:11, fill:'var(--ink)', stroke:'var(--surface)', 'stroke-width':2});
      overlayG.appendChild(c);
      var t = el('text', {x:p.x, y:p.y, fill:'var(--bg)', 'text-anchor':'middle', 'dominant-baseline':'middle', 'font-size':11, 'font-family':'IBM Plex Mono, monospace', 'font-weight':600});
      t.textContent = i+1;
      overlayG.appendChild(t);
    });
  }

  function renderGuitarTip(pc, shapes, label, mode){
    var box = document.getElementById('guitarTip');
    if(currentTuningKey !== 'standard'){
      box.innerHTML = 'Capo suggestions are worked out for standard tuning — in ' +
        tuningByKey(currentTuningKey).label + ' tuning, use the chord diagrams above instead.';
      return;
    }
    var capo = bestCapo(pc, shapes);
    if(capo && capo.fret === 0){
      box.innerHTML = '<b>Open position.</b> ' + label + ' uses fully open chord shapes — no capo needed.';
    } else if(capo){
      box.innerHTML = '<b>Capo ' + capo.fret + '.</b> Put a capo on fret ' + capo.fret + ' and play ' + capo.shape + '-shaped chords to sound in ' + label + ' without a single barre chord.';
    } else {
      box.innerHTML = 'This key sits far from the open shapes — barre chords, or a capo above fret 7, are the practical options.';
    }
  }

  function onWedgeClick(e){
    var target = e.target.closest ? e.target.closest('.wedge') : null;
    if(!target) return;
    state.ring = target.getAttribute('data-ring');
    state.index = parseInt(target.getAttribute('data-index'), 10);
    render();
  }

  document.getElementById('wheel').addEventListener('click', onWedgeClick);

  render();
})();
