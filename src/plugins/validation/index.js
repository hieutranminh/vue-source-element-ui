import Vue from 'vue';
import {
  ValidationProvider, ValidationObserver, extend, configure,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { i18n } from '../i18n';

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

extend('format_url', {
  validate(value) {
    // eslint-disable-next-line
    return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value)
  },
});

extend('youtube_valid', {
  validate(value) {
    return /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm.test(value);
  },
});

extend('not_emoji', {
  validate(value) {
    const regexEmoji = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/ug;
    return !regexEmoji.test(value);
  },
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

configure({
  // this will be used to generate messages.
  defaultMessage: (field, values) => {
    const text = field.toLowerCase();

    // eslint-disable-next-line no-param-reassign,no-underscore-dangle
    values._field_ = i18n.t(`${text}`);

    // eslint-disable-next-line no-underscore-dangle
    return i18n.t(`validation.${values._rule_}`, values);
  },
});
