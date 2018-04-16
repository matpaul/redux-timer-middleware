import configureMockStore from 'redux-mock-store';
import timerMiddleware, {START_TIMER} from '../src';

jest.useFakeTimers();

const middlewares = [timerMiddleware];
const mockStore = configureMockStore(middlewares);

const TIMER_EXPECTED_ACTION_NAME = 'TIMER_ACTION_TICK';

const startInfiniteTimerAction = () => ({
    type: START_TIMER,
    payload: {
        timerName: 'test_timer',
        actionName: TIMER_EXPECTED_ACTION_NAME,
    },
});

describe('redux-timer-middleware', () => {
    it('should pass the intercepted action to next', () => {
        const fakeNext = jest.fn();
        const action = {type: 'FAKE'};

        timerMiddleware({})(fakeNext)(action);

        expect(fakeNext).toBeCalledWith(action);
    });

    it('should pass the intercepted action with payload to next', () => {
        const fakeNext = jest.fn();
        const action = {
            type: 'FAKE',
            payload: 'FAKE'
        };

        timerMiddleware({})(fakeNext)(action);

        expect(fakeNext).toBeCalledWith(action);
    });

    it('should start timer that dispatch action name', () => {
        const fakeNext = jest.fn();
        const fakeStore = mockStore({});
        const expectedAction = [{
            type: TIMER_EXPECTED_ACTION_NAME,
        }];

        timerMiddleware(fakeStore)(fakeNext)(startInfiniteTimerAction());

        jest.runOnlyPendingTimers();

        expect(fakeStore.getActions()).toEqual(expectedAction);
    });
});
