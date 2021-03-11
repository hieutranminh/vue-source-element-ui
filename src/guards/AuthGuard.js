import store from '@/store';

// eslint-disable-next-line import/prefer-default-export
export const AuthGuard = async (to, from, next) => {
  if (!store.getters.hasToken) {
    next({ name: 'login' });
  }

  // try {
  //   const profile = await Admin.profile({
  //     query: {
  //       include: 'roles,company,permissions',
  //     },
  //   });
  //   if (isEmpty(profile)) {
  //     next({ name: 'login' });
  //     return;
  //   }
  //   store.commit(types.SET_PROFILE, { profile });
  //   store.commit(types.SET_PERMISSION, profile.data.permissions);
  // } catch (e) {
  //   store.commit(types.LOG_OUT);
  //   next({ name: 'login' });
  //   throw e;
  // }
};
