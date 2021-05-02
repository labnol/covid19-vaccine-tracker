const removeAllTriggers = () => {
  ScriptApp.getProjectTriggers().forEach((trigger) => {
    ScriptApp.deleteTrigger(trigger);
  });
};

export const createTrigger = (frequency) => {
  removeAllTriggers();
  const trigger = ScriptApp.newTrigger('app').timeBased();
  if (frequency === 'day') {
    trigger.atHour(8).everyDays(1).create();
  } else {
    trigger.everyHours(Number(frequency)).create();
  }
};

export const deleteTrigger = () => {
  removeAllTriggers();
  throw new Error('Email Alert Removed!');
};
