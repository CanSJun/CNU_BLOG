import { Link } from 'react-router-dom';
import NOT_FOUND_IMG from '../assets/NOT_FOUND_IMG.jpg';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HomeButton = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 4px;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: rgb(50, 148, 248);
  border: 1px solid rgb(50, 148, 248);
  color: #ffffff;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <img src={NOT_FOUND_IMG} alt="404 error" style={{ width: '30rem' }} />
      <h1>웁스! 여긴 아무것도 없네요!</h1>
      <Link to="/">
        <HomeButton>홈으로 가기</HomeButton>
      </Link>
    </Wrapper>
  );
};

export default NotFound;
