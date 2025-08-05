import "./Information.css";

import myImage from "../assets/홍대플렉스지도.png";
export default function information() {
    return (

        <div className="information">
            {/* 어두운 배경 */}
            <div className="information-bg"/>
            .
            {/* 텍스트는 배경 위에 표시 */}
            <div className="information-content">
                <h2>별빛 서곡</h2>
                <div>2025년 8월 28일 (목) PM 7:00</div>
                <h5>러닝타임: 120분</h5>
                <h5>입장 시작: 오후 6시 30분부터</h5>
                <h4 style={{ marginTop: '4rem' }}>예매 안내</h4>
                <h5>사전예매: 12,000₩</h5>
                <h5>네이버폼 예약 → 확인 문자 발송</h5>
                <h5>현장 예매 가능 (현장 구매 시 +₩3,000)</h5>
                <h6> (네이버 폼 작성과 입금이 모두 완료 되어야 예매가 완료되며 예매 완료 문자를 전송해드립니다)</h6>
                <a href="https://naver.me/5W9mwI7V">예매 링크</a>


                <h4  style={{ marginTop: '4rem' }}> </h4>
                <a
                    href="https://map.naver.com/p/search/%ED%99%8D%EB%8C%80%ED%94%8C%EB%A0%89%EC%8A%A4%EB%9D%BC%EC%9A%B4%EC%A7%80/place/37392237?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202508031812&locale=ko&svcName=map_pcv5&searchText=%ED%99%8D%EB%8C%80%ED%94%8C%EB%A0%89%EC%8A%A4%EB%9D%BC%EC%9A%B4%EC%A7%80&from=map&fromPanelNum=2&timestamp=202508031754&locale=ko&svcName=map_pcv5&searchText=%ED%99%8D%EB%8C%80%ED%94%8C%EB%A0%89%EC%8A%A4%EB%9D%BC%EC%9A%B4%EC%A7%80"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    <h4 style={{ marginTop: '4rem' }}>오시는 길</h4>
                </a>


                <div>
                    <a
                        href="https://map.naver.com/p/search/%ED%99%8D%EB%8C%80%ED%94%8C%EB%A0%89%EC%8A%A4%EB%9D%BC%EC%9A%B4%EC%A7%80/place/37392237?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202508031812&locale=ko&svcName=map_pcv5&searchText=%ED%99%8D%EB%8C%80%ED%94%8C%EB%A0%89%EC%8A%A4%EB%9D%BC%EC%9A%B4%EC%A7%80&from=map&fromPanelNum=2&timestamp=202508031754&locale=ko&svcName=map_pcv5&searchText=%ED%99%8D%EB%8C%80%ED%94%8C%EB%A0%89%EC%8A%A4%EB%9D%BC%EC%9A%B4%EC%A7%80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={myImage} alt="지도 썸네일" className="map-thumbnail" />
                    </a>
                </div>
                <h5>장소: 홍대 플렉스 라운지
                    (서울 마포구 양화로 100-10 다내리빌딩 지하)</h5>
                <h6>{'<!>'}공연장 내 주차 공간이 마련되어 있지 않으므로, 인근 공영주차장을 이용하시거나 가급적 대중교통을 이용해 주시기 바랍니다. {'<!>'}</h6>

                <h4 style={{ marginTop: '4rem' }}>좌석 및 관람 유의사항</h4>

                <div style={{ marginTop: '2rem', textAlign: 'left', textIndent: '-0.5rem', paddingLeft: '1rem', lineHeight: '1.6'}}>
                    <h6>
                        - 공연은 정시에 시작되며, 공연 시작 30분 전부터 입장이 가능합니다. <br />
                        <span style={{ paddingLeft: '0.05rem' }}>(좌석은 선착순 착석제로 운영)</span>
                    </h6>
                    <h6>- 티켓은 1인 1매 소지 필수이며, 분실 시 재발급이 불가하오니 보관에 유의해 주시기 바랍니다.</h6>
                    <h6>- 공연 중에는 음식물 섭취 및 음료 반입이 금지되어 있습니다.</h6>
                    <h6>- 원활한 공연 진행과 관람을 위하여 운영요원의 안내에 적극 협조 부탁드립니다.</h6>
                </div>
                <h4 style={{ marginTop: '4rem' }}>환불 및 취소 규정</h4>

                <div style={{ marginTop: '2rem', textAlign: 'left', textIndent: '-0.5rem', paddingLeft: '1rem', lineHeight: '1.6' }}>
                    <h6>- 본 공연은 공연 1일 전(08.27 19:00)까지 전액 환불이 가능합니다. 이후에는 환불이 불가하오니 이 점 양해 부탁드립니다.</h6>
                    <h6>- 환불 및 예매 변경은 반드시 인스타그램 @starlight_8.28 계정으로 문의하여 주시기 바랍니다.</h6>
                </div>


                <div style={{ marginTop: '4rem' }}>
                    <h4>문의</h4>
                    <a href="https://www.instagram.com/starlight_8.28?igsh=MWRvbWk0ejRld3Y5OA==" style={{color: 'white' ,fontSize: '12px',}}>@starlight_8.28</a>
                </div>
            </div>
        </div>
    );
}
