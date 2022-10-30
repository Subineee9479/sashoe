import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>여기가 홈입니다.</h1>
            <Link to="/Mypage"><h2>마이페이지</h2></Link>
        </div>
    );
}
export default Home;