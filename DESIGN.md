---
name: Yiwen Li Portfolio
description: An instructional designer's storyboard sheet; numbered frames, design notes beside the screen, measurement highlighted.
colors:
  paper: "#ffffff"
  desk: "#e7eaf4"
  ink: "#111111"
  ink-soft: "#4a4d57"
  rule: "#111111"
  rule-faint: "#d5d8e2"
  cobalt: "#2140d6"
  cobalt-ink: "#ffffff"
  cobalt-soft: "#c9d2ff"
  hl: "#ffe44d"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 11vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "\"wdth\" 112"
  frame-number:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 5.4vw, 5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\" 1"
    fontVariation: "\"wdth\" 125"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 5.25rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 108"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 104"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  pad: "2rem"
  pad-lg: "3.5rem"
  num-col: "9.5rem"
  notes-col: "22rem"
  sheet-max: "90rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.15rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.15rem"
    height: "3rem"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  frame-number:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
    typography: "{typography.frame-number}"
    width: "{spacing.num-col}"
  frame-number-measure:
    backgroundColor: "{colors.hl}"
    textColor: "{colors.ink}"
    typography: "{typography.frame-number}"
    width: "{spacing.num-col}"
  note:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "1.1rem 2rem"
  note-measure:
    backgroundColor: "{colors.hl}"
    textColor: "{colors.ink}"
    padding: "1.1rem 2rem"
  titleblock-name:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
    rounded: "{rounded.none}"
  nav-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "3.25rem"
  nav-cell-hover:
    backgroundColor: "{colors.desk}"
    textColor: "{colors.ink}"
  frame-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  sheet-foot:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
    padding: "3.5rem 2rem"
---

# Design System: Yiwen Li Portfolio

## Overview

**Creative North Star: "The Storyboard Sheet"**

Every page is a production sheet from an instructional designer's storyboard: a white sheet ruled in solid ink, set on a pale cobalt-gray desk, divided into numbered frames. Each frame has three columns: a frame-number column on the left, the "screen" (the actual content) in the middle, and the designer's notes on the right. The site header is the sheet's title block; the footer is its cobalt base strip.

The world is flat, square and ruled. Hierarchy comes from Archivo's width and weight axes, from two rule weights, and from one structural color. A second color, highlighter yellow, carries meaning rather than decoration: it marks anything about measurement and evaluation, which is the candidate's edge. Motion is hard cuts, with one exception: a highlighter sweep across measurement rows as they enter view.

Density is generous inside frames and tight at the rules. Content lives in cells; nothing floats.

**Key Characteristics:**
- White sheet, ink rules (1px inside, 3px at sheet and frame edges), pale cobalt-gray desk behind it.
- Numbered frames with a number column, a screen, and a notes column.
- Cobalt for structure only; yellow for measurement only.
- One family (Archivo variable); width and weight carry the hierarchy.
- Square corners, no elevation, rectangular ink buttons.
- Hard cuts; the highlighter sweep is the only entrance animation.

## Colors

A near-monochrome ink-on-paper sheet with one structural blue and one meaningful yellow.

### Primary
- **Storyboard Cobalt** (`cobalt`): structure only. The title block's name cell, frame-number columns, the footer strip, the active-nav underbar, field labels in notes and readouts, frame-index numbers, link underlines, focus rings and text selection. White on cobalt is 6.9:1.
- **Cobalt Wash Text** (`cobalt-soft`): secondary text that sits on cobalt (the role line under the name, the "Frame" label and caption in number columns, footer note). 5.3:1 on cobalt; never use it on white.

### Secondary
- **Highlighter Yellow** (`hl`): measurement and evaluation content only. The "How I'd measure it" note, measurement lines in lists, and (unconfirmed, see below) the number column of an evaluation frame. Text on yellow is always `ink`.

### Neutral
- **Sheet White** (`paper`): the sheet surface and every content cell.
- **Desk Gray-Blue** (`desk`): the page background behind the sheet, and the hover fill for nav and frame-index cells.
- **Ink** (`ink`, `rule`): body text, headings, all solid rules, primary buttons and the sticky frame bar.
- **Soft Ink** (`ink-soft`): secondary text on white (meta lines, captions, muted list text, read frames in the index). 8.3:1 on white.
- **Faint Rule** (`rule-faint`): dividers between rows inside a list, readout or evaluation table, where a full ink rule would be too loud. Never used for frame or sheet edges.

