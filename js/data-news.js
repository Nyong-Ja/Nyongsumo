// ==========================================
// 📢 Kinetic Games 공식 최신 뉴스 및 패치 데이터
// (공식 원문 링크: https://kineticgames.co.uk/news)
// ==========================================

const NEWS_DATA = [
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 10. 6.",
        title: "파스모포비아 v0.19.1.0 - 패치 노트",
        desc: "진홍의 눈 이벤트 시작 준비 및 시즌 이벤트 토글 기능 추가",
        img: "https://kineticgames.co.uk/assets/images/CrimsonEyeKA.webp",
        url: "https://kineticgames.co.uk/news/phasmophobia-v01910-patch-notes",
        detailedHtml: `
            <div class="news-section-box">
                <div class="news-sub-title">1. 업데이트 개요 (OVERVIEW)</div>
                <p>2026년 10월 6일 적용된 v0.19.1.0 업데이트는 <strong>진홍의 눈(The Crimson Eye)</strong> 이벤트 시작을 준비하기 위한 소규모 업데이트입니다.</p>
                <p style="margin-top: 8px;">이번 업데이트에서는 진홍의 눈 이벤트 콘텐츠가 추가되었으며, 앞으로 진행될 시즌 이벤트에도 사용할 수 있는 <strong>시즌 이벤트 토글 기능</strong>이 새롭게 추가되었습니다.</p>
                <p style="margin-top: 8px;">다음 대형 업데이트는 <strong>Unity 6 전환</strong>으로, 11월 출시 예정이며 다양한 버그 수정과 개선 사항이 포함될 예정입니다.</p>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">2. 신규 콘텐츠 (NEW)</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>
                        <strong>진홍의 눈 (The Crimson Eye):</strong>
                        진홍의 눈 이벤트가 시작됩니다. 다양한 파스모포비아 맵이 <strong>Blood Moon</strong>의 붉은 빛으로 물들며, 조사를 완료하고 선택 목표 등을 수행하여 이벤트 보상을 획득할 수 있습니다.
                    </li>
                    <li style="margin-top: 8px;">
                        <strong>시즌 이벤트 토글:</strong>
                        진홍의 눈을 비롯한 앞으로의 시즌 이벤트를 위해 새로운 토글 기능이 추가되었습니다. 이를 통해 세션에서 <strong>이벤트 맵을 활성화하거나 비활성화</strong>할 수 있습니다.
                    </li>
                </ul>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">3. 주요 버그 수정 (FIXES)</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>
                        <strong>부활 시 흰색 조명 효과 수정:</strong>
                        플레이어가 부활했을 때 흰색 조명이 천천히 나타났다 사라지는 대신 순간적으로 깜빡이던 문제를 수정했습니다.
                    </li>
                    <li>
                        <strong>이스터 에그 보상 해금 문제 수정:</strong>
                        배율이 0배인 상태에서 보상 팝업이 표시되었음에도 이스터 에그 보상이 해금되지 않을 수 있던 문제를 수정했습니다.
                    </li>
                </ul>
            </div>

            <div class="news-section-box" style="margin-top: 14px;">
                <div class="news-sub-title">4. 알려진 문제 (KNOWN ISSUES)</div>
                <ul style="padding-left: 20px; margin-top: 4px;">
                    <li>
                        <strong>6 탱글우드 드라이브 가로등:</strong>
                        플레이어가 바라볼 경우 외부 가로등이 빛나는 것처럼 보일 수 있습니다. <strong>(Xbox 및 Steam 전용)</strong>
                    </li>
                    <li>
                        <strong>트럭 퓨즈박스 위치 표시:</strong>
                        커스텀 난이도에서 플레이할 경우 트럭 지도에서 퓨즈박스 위치가 숨겨지지 않습니다.
                    </li>
                </ul>
            </div>

            <div class="news-section-box" style="margin-top: 14px;">
                <div class="news-sub-title">5. 앞으로의 일정</div>
                <p><strong>🔴 진홍의 눈 (The Crimson Eye)</strong></p>
                <ul style="padding-left: 20px; margin-top: 6px;">
                    <li><strong>이벤트 시작: 2026년 10월 8일</strong></li>
                    <li>Blood Moon이 적용된 이벤트 맵에서 조사 및 선택 목표를 수행할 수 있습니다.</li>
                    <li>시즌 이벤트 토글을 이용해 이벤트 맵 활성화 여부를 선택할 수 있습니다.</li>
                </ul>

                <p style="margin-top: 12px;"><strong>⚙️ 다음 대형 업데이트 = Unity 6</strong></p>
                <ul style="padding-left: 20px; margin-top: 6px;">
                    <li><strong>출시 예정: 2026년 11월</strong></li>
                    <li>다양한 버그 수정 및 게임 개선 사항이 포함될 예정입니다.</li>
                    <li>세부 내용은 추후 개발 미리보기를 통해 공개될 예정입니다.</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px dashed var(--card-border); text-align: right; font-size: 0.88rem; color: var(--accent-light);">
                ✨ <strong>Korean Translated by. 흠먐먀</strong>
            </div>
        `
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 10. 1.",
        title: "파스모포비아 - 진홍의 눈이 다시 찾아옵니다",
        desc: "2026 진홍의 눈 이벤트 일정, 대상 맵, 보상 및 Twitch Drop 안내",
        img: "https://kineticgames.co.uk/assets/images/CrimsonDates.webp",
        url: "https://kineticgames.co.uk/news/the-crimson-eye-approaches-once-more",
        detailedHtml: `
            <div class="news-section-box">
                <div class="news-sub-title">1. 이벤트 개요 (OVERVIEW)</div>
                <p>파스모포비아의 대표적인 시즌 이벤트 <strong>진홍의 눈(The Crimson Eye)</strong>이 2026년에도 다시 찾아옵니다.</p>
                <p style="margin-top: 8px;">2026년 진홍의 눈 이벤트는 <strong>10월 8일부터 11월 1일까지</strong> 진행되며, 이벤트 콘텐츠가 포함된 업데이트는 <strong>10월 7일</strong> 배포될 예정입니다.</p>
                <p style="margin-top: 8px;">이벤트 기간 동안 특정 맵에서 조사를 진행하고 <strong>Blood Moon 토템</strong>을 찾아 조사 및 선택 목표를 완료하면 이벤트 포인트를 획득할 수 있습니다.</p>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">2. 이벤트 대상 맵</div>
                <p>진홍의 눈 이벤트는 다음 맵에서 진행됩니다.</p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>6 탱글우드 드라이브</li>
                    <li>42 엣지필드 로드</li>
                    <li>그라프톤 농가</li>
                    <li>13 윌로우 스트리트</li>
                    <li>블리즈데일 농가</li>
                    <li><strong>포인트 호프</strong> - 일반 맵만 포함되며 제한 구역은 제외됩니다.</li>
                    <li>캠프 우드윈드</li>
                    <li>넬의 식당</li>
                </ul>
                <p style="margin-top: 8px;">특히 올해는 <strong>넬의 식당</strong>과 새롭게 리워크된 <strong>6 탱글우드 드라이브 및 13 윌로우 스트리트</strong>가 붉은색으로 꾸며진 모습을 만나볼 수 있습니다.</p>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">3. 이벤트 진행 방식</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li><strong>Blood Moon 토템 찾기:</strong> 이벤트 맵 곳곳에 등장하는 Blood Moon 토템을 찾아야 합니다.</li>
                    <li><strong>조사 완료:</strong> 일반적인 유령 조사를 진행하여 이벤트 포인트를 획득할 수 있습니다.</li>
                    <li><strong>선택 목표:</strong> 추가 목표를 완료하여 더 많은 이벤트 포인트를 획득할 수 있습니다.</li>
                    <li><strong>Blood Moon 날씨:</strong> 이벤트 기간 동안 Blood Moon 날씨가 등장하며 유령으로 인한 위협이 더욱 커집니다.</li>
                </ul>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">4. 이벤트 보상</div>
                <p>이벤트 기간 동안 다양한 보상을 해금할 수 있습니다.</p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li><strong>시즌 이벤트 티셔츠</strong></li>
                    <li><strong>Beholder ID 카드 & 배지 세트</strong></li>
                    <li><strong>Blood Moon 장식품</strong></li>
                </ul>
                <p style="margin-top: 8px;">또한 이벤트 포인트를 모아 업그레이드할 수 있는 <strong>트로피</strong>도 제공됩니다.</p>
                <p style="margin-top: 8px;">이전에 진홍의 눈 이벤트에서 트로피를 이미 획득한 플레이어는 새로운 트로피를 받는 대신 기존 트로피에 포인트가 누적되어 계속 업그레이드됩니다.</p>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">5. Twitch Drop</div>
                <p>진홍의 눈 이벤트 첫 주에는 모든 파스모포비아 스트리머를 대상으로 <strong>Twitch Drop</strong> 이벤트가 진행됩니다.</p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li><strong>보상:</strong> Crimson Eye 티셔츠</li>
                    <li><strong>시청 시간:</strong> 파스모포비아 방송 총 2시간</li>
                    <li><strong>기간:</strong> 이벤트 시작 시점부터 2026년 10월 15일 23:59 BST까지</li>
                </ul>
                <p style="margin-top: 8px;">파스모포비아 스트리머의 방송을 누적 2시간 시청하면 보상을 획득할 수 있습니다.</p>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">6. Double XP & Rewards</div>
                <p>진홍의 눈 이벤트 기간 중 <strong>더블 XP & 보상 이벤트</strong>도 진행됩니다.</p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li><strong>기간:</strong> 2026년 10월 15일 ~ 10월 22일</li>
                    <li><strong>내용:</strong> 조사를 완료했을 때 획득하는 모든 보상이 2배로 증가합니다.</li>
                </ul>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">7. Ghost Hunts 4 Hearts</div>
                <p>진홍의 눈 마지막 주에는 <strong>American Heart Association(AHA)</strong>와 함께하는 <strong>Ghost Hunts 4 Hearts</strong>가 다시 진행됩니다.</p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li><strong>기간:</strong> 2026년 10월 26일 ~ 11월 1일</li>
                    <li><strong>주최:</strong> Kinetic Games × American Heart Association</li>
                    <li><strong>대상:</strong> 모든 파스모포비아 크리에이터 및 플레이어</li>
                </ul>
                <p style="margin-top: 8px;">지난해 Ghost Hunts 4 Hearts를 통해 파스모포비아 커뮤니티는 <strong>10만 달러 이상</strong>을 모금했습니다.</p>
                <p style="margin-top: 8px;">올해는 더욱 큰 규모로 진행될 예정이며, 이벤트와 보상은 모든 파스모포비아 크리에이터와 플레이어가 참여할 수 있도록 제공됩니다.</p>
                <p style="margin-top: 8px;">세부적인 내용은 이벤트 시작에 가까워지면 추가로 공개될 예정입니다.</p>
            </div>

            <div class="news-section-box" style="margin-top: 14px;">
                <div class="news-sub-title">8. 2026 진홍의 눈 일정 요약</div>
                <ul style="padding-left: 20px; margin-top: 4px;">
                    <li><strong>10월 7일:</strong> 진홍의 눈 업데이트 배포</li>
                    <li><strong>10월 8일:</strong> 진홍의 눈 이벤트 시작</li>
                    <li><strong>10월 8일 ~ 10월 15일:</strong> Twitch Drop</li>
                    <li><strong>10월 15일 ~ 10월 22일:</strong> Double XP & Rewards</li>
                    <li><strong>10월 26일 ~ 11월 1일:</strong> Ghost Hunts 4 Hearts</li>
                    <li><strong>11월 1일:</strong> 진홍의 눈 이벤트 종료</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px dashed var(--card-border); text-align: right; font-size: 0.88rem; color: var(--accent-light);">
                ✨ <strong>Korean Translated by. 흠먐먀</strong>
            </div>
        `
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 9. 16.",
        title: "파스모포비아 v0.19.0.2 - 패치 노트",
        desc: "PS5·Xbox 방 입장 문제 및 파라볼릭 마이크 관련 멀티플레이 음성 문제 수정",
        img: "https://kineticgames.co.uk/assets/images/16thSeptUpdate.webp",
        url: "https://kineticgames.co.uk/news/phasmophobia-v01902-patch-notes",
        detailedHtml: `
            <div class="news-section-box">
                <div class="news-sub-title">1. 업데이트 개요 (OVERVIEW)</div>
                <p>2026년 9월 16일 적용된 v0.19.0.2 업데이트는 지난 업데이트 이후 커뮤니티에서 제보된 문제를 해결하기 위한 소규모 핫픽스입니다.</p>
                <p style="margin-top: 8px;">이번 패치에서는 <strong>PS5 및 Xbox Series X|S의 방 입장 문제</strong>와 <strong>멀티플레이에서 발생하던 파라볼릭 마이크 관련 음성 문제</strong>가 수정되었습니다.</p>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">2. 주요 버그 수정 (FIXES)</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li><strong>PS5 / Xbox Series X|S 방 입장 문제 수정:</strong> 일부 PlayStation 5 및 Xbox Series X|S 플레이어가 싱글플레이 또는 멀티플레이 방에 입장할 수 없던 문제를 수정했습니다.</li>
                    <li><strong>파라볼릭 마이크 음성 문제 수정:</strong> 멀티플레이에서 다른 플레이어가 파라볼릭 마이크를 켠 직후 떨어뜨렸을 경우, 해당 플레이어의 음성이 먹먹하게 들리던 문제를 수정했습니다.</li>
                </ul>
            </div>

            <div class="news-section-box" style="margin-top: 14px;">
                <div class="news-sub-title">3. 업데이트 요약</div>
                <ul style="padding-left: 20px; margin-top: 4px;">
                    <li><strong>업데이트 버전:</strong> v0.19.0.2</li>
                    <li><strong>업데이트 날짜:</strong> 2026년 9월 16일</li>
                    <li><strong>주요 내용:</strong> 콘솔 방 입장 문제 및 멀티플레이 음성 문제 수정</li>
                    <li><strong>신규 콘텐츠:</strong> 없음</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px dashed var(--card-border); text-align: right; font-size: 0.88rem; color: var(--accent-light);">
                ✨ <strong>Korean Translated by. 흠먐먀</strong>
            </div>
        `
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 9. 10.",
        title: "파스모포비아 v0.19.0.1 - 패치 노트",
        desc: "최근 삶의 질(QoL) 업데이트 이후 발생한 주요 버그 수정 및 VR·감옥 제한 구역 개선",
        img: "https://kineticgames.co.uk/assets/images/news-banner-qol-part2.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes",
        detailedHtml: `
            <div class="news-section-box">
                <div class="news-sub-title">1. 업데이트 개요 (OVERVIEW)</div>
                <p>2026년 9월 10일 적용된 v0.19.0.1 업데이트는 최근 삶의 질(QoL) 업데이트 이후 발생한 여러 문제를 해결하는 데 초점을 맞췄습니다.</p>
                <p style="margin-top: 8px;">이번 패치에서는 VR 조작 개선, 감옥 제한 구역의 신규 상호작용, 카메라 및 장비 관련 문제, 캐릭터·맵·콘솔·VR 버그 등이 수정되었습니다.</p>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">2. 가장 중요한 변경 사항</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li><strong>VR 벨트 오프셋 옵션 추가:</strong> VR 벨트의 높이를 원하는 위치로 조절할 수 있습니다.</li>
                    <li><strong>감옥 제한 구역 신규 상호작용 추가:</strong> 입구에 소품과 지문 상호작용이 추가되어 유령 식별에 도움을 줄 수 있도록 개선되었습니다.</li>
                    <li><strong>VR 손 위치 개선:</strong> 1티어 도트 프로젝터, 모든 티어 손전등, 모든 티어 사진기, 모든 티어 비디오 카메라의 손 위치가 개선되었습니다. 추후 다른 장비에도 추가 개선이 예정되어 있습니다.</li>
                </ul>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">3. 주요 버그 수정 (GAMEPLAY)</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>0배 커스텀 난이도에서 업적이 지급되지 않던 문제를 수정했습니다.</li>
                    <li><strong>넬의 식당 금고에 올바른 코드를 입력해도 열리지 않던 문제를 수정했습니다.</strong></li>
                    <li><strong>컨트롤러 사용 시 커스텀 난이도에서 유령을 선택하려면 더블 클릭해야 했던 문제를 수정했습니다.</strong></li>
                    <li><strong>T1 사진기 사용 애니메이션 중 장비를 교체하거나 떨어뜨리면 캐릭터 애니메이션이 깨지던 문제를 수정했습니다.</strong></li>
                    <li>원숭이 손의 「정보가 필요해」 소원 사용 시 올바른 증거가 삭제되던 문제를 수정했습니다.</li>
                    <li>위자 보드 답변 중 저널을 열면 애니메이션 및 상호작용이 끊기던 문제를 수정했습니다.</li>
                    <li>감옥에서 <strong>은신처 없음</strong> 설정이 제대로 적용되지 않던 문제를 수정했습니다.</li>
                    <li>감옥에서 퓨즈가 접근 불가능한 위치에 생성되던 문제를 수정했습니다.</li>
                    <li>감옥에서 원숭이 손이 잘못된 위치에 생성되던 문제를 수정했습니다.</li>
                    <li>신규 제한 구역의 특정 장애물에 장비를 놓으면 사라지던 문제를 수정했습니다.</li>
                    <li><strong>해커가 증거 및 금전 보상 수치를 변경할 수 있던 문제를 수정했습니다.</strong></li>
                </ul>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">4. 카메라 / 사진 수정</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>다른 플레이어가 설치한 삼각대 비디오 카메라를 가져갈 수 없던 문제를 수정했습니다.</li>
                    <li>트럭에서 문이 열리기 전에 카메라를 집으면 화면이 계속 검게 나오던 문제를 수정했습니다.</li>
                    <li>헤드기어 토글 이후 비디오 카메라가 검게 나오던 문제를 수정했습니다.</li>
                    <li>카메라가 벽 안에 있을 때 저널을 열면 화면이 검게 유지되던 문제를 수정했습니다.</li>
                    <li><strong>윌로우 스트리트 13번지 / 넬의 식당에서 UV 지문 사진을 찍을 수 없던 문제를 수정했습니다.</strong></li>
                </ul>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">5. 유령 / 상호작용 수정</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>유령이 문을 닫을 때 문 소리가 제대로 재생되지 않던 문제를 수정했습니다.</li>
                    <li>양초를 집으면 라이타가 꺼지던 문제를 수정했습니다.</li>
                    <li>감옥 제한 구역에서 잘못된 뼈가 생성되던 문제를 수정했습니다.</li>
                    <li>포인트 호프 폴라로이드에서 잘못된 방이 차단된 것처럼 표시되던 문제를 수정했습니다.</li>
                    <li>저널을 닫아도 증거 강조 표시가 남아있던 문제를 수정했습니다.</li>
                </ul>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">6. 캐릭터 / 의상 수정</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>선택한 캐릭터/의상과 관계없이 <strong>아미르 켈리 기본 외형으로 생성되는 문제</strong>를 수정했습니다.</li>
                    <li>일부 의상이 시계를 가리던 문제를 수정했습니다. 단, <strong>여성용 후드 데님 외투는 아직 시계를 살짝 가립니다.</strong></li>
                    <li>여성 캐릭터 재킷에 의상 장착 시 틈이 생기는 문제를 수정했습니다.</li>
                    <li>VR 플레이어 프로필 사진이 로비에서 비어 보이던 문제를 수정했습니다.</li>
                    <li><strong>사망할 때 저널을 여는 효과음이 재생되던 문제를 수정했습니다.</strong></li>
                    <li><strong>로비에서 플레이어 ID 카드가 중복 표시되던 문제를 수정했습니다.</strong></li>
                </ul>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">7. 맵 / 성능 수정</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>브라운스톤 고등학교 6번 교실 의자에 끼이는 문제를 수정했습니다.</li>
                    <li>고등학교 제한 구역의 성능 저하 문제를 수정했습니다.</li>
                    <li>포인트 호프 일부 바닥이 하얗게 보이는 문제를 수정했습니다.</li>
                </ul>
            </div>

            <div class="news-section-box">
                <div class="news-sub-title">8. 콘솔 / VR 수정</div>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>PS5/Xbox에서 <strong>음성 → 텍스트 → 음성 전환 후 음성 인식이 작동하지 않던 문제</strong>를 수정했습니다.</li>
                    <li>PSVR2 UI 포인터 방향 문제를 수정했습니다.</li>
                    <li>PSVR2에서 플레이어가 플레이 공간 중앙에서 움직이지 않던 문제를 수정했습니다.</li>
                    <li>VR 몰입형 애니메이션 사용 시 사망한 캐릭터가 뒤틀리는 문제를 수정했습니다.</li>
                    <li>멀티플레이에서 마이크로폰을 켜자마자 떨어뜨리면 다른 플레이어의 음성이 먹먹해지던 문제를 수정했습니다.</li>
                    <li>가까운 곳에서 다른 플레이어가 문을 닫을 경우 VR 헤드기어가 떨어질 수 있던 문제를 수정했습니다.</li>
                    <li>PC/VR 플레이어가 같은 문과 상호작용할 때 헤드기어 소유권이 바뀌던 문제를 수정했습니다.</li>
                </ul>
            </div>

            <div class="news-section-box" style="margin-top: 14px;">
                <div class="news-sub-title">9. 알려진 문제 (KNOWN ISSUES)</div>
                <ul style="padding-left: 20px; margin-top: 4px;">
                    <li>비디오 카메라 증거의 <strong>번역문이 비영어권에서 제대로 표시되지 않을 수 있습니다.</strong></li>
                    <li><strong>FSR 1.0 사용 시 저널 가독성 문제가 발생합니다.</strong></li>
                    <li>불이 붙은 양초를 들고 있을 때 배치된 1티어 양초를 켤 수 없습니다.</li>
                    <li>양초를 인벤토리에 넣었다가 던져도 불이 꺼지지 않습니다.</li>
                    <li>로비 붐박스가 항상 켜지지 않을 수 있습니다.</li>
                    <li>제한 구역의 신규 장애물 뒤에 숨을 수 있어 의도하지 않은 새로운 은신처가 생성될 수 있습니다.</li>
                    <li>VR 1티어 도트 프로젝터 사용 시 캐릭터 손 애니메이션이 부자연스럽게 회전할 수 있습니다.</li>
                    <li><strong>PS5 / Xbox Series X|S 충돌 문제가 남아있습니다.</strong></li>
                </ul>
            </div>

            <div class="news-section-box" style="margin-top: 14px;">
                <div class="news-sub-title">10. 앞으로의 일정</div>
                <p><strong>🔴 다음 대형 업데이트 = Unity 6</strong></p>
                <ul style="padding-left: 20px; margin-top: 6px;">
                    <li>기존 예정: 10월</li>
                    <li><strong>변경: 11월 출시 예정</strong></li>
                    <li>Unity 6 전환과 함께 의상 업데이트에 대해서도 개발 미리보기에서 추가 공개될 예정입니다.</li>
                </ul>
                <p style="margin-top: 12px;"><strong>👁️ 진홍의 눈 이벤트</strong></p>
                <ul style="padding-left: 20px; margin-top: 6px;">
                    <li><strong>10월 예정 그대로 유지</strong></li>
                    <li>Unity 6 업데이트가 11월로 밀렸지만 진홍의 눈 이벤트 일정에는 영향이 없습니다.</li>
                </ul>
            </div>

            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px dashed var(--card-border); text-align: right; font-size: 0.88rem; color: var(--accent-light);">
                ✨ <strong>Korean Translated by. 흠먐먀</strong>
            </div>
        `
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 8. 25.",
        title: "파스모포비아 v0.19.0.0 - 플레이 개선 업데이트 파트2",
        desc: "감옥, 고등학교 등 신규 제한구역 맵 3종 추가 및 비디오·사진 카메라 중복 증거 표시 기능 도입",
        img: "https://kineticgames.co.uk/assets/images/news-banner-qol-part2.webp",
        url: "https://kineticgames.co.uk/news/phasmophobia-v01900-quality-of-life-part-2",
        detailedHtml: `
            <div class="news-section-box">
                <div class="news-sub-title">1. 주요 변경 요약 (OVERVIEW)</div>
                <p>파스모포비아 v0.19.0.0 '삶의 질 2부' 업데이트로, 신규 제한구역 맵 추가, 장비 중복 증거 표시 도입, 저널 및 커스텀 난이도 편의성이 대폭 개선되었습니다.</p>
            </div>
            <div class="news-section-box">
                <div class="news-sub-title">2. 상세 업데이트 내역 (CHANGELOG)</div>
                <p><strong>&lt;신규&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>감옥, 브라운스톤 고등학교, 포인트 호프에 새롭게 제한구역을 추가했습니다.</li>
                    <li>비디오 카메라, 사진기 그리고 녹음기가 이제 중복 증거를 표시합니다.
                        <ul style="padding-left: 20px; margin-top: 4px;">
                            <li>1티어 사진기에는 노란색 LED 불이 들어옵니다.</li>
                            <li>2티어 및 3티어 사진기와 모든 티어의 비디오 카메라에는, 일반적인 굵은 흰색 문자 대신 희미한 문자가 표시됩니다.</li>
                            <li>1티어 녹음기는 음량 표시기의 밝기가 낮아집니다.</li>
                            <li>2티어 및 3티어 녹음기는 희미한 음파가 표시됩니다.</li>
                        </ul>
                    </li>
                    <li>저널에 이제 다른 유저가 고른 증거와 유령 종류 선택이 표시됩니다.</li>
                    <li>저널의 열쇠 섹션이 우리가 발견한 아이템으로 대체되며, 이 새로운 섹션에서는 열쇠, 뼈 그리고 시즌 이벤트 수집품이 표시됩니다.</li>
                    <li>커스텀 난이도에서 유령 유형을 선택할 수 있는 기능이 추가되며 배수는 0으로 설정됩니다.</li>
                    <li>커스터마이즈 상점에서 레거시 배지 섹션을 추가하여 언제든지 배지를 편집할 수 있습니다 (레거시 배지가 없는 플레이어는 이 옵션을 볼 수 없음).</li>
                    <li>튜토리얼 화이트보드에 '꾹 눌러서 사용' 포스트잇을 추가했습니다.</li>
                    <li>죽은 플레이어들과 죽은 플레이어들의 시신이 이제 죽은 것처럼 보입니다.</li>
                    <li>샤워기와 퓨즈 박스 상호작용에 신규 고유 비디오 증거 텍스트를 추가했습니다.</li>
                    <li>유령의 이름이 남성인지 여성인지 보여주는 아이콘을 추가했습니다.</li>
                    <li>증거 페이지에서 플레이어가 유령 종류를 고르면 해당 유령이 보여주는 증거를 강조하여 표시합니다.</li>
                </ul>
                <p><strong>&lt;변경&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>사진기와 비디오 카메라의 화면이 이제 벽을 뚫고 보여주지 않습니다.</li>
                    <li>말할 때, ID 카드의 스피커 아이콘이 이제 로컬 플레이어를 포함하여 모든 플레이어에게 작동합니다.</li>
                    <li>VR 캐릭터 리깅에 개선이 이루어져, 더 정확하고 반응하기 좋은 움직임이 가능해집니다.</li>
                    <li>이제 플레이어는 텍스트 음성 인식 모드를 사용할 때 들고 있지 않은 주파수 측정기와 상호작용할 수 있습니다.</li>
                    <li>0배율 커스텀 난이도는 업적이나 전단지 이벤트 진행에 인정되지 않습니다.</li>
                    <li>1티어 양초를 들고 있는 상태에서 사용 버튼을 눌렀을 때, 애니메이션이 끝날 때까지 기다리지 않고 다른 양초를 사용할 수 있습니다.</li>
                    <li>플레이어가 죽었을 때 애니메이션 종료 시점이 아닌 죽는 즉시 음성 채팅이 끊어집니다.</li>
                    <li>브라운스톤 고등학교와 감옥에서 트럭이 정문에 더 가까워졌습니다.</li>
                </ul>
                <p><strong>&lt;일반 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>연결이 끊기는 현상을 줄이기 위해 네트워크 안정성에 개선을 더했습니다.</li>
                    <li>유령이 올바르게 추측되었음에도 불구하고, 통계 화면이 열릴 때마다 '유령 식별 실패' 항목 횟수가 증가하는 문제를 수정했습니다.</li>
                    <li>방장이 로비를 떠나면 플레이어가 게임을 시작하지 못하던 문제를 수정했습니다 (방장의 ID 카드는 여전히 보임).</li>
                    <li>조사를 마친 후 플레이어 사진이 ID 카드에서 사라지는 문제를 수정했습니다.</li>
                    <li>플레이어에게 도전 과제가 있는 맵의 "테스트 레벨"을 주던 문제를 수정했습니다.</li>
                </ul>
                <p><strong>&lt;환경 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>은신처 없음 설정이 되어있음에도 은신처가 열려있는 문제를 수정했습니다.</li>
                    <li>문 닫는 애니메이션이 끝난 후에도 문 닫는 소리가 오래 재생되던 문제를 수정했습니다 (플레이어들이 이 문제를 유레이의 증거로 오인하곤 했음).</li>
                    <li>블리즈데일 농가의 벽지가 앨런 웨이크의 파스모포비아 이벤트 문양으로 바뀌는 문제를 수정했습니다.</li>
                    <li>써니 메도우의 여성 주간 휴게실의 은신처를 수정했습니다.</li>
                    <li>포인트 호프의 종을 고정하는 프레임이 사라지는 문제를 수정했습니다 (PS5 전용).</li>
                    <li>붉은 유령 방 이벤트 중 퓨즈 박스가 꺼질 때 조명이 계속해서 붉은색으로 유지되는 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지의 고정 TV VFX 관련 시각적 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지의 지하 거실에 있는 커피 테이블에 물건이 끼이는 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지에서 플레이어가 원숭이 손으로 '안전해지고 싶어' 소원을 빌었을 때 은신처가 동작하지 않던 문제를 수정했습니다.</li>
                    <li>십자가와 도트 프로젝터가 윌로우 스트리트 13번지의 러그와 체육관 매트 위에서 미끄러지는 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지 외부 산책로와 잔디에서 잘못된 발걸음 소리가 발생하던 문제를 수정했습니다.</li>
                    <li>거울 반사가 제대로 나타나지 않던 문제를 수정했습니다.</li>
                    <li>감옥의 감시실에서 플레이어가 가구 위로 올라갈 수 있던 문제를 수정했습니다.</li>
                    <li>엣지필드 도로 42번지의 주황색 침실에서 장비가 침대 위에 놓일 수 있던 문제를 수정했습니다.</li>
                </ul>
                <p><strong>&lt;장비 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>열린 저널 앞에 헤드기어가 나타나는 문제를 수정했습니다.</li>
                    <li>카드 덱에서 뽑았을 때 광대(The Fool) 타로 카드가 보이지 않는 문제를 수정했습니다.</li>
                    <li>3티어 정신력 회복 약을 여러 번 사용했을 때 스태미나 부스트가 제대로 초기화되지 않는 문제를 수정했습니다.</li>
                    <li>사진에 유령이 존재함에도 불구하고 유령이 감지되지 않던 문제를 수정했습니다.</li>
                    <li>우드윈드 캠프장과 메이플 롯지 캠프장 텐트에서 모션 센서가 비디오 카메라로 녹화되지 않던 문제를 수정했습니다.</li>
                    <li>외부에 있을 때나 음악 재생 중이거나 음악이 끝난 후에 뮤직 박스가 닫히지 않던 문제를 수정했습니다.</li>
                    <li>저널에서 한번 삭제했을 때 플레이어가 EMF 5단계 증거 사진을 찍지 못하던 문제를 수정했습니다.</li>
                    <li>3티어 녹음기가 녹음할 때 잘못된 애니메이션이 나오는 문제를 수정했습니다.</li>
                    <li>유령이 삼각대에 있는 비디오 카메라와 상호작용한 후 카메라가 사라지는 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지에 있는 아케이드 캐비닛 위에 작은 장비를 올려놓으면 사용할 수 없게 되는 문제를 수정했습니다.</li>
                    <li>선명도 설정이 1로 되어 있을 때 도트 녹화 시 시각적 문제를 일으키던 이슈를 수정했습니다.</li>
                    <li>장비가 오브젝트 아래에서 끼이는 문제를 해결했습니다.</li>
                    <li>1티어 또는 2티어 라이타의 불꽃이 꺼지면 떠오르는 문제를 수정했습니다.</li>
                    <li>방장이 아닌 플레이어가 삼각대에 연결된 비디오 카메라로 문을 조절할 수 있어서 문이 밀려나 다른 플레이어가 갇히는 문제를 수정했습니다.</li>
                    <li>매달린 남자(Hanged Man) 타로 카드를 뽑았을 때 카드가 죽은 플레이어와 함께 사망 공간으로 이동되어서 다른 플레이어가 죽은 플레이어의 위치를 볼 수 있던 문제를 수정했습니다 (이로 인해 다른 플레이어들은 더 이상 타로 카드를 사용할 수 없었음).</li>
                    <li>방장이 아닌 플레이어가 사냥하는 유령 소리를 녹음하지 못하던 문제를 수정했습니다.</li>
                    <li>폭우 시 1티어와 2티어 라이타가 꺼지지 않는 문제를 수정했습니다.</li>
                    <li>다른 라이타로 켜졌을 때 이미 불이 붙었음에도 불구하고 1티어 혹은 2티어 양초가 켜지지 않은 것으로 보이던 문제를 수정했습니다.</li>
                    <li>1티어 사진기 사용 애니메이션 도중 손전등이 플레이어 손에 계속 들려 있던 문제를 수정했습니다.</li>
                </ul>
                <p><strong>&lt;플레이어 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>플레이어 캐릭터의 손이 카메라보다 느리게 움직여 시각적 렉과 떨림 현상이 발생하던 문제를 수정했습니다.</li>
                    <li>플레이어의 목소리가 방장 캐릭터의 성별로 재생되던 문제를 수정했습니다.</li>
                    <li>플레이어가 3티어 손전등을 들고 앉았을 때 팔꿈치가 튀어나오는 문제를 수정했습니다 (이 수정은 모든 티어의 손전등 위치도 개선함).</li>
                    <li>플레이어가 사용 애니메이션 중에 1티어 사진 카메라를 변경할 수 없던 문제를 수정했습니다.</li>
                    <li>예언자(Seer) ID 카드와 배지에 징조(Manifestation) 문자가 표시되던 문제를 수정했습니다.</li>
                    <li>위자 보드를 사용 중 음성 인식 모드를 변경하면 플레이어가 소프트 락 상태가 되어 움직일 수 없던 문제를 수정했습니다.</li>
                    <li>커스터마이즈 상점에서 다른 영역으로 이동해도 UI가 화면에 남는 문제를 수정했습니다.</li>
                    <li>커스터마이즈 상점에서 스웨터 색상 아이콘이 잘못 표시되던 문제를 수정했습니다.</li>
                    <li>다른 플레이어가 같은 설정으로 위자 보드를 사용할 경우, 텍스트 음성 인식으로 주파수 측정기를 사용하면서 플레이어가 움직일 수 있던 문제를 수정했습니다.</li>
                    <li>플레이어가 캐릭터와 모자를 바꿀 때 머리카락이 의상을 뚫고 나오는 문제를 수정했습니다.</li>
                    <li>플레이어가 죽은 상태에서 서 있지 못하게 만드는 물체 아래에 앉아 있었다면, 부활할 때 플레이어의 시야가 다른 플레이어와 분리되는 문제를 수정했습니다.</li>
                    <li>방장이 게임을 나가면서 플레이어의 팔을 옆에 두면 애니메이션이 초기화되는 문제를 수정했습니다.</li>
                    <li>커스터마이즈 상점에 존재하지 않는 일반 천문학자 카드가 표시되던 문제를 수정했습니다.</li>
                    <li>원숭이 손으로 다른 플레이어를 부활시켰을 때, 죽은 플레이어의 저널이 다른 플레이어에게 여전히 보이던 문제를 수정했습니다.</li>
                    <li>사망한 선수의 모자로 인해 머리카락이 잘리던 문제를 수정했습니다.</li>
                    <li>죽은 플레이어가 장비를 획득할 수 있어 남은 플레이어들이 장비를 쓰지 못하게 되던 문제를 수정했습니다.</li>
                </ul>
                <p><strong>&lt;VR 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>VR에서 문을 여는 것이 의도보다 어려웠던 문제를 수정했습니다.</li>
                    <li>플레이어가 문과 상호작용하려 할 때 VR 조준선이 잘못 표시되던 문제를 수정했습니다.</li>
                    <li>텐트 문을 잡을 때 손 애니메이션이 깨지던 문제를 수정했습니다.</li>
                    <li>삼각대를 든 플레이어가 다른 플레이어에게 렉을 발생시키던 문제를 수정했습니다.</li>
                    <li>카메라가 장착된 삼각대를 사용해 문을 열 때 멀티플레이어에서 컬링이 발생하던 문제를 수정했습니다.</li>
                    <li>마이크로폰의 헤드폰이 플레이어의 시야를 가리던 문제를 수정했습니다.</li>
                    <li>플레이어가 걷거나 아이템을 들고 있을 때 손이 움직이던 문제를 수정했습니다.</li>
                    <li>멀티플레이에서 플레이어 몸이 앉았을 때 떨리던 문제를 수정했습니다.</li>
                    <li>유령이 문을 열었을 때 플레이어가 문에 밀려나던 문제를 수정했습니다.</li>
                    <li>무전기를 들고 있을 때 텔레포트 이동이 불가능했던 문제를 수정했습니다.</li>
                </ul>
            </div>
            <div class="news-section-box" style="margin-top: 14px;">
                <div class="news-sub-title">3. 알려진 문제 (KNOWN ISSUES)</div>
                <ul style="padding-left: 20px; margin-top: 4px;">
                    <li>감옥 제한구역에서 입구는 유령 상호작용이 적습니다.</li>
                    <li>플레이어들은 브라운스톤 고등학교 6번 교실에서 의자에 걸릴 수도 있습니다.</li>
                    <li>1티어 사진 카메라가 사용 애니메이션 중에 전환되거나 떨어지면 캐릭터 애니메이션이 깨질 수 있습니다.</li>
                    <li>신규 제한구역 맵에서 특정 봉쇄 구조물에 놓였을 때 설치 가능한 장비가 분실되거나 회수할 수 없게 될 수 있습니다.</li>
                    <li>비디오 카메라로 촬영한 증거에 대한 번역문이 영어를 사용하지 않는 플레이어에게는 제대로 표시되지 않을 수 있습니다.</li>
                    <li>마우스를 올려두었을 때 유령 유형의 증거가 강조 표시된 상태가 저널이 닫혀 있어도 계속 유지됩니다 (다른 고스트 유형 위에 마우스를 올려 켜고 끄면 해결 가능).</li>
                    <li>FidelityFX Super Resolution 1.0을 활성화했을 때 저널의 가독성에 문제가 발생합니다.</li>
                    <li>브라운스톤 고등학교 제한구역의 은신처에서 뼈가 생성될 수 있습니다 (은신처가 잠겨 있다면 플레이어가 뼈에 접근할 수 없음).</li>
                    <li>플레이어가 윗층만 접근할 수 있는 감옥 제한구역의 방문자 보안실(Visitation Security Room)에서 퓨즈박스가 생성될 수 있습니다.</li>
                    <li>탱글우드, 넬의 식당, 써니 메도우 제한구역 혹은 써니 메도우에서 플레이할 때, 플레이어는 선택한 캐릭터 대신 아미르 켈리(Amir Kelly)로 생성될 수 있습니다.</li>
                    <li>멀티플레이에서 플레이어가 마이크로폰을 켜자마자 떨어뜨리면, 마이크를 다시 집어들 때까지 다른 플레이어의 소리가 뭉개져 들립니다.</li>
                    <li>VR - 문과 겹쳐 있을 때 다른 플레이어가 문을 닫으면 헤드기어가 떨어질 수 있습니다.</li>
                    <li>VR - 캐릭터 프로필 사진이 로비에 참여할 때 빈 상태로 표시됩니다.</li>
                    <li>VR - 플레이어가 몰입 애니메이션을 켠 상태에서 죽었을 때, 캐릭터의 래그돌이 왜곡되고 뒤틀려 보입니다.</li>
                </ul>
            </div>
            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px dashed var(--card-border); text-align: right; font-size: 0.88rem; color: var(--accent-light);">
                ✨ <strong>Korean Translated by. 흠먐먀</strong>
            </div>
        `
    },
    {
        category: "Kinetic Publishing",
        icon: "🎮",
        date: "2026. 8. 13.",
        title: "Kinetic Publishing Showcase - In Case You Missed It",
        desc: "키네틱 퍼블리싱 첫 공식 쇼케이스 하이라이트 요약 및 신작 라인업 공개",
        img: "https://kineticgames.co.uk/assets/images/publishing-showcase-recap.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes"
    },
    {
        category: "Kinetic Publishing",
        icon: "🎮",
        date: "2026. 8. 12.",
        title: "Kinetic Publishing Showcase - 1 Day To Go!",
        desc: "키네틱 게임즈 산하 퍼블리싱 쇼케이스 일정 및 라이브 스트림 안내",
        img: "https://kineticgames.co.uk/assets/images/publishing-showcase-countdown.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 8. 11.",
        title: "Phasmophobia Quality of Life Part 2 Preview",
        desc: "2차 편의성(QoL) 업데이트 미리보기: 커뮤니티 피드백 기반 버그 픽스 및 편의 기능 개선",
        img: "https://kineticgames.co.uk/assets/images/news-banner-qol-part2.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 7. 28.",
        title: "Phasmophobia v0.18.0.1 - Patch Notes",
        desc: "v0.18.0.0 윌로우 리워크 업데이트 이후 안정화 및 주요 버그 핫픽스 패치 노트",
        img: "https://kineticgames.co.uk/assets/images/update-banner-v01801.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 7. 21.",
        title: "Phasmophobia v0.18.0.0 - Patch Notes",
        desc: "13 윌로우 스트리트 전면 리워크 & 1차 QoL 편의성(인벤토리 단축키 등) 대형 패치",
        img: "https://kineticgames.co.uk/assets/images/willow-rework-banner.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 7. 14.",
        title: "Phasmophobia Quality of Life Preview #2",
        desc: "장비 모션 속도 개선 및 인벤토리 슬롯 단축키 시스템 도입 세부 가이드",
        img: "https://kineticgames.co.uk/assets/images/news-banner-qol-preview2.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 7. 2.",
        title: "Phasmophobia Quality of Life Update Preview",
        desc: "여름 시즌 편의성 대개편 업데이트 세부 방향성 및 개선점 사전 공개",
        img: "https://kineticgames.co.uk/assets/images/news-banner-qol-overview.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 6. 24.",
        title: "Phasmophobia 2026 and Beyond",
        desc: "Unity 6 엔진 전환, 캐릭터 커스터마이징, 엣지필드 리워크 및 1.0 정식 출시 로드맵",
        img: "https://kineticgames.co.uk/assets/images/roadmap-2026-update.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 3. 3.",
        title: "6 Tanglewood Drive Rework - Phasmophobia v0.16.0.0",
        desc: "6 탱글우드 드라이브 맵 그래픽/루핑 루트 전면 리뉴얼 및 밸런스 조정",
        img: "https://kineticgames.co.uk/assets/images/tanglewood-rework-banner.webp",
        url: "https://www.kineticgames.co.uk/news/phasmophobia-v01901-patch-notes"
    }
];
