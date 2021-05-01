import { getData } from './data';
import { init } from './init';
import { app } from './main';
import { deleteTrigger } from './trigger';
import { onOpen, showApp } from './ui';

global.getData = getData;
global.init = init;
global.app = app;

global.showApp = showApp;
global.onOpen = onOpen;
global.disableApp = deleteTrigger;
