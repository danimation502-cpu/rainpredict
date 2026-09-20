# Rainfall Prediction for Districts of Nepal — Frontend

## Files
- `index.html` — Home / landing page
- `prediction.html` — Prediction input UI + result placeholder
- `faq.html` — FAQ accordion
- `contact.html` — Contact section
- `style.css` — All styling, responsive layout and animations
- `script.js` — UI-only interactions
- `images/` — Replaceable demo image directory

## Demo prediction image paths
Use these paths when connecting your Python result:
- `images/no-rain.png`
- `images/very-low-rain.png`
- `images/low-rain.png`
- `images/moderate-rain.png`
- `images/high-rain.png`
- `images/very-high-rain.png`

## Rainfall categories
- 0 mm — No Rainfall
- 0.1–2.4 mm — Very Low Rainfall
- 2.5–7.5 mm — Low Rainfall
- 7.6–35.5 mm — Moderate Rainfall
- 35.6–64.4 mm — High Rainfall
- >=64.5 mm — Very High Rainfall

## Python integration point
`prediction.html` contains a commented result-card structure. The `Predict Rainfall` button currently only scrolls to the result area. Replace that event in `script.js` with your Python/API call and populate the result card with:
1. predicted precipitation (mm)
2. category
3. environmental-awareness message
4. matching image from `images/`

No machine-learning/prediction logic is included.
