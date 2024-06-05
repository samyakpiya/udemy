## Section 1

### What are Web Components?

Web components are, simply put custom HTML elements with abstracted functionality. However, there's more to it. Web components are actually a broad term for a couple of specifications that are built into web browsers that make up that web component:

- Custom HTML Element: Register your own HTML tags
- Shadow DOM: Manage a separate DOM node tree for your HTML elements (including scoped CSS styles)
- Templates & Slots: Compose multiple native HTML elements and add JavaScript logic to create powerful widgets. Template defines the core structure of the custom element whereas slots expose entry points to pass dynamic content into our web component.
- HTML Imports (Not Continued): This was supposed to be a feature that lets you import HTML files into HTML files to avoid templates for the web components. But, this is not continued anymore as the industry moved in the direction where we use JavaScript in combination with modern build tools and JS modules to import and export.

### Why Web Components?

- Encapsulate Logic + UI

  - Easy to understand
  - Easy to maintain
  - Separation of concerns

- Reusable across page

  - Use it just like a normal HTML element
  - Don't worry about overlapping logic
  - Write logic + UI only once

- Reusable between Apps/Projects
  - Reuse core UI elements across projects
  - Publish as a package (via npm)

### Web Components vs Frameworks (Angular, React, Vue) vs Libraries (jQuery)

- Web Components

  - +Vanilla JavaScript, no external dependencies, no overhead, ship less code
  - +Easily reusable
  - -Increased complexity leading to steeper learning curve
  - -Nothing but components, e.g. no routing, parsing of url, and state management among others

- Frameworks

  - +More than just components (routing, state management)
  - +Clear set of rules (code structure, solve certain problems like form validation, state management, etc.) leading to cleaner code
  - -Increased complexity leading to steeper learning curve
  - -Components are not reusable in other frameworks

- jQuery and plugins
  - +Drop-in & ready to go
  - -Many imports
  - -Version conflicts
  - -Redundant code

## Section 2

### P20 - What are Web Components?

```html
<my-tooltip text="Extra Information">What?</my-tooltip>
```

Web components are custom HTML elements made up of several parts natively available in the browsers specification: custom elements, shadow DOM, templates and slots.

### P21 - Browser Support

Web components support all the major web browsers such as Chrome, Firefox, Safari, and Opera. For other browsers that might not already have support for it, we can use polyfills.

### P25 - Understanding the Custom Elements Lifecycle

1. `constructor()` -> is called when the custom element is created (not the same as adding the element to the DOM) -> useful for basic initializations.

2. `connectedCallback()` -> is called when the custom element is attached to the DOM -> useful for DOM initializations.

3. `disconnectedCallback()` -> is called when an element is detached from the DOM -> useful for cleanup work.

4. `attributeChangedCallback()` -> is called when an observed attribute is updated -> useful for updating data + DOM.

### P29 - Attributes vs Properties

Do not confuse HTML attributes with DOM object properties:

- Attributes are set in the HTML/DOM
- Object properties are set programatically on a JS object
- Attributes are often but not always linked to a property
- Attributes are not necessarily in sync with linked property
