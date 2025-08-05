import "./MemberLine.css";
import vOneImage from "../assets/구민성.jpeg";
import vTwoImage from "../assets/이도연.jpeg";
import vThreeImage from "../assets/진수경.jpeg";
import vFourImage from "../assets/한현준.jpeg";
import pOneImage from "../assets/김태이.jpeg";
import pTwoImage from "../assets/서윤진.jpeg";
import pThreeImage from "../assets/정선영.jpeg";
import gOneImage from "../assets/김준서.jpeg";
import gTwoImage from "../assets/신민호.jpeg";
import gThreeImage from "../assets/최승훈.jpeg";
import bOneImage from "../assets/이정현.jpeg";
import bTwoImage from "../assets/황순언2.jpeg";
import dOneImage from "../assets/김대원.jpeg";
import dTwoImage from "../assets/변성빈.jpeg";


export default function MemberLine() {
    return (
        <div className="memberLine">
            <div className="line-1">
                {/* Vocal */}
                <div className="box-top-main">
                    <h3 className="box-top">Vocal</h3>
                </div>
                <div className="member-container">
                    <div className="box group1">
                        <img src={vOneImage} alt="구민성" />
                        <a
                            href="https://www.instagram.com/minseoung_k/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            구민성
                        </a>
                    </div>
                    <div className="box group1">
                        <img src={vTwoImage} alt="이도연" />
                        <a
                            href="https://www.instagram.com/chdo_qv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            이도연
                        </a>
                    </div>
                    <div className="box group2">
                        <img src={vThreeImage} alt="진수경" />
                        <a
                            href="https://www.instagram.com/tnruddddd._.j/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            진수경
                        </a>
                    </div>
                    <div className="box group2">
                        <img src={vFourImage} alt="한현준" />
                        <a
                            href="https://www.instagram.com/hhj_0910/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            한현준
                        </a>
                    </div>
                </div>

                {/* Piano */}
                <div className="box-top-main">
                    <h3 className="box-top">Piano</h3>
                </div>
                <div className="member-container2">
                    <div className="box group1">
                        <img src={pOneImage} alt="김태이" />
                        <a
                            href="https://www.instagram.com/kim_tae_two/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            김태이
                        </a>
                    </div>
                    <div className="box group1">
                        <img src={pTwoImage} alt="서윤진" />
                        <a
                            href="https://www.instagram.com/stand_yunjin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            서윤진
                        </a>
                    </div>
                    <div className="box group2">
                        <img src={pThreeImage} alt="정선영" />
                        <a
                            href="https://www.instagram.com/kind.young_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            정선영
                        </a>
                    </div>
                </div>

                {/* Guitar */}
                <div className="box-top-main">
                    <h3 className="box-top">Guitar</h3>
                </div>
                <div className="member-container2">
                    <div className="box group1">
                        <img src={gOneImage} alt="김준서" />
                        <a
                            href="https://www.instagram.com/seotar_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            김준서
                        </a>
                    </div>
                    <div className="box group2">
                        <img src={gTwoImage} alt="신민호" />
                        <a
                            href="https://www.instagram.com/tlsalsgh333/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            신민호
                        </a>
                    </div>
                    <div className="box group2">
                        <img src={gThreeImage} alt="최승훈" />
                        <a
                            href="https://www.instagram.com/soomoonee005/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            최승훈
                        </a>
                    </div>
                </div>

                {/* Bass & Drum */}
                <div className="box-top-main">
                    <h3 className="box-top">Bass</h3>
                    <h3 className="box-top">Drum</h3>
                </div>
                <div className="member-container">
                    <div className="box group1">
                        <img src={bOneImage} alt="이정연" />
                        <a
                            href="https://www.instagram.com/pbasss_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            이정연
                        </a>
                    </div>
                    <div className="box group1">
                        <img src={bTwoImage} alt="황순언" />
                        <a
                            href="https://www.instagram.com/hwang_ssambob/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            황순언
                        </a>
                    </div>
                    <div className="box group2">
                        <img src={dOneImage} alt="김대원" />
                        <a
                            href="https://www.instagram.com/k_rummer_d/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            김대원
                        </a>
                    </div>
                    <div className="box group2">
                        <img src={dTwoImage} alt="변성빈" />
                        <a
                            href="https://www.instagram.com/s_kong00/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Member-nameLine"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            변성빈
                        </a>
                    </div>
                </div>
                <h5 style={{textAlign: 'center', marginTop: '2rem'}}> 이름 클릭시 멤버 개인 인스타로 이동합니다 </h5>
            </div>
        </div>
    );
}
