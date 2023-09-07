export const selectIsAuth = state => state.auth.isAuth;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.auth.isLoading;

export const selectTokenCount = state => state.auth.user?.tokenCount;
