# Fifths for Guitar

An interactive circle of fifths for guitarists: chord families, capo suggestions,
progressions, lead-melody scales with fretboard diagrams, chord shape diagrams,
all 7 modes, alternate neck positions for both chords and scales, 9 guitar
tunings (Standard plus 8 alternates) that every chord and scale diagram updates
for automatically, a set of "try this instead" chord embellishment chips, four
genre-flavored chord-family modes (Plain/Folk, Jazz, Blues, Punk), and a
"capture a song idea" scratchpad for jotting down chord or note snippets while
you noodle, ready to export and hand to Claude (or anyone else) to help write
lyrics.

**Chord family sound — Plain/Folk, Jazz, Blues, Punk:** the buttons above the
chord family pick a whole-key genre sound, updating every chord's name and
diagram at once (this replaces the old single "+7ths" toggle). They're
mutually exclusive — picking one clears the others, since e.g. Jazz and Blues
disagree about what the I chord should be:

- **Plain/Folk** — plain triads, the default and the honest answer for folk,
  country, and most singer-songwriter writing (folk doesn't have one
  load-bearing embellishment the way the other three genres do).
- **Jazz** — every chord gets its diatonic 7th: maj7 on I/IV, min7 on
  ii/iii/vi, dom7 on V, m7♭5 on vii°. The classic jazz/bossa nova sound.
- **Blues** — dominant 7th on I, IV, and V *only*; ii/iii/vi/vii° are left as
  plain triads, since real blues barely touches them. I7 and IV7 are flagged
  as **borrowed** (dashed border, same visual language as the borrowed IV
  sus4 chip below) — a "correct" diatonic reading would call them maj7, but
  blues deliberately reaches past that for its grittier sound. V7 needs no
  such flag; it's already the natural diatonic answer. Also works on the
  minor ring (real "minor blues" gives i, iv, and v the same dominant-7
  treatment, even though the key itself is minor).
- **Punk** — every non-diminished chord becomes a stripped-down power chord
  (root + 5th, no 3rd) — raw and genre-defining for punk, metal, and hard
  rock. The diminished vii° is left alone; there's no clean power-chord
  version of a diminished triad.

Picking a genre mode also updates the **progressions list** below to match —
"12-bar blues (turnaround)" reads G–C–G–D under Plain but G7–C7–G7–D7 once
Blues mode is on — and auto-highlights that genre's signature progression
once (Blues → the new full 12-bar sequence, Jazz → the ii–V–I turnaround,
Punk → the "four chords" pop progression), without fighting you if you pick
a different one afterward or spin the wheel to a new key.

A per-chord embellishment chip (below) always overrides the global mode for
that one chord — clicking "sus2" on the I while Blues mode is on gives you
Gsus2, not a contradiction of both — which is also exactly how a real V7sus4
turnaround right before the V7 hits actually works.

**Chord embellishment chips:** every chord's diagram now has a row of small
pill chips underneath it — click one to swap that chord's diagram and name for
an embellished version (add9, maj7, sus2, sus4, 7/m7, m9, dom7, or 5/power
chord) and see a short caption on the mood or feel it brings. Click the same
chip again to revert to the plain chord. Which chips show up depends on the
chord's actual role in the key, not just whether it's major or minor:

- **I and IV** (the two "safe" major-role chords) offer add9, maj7, sus2, and
  sus4.
- **ii and vi** (safe minor-role chords) offer 7 (min7) and m9.
- **iii** offers only 7, not m9 — its diatonic 9th lands a half-step above the
  root rather than a full step, so a true m9 there would pull in a note
  outside the key. This is the one place a naive "minor chords get 7 and m9"
  rule would be wrong, so it's deliberately excluded here.
- **The true V chord** (only when it's actually functioning as the dominant)
  offers 7 (dom7) and sus4 — the classic tension-and-release pair.
- **Every** non-diminished chord also offers 5 (power chord).
- **IV's sus4 is marked "borrowed"** (dashed chip border, different caption)
  rather than shown as fully safe: its 4th-above-root lands on the key's flat
  7th rather than its natural 7th, so it's a common and intentional color
  (think Hendrix, the Beatles, general blues/Mixolydian flavor) but not
  strictly diatonic like I's or V's sus4.
- The diminished (vii°) chord gets no chips — a diminished triad has no
  perfect 5th for "sus4" or "5" to apply against, and its own color tone
  (m7♭5) is already available via Jazz mode above.

Every embellished voicing is worked out the same trustworthy way as
everything else here: brute-force checked to only ever sound real chord
tones with the root in the bass, never a hand-guessed shape.

**Tunings:** pick one from the dropdown in the top-right corner — Standard,
Double Drop D, Modal E, Modal D, DADGAD, Open G, Open Gsus4, Open C6, or the
Custom Crosby tuning (E B D G A D). Scale diagrams just work in any tuning, since
they're always placing real notes on real strings. Chords are worked out fresh
for each tuning too: every chord diagram is checked, brute-force, to only ever
sound real chord tones with the root present — never a hand-guessed shape.
Standard tuning keeps its familiar CAGED (E-shape/A-shape) voicings for the
original seven chord qualities; the embellishment qualities above and every
other tuning get their own voicings built from scratch. Capo suggestions are
worked out for standard tuning only, since they depend on matching standard
open-chord shapes — switch back to Standard to see them again.

**All 7 modes:** open "Modes" below the chord shapes to page through Ionian,
Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian, all built on your
selected key's own tonic (so "G Mixolydian" really starts and ends on G). Every
mode is spelled starting from the tonic's own letter, so it's never shown under
a different, confusing enharmonic name than the key you actually picked. Each
mode also gets a short description of the mood or feeling it tends to carry
(dreamy, bluesy, unstable, and so on) right next to its name.

**Alternate positions:** every chord diagram — including the diminished (vii°)
and half-diminished (m7♭5) chords — has more than one moveable shape and
shows a small ⇄ button in its top-right corner to flip between its E-shape and
A-shape voicing. Each scale/mode diagram has a "Position N of M" control next
to its name — click ‹ › to walk the same scale up the neck through every
position it naturally falls into, root-anchored position 1 through however
many more fit before the neck runs out (capped at fret 19, since that's the
highest fret most guitars actually have). Both choices are remembered as you
switch keys, so you can, say, practice the IV chord's A-shape barre voicing or
position 3 of the minor pentatonic across every key on the wheel. Embellishment
chip selections are remembered the same way, per scale degree.

**Note labels:** every dot on a scale/mode fretboard diagram is labeled with
its actual letter name (spelled the same way as the note chips above it), not
just a colored dot.

**Nut vs. fret:** the guitar's actual nut (the top edge of an open-position
diagram) is drawn as a bold solid bar, completely different from the thin
lines used for ordinary frets — there's no mistaking one for the other. A
diagram played up the neck (the little "Nfr" label) never draws that bar at
all, so its top line always reads as an ordinary fret, not the nut.

