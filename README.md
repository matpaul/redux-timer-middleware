# redux-timer-middleware

Simple middleware to dispatch actions periodically
## Installation

    $ npm i --save redux-timer-middleware
    
    
## Usage

```javascript
import timerMiddleware from 'redux-timer-middleware'

applyMiddleware(timerMiddleware)(createStore)
```

#### Start Timer
You need to dispatch action START_TIMER and provide in payload:
- actionName (required) - action that will be dispatched each timer tick
- timerName (required) - timer name (need for stop feature)
- timerInterval - interval in ms (default 1000)
- timerPeriod - tick count after which timer ends, when timer ends - action name with _END will be dispatched

#### Stop Timer or Stop multiple timers
You need to dispatch action STOP_TIMER and provide in payload:
- timerName (required) - timer name that we stop
- timerNames [] - timer names in array if we need to stop multiple timers

### Examples
Infinite timer:
```javascript
import {START_TIMER} from 'redux-timer-middleware';

dispatch({
    type: START_TIMER,
    payload: {
        actionName: 'SOME_ACTION_TICK',
        timerName: 'infiniteTimer'
    }
});
```

To stop this timer: 
```javascript
import {STOP_TIMER} from 'redux-timer-middleware';

dispatch({
    type: STOP_TIMER,
    payload: {
        timerName: 'infiniteTimer'
    }
});
```

Timer that ends after 10 seconds:
```javascript
import {START_TIMER} from 'redux-timer-middleware';

dispatch({
    type: START_TIMER,
    payload: {
        actionName: 'SOME_ACTION_TICK',
        timerName: 'testTimer',
        timerPeriod: 10
    }
});
```
After timer ends action with type 'SOME_ACTION_TICK_END' will be dispatched

