import { createSelector } from 'reselect';
import { RootState } from 'store/app/store';

export const selectIsLoggined = createSelector(
	(state: RootState) => state.common.isLoggined,
	(isLoggined) => isLoggined,
);

export const selectUserType = createSelector(
	(state: RootState) => state.common.userType,
	(userType) => userType,
);

export const selectUserNickname = createSelector(
	(state: RootState) => state.common.userNickname,
	(userNickname) => userNickname,
);

export const selectErrorInfo = createSelector(
	(state: RootState) => state.common.errorInfo,
	(errorInfo) => errorInfo,
);
