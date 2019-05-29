* Was hooks was encouraging me to pass method to alter state into a presentational component?

* TypeScript is amazing to be able to define a language for adding types to objects with arbitary keys. E.g.
  the type declaration of `onChange: <K extends keyof Address>(field: K, value: string) => void;`  means `field` must
  be a key in the interface `Address` enabling type checking on `onChange("suburb", value);`. TypeScript will show type
  error if field is not a key of `Addresss`, e.g. ` onChange("xxx", value);`.

* TODO: how do I apply generics to values types

* This list of DOM events from dom-testing-library is very nice https://github.com/testing-library/dom-testing-library/blob/master/src/events.js

* For some reason HTMLFieldSetElement.elements isn't defined in this jsdom. Looks like I'm using the correct version
```bash
    $ grep version node_modules/jsdom/package.json 
      "version": "14.1.0",
```
- Let's delete `node_modules/jsdom` to verify this is version used.
- Aha! Test still runs. Someone must be pulling in old version of jsdom as yarn.lock has entry for `jsdom@^11.5.1:`
- Cool yarn has a command to show dependency tree
```
  $ yarn why jsdom
  ...
  => Found "jest-environment-jsdom#jsdom@11.12.0"
  info This module exists because "react-scripts#jest#jest-cli#jest-config#jest-environment-jsdom" depends on it.
```
- Looks like jest-environment-jsdom is stuck on jsdom 11.12 https://github.com/facebook/jest/issues/7926
- Okay looks like I can install an alternative jest-environment-jsdom
- Bah! Looks like I can't use alternative 
```
  package.json
  "jest": {
    "testEnvironment": "jest-environment-jsdom-fourteen"
  }
  
These options in your package.json Jest configuration are not currently supported by Create React App:

  • testEnvironment
```
- Actullay jest-environment-jsdom-fourteen was already included as dep of create-react-app. To enable it I need to use
the `--env=jest-environment-jsdom-fourteen`. I need to add this to IntelliJ Jest run configurations well. 
```
    "test": "react-scripts test --env=jest-environment-jsdom-fourteen",
```
- Can't use jest.config.js either. Looks like it's ignored.
* *LEARNING:* `String.replace()` only replaces first match if match parameter is a string. Use RegExp match with 
global flag to replace all ocurrances.
```
> "1 2 3".replace(" ", "-")
'1-2 3'
> "1 2 3".replace(/ /g, "-")
'1-2-3'
```

* LEARNING - Testing: react-test-renderer to quite useful testing onChange handlers as it allows an easy way to get the
on change handler.
Example:
```javascript 1.8
  const testRenderer = TestRenderer.create(<BusinessCardForm {...businessCard} onChange={handleChange} />);
  const testInstance = testRenderer.root;

  testInstance.findAllByType(TextField).forEach((field: any) => {
    field.props.onChange(`A ${field.props.label} value`.toLowerCase());
  });
```


