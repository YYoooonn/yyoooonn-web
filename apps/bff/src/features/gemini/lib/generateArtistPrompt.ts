export const generateArtistPrompt = (
  userPrompt: string,
  id: string,
  history?: string,
) => {
  const input = `
    When adding new object, data must contain type specific fields, mesh : geometry & material, light: light, camera: camera
    
      [prompt history] "${history}"

      **Base Scene Id : "${id}"
      **Requested 3D Scene Topic/Mood:** "${userPrompt}"
    `;
  return input;
};
