// UGLY HACK
// This is a hack to make sure that the console logs are printed in the
// terminal when running the app in development mode. This is needed
// because somehow babel/metro combination swallows logs when loading
// @babel/plugin-proposal-class-properties
// See this issue for more details: https://github.com/facebook/metro/issues/877
// THIS FILE SHOULDN'T EXIST BUT IT DOES BECAUSE I WAS NOT ABLE TO FIX IT 🤷
// If you have a better solution, please fix it and remove this file.

if (__DEV__) {
  const primitiveTypes = ["string", "number", "boolean"];
  const logLevels = ["log", "debug", "info", "warn", "error"];

  // @ts-ignore
  const transformArgs = (args) => {
    // @ts-ignore
    return args.map((arg) => {
      if (arg === undefined) return "undefined";
      if (arg instanceof Error) {
        if (arg.stack) return arg.stack;
        return arg.toString();
      }
      if (arg instanceof Date) return arg.toString();
      if (primitiveTypes.includes(typeof arg)) {
        return arg.toString();
      } else {
        return JSON.stringify(arg);
      }
    });
  };

  const consoleProxy = new Proxy(console, {
    get: (target, prop) => {
      // @ts-ignore
      const value = target[prop];
      // @ts-ignore
      if (logLevels.includes(prop)) {
        // @ts-ignore
        return (...args) => {
          // we proxy the call to itself, but we transform the arguments to strings before
          // so that they are printed in the terminal
          // @ts-ignore
          return value.apply(this, transformArgs(args));
        };
      }
      return value;
    },
  });

  // eslint-disable-next-line no-global-assign
  console = consoleProxy;
}
