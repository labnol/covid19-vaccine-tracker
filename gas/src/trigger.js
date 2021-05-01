export const createTrigger = () => {
  if (ScriptApp.getProjectTriggers().length === 0) {
    ScriptApp.newTrigger('app').timeBased().atHour(8).everyDays(1).create();
  }
};

export const deleteTrigger = () => {
  ScriptApp.getProjectTriggers().forEach((trigger) => {
    ScriptApp.deleteTrigger(trigger);
  });
  throw new Error('Email Alert Removed!');
};
