// export const generateEditPrompt = (userPrompt: string, data: string) => {
//   const input = `
// Convert the following request into a JSON command:
// [User Object List]
// ${data}
// [User Request]
// '${userPrompt}'
// `;

//   return input.trim();
// };

export const generateEditPrompt = (
  userPrompt: string,
  data: string,
  history?: string,
) => {
  const input = `
When adding new object, data must contain type specific required field, mesh : geometry & material, light: light, camera: camera

[prompt history]
"${history}"

Convert the following request into a JSON command:
[User Object List]
${data}
[User Request]
'${userPrompt}'
`;

  return input.trim();
};
