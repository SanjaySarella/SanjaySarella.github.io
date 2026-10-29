# Sanjay Sarella — Data Analytics Portfolio

A static personal portfolio focused on business experience and applied analytics with SQL, Excel, Tableau, Power BI, Python, forecasting, and machine learning.

## Structure

- `index.html`: the complete, semantic single-page portfolio.
- `styles.css`: responsive layout, warm neutral palette, and reduced-motion support.
- `script.js`: accessible mobile navigation and an email-draft contact form.
- `photo.jpg.jpeg`: the original portrait.
- `assets/Sanjay_Sarella_Resume.pdf`: a PDF exported from the supplied resume.
- `favicon.svg`: a small text-based site icon.

Sections: Home, About, Skills, Experience, Projects, Education, and Contact. Featured work appears in this order: Agentic Excel Analyst, Retail Sales Forecasting, and Customer Churn Decision Analysis. Federal Award Record Research appears as additional work. ORION is withheld until its analytical claims and outputs complete a separate validation review.

## Local preview

From the repository directory:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173` in a browser. This is plain HTML, CSS, and JavaScript: there are no application dependencies, package installation, bundling, or compilation steps. These files are also the production artifact served by GitHub Pages.

## Content maintenance

Keep role titles, education, dates, and project descriptions aligned with the current resume. Keep experimental metrics attached to their dataset and task. External demo availability is controlled by the individual applications; a demo link does not guarantee uptime. Replace the resume PDF when the resume changes.

## Contact behavior

The form opens a prefilled draft in the visitor's email application. It does not transmit or store a message and never claims that a message has been delivered. Visitors can also use the direct email link. Without JavaScript, the form is hidden and all direct contact links and section navigation remain available.

## Publishing

The public site is hosted at `https://sanjaysarella.github.io/`. Local edits do not publish themselves. Review changes before pushing to the branch configured for GitHub Pages.
