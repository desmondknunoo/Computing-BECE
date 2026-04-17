# BECE Computing Revision Site

Static revision website for Ghana BECE Computing, with the strongest coverage on Strand 3 and Strand 4.

## Deploy on Vercel

1. Push this folder to a Git repository.
2. Import the repository into Vercel.
3. Use the default static deployment.
4. Leave build settings empty if Vercel asks for a build command.
5. Deploy.

## Local Build

1. Run `npm install`.
2. Edit `src/site.js` when you need to change the shared browser script.
3. Run `npm run build` to regenerate `script.js`.

## Project Notes

- `index.html` is the landing page.
- `questions.html` contains the full question bank and answers.
- `documents.html` is the document hub for the syllabus and mock papers.
- `styles.css` and `script.js` are the shared site assets used by the pages.
- `src/site.js` is the editable source for the bundled shared script.
- Clarity is integrated through the `@microsoft/clarity` package and bundled into `script.js`.
- `view-*.html` pages provide dedicated embedded document viewers.
- `documents/` contains the deployed web copies of the PDFs and the DOCX render.
- `vercel.json` adds lightweight headers for deployment.
- `.vercelignore` keeps the original source files out of the public deployment while the web copies in `documents/` remain deployable.