### Named Rules
**The Structure-Only Cobalt Rule.** Cobalt marks the sheet's structure (title block, frame numbers, footer, field labels, focus). It is never a content background, never a decorative block, never a heading color.

**The Highlighter Means Measurement Rule.** Yellow appears only on content about evaluation or measurement. If the text isn't about how something is measured, it doesn't get yellow. Text on yellow is always ink.

**The Yellow Number Column (unconfirmed).** A frame whose subject is evaluation (the case-study "Evaluation plan" frame, the résumé "Research and evaluation" frame) takes a yellow number column with ink text instead of cobalt. This was recorded by the builder at finish review and has not yet been confirmed by the site owner. Use it only for frames whose whole subject is evaluation; cobalt remains the default. Treat it as provisional until confirmed.

## Typography

**Display Font:** Archivo variable (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo variable, normal width
**Label/Mono Font:** Archivo; tabular numerals for numbers and readouts

**Character:** One grotesque family stretched and weighted like storyboard lettering: expanded black for frame numbers, heavy slightly-wide for display, normal width for reading.

### Hierarchy
- **Display** (900, expanded 112%, home name only): the person's name in Frame 01 of the home page. One per site.
- **Frame number** (900, fully expanded 125%, tabular): the big "01", "02" in number columns. Shrinks to 1.5rem inline on phones; compact frames use a smaller desktop size (clamp(2.5rem, 3.6vw, 3.25rem)).
- **Headline** (850, 108%): the page title (h1) in the sheet head of every inner page.
- **Title** (800, 104%): each frame's heading (h2). Featured frames go larger (clamp(2rem, 4.4vw, 3.5rem)); compact frames go smaller (clamp(1.4rem, 2.4vw, 1.9rem)). Résumé entry headings (h3) are 1.2rem at 750.
- **Lede** (400, 44ch max): the one-sentence summary under a title. The big lede on the home intro is 450 weight, clamp(1.3rem, 2.4vw, 1.875rem), 28ch.
- **Body** (400, 68ch max for paragraphs, 72ch for lists): all reading text.
- **Label** (700, 0.1em tracking, uppercase): field labels only (see the rule below).

### Named Rules
**The One Family Rule.** Archivo is the only typeface. Make hierarchy with weight and the width axis (`font-stretch`), not by adding fonts.

**The Field Label Rule.** Small uppercase labels name a field on the sheet: a note's term (Objective, Design note), a readout key, the "Status" cell, the "Frame" label next to a number, the frame-index heading. They belong to a cell. Never put a small uppercase label above a headline as a tagline.

**The Tabular Numbers Rule.** Frame numbers, the frame bar counter, readouts and résumé date lines use tabular numerals so columns of numbers align.

## Layout

The sheet is a single column on phones and becomes a three-column frame grid at 64rem: number column (`num-col`), screen (flexible), notes column (`notes-col`). At 80rem the columns widen to 11rem and 26rem. Wide frames (`frame--wide`) drop the notes column and give the screen the space.

The title block is aligned to the same columns: on desktop its rules line up with the number column, the screen and the notes column below, and the Status cell sits directly over the notes column. Inner-page sheet heads indent their title by the number-column width so the title starts where frame content starts.

Padding steps with the viewport: `pad` / `pad-lg` are 1.25rem / 1.25rem on phones, 1.75rem / 2.5rem from 48rem, and 2rem / 3.5rem from 64rem (the values in the frontmatter). Below 64rem the sheet is full-bleed; from 64rem it sits on the desk with a 2rem margin and a 3px ink edge, max width 86rem.

Breakpoints: 48rem (tablet: title block becomes a 4-cell grid; readouts and evaluation tables go two-column; galleries go two-up), 64rem (desktop: frame columns, sheet on desk), 80rem (wider number and notes columns).

## Elevation & Depth

The sheet is flat. There are no elevation shadows and no blur. Depth is the sheet on the desk: white paper, a 3px ink edge, a pale gray-blue background. `box-shadow` appears only as flat ink devices with zero blur: the 5px cobalt bar under the current nav item (inset), and the 0.5rem yellow overhang that lets a measurement line's highlight bleed past its column.

### Named Rules
**The Flat Sheet Rule.** Nothing lifts off the sheet. No drop shadows, no hover lift, no glass. If something needs emphasis, give it a rule, a cell, or a color role.

## Shapes

Square everywhere (`rounded.none`). Two rule weights do all the drawing: 1px ink rules between cells inside a frame, 3px ink rules at sheet edges, under the title block, under the sheet head and between frames. Faint 1px rules separate rows within lists and tables. The only dashed line is placeholder scaffolding. The one non-rectangular mark is the small square "read" marker in the frame index.

### Named Rules
**The Two Weights Rule.** 1px inside a frame, 3px at its edges. Don't introduce a third weight; use the faint rule for quieter dividers.

## Components

### Buttons
Rectangular ink blocks, confident and plain.
- **Shape:** square corners, 2px ink border, 3rem minimum height.
- **Primary:** ink fill, white text, 700 weight. Hover turns it cobalt (fill and border).
- **Secondary:** white fill, ink text, same border. Hover inverts it to ink fill.
- **Arrow:** buttons that go somewhere end with the inline SVG arrow, which nudges 3px right on hover.
- **Focus:** 3px cobalt outline, 3px offset (site-wide).
- Buttons sit in an actions row with 0.75rem gaps. Use at most one primary per frame.

### Links
Ink text with a 2px cobalt underline; hover turns the text cobalt. On the footer, links are white with a cobalt-soft underline. The contact page's big link is title-sized with a 3px underline.

### Navigation (title block)
- **Name cell:** cobalt, with the name in white (800, 112% width) and the role in cobalt-soft beneath.
- **Status cell:** a "Status" field label in cobalt over a bold one-line status.
- **Nav cells:** four equal ruled cells, ink text at 650. Hover fills with desk gray-blue. The current page gets a 5px cobalt bar along the bottom inside the cell.
- On phones the nav is a four-cell row under the name; from 64rem it aligns to the frame columns.

### Frame (signature component)
The unit every page is built from.
- **Number column:** cobalt with "Frame" label, the big number and an optional caption, all sticky on desktop as you scroll the frame.
- **Screen:** the content (title, lede, paragraphs, lists, media, actions).
- **Notes column:** a stack of ruled notes, each a field label over a short sentence. One note per frame may be the yellow "How I'd measure it" note.
- **Variants:** featured (larger title, room for media), compact (smaller number and title, tighter padding), wide (no notes column), measure (yellow number column; unconfirmed).

**How to add a frame.** Copy an existing `<section class="frame">` from the same page and change three things: the number (in both `data-frame` and the `frame__n` span), the caption (`data-caption` and, if shown, the `frame__caption` span), and the content. Keep frames numbered in order with two digits (01, 02...). If the frame has no notes, add `frame--wide` and delete the `<aside>`. On case studies, also give it an `id`, add a matching link to the frame index, and update the total in the frame bar ("/ 13").

### Notes
Ruled cells with a cobalt uppercase term and a 1rem sentence. The measurement note (`note--measure`) is yellow with an ink term and sweeps in once as it enters view.

### Readouts and tables
Key/value rows: a cobalt field label on the left (7.5rem), the value on the right, faint rules between rows, tabular numerals. The evaluation table uses a bold ink term in an 8rem column with the same ruling.

### Case-study frame bar and frame index
- **Frame bar:** a sticky ink strip reading "Frame 05 / 13" plus the current caption.
- **Frame index:** a ruled grid of cells, each with a cobalt expanded number and the frame's name. Read frames turn soft ink and get a small cobalt square; the current frame fills cobalt.

### Footer
The cobalt base strip of the sheet: the name in 900 expanded, a row of white links, and a cobalt-soft note line.

## Do's and Don'ts

### Do:
- **Do** keep cobalt on structure: title block, number columns, footer, field labels, focus.
- **Do** use yellow only for content about measurement or evaluation, with ink text on it.
- **Do** build every new section as a numbered frame with a number column, a screen and (optionally) notes.
- **Do** use 1px ink rules inside frames and 3px at edges; use the faint rule for rows within a list or table.
- **Do** make hierarchy with Archivo's weight and width; use tabular numerals for numbers.
- **Do** keep paragraphs within 68ch and lists within 72ch.
- **Do** keep the 3px cobalt focus outline visible on everything interactive.

### Don't:
- **Don't** round corners or add drop shadows; the sheet is square and flat.
- **Don't** use cobalt as a content background or decorative block, or yellow for emphasis that isn't about measurement.
- **Don't** add a second typeface.
- **Don't** put a small uppercase label above a headline; uppercase labels only name a field in a cell.
- **Don't** use cobalt-soft text on white; it is only for text on cobalt.
- **Don't** add entrance animations; motion is hard cuts plus the one highlighter sweep, and all of it stops under reduced motion.
- **Don't** treat the dashed `[[...]]` placeholder style as part of the design; it is scaffolding to delete when content is final.
