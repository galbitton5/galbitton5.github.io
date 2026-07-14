# Research content — how to edit

The Research page is organized into tabs. Each tab is a folder here. Each paper is one Markdown file.

This folder lives at `_pages/_research/` (Jekyll requires the leading `_` for collections). The tab list is defined in `tabs.yml` in this same folder.

## Add a paper

1. Open the folder for the tab you want (e.g. `political-economy/`).
2. **Copy an existing paper file** in that folder.
3. Rename the new file.
4. Edit only what you need:
   - `order` — position in the list (use the next number, or a number in between to insert among existing papers)
   - the title in `project-title`
   - links (if any) in `project-links`
   - the abstract inside `abstract`
5. Save. After build / publish, the paper appears in that tab.

### Section heading (optional)

To show a heading above a group of papers (as on the original page), add this at the top of the file, before the `<div class="project">`:

```markdown
My Section Title
----
```

Usually only on the first paper in that group.

## Move a paper to another tab

Move the file into the other tab’s folder. Update `order` there if needed.

## Add a new tab

1. Create a new folder under `_pages/_research/`, for example:

   `comparative-politics/`

2. In [`tabs.yml`](tabs.yml) (this folder), add the tab. Then copy the same change into [`_data/research_tabs.yml`](../../_data/research_tabs.yml) — GitHub Pages only auto-loads YAML from `_data/`.

```yaml
- id: comparative-politics
  label: Comparative Politics
```

- `id` must match the folder name **exactly**
- `label` is the text shown on the tab button

3. Add papers to the new folder (copy an existing file and edit it).

## Leave these alone for day-to-day edits

- [`../research.md`](../research.md) — tabs UI, styling, and JS
- files here — paper content and `tabs.yml` only
