import { log } from './utils/promise-helper.js';
import { notasService as service } from './nota/service.js';
import './utils/array-helper.js';

document
    .querySelector('#myButton')
    .onclick = () =>
            service
            .sumItems('2143')
            .then(log)
            .catch(log);