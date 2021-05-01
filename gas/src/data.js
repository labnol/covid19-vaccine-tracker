export const getData = () => {
  const data = PropertiesService.getUserProperties().getProperty('data');
  return data ? JSON.parse(data) : null;
};

export const setData = (data) => {
  PropertiesService.getUserProperties().setProperty(
    'data',
    JSON.stringify(data)
  );
};
