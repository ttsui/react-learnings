Type of object to pass to React.setState() should be Pick<ComponentState, "key">. E.g. 
```
  interface AppState {
    name: string;
  }
  
  const newState: Pick<AppState, "name">  = { name: "John" };
  this.setState(newState);
```

Type signature for computed property object
```
  const formChange = <F extends keyof AppState>(field: F, value: string) => {
    const newState: Pick<AppState, F> = { [field]: value };
    this.setState(newState);
  };
```