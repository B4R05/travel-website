export const listCharacter: string = 'â€“';

export const listItemBody = (body: string): boolean =>
  body.includes(listCharacter);

export const getArrayFromText = (body: string): string[] => {
  //replaceAll is supported by modern browsers, just not by latest TypeScript and React
  //@ts-ignore
  const sanitizedBody = body.replaceAll(listCharacter, '');
  return sanitizedBody.split('\n');
};
