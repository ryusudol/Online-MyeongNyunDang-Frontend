// QuestionDetailQ.tsx 의 질문 `삭제 버튼`에서 사용
// 삭제하기 api 추가
import React from 'react';

const QuestionDeleteModal = (): JSX.Element => {
	return (
		<div>
			<header>
				<h2>삭제하기</h2>
				<button>react-icon x표시</button>
			</header>
			<main>
				<div>질문을 삭제하시겠습니까?</div>
			</main>
			<footer>
				<button>취소</button>
				<button>삭제</button>
			</footer>
		</div>
	);
};

export default QuestionDeleteModal;
