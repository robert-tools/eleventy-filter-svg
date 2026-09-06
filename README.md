# 🗂️ @robert.tools/eleventy-filter-svg

Makes an svg image inline.

## 📜 Usage

### 🟢 Installation

```bash
npm install @robert.tools/eleventy-filter-svg
```

### 📝 Sample usage

```typescript
import svg from '@robert.tools/eleventy-filter-svg';
```
## 📜 Usage

```nunjucks
{{ 'file.svg' | svg }} {# get svg from current folder or assets folder #}
{{ 'file.svg' | svg([100, 200]) }} {# get svg with specified dimensions #}
{{ 'file.svg' | svg(100) }} {# get svg with single dimension (width==height) #}
{{ 'file.svg' | svg(100, 'my-css-class', { ariaHidden: true }) }} {# get svg with a CSS class and additional attributes #}
```

## 🗃️ commands
After an npm install with `npm i` the following commands are available:
* initialize placeholders: `npm run init <semantic>`
* release a new version: `npm run release <semantic>`


## ⚖️ Notes
This software is hand-crafted, test-driven and assisted by AI tools. I know each line of my code. ✌️


| Tool  | Comment |
 | ------------- | ------------- |
| <img src="https://img.shields.io/badge/Jest-TDD-008800?logo=jest" alt="assisted by Jest" />  | Test-driven development with Jest |
| <img src="https://img.shields.io/badge/robert.tools-ecosystem-008800" alt="assisted by robert.tools" />  | Part of the robert.tools ecosystem |
| <img src="https://img.shields.io/badge/GitHub_Copilot-assisted-8A2BE2?logo=githubcopilot" alt="assisted by GitHub Copilot" />   | Code completion |
| <img src="https://img.shields.io/badge/OpenAI-assisted-8A2BE2?logo=openaigym" alt="assisted by OpenAI" />  | chatGPT research |