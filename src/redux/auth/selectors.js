export const selectIsAuth = state => state.auth.isAuth;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectTokenCount = state => state.auth.user.tokenCount;