**Practice mode:** click the "Practice mode" button in the top-right corner for
a compact, single-screen view — just the wheel, chord shape diagrams, and scale
fretboard diagrams, sized to fit a MacBook or iPad screen with no scrolling.
Embellishment chips work here too, just shrunk down to match everything else;
the mood caption is capped at three lines rather than hidden, so a longer one
just clips instead of blowing out the layout. The genre-mode picker and the
idea-capture panel (collapsed by default, same as "Modes") both work here too
— exactly where you'd actually want to jot down an idea, mid-practice.
Modes are available too: open "Modes" and it swaps in for the two main scale
diagrams (there's only room for one pair at a time) rather than adding a third row. Switching
modes also shows a short "feel" phrase next to the mode's name (e.g. "F#
Mixolydian — bluesy, folk-rock") so you get a quick sense of its character
without leaving practice mode. A compact progressions list sits under the
wheel too, so you can swap between a key's chord progressions — the wheel's
progression-path overlay updates to match — without backing out of practice
mode. Click "Exit practice mode" to get everything else back.

**Capture a song idea:** open "🎵 Capture a song idea" below the chord shapes
while you're noodling. Every chord diagram gets a small ♪+ button (top-left
corner) — click one to add that exact chord, as currently displayed (genre
mode and any embellishment chip included), to the snippet you're building, in
the order you click them. Scale and mode note chips are clickable too, for a
short melodic idea (an intro lick, a solo phrase) alongside or instead of
chords. Tag the snippet with the song part it's for — the dropdown's options
reorder to match whichever genre mode is active (Blues leads with "Verse
(12-bar)," "Turnaround," and "Solo (12-bar)"; Jazz leads with "Melody / Head"
and "Solo"; nothing is ever hidden, just reordered to match what's actually
common), add an optional one-line note to yourself, and click "Save this
idea." Saved ideas can be edited (reloads them back into the builder to
tweak) or deleted. When you're done, "Export all ideas as text" produces a
clean, plain-text summary — key, genre feel, and each idea's part/chords/
notes/comment — with a "Copy to clipboard" button, ready to paste straight
into a conversation with Claude (or anywhere else) to start writing lyrics
together. Nothing here needs an API key, and nothing persists between page
loads — it's a scratchpad for one sitting, not a saved project.

## Running it

This is a plain static site — no build step, no server-side code, no dependencies
to install. Two ways to open it:

**Simplest:** double-click `index.html` (or drag it into a browser window). Every
feature works straight from disk.

**As a local website** (if you'd rather load it via `http://localhost` than
`file://`): from this folder, run one of these and then visit the printed
address in your browser.

```
python3 -m http.server 8000
```
or, if you have Node installed:
```
npx serve .
```

## Files

- `index.html` — page structure and content
- `styles.css` — all visual styling (light/dark mode included, follows your
  system theme automatically)
- `script.js` — all interactivity: the wheel, chord/scale data, fretboard and
  chord-diagram drawing, the embellishment-chip logic, the genre-mode picker,
  the idea-capture panel, and the modes toggle

## Notes

- The two fonts (Fraunces and IBM Plex Mono, plus Karla) load from Google Fonts
  over the network. With no internet connection the page still works fully —
  it just falls back to your system's default fonts instead.
- Everything else is fully self-contained; no other network calls are made.
- **Fixed:** in alternate tunings with few distinct open-string pitches (Modal E and
  Modal D especially, since most of their strings share one open note), the chord
  diagram could show an incomplete voicing (e.g. a minor chord missing its own 3rd,
  reading as a bare power chord) even though a full, correct voicing existed a bit
  further up the neck — the search was finding it but not always surfacing it as the
  primary or alternate (⇄) shape. It now always shows the most complete voicing it
  can find first. Verified by brute-force checking every chord quality on every root
  in all 9 tunings.
