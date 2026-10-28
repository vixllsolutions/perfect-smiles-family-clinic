# Perfect Smiles Family Dental Care — Website

A responsive, static website for Perfect Smiles Family Dental Care in Nagarbhavi, Bengaluru. It is designed to work on GitHub Pages without a backend, build system, or JavaScript libraries.

## Files

- `index.html` — page content and structure
- `style.css` — responsive layout, visual styling, animations, and reduced-motion support
- `script.js` — mobile navigation, scroll reveals, gallery lightbox, and dynamic footer year
- `assets/` — six renamed clinic photos plus all 13 renamed patient-review screenshots, used by the page

## Preview locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. For a local web-server preview, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create or open your repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the complete `assets` folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose your publishing branch (commonly `main`) and the repository root (`/`), then save.
5. Wait for GitHub Pages to publish the site, then open the URL shown in Settings → Pages.

## Contact details included

- Main enquiry number: `+91 97413 66255`
- Alternate number listed on the clinic sign: `+91 94801 79480`
- WhatsApp: opens a chat to `+91 97413 66255`
- Directions: uses the Google Maps link supplied by the clinic website owner
- Address: Teacher's Layout, 223, Main Road, Teachers Colony, Nagarbhavi, Bengaluru, Karnataka 560072
- Listed timing: 9:30 AM–7:30 PM; Friday and Sunday by appointment only

Please confirm clinic hours and contact details before publishing if any have changed. The website uses the supplied clinic photos in its gallery; screenshots provided for background information are not used as website images. Patient-review content is displayed as short text excerpts based on the review screenshots supplied for this project, not as screenshot images.

## Editing

- To replace or add photos, put the new file(s) into `assets/` and update the matching image paths in `index.html`.
- To update services or text, edit `index.html`.
- To change colors and layout, edit the variables at the top of `style.css`.
- To update phone numbers, also check the `tel:` and `wa.me` links in `index.html`.

## Notes

The site is static. Call and WhatsApp links open apps on the visitor's device; the directions link opens Google Maps. No appointment booking form or patient-data collection is included.
