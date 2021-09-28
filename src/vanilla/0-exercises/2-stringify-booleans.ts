function stringifyBooleans(booleanOrStringArray: (boolean | string)[]) : string[] {
  // your code here
  return booleanOrStringArray.map(stringifyBoolean);
}

function stringifyBoolean(booleanOrString: boolean | string): string {
  // your code here
  return `${booleanOrString}`
}

export { stringifyBooleans, stringifyBoolean };
