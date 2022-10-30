import React from 'react'
import styled from 'styled-components';
import '../Layout/Footer.css';
// import { Link } from 'react-router-dom';
import './Privacy';

const Footer = styled.footer`
    bottom: 0;
    margin-bottom: 0;
    background-color: #dde0ea;
    position: absolute;
    height: 20vh;
    width: 100%;
    padding: 0 25px;
    line-height: 25px;
    display:flex;
    flex-direction: column;
`;



const FooterVi = () => {
    return (
        <Footer>
            <div className='s1'>회사소개</div>
            <div className='s2'>이용약관</div>
            <div className='s3'>개인정보처리방침</div>
            <div className='s4'><p>SASHOE <br/>
                대표:정경수 | 소재지: 서울시 강남구 테헤란로 14길 6 남도빌딩 3층 | 사업자등록번호: 101-50-41461<br />
                개인정보관리책임자:이수빈 | e-mail: ‘SASHOE' '123@sashoe.co.kr' | FAX: 02-514-2236</p></div>
        </Footer>

    );
}

export default FooterVi;