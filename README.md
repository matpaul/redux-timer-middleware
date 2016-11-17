# redux-timer-middleware

Simple middleware for periodically dispatch actions

## Installation

    $ npm i --save redux-timer-middleware
    
    
## Usage

```javascript
import timerMiddleware from 'redux-timer-middleware'

applyMiddleware(timerMiddleware)(createStore)
```

#### Start Timer
You need dispatch action START_TIMER and provide in payload:
- actionName (required) - action that will be dispatch each timer tick
- timerName (required) - timer name (need for stop feature)
- timerInterval - interval in ms (default 1000)
- timerPeriod - tick times after timer ended, when timer end action name with _END will dispatched

#### Stop Timer or stop multiple timers
You need dispatch action STOP_TIMER and provide in payload:
- timerName (required) - timer name that we stop
or 
- timerNames [] - timers name in array if we need stop multiple timers

### Examples
Infinite timer:
```javascript
import {START_TIMER} from 'redux-timer-middleware';

dispatch({
    type: START_TIMER,
    payload: {
        actionName: 'SOME_ACTION_TICK'
        timerName: 'testTimer'
    }
});
```

To stop this timer: 
```javascript
import {STOP_TIMER} from 'redux-timer-middleware';

dispatch({
    type: STOP_TIMER,
    payload: {
        timerName: 'testTimer'
    }
});
```

Timer that ended after 10 seconds
```javascript
import {START_TIMER} from 'redux-timer-middleware';

dispatch({
    type: START_TIMER,
    payload: {
        actionName: 'SOME_ACTION_TICK'
        timerName: 'testTimer'
        timerPeriod: 10
    }
});
```
After timer end it will dispatched action with type 'SOME_ACTION_TICK_END'

