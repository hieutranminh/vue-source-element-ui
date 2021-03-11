import store from '@/store';

// eslint-disable-next-line import/prefer-default-export
export const LoginGuard = (to, from, next) => {
  console.log('login guard', store);
  if (store.getters.profile || store.state.token) {
    next({ name: 'home' });
    return;
  }
  next();
};
