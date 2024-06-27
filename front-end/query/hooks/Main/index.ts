import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from 'query/hooks/Main/queryKeys';
import { ILatestLecture } from 'types/MyPage';
import myPageAPI from 'apis/MyPage';

export const useRecentLecturesFetch = (): UseQueryResult<ILatestLecture[]> => {
	return useQuery<ILatestLecture[]>([QUERY_KEYS.FETCH_RECENT_LECTURES], () =>
		myPageAPI.fetchRecentLectures(),
	);
};
