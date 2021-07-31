# Coding Style Guide

## Folder Layout

- Images to be put in `./src/assets/images` and css in `./src/assets/css`.

## File Layout

1. Imports
2. Reusable components needed for the main component
3. Main component (Eg: Addons in addons.js)
4. `export default MainComponent;`

- Use `mylog` function instead of console.log!

## Reusable components

- Do not make a new file for smaller components.
- Smaller, reusable components needed in the main components should be added **above** the main component, **not** inside it.

## Spacing

1. **CSS:**

   - Use as little custom css as possible.
   - Use bootstrap classnames instead of creating your own.
   - Make sure your classnames are unique and dont affect any other part of app.
   - Take primary/secondary/muted etc color from bootstrap instead of putting their values manually.

   ```css
   /* bad */
   .myclass {
     color: #bcbcbc;
   }

   /* good */
   .myclass {
     color: var(--muted);
   }
   ```

2. **Images:**

   Put images in the `src/assets/images/<module>` folder and add it in `utils/getIcons` and use from there.

3. **New Components:**

   Put new components in `src/components/<module>/<component>.js` file.

4. **New Pages:**

   Put new pages in `src/pages/<page>.js` file. If the page is at a sub path eg. `/group/scrum` it should be in `src/pages/group/Scrum.js`.

   The structure of `src/pages` folder should mimic the routes available.

5. **JS:**

   - Use a space after `if`, `for`, `while`, `switch`.
   - Do not use a space after the opening `(` and before the closing `)`.
   - Use a space before and after destructuring objects.

   ```js
   //good
   const { apple, mangoes } = fruits;

   //bad
   const { apple, mangoes } = fruits;

   //Same for destructuring props:
   //good
   const BeautifulComponent = ({ prop1, prop2 }) => {};

   //bad
   const UglyComponent = ({ prop1, prop2 }) => {};
   ```

6. **JSX:**

   - Use a space before the forward slash (`/`) of a self-closing tag

   ```js
   //good
   <Foo />

   //bad
   <Foo/>
   ```

   - Do **not** use spaces for JSX curly braces

   ```js
   //good
   <Foo bar={baz} />

   //bad
   <Foo bar={ baz } />
   ```

   ## **Props:**

- Use camelCase for prop names, or PascalCase if the prop value is a React component.
- Use new lines when props do not fit on the same line.

  ```js
  //good
  <Foo
      prop1={value1}
      prop2={value2}
      prop3={value3}
  />

  //bad
  <Foo prop1={value1} prop2={value2} prop3={value3} />
  ```
