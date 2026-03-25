# Modification Log

This file records the changes made during the latest portfolio refinement pass across:

- `C:\Users\andre\OneDrive\Documents\Grades\data-analytics-portfolio`
- `C:\Users\andre\OneDrive\Documents\Grades\assignment-archive`

It is intended as a working record before commit.

## Public portfolio repo

Repo:

- `C:\Users\andre\OneDrive\Documents\Grades\data-analytics-portfolio`

### Homepage changes

File:

- `index.html`

Changes:

- Rewrote the hero copy to sound less stiff and less audit-like.
- Kept the privacy constraint clear without sounding defensive.
- Added a `Contact` section with:
  - GitHub profile link
  - a short invitation to discuss projects
- Added `Contact` to the main navigation.
- Rewrote featured project summaries to sound more natural and specific.
- Repositioned the homepage so the overall portfolio reads more clearly as:
  - healthcare-adjacent
  - operationally aware
  - KPI and performance focused
- Rewrote the hero summary to emphasise:
  - practical analysis
  - system thinking
  - decision-making
  - action from findings rather than description alone
- Rewrote the featured section intro so it points more clearly at:
  - healthcare relevance
  - operational performance
  - KPI-led analysis
- Adjusted shorter descriptive lines such as:
  - `A solid Year 3 build...` -> `A Year 3 build...`
  - `The cleanest BI piece...` -> `The clearest BI piece...`
- Reworded the EventEase card description so it reads more like a joined-up build and less like module commentary.
- Rewrote selected project card metadata so the portfolio signals stronger alignment with:
  - healthcare-facing digital roles
  - healthcare analytics
  - operational systems
  - KPI tracking
- Added an introductory line above the analytics section explaining that those projects show performance monitoring and translating findings into decisions rather than just chart creation.
- Rewrote the short analytics card summaries so they emphasise:
  - performance decisions
  - KPI reporting
  - downstream analysis
- Removed the more meta or defensive homepage lines, including:
  - the featured-projects explainer aimed at hiring managers
  - the privacy note in the contact card
  - the repository/footer explanation line
  - the contact sentence about talking through builds, trade-offs, and second-pass changes
- Replaced the homepage header from:
  - `Portfolio Selection`
  - `Selected software, data, and analytics work.`
  with:
  - `Andre Ramos`
  - `Software, data, and analytics projects.`
- Removed the extra HCI note on the homepage card so the case-study section reads more cleanly.

### MKD Pharmacies changes

Files:

- `projects/mkd-pharmacies/index.html`
- `projects/mkd-pharmacies/README.md`

Changes:

- Rewrote the hero subtext to make it more direct.
- Rewrote the overview paragraphs so they focus on:
  - customer browsing
  - admin stock control
  - transaction logic
  - system structure
- Kept the separation between search, order handling, user state, admin tools, and map behaviour clear.
- Kept the technical evidence section grounded in the actual code structure.
- Rephrased design and architecture wording to avoid sounding like report justification.
- Added an `Operational Value` section.
- Used that section to make the decision-making layer explicit:
  - stock accuracy treated as a control problem
  - transaction logic chosen to prevent overselling
  - branch-level ordering framed as an operational model rather than only a UI feature
- Strengthened the healthcare-role relevance by making stock visibility, access control, and failure-safe behaviour more explicit.
- Renamed `Portfolio Positioning` style framing to `Scope and Notes`.
- Reworded the final note so it explains the `react-leaflet` correction plainly.
- Fixed the README so it points to `index.html` instead of an old standalone file name.

### BEED EEG Classification changes

Files:

- `projects/beed-eeg-classification/index.html`
- `projects/beed-eeg-classification/README.md`

Changes:

- Rewrote the hero summary to make the ML framing clearer and less inflated.
- Reworked the overview so it emphasises:
  - baseline first
  - stronger model second
  - clear comparison
  - no overclaiming
- Repositioned the hero summary so it reads more clearly as healthcare-adjacent analysis rather than a clinical deployment claim.
- Replaced the earlier overview opening with a direct description of the supervised workflow and model comparison.
- Tightened the explanation of the correlation heatmap and modelling workflow.
- Added an `Operational Relevance` section.
- Used that section to make the decision-making layer explicit:
  - weak linear baseline meant a non-linear model was justified
  - strong in-dataset performance is not the same as deployment readiness
  - the workflow is relevant to healthcare analytics because it keeps limitations visible
- Renamed the reflective/meta section to `Scope and Notes`.
- Kept the limitation about in-dataset evaluation and lack of subject-wise validation visible.
- Fixed the README so it points to `index.html`.

### Warehouse Management System changes

Files:

- `projects/warehouse-management-system/index.html`
- `projects/warehouse-management-system/README.md`

Changes:

