## What are Web Components?

Web components are, simply put custom HTML elements with abstracted functionality. However, there's more to it. Web components are actually a broad term for a couple of specifications that are built into web browsers that make up that web component:

- Custom HTML Element: Register your own HTML tags
- Shadow DOM: Manage a separate DOM node tree for your HTML elements (including scoped CSS styles)
- Templates & Slots: Compose multiple native HTML elements and add JavaScript logic to create powerful widgets. Template defines the core structure of the custom element whereas slots expose entry points to pass dynamic content into our web component.
- HTML Imports (Not Continued): This was supposed to be a feature that lets you import HTML files into HTML files to avoid templates for the web components. But, this is not continued anymore as the industry moved in the direction where we use JavaScript in combination with modern build tools and JS modules to import and export.

## Why Web Components?

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

## Web Components vs Frameworks (Angular, React, Vue) vs Libraries (jQuery)

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