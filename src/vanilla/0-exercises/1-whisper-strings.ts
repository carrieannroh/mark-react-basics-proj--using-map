function whisperStrings(strings: string[]):string[] {
  // your code here
  return strings.map(whisperString);
}

function whisperString(str:string):string {
  // your code here
  return `shh: ${str.toLowerCase()}`;
}

export { whisperStrings, whisperString };
