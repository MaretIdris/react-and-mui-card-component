<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Goal](#goal)
- [Diagram](#diagram)
- [Wireframe](#wireframe)
- [Modify Theme in MUI](#modify-theme-in-mui)
- [How to style MUI components](#how-to-style-mui-components)
- [index.js](#indexjs)
- [App.js](#appjs)
- [Leave HTML `<select>` option blank](#leave-html-select-option-blank)
- [Is JSON a string?](#is-json-a-string)
- [DOM API](#dom-api)
- [Amend to previous commit](#amend-to-previous-commit)
- [Commit in Git](#commit-in-git)
- [Add hover effect on JSX](#add-hover-effect-on-jsx)
- [CSS Specificity](#css-specificity)
- [Owners of the images](#owners-of-the-images)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Goal

- Goal of this app is for me to learn how to project manage my work and how to
  create React components, pass data around and also how to use omnibox API.

# Diagram

1. Choose a location.
2. View a weather data for the chosen location.

- Option to type a location in the omnibox and correct weather data displays.

# Wireframe

- ![](public/images/wireframes2.jpg)

# Modify Theme in MUI

- [MUI documentation on Theming](https://material-ui.com/customization/theming/)
- [Default Theme all the options](https://material-ui.com/customization/default-theme/?expand-path=$.typography)
  - A caption is text that appears below an image. One of the smallest font
    sizes, may be used sparingly to annotate other visual elements.
  - Overline is one of the smallest font sizes, might be used to introduce a
    headline.
    - [Learn about Material Design type system](https://material.io/design/typography/the-type-system.html#type-scale)
- [How to override a style globally with CSS](https://v4-3-3.material-ui.com/customization/globals/#css):
  When the configuration variables aren't powerful enough, you can take
  advantage of the overrides key of the theme to potentially change every single
  style injected by Material-UI into the DOM. That's a really powerful feature.
- [How to override a style globally with Default props](https://v4-3-3.material-ui.com/customization/globals/#default-props):
  You can change the default props of all the Material-UI components. We expose
  a props key in the theme for this use case.

# How to style MUI components

1. Add all the MUI components (e.g. `<CardActionArea>`, `<CardMedia>`) to the
   React components.
2. Do **theme** level overrides (typography, spacing, globals, palette,
   breakpoints, z-index)
3. Add local styling to each component where needed.

# index.js

- `index.js` file inserts the React app, `App.js` file, to html. React's Shadow
  DOM selects the root element from the DOM API and inserts the React app in it.

```jsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

# App.js

- `App.js` is the first component. All components start with a capital letter .
  This is how the nested components come together with HTML.
  ![](public/images/app-nesting.jpg)

# Leave HTML `<select>` option blank

- [StackOverflow article: default select option as blank](https://stackoverflow.com/questions/8605516/default-select-option-as-blank)

# Is JSON a string?

- JSON is a **text-based data format** following JavaScript object syntax. JSON
  exists as a string — **useful when you want to transmit data across a
  network**.
- It needs to be converted to a native JavaScript object when you want to access
  the data.
- [MDN article on JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- You can include the same basic data types inside JSON as you can in a standard
  JavaScript object — strings, numbers, arrays, booleans, and other object
  literals.

# DOM API

- Browser and HTML and JS
- Whomever made the browser is providing the DOM API. Chrome browser makers make
  DOM for Chrome, Safari browser makers make the DOM API in Safari browser.
- DOM API is for me, the web developer, to interact with the browser from my JS
  files, which I link to my HTML. Browser will take my index.html file.
- I write HTML and I embed my JS link to my HTML. I then can get information
  about browser history, can access and manipulate the DOM elements and form
  data etc.
  [Read more here](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)

# Amend to previous commit

```
git add -A ; git commit --amend --no-edit ; git push -f

```

# Commit in Git

```
git add -A ; git commit -m  "Change Select component font" ; git push
```

# Add hover effect on JSX

- `onMouseOver={this.openDropdown}`

# CSS Specificity

- The more specific the styling, the higher priority it gets in CSS.
- Only use `!important` on page-specific CSS that overrides foreign CSS (from
  external libraries, like Bootstrap or normalize.css).
- [More on CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#How_is_specificity_calculated)

# Owners of the images

- [Mountain View image](https://unsplash.com/photos/WL5kcYYvFOU) by
  [Cameron Venti](https://unsplash.com/@ventiviews)
- [Sunnyvale image](https://unsplash.com/photos/-dUjtzo9h7Q) by
  [Roxann C](https://unsplash.com/@partyroxy)
- [Palo Alto image](https://unsplash.com/photos/QGbcc4Ckg6U) by
  [Emily Karakis](https://unsplash.com/@iemyoung)
