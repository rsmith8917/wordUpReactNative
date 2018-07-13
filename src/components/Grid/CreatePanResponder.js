import { PanResponder } from 'react-native';

export function createPanResponder(onGrant, onMove, onRelease) {
    return PanResponder.create({
        // Ask to be the responder:
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        onPanResponderGrant: onGrant,
        onPanResponderMove: onMove,
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: onRelease,
        onPanResponderTerminate: (evt, gestureState) => {
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
            return true;
        },
    });
}