- Rewrote the hero summary to make it shorter and more natural.
- Rewrote the overview so it reads as a small working system rather than a database exercise.
- Rewrote the business value paragraph to focus on the combination of schema, tooling, and data exchange.
- Reworked the final section so it no longer sounds like an assessment comment.
- Removed the more negative trigger warning and replaced it with a simpler note that keeps focus on the strongest evidence:
  - schema
  - GUI
  - XML
  - BLOB storage
  - threading
- Fixed the README so it points to `index.html`.

### Web Application Development page changes

Files:

- `projects/web-applications/eventease.html`
- `projects/web-applications/bookfinder.html`

Changes to `eventease.html`:

- Rewrote the hero summary to read more naturally.
- Rewrote the overview to focus on the joined-up frontend, backend, database, and booking flow.
- Reworded the business value section so it sounds less like report evaluation.

Changes to `bookfinder.html`:

- Shortened the hero summary.
- Replaced `Portfolio Positioning` with `Scope and Notes`.
- Rewrote the final section so it presents BookFinder as smaller supporting evidence without sounding apologetic or overly self-aware.
- Kept the note explaining that the page is code-led because the bundled visuals were weak.

### Analytics project decision-layer changes

Files:

- `projects/analytics/excel-superstore.html`
- `projects/analytics/tableau-superstore.html`
- `projects/analytics/python-superstore.html`

Changes to `excel-superstore.html`:

- Rewrote the hero summary so it points more clearly to performance decisions, not just dashboard interactivity.
- Added a new `Decision Implications` section.
- Used that section to turn descriptive findings into actions, including:
  - mean vs median -> use median alongside totals in performance review
  - seasonal swing -> avoid stock or staffing decisions based on one monthly average
  - Technology profitability -> protect and grow the category
  - Furniture weakness -> review margin, pricing, discounting, or cost control
  - segment split -> do not treat Consumer and Home Office as one audience
- Rewrote `Business Value` so it focuses on separating volume from value and giving a manager something to act on.

Changes to `tableau-superstore.html`:

- Rewrote the hero summary so it states more clearly that Tableau added a stronger decision-making layer than the spreadsheet version.
- Added a new `Decision Implications` section.
- Used that section to turn findings into actions, including:
  - Technology -> strongest candidate for protection and growth
  - Furniture -> margin review rather than simple sales push
  - regional filters -> stop category decisions becoming too broad
  - KPI framing -> move from "what sold" to "where intervention is needed"
- Rewrote `Business Value` so the page reads more like KPI monitoring and operational review than chart display.
- Corrected the dashboard quote line to use plain ASCII quotes.

Changes to `python-superstore.html`:

- Rewrote the hero summary so it points to pre-reporting validation and KPI reliability.
- Added a new `Decision Implications` section.
- Used that section to explain:
  - when the dataset was sound enough to move from repair into interpretation
  - why spread and median matter when sales values vary heavily
  - why scripted checks improve repeatability before dashboards or modelling are refreshed
- Rewrote `Business Value` so it emphasises reliable reporting and workflow stability rather than generic maturity language.

### HCI case study README fix

File:

- `case-studies/solent-alumni-redesign/README.md`

Changes:

- Fixed the README so it points to `index.html` instead of the old standalone file name.

### Public repo cleanup

Changes:

- Removed the internal planning file `PORTFOLIO_NEXT_STEPS.md` from the public portfolio root so it does not sit in the site repo.
- Checked for stale references to old file names such as:
  - `mkd-pharmacies.html`
  - `beed-eeg-classification.html`
  - `warehouse-management-system.html`
  - `solent-alumni-redesign.html`
- Confirmed those stale references are no longer present in the public repo content.

## Private assignment archive

Repo:

- `C:\Users\andre\OneDrive\Documents\Grades\assignment-archive`

### Web Application Development archive cleanup

Folder:

- `Year 2/Web Application Development`

Changes:

- Created or populated `source-docs/`.
- Moved the EventEase source document into `source-docs/`.
- Moved the BookFinder brief text file into `source-docs/`.
- Removed the noisy EventEase `docx_extract` folder from `source-code/`.
- Left the useful implementation material intact in `source-code/`.

### Data Science archive repair

Folder:

- `Year 3/Data Science`

Changes:

- Confirmed `source-docs/` contains the source document:
  - `AE DATA Science - Copy.DOCX`
- Generated and restored `document_paragraphs.txt` from the Word XML extraction because that text file was missing from the archive.
- Confirmed the module now follows the intended archive pattern:
  - `source-docs/`
  - `source-code/`
  - `data/`
  - `images/`
  - `document_paragraphs.txt`

## Repo state at time of writing

### Public portfolio repo

Status:

- modified files are present and ready for review
- not yet committed in this pass
- not yet pushed in this pass

### Private archive repo

Status:

- cleanup and repair changes are present
- not yet committed in this pass
- not yet pushed in this pass

## Intent of this pass

The goal of these changes was to:

- make the wording sound less generic and less obviously AI-polished
- keep the public portfolio recruiter-friendly
- avoid exposing private coursework repositories
- tighten weak or overly academic phrasing
- keep the archive useful for private review without unnecessary clutter
