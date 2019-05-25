* Was hooks was encouraging me to pass method to alter state into a presentational component?
* TypeScript is amazing to be able to define a language for adding types to objects with arbitary keys. E.g.
  the type declaration of `onChange: <K extends keyof Address>(field: K, value: string) => void;`  means `field` must
  be a key in the interface `Address` enabling type checking on `onChange("suburb", value);`. TypeScript will show type
  error if field is not a key of `Addresss`, e.g. ` onChange("xxx", value);`.
* TODO: how do I apply generics to values types
