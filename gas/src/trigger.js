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
    const time = Number(frequency);
    if (time === 5 || time === 15 || time === 30) {
      trigger.everyMinutes(frequency).create();
    } else {
      trigger.everyHours(frequency).create();
    }
  }
};

export const deleteTrigger = () => {
  removeAllTriggers();
  throw new Error('Email Alert Removed!');
};
