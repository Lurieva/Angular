import template   from './overview-msg.html';
import controller from './overview-msg.controller';

let overviewMsgComponent = {
    bindings: {
      todo: '<'
    },
    template,
    controller
};

export default overviewMsgComponent;
