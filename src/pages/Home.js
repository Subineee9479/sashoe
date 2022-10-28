import { Link } from "react-router-dom";
import {useUserState} from 'react';

const Home = () => {
    const { user } = useUserState();
    return (
        <div>
            <h1>여기가 홈입니다.</h1>
            <p>{user.userId}님 안녕하세요 :D</p>
            {/* Link는 a태그와 비슷한 속성 */}
            <Link to="/Mypage"><h2>마이페이지</h2></Link>
        </div>
    );
}
export default Home;