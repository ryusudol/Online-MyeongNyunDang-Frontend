import styled from 'styled-components';
import LectureCard from './LectureCard';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useState, useEffect } from 'react';
import { setLectures } from 'feature/lecture/lectureSlice';
import axios from 'axios';
import { RootState } from 'app/store';

import { BASE_URL } from 'shared/constants/apis';
const LectureList = () => {
	// local state로 저장
	const dispatch = useAppDispatch();
	const { clickedId, lectures } = useAppSelector(
		(state: RootState) => state.lecture,
	);
	// TODO : 검색후에 돌아왔을때, 다시 강의를 새로 불러오는 문제, 원래 페이지가 나와야함.
	useEffect(() => {
		console.log('Test');
		if (clickedId === 0) {
			// 전체보기
			axios
				.post(`${BASE_URL}/api/lectures`)
				.then((res) => dispatch(setLectures(res.data.results)))
				.catch((err) => console.log(err));
		} else if (clickedId !== -1) {
			// 카테고리 보기
			axios
				.post(`${BASE_URL}/api/findLectures/category/parent`, {
					parentCategoryId: clickedId,
				})
				.then((res) => dispatch(setLectures(res.data)))
				.catch((err) => console.log(err));
		}
	}, [clickedId]);

	return (
		<LectureHeader>
			{lectures.length === 0 ? (
				<div>강의 로딩중...</div>
			) : lectures[0].id !== -1 ? (
				<LectureCard />
			) : (
				<div>검색 결과가 없습니다!!!</div>
			)}
		</LectureHeader>
	);
};

const LectureHeader = styled.div`
	display: flex;
	flex-flow: row wrap;
`;
export default LectureList;
