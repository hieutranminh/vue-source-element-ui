import store from '@/store';

// eslint-disable-next-line import/prefer-default-export
export const AuthGuard = async (to, from, next) => {
  if (!store.state.auth.authenticated) {
    next({ name: 'login.index' });

    return;
  }
  next();
};
