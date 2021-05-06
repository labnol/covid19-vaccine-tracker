let api = null;

export const getAPI = (token) => {
  if (api !== null) return api;
  const decoded = Utilities.base64Decode(token, Utilities.Charset.UTF_8);
  api = Utilities.newBlob(decoded).getDataAsString();
  return api;
};
