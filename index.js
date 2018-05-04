import {NativeModules,ToastAndroid,Platform} from 'react-native';

var RCTToastAndroid = Platform.OS === 'android' ? ToastAndroid : NativeModules.LRDRCTSimpleToast;

var SimpleToast = {
  // Toast duration constants
  SHORT: Platform.OS === 'android' ? ToastAndroid.SHORT : 2.0,
  LONG: Platform.OS === 'android' ? ToastAndroid.LONG : 3.5,

  // Toast gravity constants
  TOP: Platform.OS === 'android' ? ToastAndroid.TOP : 3,
  BOTTOM: Platform.OS === 'android' ? ToastAndroid.BOTTOM : 1,
  CENTER: Platform.OS === 'android' ? ToastAndroid.CENTER : 2,

  show: function (
    message,
    duration
  ) {
    RCTToastAndroid.show(message, duration === undefined ? this.SHORT : duration);
  },

  showWithGravity: function (
    message,
    duration,
    gravity,
  ) {
    RCTToastAndroid.showWithGravity(message, duration === undefined ? this.SHORT : duration, gravity);
  },
};

export default SimpleToast;
