const GHOST_DATA = [
    {
        name: "스피릿",
        engName: "Spirit",
        evidences: ["EMF 5", "주파수 측정기", "고스트 라이팅"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+스피릿+공략",
        tip: `<strong>1. 사냥 및 정화향초 메커니즘</strong><br>
              • <strong>기본 사냥 조건:</strong> 평균 정신력이 <strong>50% 이하</strong>일 때 사냥을 시작합니다.<br>
              • <strong>이동 속도 및 시야 가속:</strong> 기본 이동 속도는 <strong>1.7 m/s</strong>이며, 표준 시야 가속(LOS Accel)이 정상 적용되어 최대 2.25 m/s까지 가속합니다.<br>
              • <strong>정화향초 봉인 특수 룰:</strong> 정화향초(Smudge Stick)에 정화될 경우, 일반 유령(90초)과 달리 <strong>180초(3분) 동안 사냥이 완전히 봉인</strong>됩니다.`,
        huntSanity: "50%",
        specialTrait: "정화향초 방어 시간이 기본(90초)의 2배인 180초입니다.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 사냥 메커니즘 (Hunt)</div>
            <p class="dict-text">
                • <strong>기본 사냥 조건:</strong> 평균 정신력이 <strong>50% 이하</strong>일 때 사냥을 시작합니다.<br>
                • <strong>이동 속도 및 시야 가속:</strong> 기본 이동 속도는 <strong>1.7 m/s</strong>이며, 플레이어를 시야(LOS)에 둘 경우 표준 시야 가속이 정상 적용되어 최대 2.25 m/s까지 증가합니다.<br>
                • <strong>정화향초 봉인 특수 룰:</strong> 정화향초(Smudge Stick)를 피워 스피릿을 정화할 경우, 일반 유령(90초)과 달리 <strong>180초(3분) 동안 사냥이 완전히 봉인</strong>됩니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • 주파수 측정기 (Spirit Box)<br>
                • 고스트 라이팅 (Ghost Writing)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 특수 능력이 없어 상호작용이나 행동만으로는 쉽게 특징을 드러내지 않습니다.<br>
                • <strong>약점 (Weakness):</strong> 정화향초에 노출되면 매우 긴 시간 동안 사냥 능력이 무력화됩니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>정화향초 타이머 감별법 (가장 확정적):</strong> 정신력 0% 상태에서 정화향초를 태운 직후 타이머를 잽니다. 90초~180초 사이에 사냥이 절대 터지지 않고 정확히 180초 이후 첫 사냥이 시작된다면 스피릿입니다.<br>
                • <strong>소거법 활용:</strong> 특수 속도 변화나 시각적 기믹이 전혀 없는 가장 표준적인 유령이므로, 다른 특수 유령들의 가능성을 모두 배제한 뒤 정화향초 타이머로 최종 확정짓는 것이 좋습니다.
            </p>
        `
    },
    {
        name: "레이스",
        engName: "Wraith",
        evidences: ["EMF 5", "주파수 측정기", "도트"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+레이스+공략",
        tip: `<strong>1. 사냥 및 특수 이동 메커니즘</strong><br>
              • <strong>기본 사냥 조건:</strong> 평균 정신력이 <strong>50% 이하</strong>일 때 사냥을 시작합니다.<br>
              • <strong>소금 면역 (절대 밟지 않음):</strong> 공중에 떠다니므로 <strong>소금을 절대로 밟지 않으며, 발자국 자외선 흔적도 남기지 않습니다.</strong><br>
              • <strong>플레이어 순간이동 능력:</strong> 사냥 중이 아닐 때 무작위 플레이어 위치로 순간이동(Teleport)하며, 직후 출발 지점에 EMF 2 또는 5가 발생합니다.`,
        huntSanity: "50%",
        specialTrait: "소금을 절대 밟지 않음, 순간이동 능력(EMF 2/5 발생), 벽/바닥 투과 이동.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: true,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 사냥 및 특수 이동 메커니즘 (Hunt & Movement)</div>
            <p class="dict-text">
                • <strong>기본 사냥 조건:</strong> 평균 정신력이 <strong>50% 이하</strong>일 때 사냥을 시작합니다.<br>
                • <strong>소금 면역 (절대 밟지 않음):</strong> 레이스는 설정상 땅에 발이 닿지 않고 떠다니므로 <strong>소금을 절대로 밟지 않으며, 발자국 UV 라이트 흔적도 남기지 않습니다.</strong><br>
                • <strong>플레이어 순간이동 능력:</strong> 사냥 중이 아닐 때, 맵 내 무작위 플레이어 한 명의 바로 옆 위치로 순간이동(Teleport)을 수행할 수 있습니다. 순간이동 직후 유령이 출발한 지점에 EMF 2 또는 EMF 5 신호가 발생합니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • 주파수 측정기 (Spirit Box)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 소금을 통해 이동 동선을 파악하거나 위치를 감지하기 불가능합니다.<br>
                • <strong>약점 (Weakness):</strong> 소금에 노출되었을 때 상호작용 반응이 전혀 나타나지 않으므로 즉시 정체가 탄로납니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>소금 테스트 (100% 확정):</strong> 고스트 룸이나 동선에 소금을 까놓고 유령을 유도했을 때, 소금 덩어리가 전혀 흐트러지지 않거나 발자국 자국이 남지 않는다면 레이스입니다.<br>
                • <strong>기습 EMF 반응:</strong> 고스트 룸과 멀리 떨어진 방에 서 있는데 갑자기 내 발밑에서 EMF 2 또는 EMF 5가 울린다면 레이스가 나에게 순간이동을 한 것입니다.
            </p>
        `
    },
    {
        name: "팬텀",
        engName: "Phantom",
        evidences: ["주파수 측정기", "UV 라이트", "도트"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+팬텀+공략",
        tip: `<strong>1. 시각적 특성 및 사냥 메커니즘</strong><br>
              • <strong>기본 사냥 조건:</strong> 평균 정신력이 <strong>50% 이하</strong>일 때 사냥을 시작합니다.<br>
              • <strong>직시 정신력 차감:</strong> 실체화된 팬텀을 바라볼 경우 <strong>초당 약 0.4%의 정신력이 급감</strong>합니다.<br>
              • <strong>사진 촬영 시 소멸:</strong> 사진을 찍으면 <strong>모습이 즉시 사라지며</strong>(사진 판정 정상), 사냥 시 <strong>투명하게 숨는 깜빡임 주기(1~2초)가 매우 깁니다.</strong>`,
        huntSanity: "50%",
        specialTrait: "직시 시 초당 정신력 0.4% 차감, 카메라인식 시 모습 소멸, 사냥 중 투명 시간 긺(1~2초).",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: true,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 시각적 특성 및 사냥 메커니즘 (Visual & Hunt)</div>
            <p class="dict-text">
                • <strong>기본 사냥 조건:</strong> 평균 정신력이 <strong>50% 이하</strong>일 때 사냥을 시작합니다.<br>
                • <strong>직시 정신력 차감:</strong> 실체화된 팬텀을 조준선에 두고 바라볼 경우 <strong>초당 약 0.4%의 정신력이 급격하게 차감</strong>됩니다.<br>
                • <strong>사진 촬영 시 소멸:</strong> 고스트 이벤트나 상호작용 중 팬텀의 사진을 찍으면 <strong>셔터 소리와 함께 유령 모습이 즉시 사라지고 오디오음만 남습니다.</strong> (저장된 사진 앨범에는 유령 형태가 비치지 않고 '유령 사진'으로 정상 판정)<br>
                • <strong>사냥 중 긴 투명 상태 (Blink Rate):</strong> 사냥 시 깜빡이는 주기 중 <strong>투명(Invisible)하게 숨는 시간이 1초~2초 정도로 매우 길어</strong> 유령의 형상을 보기 힘듭니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 주파수 측정기 (Spirit Box)<br>
                • UV 라이트 (Ultraviolet)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 유령을 오래 바라보는 것만으로 조사팀의 정신력을 순식간에 소진시킵니다.<br>
                • <strong>약점 (Weakness):</strong> 카메라로 사진을 찍히는 순간 실체화 형태가 강제로 소멸합니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>사진 찍기 테스트:</strong> 고스트 이벤트 시 사진을 찍었을 때 유령이 피식 사라지고 앨범에 유령 형체가 노이즈 없이 깨끗한 배경으로 나온다면 팬텀입니다.<br>
                • <strong>사냥 시 깜빡임 관찰:</strong> 유령이 보였다 안 보였다 하는 주기에서 안 보이는 유예시간이 유독 길다면 팬텀을 의심할 수 있습니다.
            </p>
        `
    },
    {
        name: "폴터가이스트",
        engName: "Poltergeist",
        evidences: ["주파수 측정기", "UV 라이트", "고스트 라이팅"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+폴터가이스트+공략",
        tip: `<strong>1. 물건 투척 및 사냥 메커니즘</strong><br>
              • <strong>기본 사냥 조건:</strong> 평균 정신력이 <strong>50% 이하</strong>일 때 사냥을 시작합니다.<br>
              • <strong>다중 물건 폭발 투척 (Polter Bomb):</strong> 물건이 모여 있을 때 <strong>여러 물건을 동시에 폭발하듯 던지는 특수 능력</strong>을 사용합니다.<br>
              • <strong>정신력 차감 & 0.5초 투척:</strong> 폭발 시 던져진 <strong>물건 1개당 정신력이 2%씩 차감</strong>되며, 사냥 중에도 0.5초마다 물건을 던집니다.`,
        huntSanity: "50%",
        specialTrait: "다중 물건 동시 투척, 사냥 시 0.5초마다 물건 투척, 투척 물건 1개당 정신력 2% 차감.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 물건 투척 및 사냥 메커니즘 (Polter Throw)</div>
            <p class="dict-text">
                • <strong>기본 사냥 조건:</strong> 평균 정신력이 <strong>50% 이하</strong>일 때 사냥을 시작합니다.<br>
                • <strong>다중 물건 폭발 투척 (Polter Bomb):</strong> 고스트 룸 주위에 물건이 뭉쳐 있을 때, <strong>여러 개의 물건을 동시에 큰 소리를 내며 사방으로 강하게 던지는 특수 능력</strong>을 씁니다.<br>
                • <strong>정신력 폭발 차감:</strong> 특수 능력으로 물건을 던질 때, <strong>던져진 물건 1개당 근처 플레이어의 정신력이 2%씩 무더기로 차감</strong>됩니다.<br>
                • <strong>사냥 시 빈번한 물건 투척:</strong> 사냥 중에도 0.5초마다 100% 확률로 주변 물건을 던지며 지나갑니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 주파수 측정기 (Spirit Box)<br>
                • UV 라이트 (Ultraviolet)<br>
                • 고스트 라이팅 (Ghost Writing)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 물건이 쌓인 곳에서 폭발 능력을 쓰면 정신력이 순식간에 바닥납니다.<br>
                • <strong>약점 (Weakness):</strong> 물건이 없는 텅 빈 방에서는 능력을 쓰지 못해 무력해집니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>물건 모으기 테스트 (폴터 탑):</strong> 컵, 접시, 촛대 등을 한곳에 수십 개 모아두었을 때 사방으로 한 번에 '쾅!' 하고 튀어 나간다면 폴터가이스트입니다.<br>
                • <strong>사냥 중 발소리와 투척음:</strong> 사냥 중 걸어올 때 끊임없이 물건이 요란하게 던져진다면 폴터가이스트를 확정할 수 있습니다.
            </p>
        `
    },
    {
        name: "밴시",
        engName: "Banshee",
        evidences: ["UV 라이트", "고스트 오브", "도트"],
        sanity: "타겟 정신력 50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+밴시+공략",
        tip: `<strong>1. 사냥 및 타겟팅 메커니즘</strong><br>
              • ※ 여성형 모델만 등장하는 특징이 있습니다.<br>
              • <strong>단일 타겟 지정:</strong> 무작위 1명을 타겟으로 지정하며, <strong>오직 타겟의 정신력이 50% 이하</strong>일 때만 사냥을 시작합니다.<br>
              • <strong>비타겟 무시 (몸통 통과):</strong> 사냥 중 오직 타겟만 추격하며, <strong>비타겟 플레이어와 부딪히거나 통과해도 절대 죽지 않습니다.</strong><br>
              • <strong>마이크로폰 비명:</strong> 마이크로폰으로 소리 감지 시 약 33% 확률로 <strong>특유의 날카로운 고유 비명(Wail)</strong>을 들려줍니다.`,
        huntSanity: "타겟 정신력 50%",
        specialTrait: "사냥 시 오직 타겟만을 추적하고 타겟이 아닌 플레이어는 통과함. 마이크로폰 특수 비명(Wail) 확률.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: true,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 사냥 및 타겟팅 메커니즘 (Hunt & Target)</div>
            <p class="dict-text">
                • ※ 여성형 모델만 등장하는 특징이 있습니다.<br>
                • <strong>단일 타겟 지정:</strong> 게임 시작 시 무작위로 1명의 플레이어를 '타겟(Target)'으로 지정하며 타겟이 사망하거나 집 밖으로 나가지 않는 한 타겟이 바뀌지 않습니다.<br>
                • <strong>사냥 기준 정신력:</strong> 전체 평균 정신력이 아니라 <strong>오직 지정된 타겟의 정신력이 50% 이하</strong>일 때만 사냥을 시작합니다.<br>
                • <strong>비타겟 플레이어 무시:</strong> 사냥 중 밴시는 오직 타겟만을 쫓으며, 비타겟 플레이어와 직접 부딪히거나 통과해도 <strong>비타겟 플레이어는 절대 죽지 않습니다.</strong><br>
                • <strong>타겟 부재 시 룰:</strong> 타겟이 집(조사 구역) 밖에 머물러 있다면 사냥 시 일반 유령처럼 근처에 있는 다른 플레이어를 추적합니다.<br>
                • <strong>모델 룰:</strong> 밴시는 설정상 항상 여성 유령 모델만 사용합니다.
            </p>
            <div class="dict-section-title">2. 상호작용 및 고유 행동 (Interaction)</div>
            <p class="dict-text">
                • <strong>스토킹 로밍 (Stalking Roam):</strong> 평소에 타겟이 위치한 곳으로 끊임없이 방을 이동(배회)하는 성향이 강합니다.<br>
                • <strong>마이크로폰 고유 비명:</strong> 마이크로폰으로 소리를 감지할 때, 약 33% 확률로 특유의 <strong>날카로운 비명/탄식 소리(Banshee's Wail)</strong>를 들려줍니다.
            </p>
            <div class="dict-section-title">3. 증거 (Evidence)</div>
            <p class="dict-text">
                • UV 라이트 (Ultraviolet)<br>
                • 고스트 오브 (Ghost Orb)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">4. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 타겟으로 지정된 사냥감을 집중적으로 약화시킨 후 기습합니다.<br>
                • <strong>약점 (Weakness):</strong> 마이크로폰을 사용하면 고유의 비명 소리로 정체를 즉시 특정당합니다.
            </p>
            <div class="dict-section-title">5. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>마이크로폰 테스트 (가장 확실):</strong> 마이크를 켜두고 특수 비명 소리가 들리는지 체크합니다.<br>
                • <strong>몸통 박치기 테스트:</strong> 사냥 시 유령이 자신을 보고도 무시하고 지나가거나 몸을 겹쳐도 죽지 않는다면 100% 밴시입니다.
            </p>
        `
    },
    {
        name: "다얀",
        engName: "Dayan",
        evidences: ["EMF 5", "주파수 측정기", "고스트 오브"],
        sanity: "정지 45% / 기본 50% / 이동 65%",
        speed: "정지 1.2 m/s / 기본 1.7 m/s / 이동 2.25 m/s",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+다얀+공략",
        tip: `<strong>핵심:</strong> 반경 10m 안에서 가장 가까운 플레이어의 움직임에 따라 사냥 정신력과 이동 속도가 달라집니다.`,
        huntSanity: "정지 45% / 기본 50% / 이동 65%",
        specialTrait: "10m 이내 가장 가까운 플레이어의 이동 여부에 따라 속도와 사냥 정신력이 변화합니다.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dayan-detail">
                <section class="dayan-hero-callout">
                    <div class="dayan-kicker">DAYAN · 속도 변화형 유령</div>
                    <h2>가까이 있는 플레이어가 움직이느냐에 따라<br><strong>다얀의 속도와 사냥 정신력이 바뀝니다.</strong></h2>
                    <p>핵심 판정 기준은 <strong>반경 10m 안에서 가장 가까운 플레이어</strong>입니다.</p>
                    <div class="dayan-stat-grid">
                        <div class="dayan-stat dayan-stat-slow"><span>정지</span><strong>1.20</strong><small>m/s · 45%</small></div>
                        <div class="dayan-stat dayan-stat-normal"><span>기본</span><strong>1.70</strong><small>m/s · 50%</small></div>
                        <div class="dayan-stat dayan-stat-fast"><span>이동</span><strong>2.25</strong><small>m/s · 65%</small></div>
                    </div>
                </section>

                <section class="dayan-section">
                    <div class="dayan-section-head"><span>01</span><div><h3>헌팅 메커니즘</h3><p>거리와 가장 가까운 플레이어의 상태가 핵심입니다.</p></div></div>
                    <div class="dayan-table-wrap">
                        <table class="dayan-table">
                            <thead><tr><th>상황</th><th>사냥 정신력</th><th>이동 속도</th></tr></thead>
                            <tbody>
                                <tr><td><strong>10m 이내 + 정지</strong><small>가장 가까운 플레이어가 정지</small></td><td><b class="dayan-value-low">45%</b></td><td><b class="dayan-speed-low">1.20 m/s</b></td></tr>
                                <tr><td><strong>10m 이내 + 이동</strong><small>가장 가까운 플레이어가 이동</small></td><td><b class="dayan-value-high">65%</b></td><td><b class="dayan-speed-high">2.25 m/s</b></td></tr>
                                <tr><td><strong>10m 밖</strong><small>특수 거리 조건 밖</small></td><td><b>50%</b></td><td><b>1.70 m/s</b></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="dayan-note"><strong>핵심 포인트</strong><p>여러 플레이어가 있어도 모든 사람의 상태를 동시에 적용하는 것이 아니라 <strong>다얀과 가장 가까운 플레이어</strong>의 상태가 기준이 됩니다.</p></div>
                </section>

                <section class="dayan-section">
                    <div class="dayan-section-head"><span>02</span><div><h3>속도 변화</h3><p>다얀을 식별할 때 가장 눈에 띄는 특징입니다.</p></div></div>
                    <div class="dayan-speed-cards">
                        <div class="dayan-speed-card slow"><span>PLAYER STILL</span><strong>1.20</strong><em>m/s</em><p>10m 이내 가장 가까운 플레이어가 정지한 상태</p></div>
                        <div class="dayan-speed-card normal"><span>NORMAL</span><strong>1.70</strong><em>m/s</em><p>특수 조건이 적용되지 않는 일반적인 상태</p></div>
                        <div class="dayan-speed-card fast"><span>PLAYER MOVING</span><strong>2.25</strong><em>m/s</em><p>10m 이내 가장 가까운 플레이어가 움직이는 상태</p></div>
                    </div>
                    <div class="dayan-flow"><div><b>01</b><strong>거리 확인</strong><p>가장 가까운 플레이어가 10m 이내인지 확인</p></div><i>→</i><div><b>02</b><strong>움직임 판정</strong><p>정지인지 이동 중인지 확인</p></div><i>→</i><div><b>03</b><strong>속도·정신력 변경</strong><p>조건에 맞는 값이 적용됨</p></div></div>
                </section>

                <section class="dayan-section">
                    <div class="dayan-section-head"><span>03</span><div><h3>세부 메커니즘</h3><p>단순히 “LOS 가속이 없다”라고 외우면 안 되는 부분입니다.</p></div></div>
                    <div class="dayan-detail-card"><h4>10m 안에서는 특수 속도가 우선 적용됩니다.</h4><p>다얀은 10m 이내에서 가장 가까운 플레이어의 상태에 따라 <strong>1.20 m/s 또는 2.25 m/s</strong>의 특수 속도가 적용됩니다.</p><p>따라서 일반 유령의 속도 변화 규칙만으로 다얀을 판단하면 실제 플레이에서 속도가 맞지 않게 느껴질 수 있습니다.</p></div>
                    <div class="dayan-warning"><strong>주의</strong><p>10m 조건과 플레이어의 이동 상태를 함께 봐야 합니다. 단순히 “다얀은 빠른 유령” 또는 “다얀은 LOS 가속이 없는 유령”처럼 한 문장으로만 외우는 것은 정확한 판별에 부족합니다.</p></div>
                </section>

                <section class="dayan-section">
                    <div class="dayan-section-head"><span>04</span><div><h3>고유 특성</h3><p>다얀을 다른 유령과 구분할 때 도움이 되는 특징입니다.</p></div></div>
                    <div class="dayan-feature-grid">
                        <article><b>10m</b><h4>거리 조건</h4><p>특수 속도와 사냥 정신력 변화의 핵심 범위입니다.</p></article>
                        <article><b>01</b><h4>가장 가까운 플레이어</h4><p>다얀의 상태 판정은 가장 가까운 플레이어를 기준으로 합니다.</p></article>
                        <article><b>♀</b><h4>여성 전용</h4><p>여성 이름과 여성 캐릭터 모델만 사용합니다.</p></article>
                    </div>
                </section>

                <section class="dayan-section">
                    <div class="dayan-section-head"><span>05</span><div><h3>강점 & 약점</h3><p>실전에서 다얀을 상대할 때 기억할 부분입니다.</p></div></div>
                    <div class="dayan-sw-grid">
                        <div class="dayan-strength"><h4>＋ 강점</h4><ul><li><strong>움직이는 플레이어에게 빠릅니다.</strong><br>10m 이내에서 이동 중인 플레이어를 기준으로 2.25 m/s가 적용됩니다.</li><li><strong>최대 65% 정신력에서 사냥할 수 있습니다.</strong><br>가까운 플레이어가 이동 중이면 일반적인 50% 기준보다 높은 정신력에서도 사냥이 가능합니다.</li></ul></div>
                        <div class="dayan-weakness"><h4>− 약점</h4><ul><li><strong>정지한 플레이어 주변에서는 매우 느립니다.</strong><br>10m 이내에서 가장 가까운 플레이어가 정지하면 1.20 m/s까지 감소합니다.</li><li><strong>속도 차이를 이용해 역으로 판별할 수 있습니다.</strong><br>안전한 상황에서 정지와 이동의 속도 차이를 관찰할 수 있습니다.</li></ul></div>
                    </div>
                </section>

                <section class="dayan-section">
                    <div class="dayan-section-head"><span>06</span><div><h3>판별 방법</h3><p>실전에서 다얀인지 확인하는 대표적인 테스트입니다.</p></div></div>
                    <div class="dayan-tests">
                        <article><span>TEST 01</span><h4>정지 테스트</h4><ol><li>안전한 상황에서 사냥을 시작합니다.</li><li>다얀과 10m 이내 거리를 유지합니다.</li><li>완전히 정지합니다.</li><li>유령의 속도가 크게 느려지는지 관찰합니다.</li></ol><b>관찰 포인트 · 약 1.20 m/s</b></article>
                        <article><span>TEST 02</span><h4>이동 테스트</h4><ol><li>다얀과 10m 이내 거리를 유지합니다.</li><li>이동을 시작합니다.</li><li>유령이 급격히 빨라지는지 관찰합니다.</li><li>정지했을 때와 속도 차이를 비교합니다.</li></ol><b>관찰 포인트 · 약 2.25 m/s</b></article>
                        <article><span>TEST 03</span><h4>거리 테스트</h4><ol><li>10m 밖으로 거리를 벌립니다.</li><li>특수 속도 변화가 사라지는지 확인합니다.</li><li>다시 10m 이내로 접근합니다.</li><li>속도 변화가 다시 나타나는지 비교합니다.</li></ol><b>관찰 포인트 · 10m가 핵심 경계</b></article>
                    </div>
                </section>

                <section class="dayan-section">
                    <div class="dayan-section-head"><span>07</span><div><h3>자주 헷갈리는 부분</h3><p>다얀을 잘못 판단하기 쉬운 대표적인 오해입니다.</p></div></div>
                    <div class="dayan-mistakes"><div><b>01</b><strong>“다얀은 항상 2.25 m/s다.”</strong><p>아닙니다. 10m 이내에서 가장 가까운 플레이어가 이동 중일 때 적용되는 속도입니다.</p></div><div><b>02</b><strong>“다얀의 사냥 정신력은 50%다.”</strong><p>아닙니다. 정지 상태에서는 45%, 이동 상태에서는 65%가 적용될 수 있습니다.</p></div><div><b>03</b><strong>“다얀은 그냥 빠른 유령이다.”</strong><p>속도 자체보다 10m 거리와 가장 가까운 플레이어의 움직임을 함께 보는 것이 핵심입니다.</p></div></div>
                </section>

                <section class="dayan-tip-box">
                    <span>NYONGSUMO TIP</span>
                    <h3>다얀은 <strong>“멈춰서”</strong> 확인하세요.</h3>
                    <p>다얀이 의심된다면 안전한 상황에서 10m 이내의 정지 상태와 이동 상태를 비교해 속도 차이를 관찰하는 것이 가장 직관적인 방법입니다.</p>
                    <div><b>정지</b><strong>1.20 m/s</strong><i>→</i><b>이동</b><strong>2.25 m/s</strong></div>
                </section>
            </div>
        `
    },
    {
        name: "데일드가스트",
        engName: "Deildegast",
        evidences: ["EMF 5", "고스트 라이팅", "도트"],
        sanity: "50%",
        speed: "초기 3.0 m/s ➔ 물건 투척 시 감소 (최저 0.4 m/s)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+데일드가스트+공략",
        tip: `<strong>1. 사냥 및 물건 투척 감속 메커니즘</strong><br>
              • <strong>초기 사냥 속도 (3.0 m/s):</strong> 사냥 시작 첫 순간에는 <strong>3.0 m/s라는 폭발적인 초고속</strong>으로 스폰합니다.<br>
              • <strong>투척 연동 감속:</strong> 사냥 중 주변 물건을 하나씩 던질 때마다 속도가 점차 깎여 나갑니다.<br>
              • <strong>최저 속도 (0.4 m/s):</strong> 물건을 총 26개 던지면 <strong>최저 0.4 m/s까지 둔화</strong>됩니다. (시야 가속 없음)`,
        huntSanity: "50%",
        specialTrait: "초기 속도 3.0m/s, 물건 던질 때마다 속도 감소 (26개 던지면 최저 0.4m/s).",
        forcedEvidence: "없음",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 사냥 메커니즘 (Hunt)</div>
            <p class="dict-text">
                • <strong>초기 사냥 속도:</strong> 사냥이 터지는 첫 순간에는 <strong>3.0 m/s라는 폭발적인 초고속</strong>으로 스폰합니다.<br>
                • <strong>상호작용 연동 감속:</strong> 사냥 중 주변 오브젝트(물건)를 하나씩 던질 때마다 이동 속도가 단계적으로 깎여 나갑니다.<br>
                • <strong>최저 속도 한계:</strong> 사냥 동안 물건을 총 26개 이상 던지게 되면 이동 속도가 <strong>최저 0.4 m/s까지 둔화</strong>됩니다.<br>
                • <strong>시야 가속 없음:</strong> 시야 가속(LOS Accel)은 적용되지 않습니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • 고스트 라이팅 (Ghost Writing)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 사냥 초반 물건을 던지기 전에는 레버넌트에 비견되는 위험한 속도로 돌진합니다.<br>
                • <strong>약점 (Weakness):</strong> 물건이 수두룩하게 쌓여 있는 방에서는 스스로 물건을 연달아 던지며 속도를 크게 낮춰버립니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>초반 정화향초 생존:</strong> 사냥 극초반에는 3.0m/s로 즉사 수준이므로 즉시 정화향초를 피우고 물건이 많은 곳으로 유도해야 합니다.
            </p>
        `
    },
    {
        name: "데오겐",
        engName: "Deogen",
        evidences: ["주파수 측정기", "고스트 라이팅", "도트"],
        sanity: "40%",
        speed: "원거리 3.0 m/s / 2.5m 이내 근접 시 0.4 m/s (시야가속 X)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+데오겐+공략",
        tip: `<strong>1. 사냥 및 은신 파괴 메커니즘</strong><br>
              • <strong>위치 자동 감지 (은신 불가):</strong> 사냥 시 맵 전체 플레이어 위치를 영구 감지하여 <strong>은신처에 숨어도 무조건 직진</strong>해옵니다.<br>
              • <strong>거리별 극단적 속도:</strong> 멀리 있을 때는 <strong>3.0 m/s</strong>로 빠르게 다가오지만, <strong>2.5m 이내로 들어오면 0.4 m/s</strong>로 극도로 느려집니다.<br>
              • <strong>주파수 측정기 고유 반응:</strong> 1m 내 주파수 측정기 사용 시 33% 확률로 <strong>'후욱- 후욱-' 하는 거친 중저음 숨소리</strong>를 냅니다. [고정 증거]`,
        huntSanity: "40%",
        specialTrait: "은신 파괴(숨기 불가), 2.5m 내 0.4m/s 감속, 주파수 측정기 거친 중저음 숨소리 반응.",
        forcedEvidence: "주파수 측정기",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: true,
        hasTargetRoam: true,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 사냥 메커니즘 (Hunt)</div>
            <p class="dict-text">
                • <strong>위치 자동 감지 (은신 파괴):</strong> 사냥 시 맵 전체의 모든 플레이어 위치를 영구적으로 감지하며, <strong>옷장/라커/벽 뒤 등 은신처에 숨어도 무조건 은신을 무시하고 직진</strong>해옵니다.<br>
                • <strong>거리별 가속/감속 극단화:</strong> 타겟과 멀리 떨어져 있을 때는 <strong>3.0 m/s</strong>로 격렬하게 다가오지만, 타겟과의 거리가 2.5m 이내로 들어오는 순간 <strong>0.4 m/s</strong>라는 달팽이 속도로 느려집니다.<br>
                • <strong>시야 가속 없음:</strong> 플레이어를 계속 주시해도 추가적인 시야 가속이 붙지 않습니다.
            </p>
            <div class="dict-section-title">2. 고유 주파수 측정기 반응 (Heavy Breathing)</div>
            <p class="dict-text">
                • 데오겐에게 1m 이내에서 주파수 측정기를 사용할 경우, 33% 확률로 대답 대신 <strong>'후욱- 후욱-' 하는 거칠고 기괴한 중저음 숨소리 반응</strong>이 수신됩니다. (데오겐 고정 증거)
            </p>
            <div class="dict-section-title">3. 증거 (Evidence)</div>
            <p class="dict-text">
                • 주파수 측정기 (Spirit Box) - <strong>[고정 증거]</strong><br>
                • 고스트 라이팅 (Ghost Writing)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">4. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 위치를 완벽히 알아내므로 어설프게 숨으면 무조건 사망합니다.<br>
                • <strong>약점 (Weakness):</strong> 근처에 다가오면 걸음걸이가 0.4m/s가 되므로 식탁이나 테이블을 끼고 원을 그리며 돌면 절대로 플레이어를 잡지 못합니다.
            </p>
            <div class="dict-section-title">5. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>절대 숨지 않기:</strong> 데오겐으로 확인되거나 발소리가 멀리서 3.0m/s로 나를 향해 일직선으로 달려온다면 넓은 공간으로 나와 빙글빙글 카이트(Looping)해야 합니다.
            </p>
        `
    },
    {
        name: "데몬",
        engName: "Demon",
        evidences: ["UV 라이트", "고스트 라이팅", "서늘함"],
        sanity: "기본 70% (특수 능력 사용 시 정신력 100% 사냥 가능)",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+데몬+공략",
        tip: `<strong>1. 사냥 및 무차별 기습 메커니즘</strong><br>
              • <strong>높은 기본 사냥 (70%):</strong> 평균 정신력 <strong>70% 이하</strong>부터 일반 사냥을 시작합니다.<br>
              • <strong>정신력 100% 기습 능력:</strong> 특수 능력으로 <strong>정신력이 100%여도 즉시 강제 사냥</strong>을 시작할 수 있습니다.<br>
              • <strong>사냥 쿨타임 20초 & 정화향초 60초:</strong> 사냥 쿨타임이 <strong>20초</strong>로 짧고, 정화향초 방어 시간이 <strong>60초</strong>에 불과합니다. (십자가 반경은 5m로 확대)`,
        huntSanity: "70% (능력 시 100%)",
        specialTrait: "정신력 100% 능 사냥, 사냥 쿨타임 20초, 정화향초 효과 60초 제한, 십자가 효과 범위 5m로 확대.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 사냥 메커니즘 (Hunt)</div>
            <p class="dict-text">
                • <strong>기본 높은 사냥 정신력:</strong> 평균 정신력이 <strong>70% 이하</strong>가 되면 일반 사냥을 시작합니다.<br>
                • <strong>정신력 100% 무차별 기습 능력:</strong> 데몬 고유 능력으로 정신력이 100%인 극초반 상태에서도 <strong>정신력을 무시하고 즉시 사냥을 강제 시작</strong>할 수 있습니다.<br>
                • <strong>짧은 사냥 재사용 쿨타임:</strong> 다음 사냥을 시작하기까지의 쿨타임이 <strong>20초</strong>로 매우 짧습니다.<br>
                • <strong>정화향초 디버프 저항:</strong> 정화향초에 노출되었을 때 사냥 봉인 시간이 <strong>60초</strong>에 불과합니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • UV 라이트 (Ultraviolet)<br>
                • 고스트 라이팅 (Ghost Writing)<br>
                • 서늘함 (Freezing Temperatures)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 예고 없이 끊임없이 사냥을 터뜨려 조사팀을 기습합니다.<br>
                • <strong>약점 (Weakness):</strong> 십자가의 유효 방어 반경이 일반 3m에서 <strong>5m로 대폭 증가</strong>합니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>초반 기습 사냥 타임 체크:</strong> 집에 들어간 지 1분도 안 되었는데 사냥이 터졌다면 데몬의 특수 능력입니다.
            </p>
        `
    },
    {
        name: "갈루",
        engName: "Gallu",
        evidences: ["EMF 5", "주파수 측정기", "UV 라이트"],
        sanity: "50%",
        speed: "기본 1.7 m/s / 분노 상태 1.96 m/s / 약화 상태 1.44 m/s",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+갈루+공략",
        tip: `<strong>1. 3단계 상태 변환 메커니즘</strong><br>
              • <strong>상태 순환:</strong> [일반(1.7m/s) ➔ 분노(1.96m/s) ➔ 약화(1.44m/s)] 순서로 성격이 변화합니다.<br>
              • <strong>분노 트리거:</strong> 방어 장비(소금, 십자가, 정화향초)에 자극받으면 즉시 분노 상태가 됩니다.<br>
              • <strong>분노 시 소금 면역:</strong> 분노 상태에서는 <strong>1.96 m/s로 빨라지며 소금을 밟아도 자국을 전혀 남기지 않습니다.</strong>`,
        huntSanity: "50%",
        specialTrait: "일반 ➔ 분노(1.96m/s) ➔ 약화(1.44m/s) 3단계 상태 변화. 분노 시 소금 밟아도 자국 안 남김.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 사냥 및 상태 변환 메커니즘 (State Cycle)</div>
            <p class="dict-text">
                • <strong>3단계 상태 순환:</strong> [일반 상태(1.7m/s) ➔ 분노 상태(1.96m/s) ➔ 약화 상태(1.44m/s)] 순서로 성격이 변화합니다.<br>
                • <strong>분노 트리거:</strong> 방어 장비(소금 밟기, 십자가 태우기, 정화향초 노출)에 자극을 받으면 즉시 분노 상태로 전환됩니다.<br>
                • <strong>분노 상태 특성:</strong> 속도가 <strong>1.96 m/s로 상승</strong>하며, 사냥 중 소금을 밟아도 <strong>소금 자국/UV 라이트를 전혀 남기지 않습니다.</strong>
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • 주파수 측정기 (Spirit Box)<br>
                • UV 라이트 (Ultraviolet)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 방어 장비를 사용하면 할수록 더 빠르고 위협적으로 변합니다.<br>
                • <strong>약점 (Weakness):</strong> 분노 사냥을 버텨내고 나면 다음 사냥에서 현저히 느려집니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>소금 자국 체크:</strong> 소금을 밟는 소리는 나지만 UV 라이트로 보았을 때 소금 자국이 안 남는다면 분노 상태의 갈루입니다.
            </p>
        `
    },
    {
        name: "고료",
        engName: "Goryo",
        evidences: ["EMF 5", "UV 라이트", "도트"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+고료+공략",
        tip: `<strong>1. 도트 상호작용 및 룸 고정 특수 룰</strong><br>
              • <strong>비디오 카메라 전용 관찰:</strong> 도트는 <strong>육안으로 볼 수 없으며 오직 비디오 카메라 화면을 통해서만</strong> 모습을 드러냅니다.<br>
              • <strong>플레이어 부재 필수:</strong> 방 안에 플레이어가 1명이라도 서 있으면 도트를 절대 발동하지 않습니다.<br>
              • <strong>고스트 룸 변경 없음:</strong> 고스트 룸을 절대 변경하지 않는 강한 애착을 보입니다. [도트 고정 증거]`,
        huntSanity: "50%",
        specialTrait: "도트 고정 증거, 사람이 방에 없어야 카메라로만 도트 관찰 가능, 고스트 룸을 거의 변경하지 않음.",
        forcedEvidence: "도트",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: true,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 도트 상호작용 특수 룰 (Goryo 도트)</div>
            <p class="dict-text">
                • <strong>비디오 카메라 전용 관찰:</strong> 고료의 도트는 <strong>육안으로 절대 볼 수 없으며, 오직 비디오 카메라 화면을 통해서만</strong> 모습을 드러냅니다.<br>
                • <strong>부재 조건 필수:</strong> 같은 방에 플레이어가 단 한 명이라도 서 있으면 도트를 절대로 발동하지 않습니다.<br>
                • <strong>고스트 룸 변경 없음:</strong> 고료는 고스트 룸을 절대 변경하지 않는 강한 애착 성향을 보입니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • UV 라이트 (Ultraviolet)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector) - <strong>[고정 증거]</strong>
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 방 안에서 직접 관찰할 때는 도트 증거를 완전히 숨깁니다.<br>
                • <strong>약점 (Weakness):</strong> 고스트 룸 이탈률이 낮아 방 변경에 따른 혼선이 없습니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>트럭 모니터 관찰:</strong> 카메라인 상태로 방에서 모두 나온 뒤 트럭 모니터로 관찰하는 것이 정석입니다.
            </p>
        `
    },
    {
        name: "한투",
        engName: "Hantu",
        evidences: ["UV 라이트", "고스트 오브", "서늘함"],
        sanity: "50%",
        speed: "온도에 따라 1.4 m/s ~ 2.7 m/s (시야 가속 없음)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+한투+공략",
        tip: `<strong>1. 온도 기반 이동 속도 & 입김 메커니즘</strong><br>
              • <strong>온도 비례 속도:</strong> 방의 온도가 낮을수록 극단적으로 빨라집니다. (15°C 이상: 1.4 m/s ➔ <strong>0°C 이하: 2.7 m/s</strong>)<br>
              • <strong>시야 가속 없음:</strong> 플레이어를 오래 바라보아도 추가 시야 가속이 오르지 않습니다.<br>
              • <strong>입김 가시화:</strong> 두꺼비집이 꺼진 사냥 중 <strong>입에서 차가운 흰 입김 가스</strong>가 뿜어져 나옵니다. [서늘함 고정 증거]`,
        huntSanity: "50%",
        specialTrait: "서늘함 고정 증거, 온도가 낮은 방에서 최대 2.7m/s, 두꺼비집 내림 선호, 헌팅 시 입김 가시화, 시야 가속 없음.",
        forcedEvidence: "서늘함",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: true,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 온도 기반 이동 속도 (Temperature Speed)</div>
            <p class="dict-text">
                • <strong>온도 비례 속도:</strong> 지나가는 위치의 온도가 낮을수록 극단적으로 빨라집니다.<br>
                • <strong>15°C 이상:</strong> 1.4 m/s (극도로 느림)<br>
                • <strong>0°C 이하 (서늘한 방):</strong> <strong>2.7 m/s (매우 빠름)</strong><br>
                • <strong>시야 가속 없음:</strong> 플레이어를 오래 바라보아도 추가 시야 가속이 적용되지 않습니다.<br>
                • <strong>입김 가시화:</strong> 두꺼비집이 꺼진 사냥 중 입에서 차가운 흰 입김 가스가 뿜어져 나옵니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • UV 라이트 (Ultraviolet)<br>
                • 고스트 오브 (Ghost Orb)<br>
                • 서늘함 (Freezing Temperatures) - <strong>[고정 증거]</strong>
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 차가운 어두운 복도나 방에서는 가속 없이도 2.7m/s로 기습 사살합니다.<br>
                • <strong>약점 (Weakness):</strong> 두꺼비집을 꺼두면 온도가 높으면 1.4m/s로 쉽게 도망칠 수 있습니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>두꺼비집 전원 유지:</strong> 두꺼비집을 무조건 켜두어 집 전체 온도를 높이는 것이 살길입니다.
            </p>
        `
    },
    {
        name: "진",
        engName: "Jinn",
        evidences: ["EMF 5", "UV 라이트", "서늘함"],
        sanity: "50%",
        speed: "3m 이내 접근 전 2.5 m/s ➔ 3m 이내 감속 1.7 m/s (두꺼비집 켜짐 시)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+진+공략",
        tip: `<strong>1. 두꺼비집 돌진 & 정신력 차감 메커니즘</strong><br>
              • <strong>두꺼비집 켜짐 필수:</strong> 두꺼비집이 켜져 있을 때만 가속 능력이 발동합니다.<br>
              • <strong>원거리 돌진 (2.5 m/s):</strong> 3m 이상 떨어져 있으면 <strong>즉시 2.5 m/s로 돌진</strong>하며, <strong>3m 이내로 들어오면 1.7 m/s로 감속</strong>합니다.<br>
              • <strong>두꺼비집 차단 불가:</strong> 진은 두꺼비집 전원을 수동으로 내리지 못하며, 플레이어 정신력 25% 즉시 차감 능력을 씁니다.`,
        huntSanity: "50%",
        specialTrait: "두꺼비집을 절대 내리지 못함, 두꺼비집 켜짐 시 먼 거리에서 2.5m/s 도달 가속, 근처 플레이어 정신력 25% 차감 능력.",
        forcedEvidence: "없음",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 두꺼비집 돌진 메커니즘 (Jinn Charge)</div>
            <p class="dict-text">
                • <strong>두꺼비집 활성화 필수:</strong> 두꺼비집이 켜져 있을 때만 특수 가속이 작동합니다.<br>
                • <strong>장거리 시야 가속 (2.5 m/s):</strong> 거리 3m 이상 떨어져 있으면 <strong>즉시 2.5 m/s로 돌진</strong>합니다.<br>
                • <strong>근접 감속 (1.7 m/s):</strong> 3m 이내로 들어오는 순간 <strong>1.7 m/s로 발소리가 둔해집니다.</strong><br>
                • <strong>두꺼비집 차단 불가:</strong> 진은 두꺼비집 전원을 수동으로 내리지 못합니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • UV 라이트 (Ultraviolet)<br>
                • 서늘함 (Freezing Temperatures)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 멀리 있는 먹잇감을 순식간에 추격합니다.<br>
                • <strong>약점 (Weakness):</strong> 두꺼비집을 꺼두면 가속 능력이 완전히 상실됩니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>발소리 패턴 감별:</strong> 멀리서 빠르게 달려오다가 코앞에서 둔해지는 발소리를 들으면 진입니다.
            </p>
        `
    },
    {
        name: "메어",
        engName: "Mare",
        evidences: ["주파수 측정기", "고스트 오브", "고스트 라이팅"],
        sanity: "어둠 속 60% / 불 켜진 방 40%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+메어+공략",
        tip: `<strong>1. 어둠 및 사냥 정신력 메커니즘</strong><br>
              • <strong>어둠 속 사냥 (60%):</strong> 불이 꺼진 방에서는 <strong>정신력 60% 이하</strong>부터 사냥을 시작합니다.<br>
              • <strong>불 켜진 방 억제 (40%):</strong> 방의 불이 켜져 있으면 <strong>정신력이 40% 이하로 떨어지기 전까지 사냥을 시작하지 못합니다.</strong><br>
              • <strong>스위치 즉시 끄기:</strong> 플레이어가 켠 전등 스위치를 0초 만에 '딸깍' 하고 즉시 꺼버리는 능력을 자주 씁니다.`,
        huntSanity: "불 꺼짐 60% / 켜짐 40%",
        specialTrait: "전등 스위치 즉시 끄기 능력, 불이 켜진 방에서 사냥 불가능(40% 이하 제외), 두꺼비집 내림 선호.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 어둠 및 사냥 정신력 메커니즘 (Darkness Hunt)</div>
            <p class="dict-text">
                • <strong>어둠 속 사냥 정신력 (60%):</strong> 고스트 룸의 불이 꺼져 있으면 <strong>정신력 60% 이하</strong>부터 사냥을 터뜨릴 수 있습니다.<br>
                • <strong>불 켜진 방 사냥 억제 (40%):</strong> 고스트 룸의 전등이 켜져 있으면 <strong>정신력이 40% 이하로 떨어지기 전까지 사냥을 시작할 수 없습니다.</strong><br>
                • <strong>전등 스위치 즉시 끄기 (Instant Switch Off):</strong> 플레이어가 전등 스위치를 켜는 순간, <strong>0초만에 즉시 '딸깍' 하고 스위치를 다시 꺼버리는 고유 능력</strong>을 자주 사용합니다.<br>
                • <strong>전등 켜기 불가:</strong> 메어는 절대로 전등 스위치를 스스로 켜지 않습니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 주파수 측정기 (Spirit Box)<br>
                • 고스트 오브 (Ghost Orb)<br>
                • 고스트 라이팅 (Ghost Writing)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 어둠 속에서 상주할 경우 높은 정신력에서도 연속 사냥을 시도합니다.<br>
                • <strong>약점 (Weakness):</strong> 고스트 룸의 전등을 지속적으로 켜두면 사냥을 매우 효과적으로 차단할 수 있습니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>스위치 즉시 끄기 밀당 테스트:</strong> 방 불을 켰을 때 1초도 안 되어 유령이 켜자마자 바로 꺼버린다면 메어일 가능성이 99%입니다.<br>
                • <strong>불 켜두기 공략:</strong> 메어 상대 시 고스트 룸과 이동 동선의 전등을 항상 켜두어 정신력 40% 전까지 사냥을 봉인해야 합니다.
            </p>
        `
    },
    {
        name: "마일링",
        engName: "Myling",
        evidences: ["EMF 5", "UV 라이트", "고스트 라이팅"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+마일링+공략",
        tip: `<strong>1. 정숙한 사냥 발소리 메커니즘</strong><br>
              • <strong>기본 사냥 조건:</strong> 평균 정신력 <strong>50% 이하</strong>에서 사냥을 시작합니다.<br>
              • <strong>발소리 가청 범위 차단:</strong> 일반 유령과 달리 <strong>전자기기 교란 범위(약 10m 이내)로 바짝 다가와야만 발소리가 들리기 시작</strong>합니다.<br>
              • <strong>손전등 깜빡임과 동기화:</strong> 바닥에 둔 손전등이 깜빡거리기 시작하는 순간에야 비로소 발소리가 울립니다.`,
        huntSanity: "50%",
        specialTrait: "정숙한 발소리(전자기기 교란 범위인 10m 내에서만 발소리 들림), 마이크로폰 상호작용 소리 빈도 높음.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 정숙한 사냥 발소리 메커니즘 (Silent Footsteps)</div>
            <p class="dict-text">
                • <strong>기본 사냥 조건:</strong> 평균 정신력 <strong>50% 이하</strong>에서 사냥을 시작합니다.<br>
                • <strong>사냥 발소리 가청 범위 차단:</strong> 일반 유령의 발소리는 약 20m 거리까지 또렷하게 들리지만, 마일링은 <strong>전자기기 교란 범위(약 10m 이내)로 바짝 다가와야만 비로소 발소리가 들리기 시작합니다.</strong><br>
                • <strong>괴성/웅얼거림 오디오:</strong> 유령의 입에서 나는 웅얼거리는 사냥 소리는 정상 거리에서 들리지만, '발소리'만 유독 닿는 거리에서 조용합니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • UV 라이트 (Ultraviolet)<br>
                • 고스트 라이팅 (Ghost Writing)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 발소리가 조용해 유령이 벽 너머나 코앞까지 걸어오는 줄 모르고 방심하다 기습당하기 쉽습니다.<br>
                • <strong>약점 (Weakness):</strong> 손전등이 깜빡이기 시작하는 거리와 발소리가 들리기 시작하는 타이밍이 정확히 일치하여 감별하기 쉽습니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>손전등 & 발소리 동기화 테스트:</strong> 켜둔 손전등이 미친 듯이 노이즈를 일으키는 10m 거리 안으로 들어왔을 때 비로소 발소리가 뚜벅뚜벅 들린다면 마일링입니다.
            </p>
        `
    },
    {
        name: "모로이",
        engName: "Moroi",
        evidences: ["주파수 측정기", "고스트 라이팅", "서늘함"],
        sanity: "50%",
        speed: "정신력 감소에 따라 1.5 m/s ➔ 최대 2.25 m/s (시야 가속 별도 추가)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+모로이+공략",
        tip: `<strong>1. 저주 시스템 & 정신력 비례 가속 메커니즘</strong><br>
              • <strong>저주 부여 (Curse):</strong> 주파수 측정기로 응답을 들으면 <strong>불 켜진 곳에서도 정신력이 2배 빠른 속도로 지속 감소</strong>합니다.<br>
              • <strong>정신력 연동 기본 속도:</strong> 정신력이 낮을수록 기본 발소리가 빨라집니다. (50%: 1.5m/s ➔ <strong>0%: 2.25m/s</strong>)<br>
              • <strong>시야 가속 중첩 & 정화향초 12초:</strong> 시야 가속이 별도로 중첩(최대 3.71m/s)되며, 정화향초 피격 시 <strong>12초간 시야가 마비</strong>됩니다. [주파수 측정기 고정 증거]`,
        huntSanity: "50%",
        specialTrait: "주파수 측정기 고정 증거, 음성 대화 수신 시 2배 저주, 정신력 비례 사냥 속도 증가(최대 2.25m/s), 정화향초 실명 시간 12초.",
        forcedEvidence: "주파수 측정기",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: true,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 저주 시스템 & 정신력 비례 가속 메커니즘</div>
            <p class="dict-text">
                • <strong>저주 부여 (Curse):</strong> 주파수 측정기로 대답을 들은 플레이어는 저주에 걸려 <strong>조명이 켜진 곳에 있어도 정신력이 2배 속도로 연속 감소</strong>합니다.<br>
                • <strong>정신력 연동 기본 속도:</strong> 조사팀의 정신력이 낮아질수록 사냥 기본 이동 속도가 지속적으로 상승합니다.<br>
                &nbsp;&nbsp;- 정신력 50%일 때: 1.5 m/s<br>
                &nbsp;&nbsp;- 정신력 0%일 때: <strong>2.25 m/s (기본 발소리가 엄청나게 빠름)</strong><br>
                • <strong>시야 가속 보너스:</strong> 정신력 저하에 따른 기본 가속에 더해, <strong>시야 가속(LOS Accel)이 별도로 중첩</strong>되어 시야에 포착되면 최대 3.71 m/s까지 도달합니다.<br>
                • <strong>정화향초 패시브 약점:</strong> 사냥 중 정화향초를 맞으면 일반 유령(6초)보다 2배 긴 <strong>12초 동안 시야가 차단되어 기절</strong>합니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 주파수 측정기 (Spirit Box) - <strong>[고정 증거]</strong><br>
                • 고스트 라이팅 (Ghost Writing)<br>
                • 서늘함 (Freezing Temperatures)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 저주와 저정신력이 결합하면 시야 가속까지 붙어 도망치는 것이 불가능해집니다.<br>
                • <strong>약점 (Weakness):</strong> 정화향초에 피격 시 무려 12초간 정지하므로 도망칠 시간이 넉넉하게 확보됩니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>주파수 측정기 후 양약 복용:</strong> 주파수 측정기로 응답을 들은 즉시 저주를 풀기 위해 정신력 약을 복용해야 합니다.<br>
                • <strong>정화향초 타이머:</strong> 사냥 중 정화향초를 피우고 유령이 방황하는 시간을 쟀을 때 12초 동안 멍때린다면 모로이입니다.
            </p>
        `
    },
    {
        name: "오바케",
        engName: "Obake",
        evidences: ["EMF 5", "UV 라이트", "고스트 오브"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+오바케+공략",
        tip: `<strong>1. 형체 변신 및 UV 라이트 특수 룰</strong><br>
              • <strong>사냥 중 형체 변신 (Shape-Shift):</strong> 사냥 깜빡임 중 6.6% 확률로 <strong>다른 외형 모델로 순간 변신했다가 복귀</strong>합니다. (헌팅당 최소 1회 발동)<br>
              • <strong>6손가락 특수 지문:</strong> UV 라이트를 남길 때 <strong>16.7% 확률로 독특한 6손가락 지문</strong>을 생성합니다.<br>
              • <strong>UV 라이트 감추기/단축:</strong> 상호작용 시 25% 확률로 UV 라이트를 안 남기거나, 수명을 절반(1분)으로 줄여 지웁니다. [UV 라이트 고정 증거]`,
        huntSanity: "50%",
        specialTrait: "UV 라이트 고정 증거, 16.7% 확률 6손가락 표식, UV 라이트 수명 절반 단축, 사냥 중 깜빡임 시 6.6% 확률 모델 변신(Shape-shift).",
        forcedEvidence: "UV 라이트",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: true,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 형체 변신 및 UV 라이트 특수 룰 (Shapeshifter)</div>
            <p class="dict-text">
                • <strong>사냥 중 형체 변신 (Shape-Shift):</strong> 사냥 시 유령이 깜빡이는 순간 중 6.6% 확률로 <strong>다른 외형 모델(남성/여성/아이 등)로 순간적으로 변신했다가 원래 모습으로 돌아옵니다.</strong> (헌팅당 최소 1회 이상 무조건 발동)<br>
                • <strong>6손가락 지문 (Special Fingerprint):</strong> 문, 창문, 스위치 등에 UV 라이트를 남길 때 <strong>16.7% 확률로 독특한 6손가락 지문</strong>을 생성합니다.<br>
                • <strong>UV 라이트 안 남기기 & 지우기:</strong> 상호작용 시 25% 확률로 UV 라이트를 남기지 않거나, 남은 UV 라이트 수명을 절반(1분)으로 줄여 일찍 지워버립니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • UV 라이트 (Ultraviolet) - <strong>[고정 증거]</strong><br>
                • 고스트 오브 (Ghost Orb)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> UV 라이트를 가끔 남기지 않거나 일찍 지워 증거 수집을 혼란스럽게 합니다.<br>
                • <strong>약점 (Weakness):</strong> 사냥 시 변신하는 순간을 목격하거나 6손가락 자국을 발견하는 즉시 확정됩니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>사냥 관찰 (변신 목격):</strong> 안전지대에서 사냥 중인 오바케를 유심히 바라보며 깜빡일 때 유령 겉모습이 순간적으로 바뀌는지 체크합니다.<br>
                • <strong>6손가락 사진:</strong> 자외선 라이트로 문을 찍었을 때 손가락 마디가 6개라면 100% 오바케입니다.
            </p>
        `
    },
    {
        name: "오밤보",
        engName: "Obambo",
        evidences: ["UV 라이트", "고스트 라이팅", "도트"],
        sanity: "50%",
        speed: "공격적 상태 1.9 m/s / 차분함 상태 1.4 m/s",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+오밤보+공략",
        tip: `<strong>1. 주기적 성격 및 속도 변환 메커니즘</strong><br>
              • <strong>2분 성격 교체:</strong> 정확히 <strong>2분 간격</strong>으로 '공격적 상태'와 '차분한 상태'를 번갈아 바꿉니다.<br>
              • <strong>공격적 상태 (1.9 m/s):</strong> 발소리가 일반보다 또렷하게 빠른 <strong>1.9 m/s</strong>로 이동합니다.<br>
              • <strong>차분함 상태 (1.4 m/s):</strong> 발소리가 <strong>1.4 m/s</strong>로 확연하게 느려집니다. (시야 가속 정상 적용)`,
        huntSanity: "50%",
        specialTrait: "2분 주기 상태 변화 (공격적 1.9m/s vs 차분함 1.4m/s), 시야 가속 적용.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 주기적 성격 및 속도 변환 메커니즘</div>
            <p class="dict-text">
                • <strong>2분 성격 교체 (State Cycle):</strong> 정확히 <strong>2분 간격</strong>으로 '공격적 상태'와 '차분한 상태'를 번갈아가며 주기를 바꿉니다.<br>
                • <strong>공격적 상태 (1.9 m/s):</strong> 발소리가 일반(1.7m/s)보다 또렷하게 빠른 <strong>1.9 m/s</strong>로 이동하며, 상호작용 빈도가 늘어납니다.<br>
                • <strong>차분함 상태 (1.4 m/s):</strong> 발소리가 <strong>1.4 m/s</strong>로 확연하게 느려져 유유히 걸어 다닙니다.<br>
                • <strong>시야 가속 정상 적용:</strong> 어떤 상태이든 플레이어를 바라보면 추가 시야 가속이 오릅니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • UV 라이트 (Ultraviolet)<br>
                • 고스트 라이팅 (Ghost Writing)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 공격적 주기에는 빠른 속도로 플레이어를 압박합니다.<br>
                • <strong>약점 (Weakness):</strong> 차분함 주기 사냥 시 속도가 1.4m/s로 떨어져 안전하게 도망칠 수 있습니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>연속 사냥 발소리 비교:</strong> 방어 장비 자극과 무관하게, 사냥마다 발소리가 약간 빠른 발소리(1.9m/s)와 확 느린 발소리(1.4m/s)로 2분 주기로 달라진다면 오밤보입니다.
            </p>
        `
    },
    {
        name: "오니",
        engName: "Oni",
        evidences: ["EMF 5", "서늘함", "도트"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+오니+공략",
        tip: `<strong>1. 왕성한 활동 & 사냥 실체화 메커니즘</strong><br>
              • <strong>사냥 중 긴 실체화 (Short Blink):</strong> 사냥 시 <strong>투명하게 숨는 시간이 극도로 짧고 실체화된 모습을 훨씬 길게 노출</strong>합니다.<br>
              • <strong>강력한 고스트 이벤트:</strong> 상호작용 및 이벤트를 매우 자주 일으키며, 이벤트 접촉 시 <strong>정신력을 20% 차감</strong>합니다.<br>
              • <strong>안개 이벤트 불가능:</strong> '귓속말 입김(Air Ball)' 안개 형태 이벤트를 절대 하지 못하고 무조건 실체로 나타납니다.`,
        huntSanity: "50%",
        specialTrait: "고스트 이벤트 시 정신력 20% 차감, 안개 형태 이벤트 불가능, 사냥 중 깜빡임 투명 시간 극단적으로 짧음(실체화 길게 유지).",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 왕성한 활동 & 사냥 실체화 메커니즘</div>
            <p class="dict-text">
                • <strong>사냥 중 긴 실체화 (Short Blink):</strong> 팬텀과 반대로, 오니는 사냥 중 <strong>투명하게 숨는 시간이 극도로 짧고 실체화된 모습을 훨씬 오랫동안 노출</strong>합니다.<br>
                • <strong>강력한 고스트 이벤트:</strong> 플레이어 근처에 나타나는 상호작용 및 고스트 이벤트를 엄청나게 자주 터뜨리며, 이벤트 접촉 시 <strong>정신력을 20%나 깎아냅니다.</strong><br>
                • <strong>입김/안개 이벤트 불가능:</strong> 오니는 '귓가에 '귓속말 입김(Air Ball)'을 불어넣어 정신력을 깎는 안개 실체화 이벤트를 절대 하지 못하며, 무조건 실체 형태로 나타납니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • 서늘함 (Freezing Temperatures)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 이벤트 공격으로 조사팀의 정신력을 매우 빠르게 깎아냅니다.<br>
                • <strong>약점 (Weakness):</strong> 사냥 시 모습을 거의 계속 드러내므로 깜빡이는 형상만 보고도 즉시 오니임을 특정할 수 있습니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>깜빡임 관찰 (가장 쉬움):</strong> 사냥 중인 유령의 모습을 보았을 때 다른 유령처럼 안 보이고 깜빡이기보다 거의 실시간으로 또렷하게 계속 보인다면 오니입니다.
            </p>
        `
    },
    {
        name: "원령",
        engName: "Onryo",
        evidences: ["주파수 측정기", "고스트 오브", "서늘함"],
        sanity: "60%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+원령+공략",
        tip: `<strong>1. 불빛 방어 & 3번째 불 끄기 강제 사냥</strong><br>
              • <strong>불빛 = 십자가 판정:</strong> 불이 켜진 양초/라이터 범위(4m) 내에서는 <strong>불빛이 십자가 역할을 수행하여 사냥을 차단</strong>합니다.<br>
              • <strong>3번째 불 꺼짐 강제 사냥 (100%):</strong> 불을 3번째 끄는 순간 <strong>정신력과 무관하게 100% 확률로 즉시 강제 사냥</strong>을 시작합니다.<br>
              • <strong>어둠 속 사냥 정신력 (60%):</strong> 불빛이 없는 어둠 속에서는 정신력 <strong>60% 이하</strong>부터 사냥이 가능합니다.`,
        huntSanity: "60%",
        specialTrait: "불빛 근처 사냥 억제(불빛 = 십자가 역할), 3번째 불 꺼짐 시 강제 사냥 유발, 불을 자주 끔.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 불빛 방어 & 3번째 불 끄기 강제 사냥</div>
            <p class="dict-text">
                • <strong>불빛 = 십자가 판정:</strong> 불이 켜진 양초/라이터/캠프파이어 범위(4m) 내에서는 <strong>불빛이 십자가 역할을 수행하여 사냥을 차단</strong>합니다.<br>
                • <strong>3번째 불 꺼짐 강제 사냥 (100%):</strong> 원령이 불을 불어서 끌 때마다 십자가가 태워진 것으로 간주되며, <strong>정확히 3번째 불이 꺼지는 순간 정신력과 무관하게 100% 확률로 즉시 사냥을 강제 시작</strong>합니다.<br>
                • <strong>기본 높은 사냥 정신력 (60%):</strong> 불빛이 없는 어둠 속에서는 정신력 <strong>60% 이하</strong>부터 사냥이 가능합니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 주파수 측정기 (Spirit Box)<br>
                • 고스트 오브 (Ghost Orb)<br>
                • 서늘함 (Freezing Temperatures)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 양초 불이 꺼질 때 예상치 못한 기습 사냥이 터집니다.<br>
                • <strong>약점 (Weakness):</strong> 양초와 십자가를 함께 세팅하면 사냥 억제 및 원령 확정 테스트가 매우 쉽습니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>양초 + 십자가 테스트:</strong> 십자가 위에 켜진 양초를 올려놓습니다. 양초 불이 3번째 꺼졌을 때 십자가가 즉시 탄다면 100% 원령입니다.
            </p>
        `
    },
    {
        name: "라이주",
        engName: "Raiju",
        evidences: ["EMF 5", "고스트 오브", "도트"],
        sanity: "작동 전자기기 근처 65% / 기본 50%",
        speed: "전자기기 근처 2.5 m/s (시야가속 중첩)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+라이주+공략",
        tip: `<strong>1. 전자기기 연동 사냥 & 초고속 돌진</strong><br>
              • <strong>사냥 정신력 상승 (65%):</strong> 작동 중인 전자기기 근처에 있을 때 <strong>정신력 65% 이하</strong>부터 조기 사냥을 시작합니다.<br>
              • <strong>전자기기 가속 (2.5 m/s):</strong> 켜진 전자기기 범위 안으로 들어오면 <strong>즉시 2.5 m/s로 쏜살같이 가속</strong>합니다.<br>
              • <strong>전자기기 교란 (15m):</strong> 일반 유령(10m)보다 훨씬 넓은 <strong>15m 범위</strong>에서 전등과 전자기기를 깜빡거리게 만듭니다.`,
        huntSanity: "전자기기 근처 65%",
        specialTrait: "켜진 전자기기 감지 시 사냥 정신력 65%, 전자기기 근처 2.5m/s 돌진, 사냥 시 전자기기 교란 범위 15m 확대.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 전자기기 연동 사냥 & 초고속 돌진</div>
            <p class="dict-text">
                • <strong>사냥 정신력 조기 상승 (65%):</strong> 작동 중인 전자기기(손전등, 카메라, EMF 등) 근처에 있을 때 <strong>정신력 65% 이하</strong>부터 조기 사냥을 터뜨립니다.<br>
                • <strong>전자기기 가속 (2.5 m/s):</strong> 사냥 시 켜진 전자기기 범위(소형 6m, 대형 10m) 안으로 들어오면 <strong>즉시 2.5 m/s로 쏜살같이 가속</strong>합니다.<br>
                • <strong>광범위 전자기기 교란 (15m):</strong> 일반 유령의 교란 범위(10m)보다 넓은 <strong>15m 범위</strong>에서 전등과 전자기기를 깜빡거리게 만듭니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • 고스트 오브 (Ghost Orb)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 장비를 많이 깔아둔 고스트 룸 근처에서는 레버넌트급 속도로 플레이어를 도륙합니다.<br>
                • <strong>약점 (Weakness):</strong> 전자기기를 모두 꺼두면 평범한 1.7m/s 유령으로 무력화됩니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>장비 끄기 공략:</strong> 라이주가 의심될 때는 고스트 룸에 바닥 장비를 켜두지 말고 최소한으로 회수하거나 꺼두어야 합니다.
            </p>
        `
    },
    {
        name: "레버넌트",
        engName: "Revenant",
        evidences: ["고스트 오브", "고스트 라이팅", "서늘함"],
        sanity: "50%",
        speed: "시야 밖 1.0 m/s ➔ 플레이어 시야 확인 시 즉시 3.0 m/s (시야 가속 없음)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+레버넌트+공략",
        tip: `<strong>1. 시야 감지 극단적 속도 변화</strong><br>
              • <strong>시야 밖 배회 (1.0 m/s):</strong> 플레이어를 찾지 못했거나 시야에 없을 때는 <strong>1.0 m/s라는 극도로 둔한 발소리</strong>로 걷습니다.<br>
              • <strong>시야 포착 즉시 (3.0 m/s):</strong> 플레이어를 보거나 위치를 인지한 순간 점진적 가속 없이 <strong>즉시 3.0 m/s 초고속으로 직진 돌진</strong>합니다.<br>
              • <strong>엄폐 후 감속:</strong> 플레이어가 은신처로 숨어 시야에서 사라지면 해당 지점 도달 후 다시 1.0m/s로 감속합니다. (시야 가속 없음)`,
        huntSanity: "50%",
        specialTrait: "시야 확도시 즉시 3.0m/s 가속, 시야 상실 시 1.0m/s로 감속, 시야 가속 메커니즘 없음.",
        forcedEvidence: "없음",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 시야 감지 극단적 속도 변화 (Speed Switch)</div>
            <p class="dict-text">
                • <strong>시야 밖/배회 시 (1.0 m/s):</strong> 플레이어를 찾지 못했거나 시야(LOS)에 잡히지 않을 때는 <strong>1.0 m/s라는 극도로 둔한 발소리</strong>로 엉금엉금 걸어다닙니다.<br>
                • <strong>시야 포착 즉시 (3.0 m/s):</strong> 플레이어의 형상을 보거나 전자기기/음성으로 위치를 인지한 순간, 점진적 가속이 아니라 <strong>즉시 3.0 m/s라는 최악의 초고속으로 직진 돌진</strong>합니다.<br>
                • <strong>엄폐 후 감속:</strong> 플레이어가 코너 뒤나 은신처로 숨어 시야에서 사라지면, 해당 지점까지 도착한 뒤 다시 1.0m/s로 둔화됩니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 고스트 오브 (Ghost Orb)<br>
                • 고스트 라이팅 (Ghost Writing)<br>
                • 서늘함 (Freezing Temperatures)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 탁 트인 직선 복도에서 눈이 마주치면 정화향초 없이는 무조건 사망합니다.<br>
                • <strong>약점 (Weakness):</strong> 시야만 주지 않고 엄폐물 뒤에 빠르게 숨으면 느릿느릿한 발소리로 인해 위치 확인 및 도망이 쉽습니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>극단적 발소리 패턴:</strong> '뚜... 뚜...' 하고 매우 천천히 걷다가 시야가 트이자마자 '타다다다닥!' 하고 3.0m/s로 돌진해온다면 레버넌트입니다.
            </p>
        `
    },
    {
        name: "셰이드",
        engName: "Shade",
        evidences: ["EMF 5", "고스트 라이팅", "서늘함"],
        sanity: "35%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+셰이드+공략",
        tip: `<strong>1. 수줍음 & 낮은 사냥 정신력 메커니즘</strong><br>
              • <strong>낮은 사냥 시작 (35%):</strong> 평균 정신력이 <strong>35% 이하</strong>로 떨어지지 않으면 사냥을 시작하지 않습니다.<br>
              • <strong>동일 공간 활동 차단:</strong> 셰이드와 <strong>같은 방에 플레이어가 1명이라도 서 있으면 사냥 및 상호작용이 차단</strong>됩니다.<br>
              • <strong>그림자 형체 선호:</strong> 고스트 이벤트 시 완전한 실체보다는 검은 그림자나 투명 형태로 나타날 확률이 높습니다.`,
        huntSanity: "35%",
        specialTrait: "같은 방 사람이 있을 때 사냥/상호작용 안 함, 사냥 시작 정신력 35%, 실체화 시 그림자/투명 형태 선호, 십자가 생성 소모 적음.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 수줍음 & 낮은 사냥 정신력 메커니즘</div>
            <p class="dict-text">
                • <strong>낮은 사냥 시작 정신력 (35%):</strong> 평균 정신력이 <strong>35% 이하</strong>로 떨어지지 않으면 절대로 사냥을 시작하지 않습니다.<br>
                • <strong>동일 공간 활동 차단 (Shy Ghost):</strong> 셰이드와 <strong>같은 방에 플레이어가 한 명이라도 서 있으면, 사냥을 절대로 시작하지 못하고 상호작용 빈도도 극단적으로 감소</strong>합니다.<br>
                • <strong>그림자 형체 선호:</strong> 고스트 이벤트 발생 시 완전한 실체보다는 검은 그림자나 투명한 형태로 나타날 확률이 높습니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • 고스트 라이팅 (Ghost Writing)<br>
                • 서늘함 (Freezing Temperatures)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 활동량이 적어 EMF 5나 라이팅 등 증거를 얻기가 꽤 까다롭습니다.<br>
                • <strong>약점 (Weakness):</strong> 고스트 룸에 다 같이 모여 서 있으면 정신력이 0%여도 사냥을 시작하지 못합니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>방 비워두기 증거 수집:</strong> 셰이드 방에 카메라나 책을 설치하고 모두 방 밖으로 나와줘야 비로소 글씨를 쓰거나 활동하기 시작합니다.
            </p>
        `
    },
    {
        name: "타예",
        engName: "Thaye",
        evidences: ["고스트 오브", "고스트 라이팅", "도트"],
        sanity: "초기 75% ➔ 나이듦에 따라 최소 15%",
        speed: "초기 2.75 m/s ➔ 나이듦에 따라 최소 1.0 m/s (시야 가속 없음)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+타예+공략",
        tip: `<strong>1. 나이듦(Aging) 및 스펙 노화 메커니즘</strong><br>
              • <strong>나이듦 조건:</strong> 같은 방에 플레이어가 머무르면 1~2분마다 나이를 먹어 <strong>총 10단계까지 노화</strong>합니다.<br>
              • <strong>젊은 상태 (0세):</strong> 사냥 정신력 <strong>75%</strong>, 이동 속도 <strong>2.75 m/s (극도로 위험)</strong><br>
              • <strong>늙은 상태 (10세):</strong> 사냥 정신력 <strong>15%</strong>, 이동 속도 <strong>1.0 m/s (극도로 느려짐)</strong>. (시야 가속 없음)`,
        huntSanity: "초기 75% -> 15%",
        specialTrait: "나이듦(Aging) 메커니즘 (총 10단계), 나이가 들수록 사냥 정신력/속도/상호작용 감소, 시야 가속 없음.",
        forcedEvidence: "없음",
        hasAccel: false,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 나이듦(Aging) 및 스펙 노화 메커니즘</div>
            <p class="dict-text">
                • <strong>나이듦 조건:</strong> 타예가 있는 방에 플레이어가 머무르면 1~2분마다 나이를 한 살씩 먹어 <strong>총 10단계까지 노화</strong>합니다.<br>
                • <strong>초기 젊은 상태 (0세):</strong> 사냥 시작 정신력 <strong>75%</strong>, 이동 속도 <strong>2.75 m/s (극도로 빨라 위험함)</strong><br>
                • <strong>최종 늙은 상태 (10세):</strong> 사냥 시작 정신력 <strong>15%</strong>, 이동 속도 <strong>1.0 m/s (극도로 느려짐)</strong><br>
                • <strong>시야 가속 없음:</strong> 플레이어를 아무리 오래 바라보아도 추가 시야 가속이 오르지 않습니다.<br>
                • <strong>위자드 보드 나이 변화:</strong> 위자드 보드로 나이를 물어보면 시간이 지나면서 답변하는 나이가 실제로 많아집니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 고스트 오브 (Ghost Orb)<br>
                • 고스트 라이팅 (Ghost Writing)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 극초반 양초/정신력이 높은 상태에서 2.75m/s 초고속 사냥으로 팀을 전멸시킵니다.<br>
                • <strong>약점 (Weakness):</strong> 방에서 시간을 보내 나이를 먹이고 나면 1.0m/s 달팽이가 되어 완벽하게 무력화됩니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>사냥 속도 저하 관찰:</strong> 첫 사냥 때는 2.75m/s로 엄청 빨랐던 발소리가, 고스트 룸 조사를 마친 뒤 후반 사냥 때는 1.0m/s로 현저히 느려졌다면 타예입니다.
            </p>
        `
    },
    {
        name: "미믹",
        engName: "The_Mimic",
        evidences: ["주파수 측정기", "UV 라이트", "서늘함", "고스트 오브(가짜 증거)"],
        sanity: "복제 중인 유령에 따라 실시간 변동",
        speed: "복제 중인 유령에 따라 실시간 변동",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+미믹+공략",
        tip: `<strong>1. 유령 복제 & 가짜 고스트 오브 메커니즘</strong><br>
              • <strong>다른 유령 완벽 복제:</strong> 30초~2분마다 무작위 다른 유령을 지정하여 <strong>속도, 사냥 정신력, 특수 능력을 그대로 복사</strong>합니다.<br>
              • <strong>항시 가짜 고스트 오브 생성 (4증거 유령):</strong> 정식 증거 3개 외에도 <strong>난이도와 무관하게 항상 가짜 고스트 오브가 관찰</strong>됩니다.`,
        huntSanity: "복제 유령에 따름",
        specialTrait: "다른 유령 특성 완전 복사(데오겐 감지, 레버넌트 가속 등), 가짜 고스트 오브 항시 생성(4증거 유령).",
        forcedEvidence: "고스트 오브(가짜)",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: true,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 유령 복제 & 가짜 고스트 오브 메커니즘</div>
            <p class="dict-text">
                • <strong>다른 유령 완벽 복제:</strong> 30초~2분마다 무작위 다른 유령(데오겐, 레버넌트, 데몬 등)을 지정하여 <strong>해당 유령의 속도, 사냥 정신력, 특수 능력을 그대로 복사</strong>합니다.<br>
                • <strong>항시 가짜 고스트 오브 생성 (4증거 유령):</strong> 미믹은 정식 증거 3개(주파수 측정기/UV 라이트/서늘함) 외에도 <strong>난이도와 상관없이 항상 고스트 오브를 가짜로 관찰되게 만듭니다.</strong>
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 주파수 측정기 (Spirit Box)<br>
                • UV 라이트 (Ultraviolet)<br>
                • 서늘함 (Freezing Temperatures)<br>
                • 고스트 오브 (Ghost Orb) - <strong>[가짜 고정 표시 증거]</strong>
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 갑자기 데몬이나 레버넌트로 변해 기습 사냥을 터뜨리므로 행동 예측이 어렵습니다.<br>
                • <strong>약점 (Weakness):</strong> 증거가 4개(노증거 난이도에서도 오브 관찰) 나오므로 고스트 오브를 확인하면 쉽게 감별됩니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>'노증거' 난이도 오라 테스트:</strong> 증거가 안 나오는 악몽/광기/커스텀 난이도에서 카메라로 고스트 오브가 보인다면 100% 미믹입니다.
            </p>
        `
    },
    {
        name: "트윈스",
        engName: "The_Twins",
        evidences: ["EMF 5", "주파수 측정기", "서늘함"],
        sanity: "50%",
        speed: "본체 1.5 m/s / 분신 1.87 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+트윈스+공략",
        tip: `<strong>1. 본체/분신 이원화 & 사냥 속도 메커니즘</strong><br>
              • <strong>본체와 분신 시스템:</strong> 방에 있는 '본체'와 맵을 배회하는 '분신'이 동시에 또는 교대로 상호작용합니다.<br>
              • <strong>본체 사냥 (1.5 m/s):</strong> 본체가 사냥을 시작하면 <strong>1.5 m/s로 약간 느리게</strong> 이동합니다.<br>
              • <strong>분신 사냥 (1.87 m/s):</strong> 분신 위치에서 사냥이 터지면 <strong>1.87 m/s로 약간 빠르게</strong> 돌진합니다. (트윈스 커브 그래프 발생)`,
        huntSanity: "50%",
        specialTrait: "본체(1.5m/s - 약간 느림) vs 분신(1.87m/s - 약간 빠름) 사냥 속도 이원화, 교차 상호작용(Twins Curve) 그래프.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 본체/분신 이원화 & 사냥 속도 메커니즘</div>
            <p class="dict-text">
                • <strong>본체와 분신 시스템:</strong> 고스트 룸에 있는 '본체'와 맵을 배회하는 '분신'이 동시에 또는 교대로 상호작용을 터뜨립니다.<br>
                • <strong>본체 사냥 속도 (1.5 m/s):</strong> 본체가 사냥을 시작하면 일반 속도(1.7m/s)보다 약간 느린 <strong>1.5 m/s</strong>로 걸어다닙니다.<br>
                • <strong>분신 사냥 속도 (1.87 m/s):</strong> 분신이 있던 자리에서 사냥이 터지면 일반 속도보다 약간 빠른 <strong>1.87 m/s</strong>로 돌진합니다.<br>
                • <strong>트윈스 커브 그래프:</strong> 트럭 EMF 활동 그래프에서 본체와 분신 상호작용이 동시에 터질 때 꺾이는 곡선 표식이 나타납니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • EMF 5단계 (EMF Level 5)<br>
                • 주파수 측정기 (Spirit Box)<br>
                • 서늘함 (Freezing Temperatures)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 고스트 룸과 멀리 떨어진 예기치 못한 곳에서 분신 사냥이 터져 기습당할 위험이 있습니다.<br>
                • <strong>약점 (Weakness):</strong> 사냥 때마다 발소리가 약간 느리거나 약간 빠른 두 가지 패턴으로 명확히 나뉩니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>발소리 속도 비교:</strong> 첫 사냥 때는 약간 느렸는데 다음 사냥 때는 살짝 빠른 발소리로 교대된다면 트윈스입니다.
            </p>
        `
    },
    {
        name: "요괴",
        engName: "Yokai",
        evidences: ["주파수 측정기", "고스트 오브", "도트"],
        sanity: "근처 음성 대화 시 80% / 기본 50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+요괴+공략",
        tip: `<strong>1. 음성 자극 사냥 & 좁은 감지 메커니즘</strong><br>
              • <strong>음성 대화 조기 사냥 (80%):</strong> 요괴 근처(3m 이내)에서 마이크로 말을 많이 하면 <strong>정신력 80% 이하</strong>부터 조기 사냥을 시작합니다.<br>
              • <strong>사냥 중 좁은 감지 (2.5m):</strong> 사냥 시 <strong>2.5m 이내의 아주 가까운 거리에서 나오는 음성/전자기기 신호만 감지</strong>할 수 있습니다.<br>
              • <strong>원거리 안전:</strong> 3m만 떨어져 있어도 손전등을 켜거나 말을 해도 플레이어를 인지하지 못합니다.`,
        huntSanity: "근처 대화 시 80%",
        specialTrait: "근처 음성 감지 시 사냥 정신력 80% 상승, 사냥 중 청각/전자기기 감지 반경 2.5m 제한(바보 청각).",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 음성 자극 사냥 & 사냥 중 좁은 청각 범위</div>
            <p class="dict-text">
                • <strong>음성 대화 조기 사냥 (80%):</strong> 요괴 근처(3m 이내)에서 마이크로 말을 많이 하면 <strong>정신력 80% 이하</strong>부터 조기 사냥을 시작합니다.<br>
                • <strong>사냥 중 좁은 감지 범주 (2.5m):</strong> 사냥 시 일반 유령(9m)과 달리 <strong>2.5m 이내의 바짝 다가온 거리에서 나오는 음성/전자기기 신호만 감지</strong>할 수 있습니다.<br>
                • <strong>멀리서 안전함:</strong> 3m만 떨어져 있어도 플레이어가 손전등을 켜고 마이크로 고함을 질러도 요괴는 감지하지 못하고 그냥 지나쳐 갑니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 주파수 측정기 (Spirit Box)<br>
                • 고스트 오브 (Ghost Orb)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 고스트 룸에서 보이스 대화를 많이 나눌 경우 생각지도 못한 높은 정신력에서 사냥당합니다.<br>
                • <strong>약점 (Weakness):</strong> 사냥 시 약간만 떨어져 있어도 전자기기 신호를 못 잡아 바보가 됩니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>사냥 중 도발 테스트:</strong> 사냥 시 같은 방 구석에 서서 손전등을 켜고 마이크로 말을 걸었을 때 3m 이상 떨어진 요괴가 나를 못 찾고 지나쳐 간다면 요괴입니다.
            </p>
        `
    },
    {
        name: "유레이",
        engName: "Yurei",
        evidences: ["고스트 오브", "서늘함", "도트"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+유레이+공략",
        tip: `<strong>1. 문 상호작용 정신력 차감 & 정화향초 봉인 메커니즘</strong><br>
              • <strong>문 닫기 능력 (Door Slam):</strong> 고스트 이벤트 없이 <strong>문을 끝까지 강하게 닫으며 정신력을 15% 기습 차감</strong>합니다.<br>
              • <strong>정화향초 방 봉인:</strong> 정화향초를 맞으면 90초 동안 사냥이 차단될 뿐만 아니라 <strong>90초 동안 고스트 룸 밖으로 나가지 못하게 방에 갇힙니다.</strong>`,
        huntSanity: "50%",
        specialTrait: "특수 문 닫기 능력 사용 시 정신력 15% 차감, 정화향초 피격 시 90초간 고스트 룸 밖으로 이탈 불가 봉인.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 문 상호작용 정신력 차감 & 정화향초 봉인 메커니즘</div>
            <p class="dict-text">
                • <strong>특수 문 닫기 능력 (Door Slam):</strong> 고스트 이벤트를 일으키지 않고도 <strong>문을 끝까지 강하게 닫는 상호작용</strong>을 쓰며, 이때 <strong>근처 플레이어의 정신력을 15% 기습 차감</strong>합니다.<br>
                • <strong>정화향초 방 봉인:</strong> 유레이에게 정화향초를 태우면 90초 동안 사냥이 차단될 뿐만 아니라 <strong>90초 동안 고스트 룸 밖으로 절대로 나가지 못하도록 방에 갇히게 됩니다.</strong>
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 고스트 오브 (Ghost Orb)<br>
                • 서늘함 (Freezing Temperatures)<br>
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 문 닫기 능력으로 나도 모르는 사이에 정신력이 바닥납니다.<br>
                • <strong>약점 (Weakness):</strong> 정화향초를 태우면 90초간 고스트 룸에 예쁘게 갇혀 쉽게 장비 세팅을 완료할 수 있습니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>문 닫힘 소리 관찰:</strong> 고스트 이벤트 소리가 없는데 열려 있던 문이 '꽝!' 하고 완전히 닫혔다면 유레이의 능력입니다.
            </p>
        `
    },
    {
        name: "아스왕",
        engName: "Aswang",
        evidences: ["도트", "서늘함", "고스트 라이팅"],
        sanity: "50%",
        speed: "기본 1.53 m/s ➔ 최고 2.53 m/s (폭발적 가속)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+아스왕+공략",
        tip: `<strong>1. 사냥 및 은신처 상호작용 메커니즘</strong><br>
              • <strong>이동 속도 & 가속:</strong> 기본 속도는 <strong>1.53 m/s</strong>로 느리지만, 높은 시야 가속률로 <strong>8.67초 만에 최고 속도 2.53 m/s에 도달</strong>합니다.<br>
              • <strong>은신처 도달 시 강제 종료:</strong> 공식 은신처(옷장/사물함) 안의 플레이어에게 도달 시 <strong>사냥이 즉시 강제 종료</strong>됩니다.<br>
              • <strong>위치 추적 페널티:</strong> 이 방식으로 종료 시 다음 사냥 유예 시간에도 <strong>해당 위치로 곧장 이동</strong>합니다.`,
        huntSanity: "50%",
        specialTrait: "기본 속도 1.53 m/s, 8.67초 만에 최고 속도 2.53 m/s 도달. 공식 은신처 도달 시 헌팅 즉시 강제 종료.",
        forcedEvidence: "없음",
        hasAccel: true,
        hasSpecialSpeed: true,
        hasForcedEv: false,
        hasTargetRoam: true,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 사냥 메커니즘 (Hunt)</div>
            <p class="dict-text">
                • <strong>기본 속도:</strong> 1.53 m/s (일반 유령 1.7 m/s 대비 느림)<br>
                • <strong>시야 가속률:</strong> 초당 가속률이 높아서 <strong>8.67초 만에 최고 속도인 2.53 m/s에 도달</strong>합니다.<br>
                • <strong>은신처 강제 종료:</strong> 유효한 공식 은신처(옷장/사물함) 안의 플레이어에게 도달 시 <strong>사냥이 즉시 강제 종료</strong>됩니다.<br>
                • <strong>위치 추적 페널티:</strong> 이 방식으로 사냥이 종료되면 다음 사냥 유예 시간에도 <strong>해당 플레이어 위치로 곧장 이동</strong>합니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • D.O.T.S. 프로젝터 (D.O.T.S. Projector)<br>
                • 서늘함 (Freezing Temperatures)<br>
                • 고스트 라이팅 (Ghost Writing)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 목표물을 발견하면 추격 속도가 매우 빠릅니다.<br>
                • <strong>약점 (Weakness):</strong> 공식 은신처에 숨은 플레이어를 절대 죽이지 못합니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>은신처 활용:</strong> 사냥 시 옷장/락커 안으로 들어가면 사냥을 안전하게 종료시킬 수 있습니다. 단, 종료 후 즉시 자리를 옮겨야 합니다.
            </p>
        `
    },
    {
        name: "코르모스",
        engName: "Kormos",
        evidences: ["고스트 오브", "주파수 측정기", "UV 라이트"],
        sanity: "50%",
        speed: "1.7 m/s (가속 O)",
        ytUrl: "https://www.youtube.com/results?search_query=파스모포비아+코르모스+공략",
        tip: `<strong>1. 사냥 및 시각 차단 메커니즘</strong><br>
              • <strong>완전 시각 차단 (Blind Ghost):</strong> 완전히 눈이 멀어 있어 <strong>플레이어가 바로 앞을 지나가거나 시야에 보여도 눈으로 인지하지 못합니다.</strong><br>
              • <strong>시야 가속 없음:</strong> 플레이어를 볼 수 없으므로 시야 가속(LOS Accel)이 전혀 붙지 않습니다.<br>
              • <strong>청각 & 전자기기 감지 극대화:</strong> <strong>손전등/장비 전자기기 신호 및 마이크 음성 감지 범위가 훨씬 넓게 확장</strong>되어 소리와 신호로 추적합니다.`,
        huntSanity: "50%",
        specialTrait: "시각적 시야(LOS) 없음, 시야 가속 없음, 전자기기/음성 감지 범위 넓음.",
        forcedEvidence: "없음",
        hasAccel: false,
        hasSpecialSpeed: false,
        hasForcedEv: false,
        hasTargetRoam: false,
        isCustomDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 사냥 및 시각 차단 메커니즘 (Blind Hunt)</div>
            <p class="dict-text">
                • <strong>완전 시각 차단 (Blind Ghost):</strong> 완전히 눈이 멀어 있어 <strong>플레이어가 유령 바로 앞을 지나가거나 노출되어도 눈으로 인지하지 못합니다.</strong><br>
                • <strong>시야 가속 없음:</strong> 플레이어를 볼 수 없으므로 시야 가속(LOS Accel)이 전혀 붙지 않습니다.<br>
                • <strong>청각 & 전자기기 감지 극대화:</strong> <strong>손전등/장비 전자기기 신호 및 마이크 음성 감지 범위가 훨씬 넓게 확장</strong>되어 소리와 신호로 추적합니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">
                • 고스트 오브 (Ghost Orb)<br>
                • 주파수 측정기 (Spirit Box)<br>
                • UV 라이트 (Ultraviolet)
            </p>
            <div class="dict-section-title">3. 강점 및 약점 (Strengths & Weaknesses)</div>
            <p class="dict-text">
                • <strong>강점 (Strength):</strong> 멀리서 손전등을 켜거나 마이크로 말을 하면 은신처에서도 들킵니다.<br>
                • <strong>약점 (Weakness):</strong> 모든 전자기기를 끄고 침묵을 유지하면, 바로 옆을 지나가도 플레이어를 공격하지 못합니다.
            </p>
            <div class="dict-section-title">4. 공략 및 식별법 (Strategies)</div>
            <p class="dict-text">
                • <strong>장비 차단 및 침묵:</strong> 사냥 시 손전등과 손에 든 장비를 모두 끄고 마이크를 조용히 하면 안전합니다.
            </p>
        `
    }
];
/*
 * Nyongsumo Ghost Fact Check — 2026-09
 * 기준: Ty Bayn / Zero-Network Cheat Sheet + Phasmophobia Fandom Wiki
 *
 * 이 파일은 현재 유령 데이터의 잘못된 수치/표현만 교정합니다.
 * 디자인, 이미지, 영상 링크, 증거 조합은 임의로 변경하지 않습니다.
 */
(function () {
    const patch = (engName, fn) => {
        const ghost = GHOST_DATA.find(g => g.engName === engName);
        if (ghost) fn(ghost);
    };

    // Wraith — 벽/바닥 투과 오해 및 EMF 위치
    patch("Wraith", g => {
        g.specialTrait = "소금을 절대 밟지 않음, 플레이어 순간이동 능력(EMF 2/5 발생).";
        g.tip = g.tip
            .replace(/벽\/바닥 투과 이동[.,]?/g, "")
            .replace(/직후 출발 지점에 EMF 2 또는 5가 발생합니다\./g, "순간이동한 플레이어 위치에서 EMF 2가 발생하며, 33% 확률로 EMF 5가 발생합니다.")
            .replace(/직후 출발 지점에 EMF 2 또는 EMF 5 신호가 발생합니다\./g, "순간이동한 플레이어 위치에서 EMF 2가 발생하며, 33% 확률로 EMF 5가 발생합니다.");
        g.detailedHtml = g.detailedHtml
            .replace(/벽\/바닥 투과 이동[.,]?/g, "")
            .replace(/순간이동 직후 유령이 출발한 지점에 EMF 2 또는 EMF 5 신호가 발생합니다\./g, "순간이동 직후 유령이 이동한 플레이어 위치에서 EMF 2가 발생하며, 33% 확률로 EMF 5가 발생합니다.")
            .replace(/소금에 노출되었을 때 상호작용 반응이 전혀 나타나지 않으므로 즉시 정체가 탄로납니다\./g, "소금 더미를 절대로 흐트러뜨리지 않는 특성을 이용해 판별할 수 있습니다.");
    });

    // Phantom — 0.5%/s
    patch("Phantom", g => {
        g.tip = g.tip.replace(/0\.4%/g, "0.5%");
        g.specialTrait = g.specialTrait.replace(/0\.4%/g, "0.5%");
        g.detailedHtml = g.detailedHtml.replace(/0\.4%/g, "0.5%");
    });

    // Poltergeist — 물건이 없어도 '능력 자체가 발동 불가'라고 단정하지 않기
    patch("Poltergeist", g => {
        const replacements = [
            ["물건이 없는 텅 빈 방에서는 능력을 쓰지 못해 무력해집니다.", "주변에 던질 물건이 없으면 다중 투척을 눈으로 확인하기 어렵습니다."],
            ["물건이 없으면 능력을 사용할 수 없습니다.", "던질 물건이 없으면 다중 투척 효과를 확인할 수 없습니다."]
        ];
        for (const [a,b] of replacements) {
            g.tip = g.tip.replaceAll(a,b);
            g.detailedHtml = g.detailedHtml.replaceAll(a,b);
        }
    });

    // Banshee — 타겟 조건을 과도하게 단정하지 않기
    patch("Banshee", g => {
        g.specialTrait = "사냥 시 지정 타겟을 우선 추적하며, 타겟이 조사 구역 안에 있으면 비타겟 플레이어를 무시합니다. 지향성 마이크에서 고유 비명이 나올 수 있습니다.";
        g.tip = g.tip
            .replace("타겟이 사망하거나 집 밖으로 나가지 않는 한 타겟이 바뀌지 않습니다.", "타겟이 사망하거나 조사 구역에서 제외되는 등 타겟 조건이 바뀌기 전까지 타겟이 유지됩니다.")
            .replace("타겟이 집(조사 구역) 밖에 머물러 있다면 사냥 시 일반 유령처럼 근처에 있는 다른 플레이어를 추적합니다.", "타겟이 조사 구역 밖에 있으면 사냥 중 다른 플레이어를 추적할 수 있습니다.")
            .replace("100% 밴시입니다.", "강력한 밴시 판별 포인트입니다.");
        g.detailedHtml = g.detailedHtml
            .replace("타겟이 사망하거나 집 밖으로 나가지 않는 한 타겟이 바뀌지 않습니다.", "타겟이 사망하거나 조사 구역에서 제외되는 등 타겟 조건이 바뀌기 전까지 타겟이 유지됩니다.")
            .replace("타겟이 집(조사 구역) 밖에 머물러 있다면 사냥 시 일반 유령처럼 근처에 있는 다른 플레이어를 추적합니다.", "타겟이 조사 구역 밖에 있으면 사냥 중 다른 플레이어를 추적할 수 있습니다.")
            .replace("100% 밴시입니다.", "강력한 밴시 판별 포인트입니다.");
    });

    // Dayan — 이미 최신 값이지만 양쪽 표기 순서를 명확히 통일
    patch("Dayan", g => {
        g.sanity = "이동 중인 플레이어 근처 65% / 정지한 플레이어 근처 45% / 기본 50%";
        g.speed = "이동 중인 플레이어 근처 2.25 m/s / 정지한 플레이어 근처 1.2 m/s / 기본 1.7 m/s";
        g.huntSanity = "이동 중 65% / 정지 45% / 기본 50%";
        g.specialTrait = "10m 이내 가장 가까운 플레이어의 움직임에 따라 사냥 정신력과 기본 속도가 변화합니다.";
    });

    // Deildegast — '고스트가 물건을 던져서 느려진다'가 아니라 플레이어의 고유 오브젝트 상호작용 수로 결정
    patch("Deildegast", g => {
        g.speed = "사냥 시도 사이 상호작용 수에 따라 3.0 m/s → 최저 0.4 m/s";
        g.specialTrait = "플레이어가 사냥 사이에 상호작용한 고유 비장비 오브젝트 수에 따라 다음 사냥의 기본 속도가 0.1 m/s씩 감소합니다. 최대 0.4 m/s까지 감소하며 시야 가속은 없습니다.";
        g.tip = `<strong>1. 사냥 속도와 오브젝트 카운터</strong><br>
              • <strong>초기 속도:</strong> 각 사냥 시도 사이의 카운터가 초기화되며 기본 속도는 <strong>3.0 m/s</strong>입니다.<br>
              • <strong>감속 조건:</strong> 플레이어가 사냥 사이에 상호작용한 <strong>고유 비장비 오브젝트</strong>마다 다음 사냥의 속도가 <strong>0.1 m/s</strong>씩 감소합니다.<br>
              • <strong>최저 속도:</strong> 충분한 오브젝트가 누적되면 <strong>0.4 m/s</strong>까지 내려갈 수 있습니다.<br>
              • <strong>중요:</strong> 같은 오브젝트를 반복해서 만지는 것은 계속 중첩되지 않으며, 유령이 사냥 중 던진 물건 자체가 감속 카운터를 만드는 것도 아닙니다.<br>
              • <strong>사냥 중 고정:</strong> 사냥이 시작되면 해당 사냥의 속도는 고정됩니다.`;
        g.detailedHtml = `<div class="dict-section-title">1. 사냥 속도 & 오브젝트 카운터</div>
            <p class="dict-text">
                • <strong>기본 속도:</strong> 사냥 시도 사이의 카운터가 초기화되면 <strong>3.0 m/s</strong>에서 시작합니다.<br>
                • <strong>감속:</strong> 플레이어가 사냥 사이에 상호작용한 고유 비장비 오브젝트마다 다음 사냥의 기본 속도가 <strong>0.1 m/s</strong>씩 감소합니다.<br>
                • <strong>최저:</strong> <strong>0.4 m/s</strong>까지 감소할 수 있습니다.<br>
                • <strong>시야 가속:</strong> 적용되지 않습니다.<br>
                • <strong>사냥 중:</strong> 속도는 시작 시점에 결정되어 사냥 중에는 오브젝트 상호작용으로 바뀌지 않습니다.
            </p>
            <div class="dict-section-title">2. 판별 포인트</div>
            <p class="dict-text">사냥 전에 맵의 고유 오브젝트를 충분히 상호작용한 뒤 다음 사냥 속도가 크게 느려지는지를 관찰하세요.</p>
            <div class="dict-section-title">3. 증거 (Evidence)</div>
            <p class="dict-text">• EMF 5단계 (EMF Level 5)<br>• 고스트 라이팅 (Ghost Writing)<br>• D.O.T.S. 프로젝터 (D.O.T.S. Projector)</p>`;
    });

    // Deogen — 근접 2.5m는 최저속 구간, 6m부터 3.0m/s
    patch("Deogen", g => {
        g.speed = "6m 초과 3.0 m/s / 2.5m 이내 최저 0.4 m/s (시야가속 X)";
        g.specialTrait = "사냥 중 모든 플레이어의 위치를 항상 알고 있으며, 대상과의 경로 거리에 따라 속도가 변합니다. 6m 초과 3.0 m/s, 2.5m 이내 최저 0.4 m/s.";
        g.tip = g.tip.replace("2.5m 이내로 들어오면 0.4 m/s", "6m 이하에서 점차 감속하며 2.5m 이내에서는 최저 0.4 m/s");
        g.detailedHtml = g.detailedHtml.replace("2.5m 이내로 들어오는 순간 <strong>0.4 m/s</strong>", "6m 이하에서 점차 감속하며 2.5m 이내에서는 <strong>0.4 m/s</strong>");
    });

    // Demon — 십자가 티어별 범위, 100% 사냥은 '능력 사용 가능'으로 표현
    patch("Demon", g => {
        g.sanity = "기본 70% / 특수 능력 발동 시 정신력 무관";
        g.huntSanity = "기본 70% / 특수 능력 발동 시 정신력 무관";
        g.specialTrait = "기본 사냥 정신력 70%, 특수 능력으로 정신력과 무관한 사냥 가능. 사냥 최소 쿨타임 20초, 정화향초 방어 60초, 십자가 효과 범위 50% 증가.";
        g.tip = g.tip
            .replace("정신력이 100%여도 즉시 강제 사냥", "정신력과 무관하게 사냥을 시작할 수 있는 특수 능력")
            .replace("십자가 반경은 5m로 확대", "십자가 효과 범위는 티어별로 50% 증가");
        g.detailedHtml = g.detailedHtml
            .replace("정신력이 100%인 극초반 상태에서도 <strong>정신력을 무시하고 즉시 사냥을 강제 시작</strong>할 수 있습니다.", "특수 능력이 발동하면 <strong>정신력과 무관하게 사냥을 시작할 수 있습니다.</strong>")
            .replace("십자가의 유효 방어 반경이 일반 3m에서 <strong>5m로 대폭 증가</strong>합니다.", "십자가의 유효 방어 반경이 티어별로 <strong>50% 증가</strong>합니다. Tier I 4.5m / Tier II 6m / Tier III 7.5m입니다.");
    });

    // Gallu — 정확한 상태별 수치
    patch("Gallu", g => {
        g.speed = "일반 1.7 m/s / 분노 1.955 m/s / 약화 1.36 m/s";
        g.huntSanity = "일반 50% / 분노 60% / 약화 40%";
        g.specialTrait = "일반·분노·약화 3단계 상태. 십자가·향초·소금 등의 상호작용으로 상태가 변하며, 분노 상태에서는 소금 더미를 밟지 않습니다.";
        g.detailedHtml = g.detailedHtml.replace(/1\.96 m\/s/g, "1.955 m/s").replace(/1\.44 m\/s/g, "1.36 m/s");
    });

    // Hantu — 두꺼비집 '선호'가 아니라 켜지 못함
    patch("Hantu", g => {
        g.specialTrait = "온도에 따라 1.4~2.7 m/s로 변하는 고정 속도, 시야 가속 없음, 두꺼비집을 스스로 켤 수 없음. 사냥 중 두꺼비집이 꺼져 있으면 냉기 입김이 보입니다.";
        g.tip = g.tip.replace("두꺼비집 내림 선호", "두꺼비집을 스스로 켤 수 없음");
        g.detailedHtml = g.detailedHtml.replace("두꺼비집을 꺼두면 온도가 높으면 1.4m/s로 쉽게 도망칠 수 있습니다.", "두꺼비집이 꺼져 있으면 시간이 지나며 방이 식어 한투의 속도가 빨라질 수 있습니다.").replace("두꺼비집 전원 유지:", "온도 관리:");
    });

    // Jinn — 2.5m/s는 3가지 조건을 모두 만족할 때의 고정 속도
    patch("Jinn", g => {
        g.speed = "조건 충족 시 2.5 m/s 고정 / 그 외 1.7 m/s 기본 (표준 LOS 규칙)";
        g.specialTrait = "차단기 ON + 플레이어와 3m 초과 거리 + 시야 확보 시 2.5 m/s 고정 속도. 조건이 깨지면 일반 속도 규칙으로 돌아가며 누적된 LOS 가속이 적용될 수 있습니다.";
        g.tip = g.tip.replace("3m 이상 떨어져 있으면 <strong>즉시 2.5 m/s로 돌진</strong>하며, <strong>3m 이내로 들어오면 1.7 m/s로 감속</strong>", "차단기 ON 상태에서 플레이어와 3m 초과 거리의 시야를 확보하면 <strong>2.5 m/s로 고정</strong>되며, 조건이 깨지면 <strong>일반 속도 규칙</strong>으로 돌아갑니다");
        g.detailedHtml = g.detailedHtml.replace("거리 3m 이상 떨어져 있으면 <strong>즉시 2.5 m/s로 돌진</strong>합니다.", "차단기가 켜져 있고 플레이어와 3m 초과 거리에서 시야를 확보하면 <strong>2.5 m/s로 고정</strong>됩니다.").replace("3m 이내로 들어오는 순간 <strong>1.7 m/s로 발소리가 둔해집니다.</strong>", "조건이 하나라도 깨지면 <strong>일반 유령 속도 규칙</strong>으로 돌아갑니다.");
    });

    // Mare — 두꺼비집 선호 삭제
    patch("Mare", g => {
        g.specialTrait = "현재 방의 조명 상태에 따라 사냥 정신력이 60%/40%로 달라지며, 켜진 조명을 즉시 끄는 능력을 사용할 수 있습니다. 두꺼비집 자체에는 특별한 선호가 없습니다.";
        g.detailedHtml = g.detailedHtml.replace(/, 두꺼비집 내림 선호\./g, ".").replace(/, 두꺼비집 내림 선호/g, "");
        g.tip = g.tip.replace("두꺼비집 내림 선호", "두꺼비집 자체에는 특별한 선호가 없음");
    });

    // Myling — 발소리/음성 12m, 전자기기 10m와 구분
    patch("Myling", g => {
        g.specialTrait = "사냥 중 발소리와 음성은 최대 12m에서 들리며, 전자기기 교란 범위 10m와의 차이를 이용할 수 있습니다.";
        g.tip = `<strong>1. 정숙한 사냥 발소리 메커니즘</strong><br>
              • <strong>가청 범위:</strong> 마일링의 사냥 발소리와 음성은 <strong>최대 12m</strong>에서 들립니다. 일반 유령은 최대 20m입니다.<br>
              • <strong>전자기기 교란:</strong> 전자기기 교란은 약 <strong>10m</strong>이므로 10~12m 구간의 차이를 이용할 수 있습니다.<br>
              • <strong>추가 특징:</strong> 지향성 마이크와 사운드 레코더에서 초자연적 소리를 더 자주 낼 수 있습니다.`;
        g.detailedHtml = `<div class="dict-section-title">1. 정숙한 사냥 발소리 메커니즘</div>
            <p class="dict-text">
                • <strong>발소리/음성:</strong> 사냥 중 최대 <strong>12m</strong>에서 들립니다.<br>
                • <strong>일반 유령:</strong> 최대 약 20m에서 들립니다.<br>
                • <strong>전자기기 교란:</strong> 약 <strong>10m</strong>이므로 10~12m 구간에서 전자기기와 발소리의 도달 거리를 비교할 수 있습니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">• EMF 5단계 (EMF Level 5)<br>• UV 라이트 (Ultraviolet)<br>• 고스트 라이팅 (Ghost Writing)</p>
            <div class="dict-section-title">3. 공략 및 식별법</div>
            <p class="dict-text">손전등 등 전자기기 교란이 시작되는 거리와 발소리가 들리기 시작하는 거리를 같은 층에서 비교하세요.</p>`;
    });

    // Moroi — 저주 원인과 향초 7초
    patch("Moroi", g => {
        g.specialTrait = "저주 시 수동 정신력 감소가 2배가 되며, 평균 정신력에 따라 기본 속도가 1.5~2.25 m/s로 변합니다. 향초 사냥 실명은 7초입니다.";
        g.tip = g.tip
            .replace(/향초 12초/g, "향초 7초")
            .replace(/12초간 시야가 마비/g, "7초간 시야가 마비")
            .replace(/12초 동안 시야가 차단/g, "7초 동안 시야가 차단")
            .replace("스피릿 박스로 응답을 들으면", "주파수 측정기 응답, 지향성 마이크의 초자연적 소리 감지, 사운드 레코더 녹음으로");
        g.detailedHtml = g.detailedHtml
            .replace(/12초 동안/g, "7초 동안")
            .replace(/12초간/g, "7초간")
            .replace("주파수 측정기로 대답을 들은 플레이어는", "주파수 측정기 응답, 지향성 마이크의 초자연적 소리 감지 또는 사운드 레코더 녹음으로 저주받은 플레이어는");
    });

    // Obake — 확률식 대신 실제 flicker 순서
    patch("Obake", g => {
        g.specialTrait = "UV 고유 패턴 및 흔적 지속시간 변화, 사냥 중 정해진 flicker 시점에 다른 같은 성별의 유령 모델로 변신.";
        g.tip = g.tip
            .replace(/6\.6% 확률로 <strong>다른 외형 모델로 순간 변신했다가 복귀<\/strong>합니다\. \(헌팅당 최소 1회 발동\)/g, "사냥 중 정해진 flicker 시점에 <strong>다른 같은 성별의 유령 모델로 변신했다가 복귀</strong>합니다. 첫 변신은 12번째 flicker에서 발생합니다.")
            .replace(/6\.6% 확률로 <strong>다른 외형 모델\(남성\/여성\/아이 등\)로 순간적으로 변신했다가 원래 모습으로 돌아옵니다\.<\/strong> \(헌팅당 최소 1회 이상 무조건 발동\)/g, "정해진 flicker 시점에 <strong>같은 성별의 다른 유령 모델로 변신했다가 복귀</strong>합니다. 첫 변신은 12번째 flicker이며, 사냥이 충분히 길어야 확인할 수 있습니다.");
        g.detailedHtml = g.detailedHtml
            .replace(/6\.6% 확률로/g, "정해진 flicker 시점에")
            .replace(/\(헌팅당 최소 1회 이상 무조건 발동\)/g, "(첫 변신은 12번째 flicker)")
            .replace(/\(헌팅당 최소 1회 발동\)/g, "(첫 변신은 12번째 flicker)");
    });

    // Obambo — 실제 상태 타이머와 정확한 수치
    patch("Obambo", g => {
        g.sanity = "차분한 상태 10% / 공격적 상태 65%";
        g.speed = "차분한 상태 1.445 m/s / 공격적 상태 1.955 m/s";
        g.huntSanity = "차분한 10% / 공격적 65%";
        g.specialTrait = "계약 시작 시 차분한 상태로 시작하며, 출구 문을 처음 연 뒤 1분 후 공격적 상태로 전환되고 이후 2분마다 상태가 전환됩니다. 사냥 중에도 전환될 수 있으며 공격적 상태에서 시작한 사냥은 20% 짧습니다.";
        g.tip = `<strong>1. 차분/공격적 상태 순환</strong><br>
              • <strong>시작 상태:</strong> 항상 <strong>차분한 상태</strong>로 시작합니다.<br>
              • <strong>첫 전환:</strong> 출구 문을 처음 연 뒤 <strong>1분</strong> 후 공격적 상태로 전환됩니다.<br>
              • <strong>이후:</strong> 그 다음부터 <strong>2분마다</strong> 차분 ↔ 공격적 상태가 반복됩니다. 사냥 중에도 상태가 바뀔 수 있습니다.<br>
              • <strong>차분:</strong> 사냥 정신력 <strong>10%</strong>, 기본 속도 <strong>1.445 m/s</strong>.<br>
              • <strong>공격적:</strong> 사냥 정신력 <strong>65%</strong>, 기본 속도 <strong>1.955 m/s</strong>. 공격적 상태에서 시작한 사냥은 <strong>20% 짧습니다.</strong>`;
        g.detailedHtml = `<div class="dict-section-title">1. 상태 및 사냥 메커니즘</div>
            <p class="dict-text">
                • <strong>차분한 상태:</strong> 10% / 1.445 m/s.<br>
                • <strong>공격적 상태:</strong> 65% / 1.955 m/s.<br>
                • <strong>타이머:</strong> 항상 차분한 상태로 시작 → 출구 문 첫 개방 후 1분 뒤 공격적 → 이후 2분마다 전환.<br>
                • <strong>사냥 중 전환:</strong> 사냥 중에도 상태가 바뀌어 속도가 달라질 수 있습니다.<br>
                • <strong>사냥 시간:</strong> 공격적 상태에서 시작한 사냥은 20% 짧습니다. 시작 시점에 결정됩니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">• UV 라이트 (Ultraviolet)<br>• 고스트 라이팅 (Ghost Writing)<br>• 도트 프로젝터 (D.O.T.S. Projector)</p>
            <div class="dict-section-title">3. 판별 포인트</div>
            <p class="dict-text">계약 시작 후 출구 문을 연 시점을 기준으로 1분/2분 주기의 상태 전환을 관찰하고, 사냥 중 속도가 갑자기 바뀌는지를 확인하세요.</p>`;
    });

    // Onryo — 3회 소화는 즉시 사냥이 아니라 '능력 사냥 시도'이며 idle 이후 발동
    patch("Onryo", g => {
        g.sanity = "기본 60% / 불꽃 근처 40%";
        g.huntSanity = "기본 60% / 불꽃 근처 40%";
        g.specialTrait = "불꽃 4m 이내에서는 사냥을 차단하며, 불꽃 3회 소화 카운터가 충족되면 정신력과 무관한 사냥 능력을 시도합니다. 세 번째 소화 순간 즉시 시작되는 것은 아닙니다.";
        g.tip = g.tip
            .replace(/3번째 불 꺼짐 강제 사냥 \(100%\):.*?<\/strong>.*?<br>/s, "3회 소화 능력:</strong> 불꽃 소화 카운터가 3 이상이면 정신력과 무관한 사냥 능력을 <strong>시도</strong>합니다. 다만 사냥 쿨타임, 향초 정화 효과, 다른 불꽃 등의 조건에 따라 즉시 시작되지 않을 수 있습니다.<br>")
            .replace(/정확히 3번째 불이 꺼지는 순간 정신력과 무관하게 100% 확률로 즉시 사냥을 강제 시작합니다\./g, "세 번째 소화 순간 즉시 사냥하는 것이 아니라, 다음 유휴 상태 종료 시 능력을 사용할 수 있습니다.")
            .replace(/3번째 불 꺼짐 강제 사냥/g, "3회 소화 능력");
        g.detailedHtml = g.detailedHtml
            .replace(/3번째 불 꺼짐 강제 사냥 \(100%\):/g, "3회 소화 능력:")
            .replace(/정확히 3번째 불이 꺼지는 순간 정신력과 무관하게 100% 확률로 즉시 사냥을 강제 시작합니다\./g, "세 번째 소화 순간 즉시 시작되는 것은 아닙니다. 다음 유휴 상태 종료 시 능력을 사용할 수 있으며, 사냥 쿨타임·향초 정화 효과·다른 불꽃 등이 이를 막을 수 있습니다.")
            .replace(/양초 불이 3번째 꺼졌을 때 십자가가 즉시 탄다면 100% 원령입니다\./g, "불꽃 소화와 십자가의 발동 순서를 반복 관찰하면 원령을 강하게 의심할 수 있습니다.");
    });

    // Raiju — 2.5m/s는 active electronics 근처에서 LOS를 대체하는 고정 속도
    patch("Raiju", g => {
        g.speed = "작동 전자기기 근처 2.5 m/s 고정 / 그 외 1.7 m/s 기본";
        g.specialTrait = "작동 중인 전자기기 근처에서 사냥 정신력 65%, 전자기기 범위 안에서는 2.5 m/s 고정 속도, 사냥 중 전자기기 교란 범위 15m.";
        g.tip = g.tip.replace(/시야가속 중첩/g, "").replace(/전자기기 근처 2\.5 m\/s/g, "전자기기 근처 2.5 m/s 고정");
        g.detailedHtml = g.detailedHtml.replace(/시야가속 중첩/g, "").replace(/2\.5 m\/s로 쏜살같이 가속/g, "2.5 m/s로 고정");
    });

    // The Mimic — 능력은 복사하지만 증거는 복사하지 않음, 시작 시 blank 상태
    patch("The_Mimic", g => {
        g.specialTrait = "다른 유령의 행동과 특성을 일정 시간 모방하며, 모방 중인 유령의 사냥 속도·정신력·특수 능력을 따를 수 있습니다. 고유 증거는 복사하지 않으며 고스트 오브는 항상 가짜 보조 증거로 나타납니다.";
        g.tip = g.tip
            .replace("다른 유령 완벽 복제", "다른 유령의 행동 및 능력 모방")
            .replace(/30초~2분마다 무작위 다른 유령을 지정하여/g, "계약 시작 후 조건에 따라 다른 유령을 모방하며, 이후 30초~2분 간격으로 모방 대상을 변경할 수 있으며")
            .replace("정식 증거 3개 외에도", "정식 증거 3개와 별개로");
        g.detailedHtml = g.detailedHtml
            .replace("다른 유령 완벽 복제", "다른 유령의 행동 및 능력 모방")
            .replace(/30초~2분마다 무작위 다른 유령\(데오겐, 레버넌트, 데몬 등\)을 지정하여 <strong>해당 유령의 속도, 사냥 정신력, 특수 능력을 그대로 복사<\/strong>합니다\./g, "계약 중 다른 유령을 모방하여 <strong>해당 유령의 속도, 사냥 정신력, 특수 능력과 행동을 따라 할 수 있습니다.</strong> 단, 모방한 유령의 증거 종류 자체를 복사하지는 않습니다.")
            .replace("4증거 유령", "가짜 오브를 포함하는 유령")
            .replace(/난이도와 상관없이 항상 고스트 오브가 가짜로 관찰되게 만듭니다\./g, "난이도와 관계없이 가짜 고스트 오브를 항상 생성합니다.");
    });

    // The Twins — 1.5 / 1.9, 하나의 유령 + 두 상호작용 범위
    patch("The_Twins", g => {
        g.speed = "느린 사냥 1.5 m/s / 빠른 사냥 1.9 m/s";
        g.specialTrait = "실제로는 하나의 유령이며 두 개의 상호작용 범위를 사용합니다. 사냥 시작 시 50% 확률로 1.5 m/s 또는 1.9 m/s 기본 속도를 선택합니다.";
        g.tip = `<strong>1. 두 상호작용 범위 & 사냥 속도</strong><br>
              • <strong>하나의 유령:</strong> 트윈스는 두 개의 독립된 유령이 아니라 <strong>하나의 유령</strong>입니다.<br>
              • <strong>상호작용 범위:</strong> 일반 범위와 큰 범위를 사용하며, 두 위치에서 1~2초 내 연속 상호작용이 발생할 수 있습니다.<br>
              • <strong>사냥 속도:</strong> 사냥 시작 시 50% 확률로 <strong>1.5 m/s</strong> 또는 <strong>1.9 m/s</strong> 기본 속도를 선택합니다.<br>
              • <strong>빠른 사냥:</strong> 빠른 경우 큰 상호작용 범위가 마지막으로 사용된 위치 근처에서 사냥을 시작할 수 있습니다.`;
        g.detailedHtml = `<div class="dict-section-title">1. 상호작용 범위 & 사냥 메커니즘</div>
            <p class="dict-text">
                • <strong>하나의 유령:</strong> 트윈스는 실제로 하나의 유령이며 두 개의 상호작용 범위를 사용합니다.<br>
                • <strong>연속 상호작용:</strong> 두 범위에서 1~2초 내 연속 상호작용이 발생할 수 있습니다.<br>
                • <strong>느린 사냥:</strong> 1.5 m/s.<br>
                • <strong>빠른 사냥:</strong> 1.9 m/s. 빠른 사냥을 선택하면 큰 상호작용 범위가 마지막으로 사용된 위치 근처에서 시작할 수 있습니다.<br>
                • <strong>LOS:</strong> 두 속도 모두 표준 LOS 가속 규칙의 영향을 받을 수 있습니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">• EMF 5단계 (EMF Level 5)<br>• 주파수 측정기 (Spirit Box)<br>• 서늘함 (Freezing Temperatures)</p>
            <div class="dict-section-title">3. 판별 포인트</div>
            <p class="dict-text">서로 떨어진 위치에서 1~2초 내 연속 상호작용이 반복되거나 사냥마다 1.5/1.9 m/s의 기본 속도 차이가 보이면 트윈스를 의심할 수 있습니다.</p>`;
    });

    // Yokai — 사냥 중 감지 범위는 2.5m, 80%는 같은 방 음성 사용 시
    patch("Yokai", g => {
        g.specialTrait = "같은 방에서 음성 채팅을 사용하면 사냥 정신력 임계값이 80%로 상승할 수 있으며, 사냥 중 음성과 손에 든 활성 전자기기 감지 범위가 2.5m로 제한됩니다.";
        g.tip = g.tip
            .replace(/요괴 근처\(3m 이내\)에서 마이크로 말을 많이 하면/g, "요괴와 같은 방에서 음성 채팅을 사용하면")
            .replace(/3m만 떨어져 있어도 손전등을 켜거나 말을 해도 플레이어를 인지하지 못합니다\./g, "사냥 중에는 2.5m 밖의 음성 및 손에 든 활성 전자기기를 감지하지 못합니다.");
        g.detailedHtml = g.detailedHtml
            .replace(/요괴 근처\(3m 이내\)에서 마이크로 말을 많이 하면/g, "요괴와 같은 방에서 음성 채팅을 사용하면")
            .replace(/3m만 떨어져 있어도 플레이어가 손전등을 켜고 마이크로 고함을 질러도 요괴는 감지하지 못하고 그냥 지나쳐 갑니다\./g, "사냥 중 요괴는 2.5m 밖의 음성 및 손에 든 활성 전자기기를 감지하지 못합니다.");
    });

    // Yurei — 문을 '쾅' 닫는 것이 아니라 부드럽게 완전히 닫으며 7.5m 내 15% 차감
    patch("Yurei", g => {
        g.specialTrait = "고유 문 닫기 능력으로 7.5m 이내 플레이어의 정신력을 15% 차감할 수 있으며, 향초 효과가 적용되면 90초 동안 favourite room 상태가 유지되고 DOTS 상태도 발생하지 않습니다.";
        g.tip = `<strong>1. 문 능력 & 향초 약점</strong><br>
              • <strong>특수 문 닫기:</strong> 열린 문이 있는 방에서 고유 능력을 사용하면 문 하나를 <strong>완전히 부드럽게 닫고</strong>, 유령 주변 <strong>7.5m</strong> 이내 플레이어의 정신력을 <strong>15%</strong> 차감합니다.<br>
              • <strong>향초 약점:</strong> 향초 정화 효과가 적용되면 <strong>90초 동안 모든 로밍 상태가 favourite room 상태로 대체</strong>되어 방을 벗어나기 어렵고 DOTS 상태도 발생하지 않습니다.`;
        g.detailedHtml = `<div class="dict-section-title">1. 문 능력 & 향초 약점</div>
            <p class="dict-text">
                • <strong>문 닫기 능력:</strong> 열린 문이 있는 현재 방에서 문 하나를 완전히 닫고, <strong>7.5m 이내 플레이어의 정신력을 15%</strong> 차감합니다.<br>
                • <strong>문 소리:</strong> 일반적인 강한 쾅 닫기와 달리 부드럽게 완전히 닫히며 EMF 2가 발생합니다.<br>
                • <strong>향초:</strong> 정화향초 효과가 적용되면 <strong>90초 동안 로밍 상태가 favourite room 상태로 대체</strong>되고 DOTS 상태가 발생하지 않습니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">• 고스트 오브 (Ghost Orb)<br>• 서늘함 (Freezing Temperatures)<br>• 도트 프로젝터 (D.O.T.S. Projector)</p>`;
    });

    // Aswang — 최신 값 유지, 문구만 명확화
    patch("Aswang", g => {
        g.specialTrait = "기본 속도 1.53 m/s, 표준보다 빠른 LOS 가속으로 8.67초 만에 최대 2.53 m/s 도달. 공식 은신처 안의 플레이어를 죽이지 못하며, 해당 상황이 발생하면 다음 사냥의 추적 경로에 영향을 줄 수 있습니다.";
    });

    // Kormos — 50/70% hunt sanity, 1.7/2.21m/s, 청각 범위
    patch("Kormos", g => {
        g.sanity = "기본 50% / 같은 방에서 플레이어가 질주 중일 때 70%";
        g.speed = "기본 1.7 m/s / 감지 지점으로 이동 시 2.21 m/s (1.3배)";
        g.hasSpecialSpeed = true;
        g.huntSanity = "기본 50% / 같은 방 질주 시 70%";
        g.specialTrait = "거의 보지 못하며 발소리·음성·전자기기로 플레이어를 감지합니다. 질주 30m / 일반 보행 15m / 웅크린 보행 10m에서 발소리를 감지하며, 감지 지점으로 이동할 때 속도가 1.3배가 될 수 있습니다.";
        g.tip = `<strong>1. 청각 기반 사냥 메커니즘</strong><br>
              • <strong>사냥 정신력:</strong> 기본 <strong>50%</strong>, 같은 방에서 플레이어가 질주하면 <strong>70%</strong>까지 상승합니다.<br>
              • <strong>발소리 감지:</strong> 질주 <strong>30m</strong> / 일반 보행 <strong>15m</strong> / 웅크린 보행 <strong>10m</strong>입니다.<br>
              • <strong>속도:</strong> 기본 <strong>1.7 m/s</strong>, 감지한 플레이어의 위치로 이동할 때 <strong>1.3배(약 2.21 m/s)</strong>가 적용될 수 있습니다.<br>
              • <strong>시야:</strong> 기본적으로 거의 장님이며, 플레이어가 5m 이내에서 장애물 없이 움직일 때 제한적인 LOS를 얻습니다.`;
        g.detailedHtml = `<div class="dict-section-title">1. 청각 기반 사냥 메커니즘</div>
            <p class="dict-text">
                • <strong>사냥 정신력:</strong> 기본 50%, 같은 방에서 플레이어가 질주하면 70%.<br>
                • <strong>감지 범위:</strong> 질주 30m / 일반 보행 15m / 웅크린 보행 10m.<br>
                • <strong>속도:</strong> 기본 1.7 m/s. 감지 지점으로 이동할 때 1.3배인 약 2.21 m/s가 적용될 수 있습니다.<br>
                • <strong>시야:</strong> 기본적으로 시야가 제한되며 5m 이내에서 움직이는 플레이어에게만 제한적 LOS를 얻습니다.<br>
                • <strong>정지 테스트:</strong> 사냥 중 완전히 정지하고 음성/전자기기 사용을 줄이면 감지 가능성이 크게 낮아집니다.
            </p>
            <div class="dict-section-title">2. 증거 (Evidence)</div>
            <p class="dict-text">• 고스트 오브 (Ghost Orb)<br>• 주파수 측정기 (Spirit Box)<br>• UV 라이트 (Ultraviolet)</p>`;
    });
})();

// =========================================================
// v11 Ultimate Ghost Dictionary — all ghosts deep-detail override
// Source basis: Zero-Network/Ty Bayn + Phasmophobia Fandom; design preserved.
// =========================================================
(() => {
    if (typeof GHOST_DATA === "undefined") return;
    const rich = {
        "Spirit": { title: "스피릿 — 기준점이 되는 유령", trait: "고유한 속도·사냥 정신력 변화는 없으며, 향초의 사냥 방지 시간이 일반 유령보다 2배 깁니다.", tip: "스피릿은 특수 능력이 거의 없는 기준점입니다. 다른 유령의 행동을 모두 배제한 뒤 향초 타이머로 최종 확인하는 방식이 가장 안전합니다.", html: "<div class=\"dict-section-title\">1. 사냥 메커니즘</div><p class=\"dict-text\">• <strong>사냥 기준:</strong> 평균 정신력 <strong>50%</strong> 이하에서 일반적인 사냥 규칙을 따릅니다.<br>• <strong>속도:</strong> 기본 <strong>1.7 m/s</strong>, 표준 시야 가속이 적용됩니다.<br>• <strong>향초:</strong> 향초가 유령에게 정상 적용되면 <strong>180초</strong> 동안 스스로 사냥할 수 없습니다. 일반 유령은 90초입니다.<br>• 향초 효과는 진행 중인 일반 사냥의 재시작 방지에도 적용되지만 <strong>저주받은 사냥을 막지는 못합니다.</strong></p><div class=\"dict-section-title\">2. 증거</div><p class=\"dict-text\">EMF 5 · 주파수 측정기 · 고스트 라이팅</p><div class=\"dict-section-title\">3. 확정에 가까운 테스트</div><p class=\"dict-text\">정신력이 충분히 낮은 상태에서 유령에게 향초를 적용하고 타이머를 시작하세요. <strong>90초가 지나도 사냥하지 않고 180초 방어가 유지되는지</strong>를 반복 확인하면 스피릿을 강하게 의심할 수 있습니다. 단 한 번의 타이머만으로 확정하지 말고, 향초가 실제로 유령에게 적용됐는지 확인해야 합니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">특수 속도나 조기 사냥에 의존하지 않는 대신, 향초를 적극적으로 사용해 시간을 벌 수 있습니다. 다른 유령의 고유 행동을 먼저 소거한 뒤 스피릿 테스트를 마지막에 하는 것이 효율적입니다.</p>" },
        "Wraith": { title: "레이스 — 소금과 순간이동을 이용한 판별", trait: "소금 더미를 절대 건드리지 않으며, 비사냥 상태에서 무작위 플레이어 위치로 순간이동해 그 위치에 EMF 2 또는 5를 남길 수 있습니다.", tip: "소금 테스트가 가장 강력합니다. 레이스는 벽을 통과하지 않으므로 모델이나 이동만으로 레이스를 판단하지 마세요.", html: "<div class=\"dict-section-title\">1. 고유 능력</div><p class=\"dict-text\">• <strong>소금:</strong> 사냥 중을 포함해 소금 더미를 전혀 교란하지 않습니다. 따라서 소금 발자국도 만들지 않습니다.<br>• <strong>순간이동:</strong> 사냥·고스트 이벤트가 아닌 상태에서 무작위 플레이어에게 순간이동할 수 있습니다. 순간이동이 끝난 <strong>플레이어 위치</strong>에 EMF 2가 발생하며, 약 33% 확률로 EMF 5가 됩니다.<br>• <strong>중요한 오해:</strong> 레이스가 실제로 벽이나 바닥을 통과하는 것은 아닙니다.</p><div class=\"dict-section-title\">2. 증거</div><p class=\"dict-text\">EMF 5 · 주파수 측정기 · 도트 프로젝터</p><div class=\"dict-section-title\">3. TEST 01 — 소금</div><p class=\"dict-text\">유령의 이동 경로에 소금을 직접 놓고 유령이 그 위를 통과하도록 유도합니다. <strong>정면으로 지나가는데도 소금이 반복해서 그대로라면 레이스</strong>를 강하게 의심할 수 있습니다. 단, 분노 상태의 갈루도 소금을 건드리지 않으므로 갈루 가능성을 함께 확인하세요.</p><div class=\"dict-section-title\">4. TEST 02 — 순간이동 EMF</div><p class=\"dict-text\">유령방에서 멀리 떨어진 플레이어 주변에 갑자기 EMF가 생기고 실제 상호작용이 없다면 레이스의 순간이동을 의심하세요. EMF 위치가 <strong>플레이어의 위치</strong>라는 점이 핵심입니다.</p>" },
        "Phantom": { title: "팬텀 — 사진과 깜빡임으로 잡아내는 유령", trait: "유령 이벤트·사냥 중 10m 이내에서 모습을 바라볼 때 추가 정신력 감소가 발생하며, 사진을 정상적으로 찍으면 일시적으로 사라집니다.", tip: "사진 테스트와 사냥 깜빡임을 함께 보세요. 팬텀의 사냥 깜빡임은 보이지 않는 시간이 유독 길습니다.", html: "<div class=\"dict-section-title\">1. 정신력 및 시각 메커니즘</div><p class=\"dict-text\">• 유령 이벤트 또는 사냥 중 팬텀과 <strong>10m 이내</strong>에서 하트비트가 발생하는 직시 상태라면 추가 정신력이 약 <strong>0.5%/초</strong> 감소합니다.<br>• <strong>사진/영상 촬영:</strong> 정상적으로 촬영에 성공하면 팬텀이 실제 화면에서 사라지며, 결과물에도 유령의 형체와 간섭 패턴이 남지 않습니다.<br>• <strong>사냥 깜빡임:</strong> 가시 시간은 일반 유령과 비슷하지만 비가시 시간이 길어 한 번의 깜빡임 주기가 약 1~2초까지 늘어납니다.</p><div class=\"dict-section-title\">2. 증거</div><p class=\"dict-text\">주파수 측정기 · UV 라이트 · 도트 프로젝터</p><div class=\"dict-section-title\">3. TEST 01 — 사진</div><p class=\"dict-text\">도트나 이벤트로 안전하게 나타나게 한 뒤 사진을 찍습니다. <strong>사진 촬영 성공과 동시에 팬텀이 사라지고 결과물에 유령이 보이지 않는다면</strong> 강력한 판별 포인트입니다. 다른 유령도 이벤트 종료 시점의 동기화 문제로 비슷하게 보일 수 있으므로 한 번만으로 확정하지 마세요.</p><div class=\"dict-section-title\">4. TEST 02 — 사냥 깜빡임</div><p class=\"dict-text\">안전한 루프에서 사냥을 관찰하세요. 유령이 1초 이상 자주 사라지는 긴 깜빡임이 반복되면 팬텀 가능성이 크게 올라갑니다.</p>" },
        "Poltergeist": { title: "폴터가이스트 — 물건을 무기로 사용하는 유령", trait: "여러 물건을 동시에 던지는 능력을 가지며, 사냥 중 주변 물건이 있다면 0.5초마다 투척을 시도합니다.", tip: "물건을 한곳에 몰아놓는 것보다 여러 작은 더미를 여러 위치에 만드는 편이 테스트에 유리합니다.", html: "<div class=\"dict-section-title\">1. 투척 메커니즘</div><p class=\"dict-text\">• 상호작용 상태에 들어갈 때 <strong>20%</strong> 확률로 투척 상태를 선택할 수 있습니다.<br>• 특수 능력은 상호작용 범위 안의 물건을 <strong>한꺼번에 투척</strong>하며, 유령 머리 위치에 EMF 2, 던져진 각 물건에는 EMF 3이 발생합니다.<br>• 같은 방의 플레이어는 던져진 물건 <strong>1개당 정신력 2%</strong>를 잃습니다.<br>• 사냥 중에는 주변에 던질 물건이 있다면 <strong>0.5초마다 100% 확률로 투척을 시도</strong>합니다.<br>• 일반 유령보다 훨씬 강한 투척력을 가질 수 있습니다.</p><div class=\"dict-section-title\">2. 증거</div><p class=\"dict-text\">주파수 측정기 · UV 라이트 · 고스트 라이팅</p><div class=\"dict-section-title\">3. TEST — 폴터 더미</div><p class=\"dict-text\">유령이 있는 것으로 추정되는 방에 여러 작은 물건 더미를 <strong>여러 위치</strong>에 만들어 주세요. 한 번에 여러 물건이 폭발하듯 날아가거나 사냥 중 0.5초 간격의 연속 투척이 보이면 강력한 증거입니다.<br>※ 물건이 전혀 없어도 특수 능력 자체가 불가능한 것은 아니므로, <strong>빈 방에서 능력이 안 나왔다고 폴터를 배제하지 마세요.</strong></p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">사냥 전 물건을 치워버리는 것보다 작은 더미를 분산해 두는 것이 테스트에 좋습니다. 반대로 사냥이 시작되면 물건이 많은 방은 투척음 때문에 위치를 추적하기 쉬워질 수 있습니다.</p>" },
        "Banshee": { title: "밴시 — 한 명을 끝까지 노리는 타겟형 유령", trait: "게임 시작 시 타겟을 정하고 그 타겟의 정신력으로 사냥을 판정합니다. 여성 전용이며 특유의 비명을 마이크로폰에서 들을 수 있습니다.", tip: "타겟 확인 + 여성 모델 + 마이크로폰 비명 세 가지를 조합하면 매우 강력합니다.", html: "<div class=\"dict-section-title\">1. 타겟 시스템</div><p class=\"dict-text\">• 계약 시작 시 무작위 플레이어 한 명을 타겟으로 선택합니다. 타겟이 죽거나 게임을 나가면 다음 대상이 정해집니다.<br>• 사냥 판정은 평균 정신력이 아니라 <strong>타겟의 정신력 50%</strong>를 기준으로 합니다. 그래서 평균 정신력이 50%보다 훨씬 높은 상태에서도 사냥이 가능할 수 있습니다.<br>• 타겟이 조사 구역 밖에 있으면 사냥 시 다른 플레이어를 기회적으로 추적할 수 있습니다.</p><div class=\"dict-section-title\">2. 고유 행동</div><p class=\"dict-text\">• 노래 이벤트 선택 확률이 일반 유령의 20%보다 높은 <strong>46.67%</strong>입니다.<br>• 타겟이 조사 구역 안에 있을 때 D.O.T.S 상태에서 타겟에게 이동할 확률은 <strong>2/3</strong>입니다.<br>• 짧은 로밍에서도 타겟에게 이동하는 능력을 사용할 수 있습니다. 이 이동에는 레이스처럼 EMF가 생성되지 않습니다.<br>• 마이크로폰/사운드 레코더에서 <strong>33%</strong> 확률로 20종의 고유 비명 중 하나를 냅니다.<br>• 여성 이름·모델만 사용합니다.</p><div class=\"dict-section-title\">3. TEST — 타겟 분리</div><p class=\"dict-text\">한 명을 낮은 정신력으로 유지하고 다른 플레이어는 높은 정신력으로 유지한 뒤 사냥이 누구를 기준으로 시작되는지 관찰하세요. 사냥 중 타겟이 아닌 플레이어를 접촉해도 죽이지 않고 통과한다는 점도 강력한 확인법입니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">타겟이 아닌 플레이어는 사냥 중 상대적으로 자유롭게 조사할 수 있지만, 타겟이 조사 구역 안에 있을 때만 이 장점이 명확합니다. 타겟이 정신력을 높게 유지하면 사냥을 크게 늦출 수 있습니다.</p>" },
        "Dayan": { title: "다얀 — 움직임 하나로 사냥 속도와 임계값이 바뀌는 유령", trait: "10m 안에서 가장 가까운 플레이어의 움직임에 따라 사냥 임계값과 속도가 동시에 바뀝니다. 여성 전용입니다.", tip: "10m라는 거리와 가장 가까운 플레이어라는 조건이 핵심입니다. 플레이어가 감지되지 않아도 움직임 자체가 영향을 줍니다.", html: "<div class=\"dict-section-title\">1. 10m 근접 메커니즘</div><p class=\"dict-text\">• 다얀에서 <strong>10m 이내</strong>에 플레이어가 있으면 같은 층인지와 관계없이 가장 가까운 플레이어의 상태를 확인합니다.<br>• 가장 가까운 플레이어가 <strong>정지</strong>하면: 사냥 임계값 <strong>45%</strong> / 기본 속도 <strong>1.2 m/s</strong>.<br>• 가장 가까운 플레이어가 <strong>걷거나 움직이면</strong>: 사냥 임계값 <strong>65%</strong> / 기본 속도 <strong>2.25 m/s</strong>.<br>• 10m 안에 플레이어가 없으면 일반적인 <strong>50% / 1.7 m/s</strong> 규칙으로 돌아갑니다.</p><div class=\"dict-section-title\">2. LOS의 숨은 누적</div><p class=\"dict-text\">10m 안에서는 위의 고정 속도가 우선하지만, 다얀이 플레이어를 시야에 두며 쌓은 일반 LOS 가속은 <strong>백그라운드에서 누적</strong>될 수 있습니다. 10m 밖으로 나간 뒤에는 그 누적 가속이 적용될 수 있으므로 “다얀은 LOS 가속이 없다”라고 이해하면 안 됩니다.</p><div class=\"dict-section-title\">3. TEST 01 — 정지 / 이동</div><p class=\"dict-text\">사냥 중 다얀과 10m 안에 있는 플레이어가 완전히 멈추면 1.2 m/s 수준으로 급격히 느려지고, 가까운 플레이어가 움직이면 2.25 m/s로 돌아가는지 확인합니다. <strong>가장 가까운 플레이어</strong>가 바뀌면 속도도 바뀔 수 있습니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">사냥 중에는 10m 안에서 가장 가까운 플레이어가 멈춰 유령의 속도를 낮추는 것이 강력합니다. 반대로 다얀에게 가까운 상태에서 무작정 달리면 2.25 m/s가 즉시 적용되어 매우 위험합니다. 향초와 소금으로 10m 밖으로 빠져나갈 시간을 만드는 것이 좋습니다.<br>※ 다얀은 <strong>여성 이름·여성 모델</strong>만 사용하므로 성별도 즉시 배제 테스트로 활용할 수 있습니다.</p>" },
        "Deildegast": { title: "데일드가스트 — 물건을 움직일수록 느려지는 초고속 유령", trait: "각 사냥 사이 플레이어가 상호작용한 고유 비장비 오브젝트 수에 따라 다음 사냥 속도가 0.1 m/s씩 감소합니다. 시야 가속은 없습니다.", tip: "처음에는 3.0 m/s이므로 숨는 것이 우선입니다. 확인 후에는 서로 다른 물건을 최대한 많이 움직여 다음 사냥을 약화시키세요.", html: "<div class=\"dict-section-title\">1. 사냥 속도</div><p class=\"dict-text\">• 사냥 시작 기본 속도는 <strong>3.0 m/s</strong>입니다.<br>• 시야를 확보해도 표준 LOS 가속을 받지 않습니다. 사냥 시작 시 결정된 속도가 해당 사냥 동안 유지됩니다.<br>• 사냥이 끝나거나 사냥 시도가 끝나면 카운터가 다시 계산됩니다.</p><div class=\"dict-section-title\">2. 오브젝트 카운터</div><p class=\"dict-text\">• 플레이어가 사냥과 사냥 사이에 상호작용한 <strong>고유 비장비 오브젝트</strong>마다 다음 사냥 속도가 <strong>0.1 m/s</strong>씩 감소합니다.<br>• 동일한 물건을 반복해서 움직여도 중복 누적되지 않습니다.<br>• 장비와 저주받은 물건은 카운트하지 않는 것으로 정리하는 것이 안전합니다. 사이트의 테스트에서는 <strong>서로 다른 환경 오브젝트</strong>를 우선하세요.<br>• 최저 속도는 <strong>0.4 m/s</strong>입니다.</p><div class=\"dict-section-title\">3. TEST — 3.0 → 감속</div><p class=\"dict-text\">첫 사냥 전에는 물건을 거의 건드리지 않고 속도를 확인합니다. 다음 사냥 사이에 서로 다른 오브젝트를 10개 이상 움직인 뒤 속도가 눈에 띄게 내려가면 데일드가스트를 강하게 의심할 수 있습니다. <strong>약 13개면 일반 유령 수준 1.7 m/s, 약 26개면 0.4 m/s</strong>까지 내려가는 것이 핵심 체감 포인트입니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">초반 3.0 m/s 상태에서 달리기로 해결하려 하지 마세요. 확인이 끝나면 생존한 플레이어가 방마다 서로 다른 오브젝트를 빠르게 움직여 다음 사냥을 약화시키는 것이 핵심입니다. 사망한 플레이어의 상호작용도 카운터에 기여할 수 있어 팀 플레이 가치가 높습니다.</p>" },
        "Deogen": { title: "데오겐 — 숨는 것이 통하지 않고 가까워질수록 느려지는 유령", trait: "사냥 중 모든 플레이어의 위치를 알고 있으며, 목표와의 경로 거리에 따라 속도가 결정됩니다. 시야 가속은 없습니다.", tip: "데오겐은 숨지 말고 루프하세요. 6m 밖에서는 3.0 m/s지만 가까워지면 급격히 느려져 일반 플레이어보다 느려집니다.", html: "<div class=\"dict-section-title\">1. 사냥 메커니즘</div><p class=\"dict-text\">• 사냥 임계값은 <strong>40%</strong>입니다.<br>• 사냥 중 모든 플레이어의 위치를 알고 있어 일반적인 은신처 탐색 규칙을 사용하지 않습니다.<br>• 6m 초과: <strong>3.0 m/s</strong>.<br>• 6m 이하: 경로 거리에 따라 점진적으로 감속하며 <strong>2.5m 이내 최저 0.4 m/s</strong>입니다.<br>• 표준 LOS 가속은 없습니다.</p><div class=\"dict-section-title\">2. 특수 주파수 측정기 반응</div><p class=\"dict-text\">데오겐과 <strong>1m 이내</strong>에서 주파수 측정기로 질문하면 질문마다 약 <strong>33%</strong> 확률로 특유의 무거운 숨소리 응답을 낼 수 있습니다.</p><div class=\"dict-section-title\">3. TEST — 사냥 속도 변화</div><p class=\"dict-text\">사냥을 시작한 뒤 넓은 공간에서 빠르게 접근하는 유령이 플레이어에게 가까워질수록 갑자기 느려지는지 관찰하세요. <strong>숨은 플레이어에게 곧장 오고, 2~3m 근처에서 달팽이처럼 느려진다면</strong> 데오겐의 전형적인 패턴입니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">데오겐을 상대할 때는 숨는 것보다 넓은 공간에서 계속 움직이며 루프하는 것이 안전합니다. 향초를 사용한 뒤에도 데오겐의 목표 전환 주기를 고려해 충분한 공간을 확보하세요. 좁은 막다른 곳으로 들어가면 스스로 퇴로를 없애는 셈입니다.</p>" },
        "Demon": { title: "데몬 — 높은 사냥 임계값과 짧은 쿨타임의 극공격형", trait: "일반 사냥 임계값은 70%이며, 특수 능력으로 정신력과 무관하게 사냥할 수 있습니다. 향초 방어 60초, 사냥 최소 쿨타임 20초입니다.", tip: "데몬은 정신력만 보고 안전하다고 판단하면 안 됩니다. 초반부터 십자가와 향초를 준비하세요.", html: "<div class=\"dict-section-title\">1. 사냥 규칙</div><p class=\"dict-text\">• 일반 사냥 임계값은 <strong>70%</strong>입니다.<br>• 특수 능력이 발동하면 <strong>현재 정신력과 무관하게</strong> 사냥을 시작할 수 있습니다.<br>• 사냥 최소 쿨타임은 <strong>20초</strong>로 일반 유령보다 짧습니다.<br>• 향초의 사냥 방지 효과는 <strong>60초</strong>입니다.</p><div class=\"dict-section-title\">2. 십자가 범위</div><p class=\"dict-text\">데몬의 십자가 유효 범위는 일반 유령보다 <strong>50% 넓습니다.</strong> 따라서 Tier I <strong>4.5m</strong>, Tier II <strong>6m</strong>, Tier III <strong>7.5m</strong>입니다.</p><div class=\"dict-section-title\">3. TEST 01 — 향초 타이머</div><p class=\"dict-text\">향초 적용 후 <strong>60~90초 사이</strong>에 다시 사냥이 가능한지를 여러 번 확인하세요. 60초가 지나자마자 사냥할 수 있는 것은 데몬의 강력한 판별 포인트지만, 60초 안에 반드시 사냥한다는 뜻은 아닙니다.</p><div class=\"dict-section-title\">4. TEST 02 — 십자가 거리</div><p class=\"dict-text\">십자가가 평소보다 먼 거리에서 소모되는 것처럼 보이면 데몬을 의심할 수 있습니다. 다만 실제 유령 위치와 십자가 범위를 정확히 측정해야 합니다.</p>" },
        "Gallu": { title: "갈루 — 보호 장비 사용에 따라 3단계로 변하는 유령", trait: "일반·분노·약화 상태를 오가며 속도, 사냥 임계값, 십자가와 향초의 효과가 달라집니다.", tip: "갈루는 보호 장비를 무작정 쓰는 것 자체가 상태 변화를 일으킬 수 있습니다. 소금 테스트도 분노 상태에서는 통하지 않습니다.", html: "<div class=\"dict-section-title\">1. 세 가지 상태</div><p class=\"dict-text\"><strong>일반:</strong> 사냥 50% / 1.7 m/s / 향초 5초 / 십자가 정상 범위.<br><strong>분노:</strong> 사냥 60% / 1.955 m/s / 향초 4초 / 십자가 범위 2m 감소 / 소금 교란 없음.<br><strong>약화:</strong> 사냥 40% / 1.36 m/s / 향초 6초 / 십자가 범위 1m 증가.</p><div class=\"dict-section-title\">2. 상태 변화</div><p class=\"dict-text\">십자가·향초·소금 같은 보호 수단을 사용하면 갈루의 상태에 영향을 줄 수 있습니다. 분노 상태는 방어 장비에 더 강하게 반응하는 상태이며, 이후 약화 상태로 넘어가면 오히려 방어 장비의 효과가 좋아집니다.</p><div class=\"dict-section-title\">3. TEST — 소금과 방어 장비</div><p class=\"dict-text\">UV 증거를 확인하기 위해 소금을 적극적으로 사용하는 경우 갈루라면 분노 상태에 진입할 수 있습니다. <strong>분노 상태에서 소금을 지나도 소금이 교란되지 않는 것</strong>은 강력한 단서입니다. 다만 상태를 바꾼 뒤의 타이밍까지 함께 관찰하세요.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">갈루로 의심되면 보호 장비를 소모할 타이밍을 팀이 합의하세요. 분노 상태에서 사냥을 맞이하면 더 빠르고 십자가 범위도 줄어들므로 위험합니다. 반대로 약화 상태를 만든 뒤에는 장기적으로 훨씬 다루기 쉬워집니다.</p>" },
        "Goryo": { title: "고료 — 도트와 방 이동 제한으로 확인하는 유령", trait: "도트 상태를 같은 방에 플레이어가 없을 때만 만들며, 도트 실루엣은 비디오 카메라로만 볼 수 있습니다. 선호 방을 바꾸지 않습니다.", tip: "도트가 맨눈에는 안 보이고 카메라에서만 보이는지 확인하세요. 고료는 장거리 로밍도 거의 하지 않습니다.", html: "<div class=\"dict-section-title\">1. 도트 메커니즘</div><p class=\"dict-text\">• 같은 방에 플레이어가 있으면 고료는 <strong>도트 상태에 들어가지 않습니다.</strong><br>• 도트 실루엣은 <strong>비디오 카메라 화면에서만</strong> 보이며 맨눈으로는 보이지 않습니다.<br>• 로밍 상태에서 도트 상태를 선택할 확률이 일반 유령의 1/3보다 높은 <strong>2/3</strong>입니다.<br>• 선호 방을 바꾸지 않으며 장거리 로밍을 하지 않습니다.</p><div class=\"dict-section-title\">2. 증거</div><p class=\"dict-text\">도트 프로젝터 · EMF 5 · UV 라이트<br>제한 증거에서는 도트가 항상 포함됩니다.</p><div class=\"dict-section-title\">3. TEST — 카메라 도트</div><p class=\"dict-text\">도트 프로젝터를 설치하고 플레이어는 유령방 밖으로 나갑니다. <strong>맨눈에는 아무것도 없는데 카메라 화면에서만 도트 실루엣이 반복</strong>되면 고료를 강하게 의심할 수 있습니다. 반대로 맨눈에서 도트가 확실히 보이면 고료를 배제할 수 있습니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">고료를 찾는 동안 선호 방이 바뀌지 않는다는 점을 이용해 모션 센서와 소금으로 활동 범위를 추적하세요. 도트 확인은 플레이어가 같은 방에 들어가지 않는 것이 중요합니다.</p>" },
        "Hantu": { title: "한투 — 온도에 따라 속도가 달라지는 냉기형 유령", trait: "사냥 속도가 현재 방 온도에 고정적으로 연동되며 LOS 가속이 없습니다. 차단기를 직접 켤 수 없습니다.", tip: "차단기를 끄면 냉기 입김으로 판별할 수 있지만, 시간이 지날수록 방이 식어 속도가 빨라지는 점을 반드시 고려하세요.", html: "<div class=\"dict-section-title\">1. 온도별 속도</div><p class=\"dict-text\">사냥 중 방 온도에 따라 속도가 달라집니다.<br><strong>15°C 초과 1.4</strong> · <strong>12~15°C 1.75</strong> · <strong>9~12°C 2.1</strong> · <strong>6~9°C 2.3</strong> · <strong>3~6°C 2.4</strong> · <strong>0~3°C 2.5</strong> · <strong>0°C 미만 2.7 m/s</strong>.<br>표준 LOS 가속은 없습니다.</p><div class=\"dict-section-title\">2. 차단기</div><p class=\"dict-text\">한투는 차단기를 <strong>켜지 못하며</strong>, 다른 유령보다 차단기를 끌 확률이 높습니다. 차단기가 꺼진 상태로 사냥하면 유령 머리 주변에서 냉기 입김이 보입니다. 이는 별도 증거가 아니라 행동 단서입니다.</p><div class=\"dict-section-title\">3. TEST — 차단기 OFF 사냥</div><p class=\"dict-text\">차단기를 끄고 사냥을 유도해 <strong>냉기 입김</strong>이 반복되는지 확인합니다. 동시에 방 온도를 측정해 따뜻한 방에서는 느리고 차가운 방에서 빨라지는지 비교하세요.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">차단기를 계속 켜 두면 한투의 속도 상승을 늦출 수 있습니다. 반대로 한투 확인을 위해 차단기를 끄는 테스트는 정신력과 사냥 위험을 고려해 향초를 준비한 뒤 진행하세요.</p>" },
        "Jinn": { title: "진 — 차단기와 거리 조건이 동시에 맞아야 폭주하는 유령", trait: "차단기 ON + 시야 확보 + 3m 초과라는 세 조건을 동시에 만족할 때 2.5 m/s 고정 속도를 사용하며, 별도로 주변 플레이어 정신력을 25% 즉시 감소시킬 수 있습니다.", tip: "“차단기 켜져 있으면 무조건 2.5”가 아닙니다. 세 조건을 모두 만족해야 합니다.", html: "<div class=\"dict-section-title\">1. 사냥 속도 조건</div><p class=\"dict-text\">사냥 중 다음 <strong>3가지 조건이 모두</strong> 맞으면 2.5 m/s로 고정됩니다.<br>① 차단기 ON ② 플레이어와 시야 확보 ③ 플레이어와 <strong>3m 초과</strong> 거리.<br>조건이 깨지면 일반 유령 속도 규칙으로 돌아갑니다. 2.5 m/s로 고정되는 동안 쌓인 LOS 가속은 조건이 풀린 뒤 적용될 수 있습니다.</p><div class=\"dict-section-title\">2. 정신력 공격</div><p class=\"dict-text\">차단기가 켜져 있으면 진은 일정한 능력 조건을 충족한 뒤 같은 방 또는 <strong>3m 이내</strong> 플레이어의 정신력을 <strong>25%</strong> 즉시 감소시킬 수 있습니다. 이때 차단기 위치에 EMF 2 또는 5가 발생합니다.</p><div class=\"dict-section-title\">3. TEST 01 — 긴 복도 속도</div><p class=\"dict-text\">차단기를 켠 상태에서 긴 복도 끝에 서서 유령이 3m 이상 떨어진 상태로 시야를 확보하게 하세요. 2.5 m/s로 고정되는지 관찰합니다. 레버넌트도 시야 확보 시 빨라지므로 <strong>시야 밖 이동 속도</strong>를 함께 비교하세요.</p><div class=\"dict-section-title\">4. TEST 02 — 차단기 EMF</div><p class=\"dict-text\">차단기 옆에 EMF를 두고 차단기가 켜져 있는데 갑자기 EMF가 뜨면서 플레이어 정신력이 25% 급감한다면 진의 능력을 강하게 의심할 수 있습니다. 진은 전자기기를 특별히 더 많이 만지는 유령이라는 것은 아닙니다.</p>" },
        "Mare": { title: "메어 — 빛의 상태가 사냥 임계값을 바꾸는 유령", trait: "현재 유령이 있는 방의 전등 상태에 따라 사냥 임계값이 60% 또는 40%로 달라지며, 켜진 불을 즉시 끌 수 있습니다.", tip: "차단기 선호가 아니라 “현재 방의 전등 상태”가 핵심입니다. 손전등이나 불빛 아이템은 사냥 임계값을 바꾸지 않습니다.", html: "<div class=\"dict-section-title\">1. 빛과 사냥</div><p class=\"dict-text\">• 현재 방의 전등이 <strong>꺼져 있으면 60%</strong>에서 사냥 가능.<br>• 전등이 <strong>켜져 있으면 40%</strong>에서 사냥 가능.<br>• 차단기가 꺼져 있거나 고장 난 경우에도 방의 전등 상태 기준은 유지됩니다.<br>• 손전등·양초 같은 휴대 조명은 이 임계값을 바꾸지 않습니다.</p><div class=\"dict-section-title\">2. 불을 끄는 능력</div><p class=\"dict-text\">플레이어가 메어 근처 <strong>4m 이내</strong>의 전등을 켜면 약 <strong>1/7</strong> 확률로 최대 1초 안에 다시 끌 수 있습니다. 같은 플레이어가 해당 전등을 다시 켜거나 끈 뒤에는 약 10초의 쿨다운이 있습니다.</p><div class=\"dict-section-title\">3. TEST — 전등 반복</div><p class=\"dict-text\">유령방의 전등을 켜고 메어가 즉시 다시 끄는 현상을 반복 관찰하세요. 동시에 사냥 임계값을 빛에 따라 비교하면 강력한 판별이 됩니다. 메어는 <strong>전등을 직접 켤 수 없습니다.</strong></p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">메어로 확인됐다면 40%까지 전등을 켜 두어 사냥을 늦추는 방법이 있습니다. 반대로 40% 아래에서는 빛과 관계없이 사냥할 수 있으므로 정신력이 충분히 낮아진 뒤에는 전등 전략만 믿으면 안 됩니다.</p>" },
        "Moroi": { title: "모로이 — 저주가 정신력과 속도를 동시에 무너뜨리는 유령", trait: "저주된 플레이어는 수동 정신력 감소가 2배가 되며, 평균 정신력이 낮을수록 사냥 기본 속도가 1.5→2.25 m/s로 상승합니다. 향초 실명은 7초입니다.", tip: "주파수 측정기·지향성 마이크·사운드 레코더가 모두 저주 통로가 될 수 있습니다. 저주를 확인했다면 정신력 회복이 최우선입니다.", html: "<div class=\"dict-section-title\">1. 저주 메커니즘</div><p class=\"dict-text\">모로이는 플레이어에게 저주를 걸 수 있습니다. 주파수 측정기 응답, 지향성 마이크로 초자연적 소리를 감지하거나 사운드 레코더로 해당 소리를 녹음하는 것이 저주 경로입니다.<br>저주된 플레이어는 <strong>수동 정신력 감소가 2배</strong>가 되며, 일반 조명으로 이 추가 감소를 막을 수 없습니다.</p><div class=\"dict-section-title\">2. 정신력과 속도</div><p class=\"dict-text\">평균 팀 정신력이 낮아질수록 기본 속도가 증가하며 범위는 <strong>1.5 m/s → 2.25 m/s</strong>입니다. 여기에 일반 LOS 가속도 적용되며, 매우 낮은 정신력에서 충분히 시야를 유지하면 최대 <strong>3.71 m/s</strong>까지 도달할 수 있습니다.</p><div class=\"dict-section-title\">3. TEST — 사냥 속도 변화</div><p class=\"dict-text\">같은 유령을 여러 번 보면서 평균 정신력을 낮춰 보세요. 다른 조건이 같다면 사냥 속도가 점점 빨라지는지가 핵심입니다. 한투와 혼동하지 않으려면 차단기를 켜 두거나 냉기 입김 여부를 함께 확인하세요.</p><div class=\"dict-section-title\">4. 향초와 실전 공략</div><p class=\"dict-text\">향초에 맞은 모로이는 일반 유령보다 긴 <strong>7초</strong> 동안 실명됩니다. 저주가 확인되면 정신력 약을 빠르게 사용하고, 저주 상태에서 어두운 공간에 오래 머무르지 마세요. 모로이는 시간이 갈수록 더 위험해지는 대표적인 유령입니다.</p>" },
        "Myling": { title: "마일링 — 발소리와 전자기기 거리의 차이를 이용하는 유령", trait: "사냥 발소리와 유령 음성의 가청 범위가 12m로 짧으며, 전자기기 교란은 10m입니다. 초자연적 소리를 더 자주 낼 수 있습니다.", tip: "10~12m 구간을 이용해 전자기기 교란과 발소리의 도달 거리를 비교하세요.", html: "<div class=\"dict-section-title\">1. 사냥 소리 범위</div><p class=\"dict-text\">• 일반 유령의 사냥 발소리·음성은 최대 약 <strong>20m</strong>에서 들립니다.<br>• 마일링은 <strong>12m</strong>에서만 들립니다.<br>• 전자기기 교란 범위는 <strong>10m</strong>이므로 10~12m 구간이 핵심 테스트 구간입니다.</p><div class=\"dict-section-title\">2. 초자연적 소리</div><p class=\"dict-text\">지향성 마이크와 사운드 레코더에서 다른 유령보다 초자연적 소리를 자주 낼 수 있으며, 일정 시간 안에 두 번의 초자연적 소리를 만드는 패턴도 판별에 활용할 수 있습니다.</p><div class=\"dict-section-title\">3. TEST — 10~12m 거리</div><p class=\"dict-text\">사냥 중 전자기기를 켠 플레이어를 안전한 위치에 두고, <strong>전자기기 교란이 먼저 발생하는데 발소리는 조금 더 가까이 와야 들리는지</strong>를 확인합니다. 이 거리 차이가 반복되면 마일링을 강하게 의심할 수 있습니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">마일링은 소리로 위치를 판단하기 어렵기 때문에 사냥 전에 숨을 위치를 정해 두세요. 전자기기 교란 범위를 이용해 대략적인 위치를 추적한 뒤 발소리가 들리기 시작하는 시점을 비교하면 생존에 도움이 됩니다.</p>" },
        "Obake": { title: "오바케 — 지문과 사냥 중 변신을 함께 보는 변형 유령", trait: "유효한 표면과 상호작용할 때 지문을 남길 확률이 75%이며, 특수 지문 패턴과 지문 수명 단축 능력을 가집니다. 사냥 중 다른 같은 성별 모델로 깜빡임 변신을 할 수 있습니다.", tip: "6손가락만 보려고 기다리지 말고, “지문을 남겼다가 다음 상호작용에서 안 남기는 패턴”까지 기록하세요.", html: "<div class=\"dict-section-title\">1. UV 메커니즘</div><p class=\"dict-text\">• 유효한 표면을 만졌을 때 지문을 남길 확률은 <strong>75%</strong>입니다.<br>• 특수 패턴은 약 <strong>1/6(16.7%)</strong> 확률로 발생할 수 있습니다.<br>• 대표적인 특수 패턴: <strong>6손가락 손자국</strong>, 전등/램프/TV 리모컨의 2개 지문, 키보드/감옥문 등의 5개 지문.<br>• 기존 지문의 남은 시간을 절반으로 줄이는 능력도 있습니다.</p><div class=\"dict-section-title\">2. 사냥 중 변신</div><p class=\"dict-text\">사냥 중 정해진 깜빡임 시점에 다른 <strong>같은 성별의 유령 모델</strong>로 한 번의 깜빡임 동안 변신했다가 돌아올 수 있습니다. 첫 변신은 12번째 flicker 시점으로 알려져 있으며, 사냥이 충분히 길어야 확인할 수 있습니다.</p><div class=\"dict-section-title\">3. TEST — UV 기록</div><p class=\"dict-text\">문이나 스위치를 여러 번 건드리게 한 뒤 매번 UV를 확인하세요. 한 번은 지문이 없고 다음에는 생긴다면 오바케를 의심할 수 있습니다. 단, 확률 때문에 오바케도 연속으로 지문을 남길 수 있습니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">6손가락은 보이면 즉시 강력한 확정 단서입니다. 사냥 중 변신은 안전한 관찰자와 충분한 거리를 확보한 상태에서 확인하세요. UV 증거가 보이지 않는 한 번의 상호작용만으로 오바케를 배제하면 안 됩니다.</p>" },
        "Obambo": { title: "오밤보 — 2분 주기로 성격이 뒤집히는 유령", trait: "차분 10%·1.445 m/s와 공격적 65%·1.955 m/s를 오가며, 출구 문을 처음 연 뒤 1분 후 첫 전환이 일어납니다.", tip: "사냥마다 속도가 다를 수 있는 트윈스와 비슷해 보이지만, 오밤보는 명확한 상태 전환 주기와 사냥 지속시간 차이가 있습니다.", html: "<div class=\"dict-section-title\">1. 상태 타이머</div><p class=\"dict-text\">• 계약 시작: <strong>차분 상태</strong>.<br>• 출구 문을 처음 연 뒤 <strong>1분 후 공격적 상태</strong>로 전환.<br>• 이후 <strong>2분마다</strong> 차분 ↔ 공격적 전환.<br>• 상태 전환은 사냥 중에도 일어날 수 있습니다.</p><div class=\"dict-section-title\">2. 상태별 수치</div><p class=\"dict-text\"><strong>차분:</strong> 사냥 10% / 1.445 m/s.<br><strong>공격적:</strong> 사냥 65% / 1.955 m/s.<br>공격적 상태에서 시작한 사냥은 <strong>20% 짧습니다.</strong> 사냥 도중 차분으로 바뀌어도 시작 시 공격적이었다면 짧은 지속시간 규칙이 적용됩니다.</p><div class=\"dict-section-title\">3. TEST — 상태 전환</div><p class=\"dict-text\">출구 문을 연 시점을 기준으로 1분·2분 주기를 기록하세요. 정신력이 10~65% 사이일 때 공격적 상태에서만 사냥이 가능하고 차분 상태에서는 불가능한 상황이 반복되면 강력한 단서입니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">높은 정신력에서 갑자기 빠른 사냥이 시작되면 공격적 오밤보를 의심하세요. 반대로 느린 상태를 안전하다고 생각해도 2분 타이머가 지나면 성격이 바뀔 수 있으므로, 사냥마다 상태가 같다고 가정하지 않는 것이 중요합니다.</p>" },
        "Oni": { title: "오니 — 플레이어가 가까울수록 활발하고 더 잘 보이는 유령", trait: "플레이어가 가까이 있으면 활동성이 증가하고, 고스트 이벤트에서 안개 공 형태를 사용할 수 없습니다. 사냥 중 실체가 보이는 시간이 길어 식별에 도움이 됩니다.", tip: "오니는 “활동량이 많다”만으로 확정할 수 없습니다. 안개 이벤트 불가와 사냥 중 높은 가시성을 함께 확인하세요.", html: "<div class=\"dict-section-title\">1. 활동성</div><p class=\"dict-text\">플레이어가 <strong>6m 이내 또는 같은 방</strong>에 있으면 활동성이 증가합니다. 그래서 플레이어가 유령방에 들어갔을 때 상호작용이 눈에 띄게 많아질 수 있습니다.</p><div class=\"dict-section-title\">2. 이벤트 특성</div><p class=\"dict-text\">• <strong>안개 공(airball) 이벤트를 수행하지 않습니다.</strong><br>• 다른 이벤트보다 실체가 오래 보이는 경향이 있어 유령 모델을 확인하기 쉽습니다.<br>• 유령 이벤트에서 오니와 충돌하면 일반적인 10%가 아니라 <strong>20% 정신력</strong>을 잃습니다.</p><div class=\"dict-section-title\">3. TEST — 안개 이벤트</div><p class=\"dict-text\">유령 이벤트를 여러 번 유도해 안개 공 형태가 나오는지 확인합니다. 안개 공 이벤트가 명확히 발생했다면 오니를 배제할 수 있습니다. 단 한 번의 이벤트만으로 판단하지 말고 여러 이벤트를 누적하세요.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">오니는 플레이어가 가까이 있을 때 활동적이므로 유령방 위치를 찾는 데 도움이 될 수 있습니다. 사냥 중에는 실체가 오래 보이는 편이라 루프 시 위치 파악이 상대적으로 쉽습니다.</p>" },
        "Onryo": { title: "원령 — 불꽃 3회와 십자가의 우선순위가 핵심인 유령", trait: "기본 사냥 임계값 60%, 불꽃 4m 이내에서는 40%이며, 불꽃 3회 소화 카운터가 충족되면 정신력과 무관한 능력 사냥을 시도합니다.", tip: "세 번째 불꽃이 꺼진 “그 순간” 바로 사냥하는 것이 아닙니다. idle 상태 종료, 사냥 쿨타임, 향초, 다른 불꽃 등의 조건을 함께 봐야 합니다.", html: "<div class=\"dict-section-title\">1. 불꽃과 사냥</div><p class=\"dict-text\">• 기본 사냥 임계값 <strong>60%</strong>.<br>• 불꽃에서 <strong>4m 이내</strong>라면 임계값이 <strong>40%</strong>로 낮아집니다.<br>• 사냥을 시도했을 때 4m 안에 불꽃이 있으면 원령은 사냥 대신 불꽃을 끕니다.<br>• 불꽃과 십자가가 동시에 범위 안에 있으면 <strong>불꽃이 사냥 차단에서 우선</strong>합니다.</p><div class=\"dict-section-title\">2. 3회 소화 능력</div><p class=\"dict-text\">불꽃이 꺼질 때마다 카운터가 올라가고, <strong>3 이상</strong>이 된 뒤 유령이 idle 상태에서 나올 때 능력 사냥을 시도합니다. 세 번째 소화와 사냥 사이에 지연이 생길 수 있으며, 사냥 쿨타임·향초 정화 효과·설정 단계·십자가·새로운 불꽃 등에 의해 실제 사냥이 막힐 수 있습니다.</p><div class=\"dict-section-title\">3. TEST — 불꽃 vs 십자가</div><p class=\"dict-text\">유령 위치에 십자가와 불꽃을 함께 배치하고 불꽃을 지속적으로 다시 켜 주세요. <strong>십자가보다 불꽃이 먼저 반응하며 사냥을 차단</strong>하는 패턴이 반복되면 원령을 강하게 의심할 수 있습니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">불꽃을 계속 유지하면 사냥을 억제할 수 있지만, 불꽃을 끄는 순간 능력 카운터를 쌓아 위험을 만들 수 있습니다. 사망자가 많을수록 불꽃을 끄는 빈도도 증가하므로 멀티플레이에서는 특히 주의하세요.</p>" },
        "Raiju": { title: "라이주 — 전자기기가 가까워지면 고정 2.5 m/s로 폭주하는 유령", trait: "활성 전자기기 근처에서 사냥 임계값이 65%로 올라가고 속도가 2.5 m/s로 고정됩니다. 전자기기 교란 범위는 15m입니다.", tip: "사냥 시작 직전에 전자기기를 바닥에 던져 두는 행동은 라이주에게 오히려 속도 버프를 제공할 수 있습니다.", html: "<div class=\"dict-section-title\">1. 전자기기 범위</div><p class=\"dict-text\">라이주는 사냥 중뿐 아니라 이벤트에서도 전자기기 교란 범위가 같은 층 <strong>15m</strong>까지 적용됩니다. 일반적인 10m보다 넓습니다.</p><div class=\"dict-section-title\">2. 사냥 버프</div><p class=\"dict-text\">활성 전자기기가 근처에 있으면 맵 크기에 따라 약 <strong>6m / 8m / 10m</strong> 범위에서 사냥 임계값이 <strong>65%</strong>로 올라가며, 사냥 속도는 <strong>2.5 m/s 고정</strong>입니다.<br>전자기기 범위를 벗어나면 50% / 일반 속도로 돌아가며, 그동안 쌓인 LOS 가속은 조건이 풀린 뒤 적용될 수 있습니다.</p><div class=\"dict-section-title\">3. TEST — 전자기기 끄기</div><p class=\"dict-text\">사냥 전에 주변 전자기기를 모두 끄거나 치운 뒤, 안전한 위치에 활성 전자기기 하나만 남겨 두고 유령이 접근할 때 속도가 갑자기 <strong>2.5 m/s</strong>로 바뀌는지 비교하세요.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">사냥 중 손전등이나 전자기기를 켜 둔 채 도망치거나 뒤에 던져 두면 라이주의 버프 범위를 스스로 만들 수 있습니다. 가능하면 전자기기를 끄고 비전자 장비로 이동하세요.</p>" },
        "Revenant": { title: "레버넌트 — 발견 전에는 느리고 발견 순간 폭발하는 유령", trait: "플레이어를 감지하지 못하면 1.0 m/s, 감지하거나 마지막 감지 위치로 이동할 때 3.0 m/s입니다. 일반 LOS 가속은 사용하지 않습니다.", tip: "레버넌트의 핵심은 “발견 전 속도”입니다. 느리게 움직일 때 숨은 뒤, 감지 순간 폭발적으로 빨라지는지 보세요.", html: "<div class=\"dict-section-title\">1. 사냥 속도</div><p class=\"dict-text\">• 플레이어를 감지하지 못하는 동안 <strong>1.0 m/s</strong>.<br>• 시야·음성·전자기기 등으로 플레이어를 감지하면 <strong>3.0 m/s</strong>로 즉시 상승합니다.<br>• 감지한 플레이어의 마지막 위치까지 이동하는 동안 빠른 속도를 유지합니다.<br>• 이후 다시 탐색 상태가 되면 약 <strong>2.7초</strong>에 걸쳐 1.0 m/s로 감속합니다.<br>• 일반적인 LOS 가속은 적용되지 않습니다.</p><div class=\"dict-section-title\">2. TEST — 소리 내기</div><p class=\"dict-text\">사냥 초반에 숨은 상태로 레버넌트가 느리게 지나가는지 확인한 뒤, 안전이 확보된 상황에서 전자기기나 음성으로 위치를 들키게 하면 <strong>갑자기 3.0 m/s로 폭주</strong>하는지 관찰합니다.</p><div class=\"dict-section-title\">3. 진과 구분</div><p class=\"dict-text\">진도 시야 확보 후 빨라질 수 있지만, 레버넌트는 <strong>발견 전 자체 속도가 1.0 m/s로 매우 느립니다.</strong> 따라서 들키기 전의 발소리 간격까지 같이 보면 구분이 쉬워집니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">레버넌트 사냥에서는 숨는 것이 가장 중요합니다. 일단 위치를 들키면 일반 플레이어가 달리기로 오래 버티기 어렵기 때문에, 감지 전에 숨을 장소를 확정해 두세요. 향초를 준비해 마지막 탈출 시간을 확보하는 것도 좋습니다.</p>" },
        "Shade": { title: "셰이드 — 사람이 같은 방에 있으면 사실상 잠잠해지는 유령", trait: "플레이어가 같은 방에 있으면 상호작용·고스트 이벤트·사냥을 시작할 수 없습니다. 사냥 임계값도 35%로 낮습니다.", tip: "“아무것도 안 한다”가 핵심 단서입니다. 같은 방에서 계속 기다려도 상호작용이 없다면 셰이드를 의심하세요.", html: "<div class=\"dict-section-title\">1. 극단적인 수줍음</div><p class=\"dict-text\">플레이어가 셰이드와 <strong>같은 방에 있으면</strong> 상호작용, 고스트 이벤트, 사냥을 할 수 없습니다. 그래서 유령방에 사람이 계속 붙어 있으면 활동이 거의 사라질 수 있습니다.</p><div class=\"dict-section-title\">2. 사냥 기준</div><p class=\"dict-text\">셰이드의 일반 사냥 임계값은 <strong>35%</strong>입니다. 정신력이 충분히 낮아도 같은 방에 플레이어가 있으면 사냥 자체를 시작할 수 없습니다.</p><div class=\"dict-section-title\">3. TEST — 방 안 / 방 밖</div><p class=\"dict-text\">유령방에 한 명이 들어가 오래 기다려 보세요. 활동이 거의 없다가 모두 방 밖으로 나갔을 때 상호작용이 살아난다면 셰이드 가능성이 큽니다. 반대로 사람이 같은 방에 있는데도 지속적으로 상호작용과 이벤트를 수행한다면 셰이드를 배제할 수 있습니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">셰이드는 찾는 데 시간이 오래 걸릴 수 있으므로 방 밖에서 활동을 유도하는 것이 효율적입니다. 사냥 목적이라면 35% 이하까지 정신력을 낮춘 뒤에도 유령방 안에는 들어가지 않는 것이 안전합니다.</p>" },
        "Thaye": { title: "타예 — 시간이 지날수록 나이 들며 약해지는 유령", trait: "플레이어가 가까이 있는 동안 나이를 먹고, 나이에 따라 활동성·사냥 임계값·속도가 단계적으로 감소합니다. LOS 가속은 없습니다.", tip: "초반 타예는 데몬보다 위험할 수 있습니다. 초반을 버티고 나이를 충분히 먹이면 매우 느려집니다.", html: "<div class=\"dict-section-title\">1. 나이별 사냥 수치</div><p class=\"dict-text\">나이 0에서 <strong>사냥 75% / 2.75 m/s</strong>로 시작합니다. 나이가 증가할수록 단계적으로 감소해 나이 10 이상에서는 <strong>15% / 1.0 m/s</strong>까지 내려갑니다. 주요 단계는 0:75%·2.75 / 3:57%·2.225 / 6:39%·1.7 / 9:21%·1.175 / 10+:15%·1.0 m/s입니다.</p><div class=\"dict-section-title\">2. 나이 증가</div><p class=\"dict-text\">플레이어가 타예 근처에 머무르면 나이가 진행됩니다. 나이가 들수록 활동도 감소하며, 고스트 이벤트 성공 확률도 낮아집니다. 타예는 사냥 중에는 나이를 먹지 않고 사냥이 끝난 뒤 진행됩니다.</p><div class=\"dict-section-title\">3. TEST — 초반과 후반 비교</div><p class=\"dict-text\">초기 사냥이 매우 빠르고 이른데 시간이 지나면서 확실하게 느려진다면 타예를 의심하세요. 특히 <strong>같은 정신력인데도 시간이 지나며 사냥 임계값과 속도가 함께 낮아지는 것</strong>이 핵심입니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">타예가 의심되면 초반에 숨을 장소를 먼저 확보하세요. 나이가 충분히 진행되면 플레이어의 달리기나 걷기보다 느려져 루프가 매우 쉬워집니다. 목표가 사냥 관련이라면 안전하게 나이를 먹인 뒤 진행하는 편이 좋습니다.</p>" },
        "The_Mimic": { title: "미믹 — 다른 유령의 행동을 계속 갈아타는 복제 유령", trait: "다른 유령의 행동·능력·사냥 속도·임계값을 모방하지만 증거 종류는 복사하지 않습니다. 고스트 오브는 항상 가짜로 생성됩니다.", tip: "고스트 오브를 “네 번째 증거”로 보고, 행동과 실제 증거가 서로 모순되는지를 찾는 것이 미믹 공략의 핵심입니다.", html: "<div class=\"dict-section-title\">1. 모방 시스템</div><p class=\"dict-text\">미믹은 다른 유령의 상호작용·이벤트 성향, 사냥 임계값, 속도, 특수 능력 등을 모방할 수 있습니다. 계약 시작 시에는 <strong>blank 상태</strong>로 시작해 일반 유령처럼 행동합니다.<br>출구 문을 처음 연 뒤 약 <strong>1분 후</strong> 첫 변경을 시도하며, 이후 <strong>30초~2분</strong> 간격으로 변경할 수 있습니다. 사냥·이벤트 중에는 모방 대상을 바꾸지 않습니다.</p><div class=\"dict-section-title\">2. 증거의 함정</div><p class=\"dict-text\">미믹의 실제 증거는 <strong>주파수 측정기 · UV · 서늘함</strong>입니다. 여기에 <strong>가짜 고스트 오브가 항상</strong> 나타납니다. 오브는 저주받은 물건이나 난이도와 관계없이 보조 단서로 존재하며, 실제 저널 증거가 아닙니다.</p><div class=\"dict-section-title\">3. TEST — 행동과 증거의 모순</div><p class=\"dict-text\">예를 들어 밴시처럼 행동하는데 밴시가 가질 수 없는 주파수 측정기 응답이 나온다면 미믹 가능성이 매우 높습니다. Hantu·Kormos·Onryo처럼 오브를 실제 증거로 가지는 유령과 특히 헷갈리므로 <strong>UV / 서늘함 / 주파수 측정기</strong>를 끝까지 확인하세요.</p><div class=\"dict-section-title\">4. 특수 모방 주의</div><p class=\"dict-text\">남성 미믹은 남성 모델 상태에서는 밴시와 다얀을 모방할 수 없습니다. 모로이를 모방해 건 저주는 모방 대상이 바뀌어도 남을 수 있고, 오밤보를 모방하면 상태를 선택하며, 타예를 모방할 때는 자체 타이머로 행동합니다.</p><div class=\"dict-section-title\">5. 실전 공략</div><p class=\"dict-text\">“한 번 본 특성 = 본체”라고 결론내리지 마세요. 미믹은 계약 중 전혀 다른 유령처럼 행동할 수 있습니다. 특히 빠른 사냥, 데몬 능력, 데오겐 행동처럼 위험한 특성이 갑자기 나타날 수 있으므로 향초를 항상 준비하세요.</p>" },
        "The_Twins": { title: "트윈스 — 한 유령이 두 개의 상호작용 범위를 사용하는 유령", trait: "실제로는 하나의 유령이며, 일반 범위·큰 범위 두 종류의 상호작용을 사용합니다. 사냥 시작 시 1.5 또는 1.9 m/s를 50% 확률로 선택합니다.", tip: "“두 마리”가 아니라 하나의 유령입니다. 서로 먼 곳의 연속 상호작용과 1.5/1.9 m/s 속도 변화를 함께 관찰하세요.", html: "<div class=\"dict-section-title\">1. 두 상호작용 범위</div><p class=\"dict-text\">트윈스는 실제로 하나의 유령입니다.<br>• 일반 범위: 소·중형 맵 최대 약 <strong>2.12m</strong>, 대형 맵 약 <strong>4.24m</strong>.<br>• 큰 범위: 소·중형 최대 약 <strong>8.48m</strong>, 대형 약 <strong>16.97m</strong>.<br>• 약 20% 확률의 특수 상호작용은 두 범위에서 <strong>1~2초 안에 연속으로</strong> 상호작용을 만들 수 있습니다.</p><div class=\"dict-section-title\">2. 사냥 속도와 시작 위치</div><p class=\"dict-text\">사냥 시작 시 <strong>50% 확률로 1.5 m/s 또는 1.9 m/s</strong>를 선택합니다. 빠른 사냥을 선택하면 마지막 큰 범위 상호작용 위치 근처에서 시작할 수 있습니다. 저주받은 사냥은 현재 위치에서 시작하지만 속도 선택은 여전히 50/50입니다.</p><div class=\"dict-section-title\">3. TEST — 2초 이내 연속 상호작용</div><p class=\"dict-text\">서로 다른 장소에서 2초보다 짧은 간격으로 상호작용이 두 번 발생하면 트윈스의 특수 상호작용을 의심할 수 있습니다. 사냥 중 유령과 먼 곳의 물건이 움직이는 것도 큰 상호작용 범위를 이용한 단서가 될 수 있습니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">사냥이 예상치 못한 위치에서 시작할 수 있으므로 유령방만 보고 탈출 경로를 잡지 마세요. 큰 범위 상호작용 위치까지 포함해 대피 동선을 확보하세요. 속도는 LOS 가속 때문에 혼동될 수 있으므로 여러 사냥을 비교하는 것이 좋습니다.</p>" },
        "Yokai": { title: "요괴 — 말소리에 끌리지만 사냥 중 감지 범위가 짧은 유령", trait: "같은 방에서 음성 채팅을 사용하면 사냥 임계값이 80%로 일시 상승하며, 사냥 중 음성·손에 든 활성 전자기기는 2.5m 밖에서 감지하지 못합니다.", tip: "요괴 테스트는 “말해서 조기 사냥”과 “사냥 중 2.5m 거리 전자기기” 두 가지를 같이 봐야 합니다.", html: "<div class=\"dict-section-title\">1. 말소리와 사냥 임계값</div><p class=\"dict-text\">요괴와 <strong>같은 방</strong>에서 음성 채팅을 사용하면 활동성이 증가하고 사냥 임계값이 일시적으로 <strong>80%</strong>까지 올라갑니다. 음성 사용이 없다면 일반적인 50%를 따릅니다.</p><div class=\"dict-section-title\">2. 사냥 중 감지</div><p class=\"dict-text\">사냥 중 요괴가 음성과 손에 든 활성 전자기기를 감지하는 범위는 <strong>2.5m</strong>입니다. 시야 자체는 일반 유령과 동일하므로 “요괴는 시야가 짧다”라고 이해하면 안 됩니다.</p><div class=\"dict-section-title\">3. TEST 01 — 말하기</div><p class=\"dict-text\">정신력이 높은 상태에서 유령방 근처에서 팀원이 음성 채팅을 사용하고 사냥이 비정상적으로 이르게 발생한다면 요괴를 의심하세요. 80%는 매우 높은 임계값이므로 위험한 테스트입니다.</p><div class=\"dict-section-title\">4. TEST 02 — 2.5m 전자기기</div><p class=\"dict-text\">사냥 중 유령이 시야 밖에 있을 때 활성 전자기기를 켜고, <strong>2.5m 안으로 들어와야 반응하는지</strong> 관찰하세요. 단, 플레이어가 시야에 잡히면 이 테스트와 무관하게 추적할 수 있습니다.</p>" },
        "Yurei": { title: "유레이 — 문을 완전히 닫으며 정신력을 깎는 유령", trait: "열린 문 하나를 완전히 부드럽게 닫으며 7.5m 이내 플레이어의 정신력을 15% 감소시킬 수 있습니다. 향초는 90초 동안 로밍을 막습니다.", tip: "살짝 움직인 문은 유레이의 특수 능력이 아닙니다. “완전히 닫힘 + EMF 2 + 정신력 -15%”를 묶어서 보세요.", html: "<div class=\"dict-section-title\">1. 문 닫기 능력</div><p class=\"dict-text\">현재 방에 능력에 사용할 수 있는 열린 문이 있으면 유레이는 열린 문 하나를 골라 <strong>완전히 부드럽게 닫습니다.</strong> 이때 유령 <strong>7.5m 이내</strong> 플레이어의 정신력을 <strong>15%</strong> 감소시키며, 닫힌 문에 EMF 2가 발생합니다.<br>능력으로 닫히는 문은 강하게 쾅 닫히는 방식이 아니라 부드럽게 완전히 닫히는 것이 특징입니다.</p><div class=\"dict-section-title\">2. 일반 문 상호작용</div><p class=\"dict-text\">유레이는 일반적인 문 상호작용에서도 다른 유령과 달리 문을 살짝 움직이기보다 완전히 열거나 닫는 힘을 사용하는 경향이 있습니다. <strong>사냥 중에는 일반 유령처럼 문을 조금씩 움직일 수 있습니다.</strong></p><div class=\"dict-section-title\">3. TEST — 열린 문</div><p class=\"dict-text\">유령이 있는 방에 열린 문을 만들어 두고 플레이어를 7.5m 안에 위치시키세요. 문이 부드럽게 완전히 닫히면서 정신력이 15% 감소하고 EMF 2가 발생하면 강력한 유레이 단서입니다.</p><div class=\"dict-section-title\">4. 향초 약점</div><p class=\"dict-text\">향초가 유레이에게 정상 적용되면 <strong>90초 동안 모든 로밍 상태가 favourite room 상태로 대체</strong>되어 유령이 방 밖으로 로밍하기 어렵습니다. 또한 이 시간 동안 DOTS 상태에도 들어가지 않습니다.</p>" },
        "Aswang": { title: "아스왕 — 시야를 잡는 순간 가장 빠르게 가속하는 유령", trait: "기본 1.53 m/s에서 LOS 가속이 일반 유령보다 빠르게 진행되어 약 8.67초 만에 2.53 m/s에 도달합니다. 공식 은신처 안의 플레이어를 죽이지 못합니다.", tip: "아스왕은 “빠른 유령”이라기보다 “시야를 잡은 뒤 빠르게 빨라지는 유령”입니다. 공식 은신처는 특수하게 안전합니다.", html: "<div class=\"dict-section-title\">1. LOS 가속</div><p class=\"dict-text\">기본 속도는 <strong>1.53 m/s</strong>입니다. 일반 유령의 LOS 가속보다 빠른 <strong>0.075 × 기본 속도/초</strong>로 가속해 약 <strong>8.67초</strong> 만에 최대 <strong>2.53 m/s</strong>에 도달합니다.</p><div class=\"dict-section-title\">2. 공식 은신처 특성</div><p class=\"dict-text\">아스왕이 정상적으로 사용 가능한 공식 은신처 안의 플레이어를 감지하고 접근하면 사냥이 종료되어 <strong>은신처 안의 플레이어를 죽일 수 없습니다.</strong> 이후 다음 사냥에서 해당 위치를 향한 경로에 영향을 줄 수 있습니다.</p><div class=\"dict-section-title\">3. TEST — 시야 확보 후 가속</div><p class=\"dict-text\">넓은 공간에서 아스왕으로 의심되는 유령이 시야를 잡은 뒤 다른 일반 유령보다 빠르게 가속하는지 확인합니다. 레버넌트와 달리 <strong>처음부터 3.0 m/s가 아니라 1.53에서 출발해 빠르게 상승</strong>합니다.</p><div class=\"dict-section-title\">4. 실전 공략</div><p class=\"dict-text\">초반에는 기본 속도가 낮아 상대적으로 다루기 쉽지만 시야를 오래 주면 빠르게 위험해집니다. 긴 직선에서 루프하지 말고 시야를 짧게 끊으세요. 공식 은신처를 확보했다면 마지막 수단으로 사용할 수 있습니다.</p>" },
        "Kormos": { title: "코르모스 — 시야보다 소리를 따라가는 청각형 유령", trait: "기본 50%, 같은 방에서 플레이어가 질주하면 70%에서 사냥을 시도할 수 있습니다. 질주 발소리 30m, 보행 15m, 웅크린 보행 10m를 감지하며 제한적인 LOS만 사용합니다.", tip: "코르모스 앞에서는 질주가 위험합니다. 사냥 중 완전히 정지하고 소리·전자기기 사용을 줄이는 것이 핵심입니다.", html: "<div class=\"dict-section-title\">1. 청각 기반 감지</div><p class=\"dict-text\">• 기본 사냥 임계값 <strong>50%</strong>.<br>• 같은 방에서 플레이어가 질주하면 <strong>70%</strong>까지 올라갈 수 있습니다.<br>• 질주 발소리 감지: <strong>30m</strong>.<br>• 일반 보행: <strong>15m</strong>.<br>• 웅크린 보행: <strong>10m</strong>.</p><div class=\"dict-section-title\">2. 제한적인 시야</div><p class=\"dict-text\">코르모스는 기본적으로 거의 장님이며, 플레이어가 <strong>5m 이내에서 장애물 없이 움직일 때</strong> 제한적으로 LOS를 얻습니다. 멀리 있거나 가만히 있는 플레이어를 일반 유령처럼 시야로 찾지 않습니다.</p><div class=\"dict-section-title\">3. 속도</div><p class=\"dict-text\">기본 속도는 <strong>1.7 m/s</strong>이며, 감지한 플레이어의 위치로 이동할 때 <strong>1.3배 = 약 2.21 m/s</strong>가 적용될 수 있습니다. 플레이어가 가까이에서 LOS 가속을 만들면 다른 규칙과 결합해 더 빨라질 수도 있으므로 단순히 “최대 2.21”로 고정해서 보면 안 됩니다.</p><div class=\"dict-section-title\">4. TEST — 정지 vs 질주</div><p class=\"dict-text\">사냥 중 코르모스가 의심되면 한 플레이어는 멀리서 완전히 정지하고, 다른 플레이어는 질주해 감지 반응을 비교하세요. <strong>질주할 때 즉시 방향을 바꾸어 접근하고, 멈추면 탐색이 크게 둔해지는 패턴</strong>이 핵심입니다.</p><div class=\"dict-section-title\">5. 실전 공략</div><p class=\"dict-text\">코르모스는 소리에 매우 민감하므로 사냥 중 질주와 전자기기 사용을 최소화하세요. 다만 코르모스는 플레이어와 충분히 가까워지면 제한적인 시야를 얻을 수 있으므로 완전히 정지했다는 이유만으로 절대 안전하다고 생각하면 안 됩니다.</p>" },
    };
    for (const g of GHOST_DATA) {
        const d = rich[g.engName];
        if (!d) continue;
        if (g.engName === "Dayan") continue;
        g.specialTrait = d.trait;
        g.tip = d.tip;
        g.detailedHtml = d.html;
        g.isCustomDetailed = true;
    }
})();


// =========================================================
// v12 Deep Expansion — standardized Dayan-level sections
// =========================================================
(() => {
    if (typeof GHOST_DATA === "undefined") return;
    const X = {
        "Spirit": {
            ability: "고유 능력 대신 향초 방어 시간이 핵심입니다. 향초가 성공적으로 적용되면 일반 유령보다 긴 180초 동안 사냥을 시작할 수 없습니다.",
            strength: "특수 행동이 거의 없어 다른 유령을 소거하는 기준점으로 쓰기 좋습니다.",
            weakness: "고유 행동이 없어 단순 관찰만으로는 특징이 잘 드러나지 않습니다.",
            tests: ["향초 180초 테스트 — 향초 적용 직후 타이머를 시작하고 90초 이후에도 사냥이 발생하지 않는지 확인", "속도 테스트 — 기본 1.7m/s와 표준 LOS 가속 외의 특수 속도가 없는지 확인", "소거 테스트 — 특수 사냥·특수 속도·특수 타겟 유령을 먼저 배제"],
            confuse: "스피릿은 ‘아무 특징이 없는 유령’처럼 보이는 것이 정상입니다. 특수 행동이 없다는 사실 자체가 중요한 판별 정보입니다."
        },
        "Wraith": {
            ability: "비사냥 상태에서 무작위 플레이어에게 순간이동할 수 있습니다. 순간이동이 끝난 플레이어 위치에 EMF 2가 발생하고, 약 33% 확률로 EMF 5가 됩니다.",
            strength: "소금을 무시하므로 일반적인 동선 차단 테스트를 무력화합니다.",
            weakness: "소금 테스트가 명확하면 빠르게 좁힐 수 있습니다.",
            tests: ["소금 테스트 — 유령이 소금 위를 확실히 통과했는데도 소금이 그대로인지 확인", "순간이동 EMF 테스트 — 유령방과 떨어진 플레이어 주변에서 갑자기 EMF가 발생하는지 확인", "UV 소거 — 소금은 밟지 않아도 UV 증거는 정상적으로 가질 수 있으므로 함께 확인"],
            confuse: "분노 상태의 갈루도 소금을 건드리지 않을 수 있으므로 소금 하나만으로 성급하게 확정하지 마세요."
        },
        "Phantom": {
            ability: "유령 이벤트·사냥 중 10m 이내 직시 상태에서 추가 정신력 감소가 발생하며, 사진 촬영에 성공하면 팬텀의 모습이 사진에서 사라집니다.",
            strength: "긴 사냥 깜빡임과 사진 반응이 매우 강한 식별 단서입니다.",
            weakness: "사진 판별은 촬영 타이밍과 이벤트 종류에 영향을 받을 수 있습니다.",
            tests: ["사진 테스트 — 이벤트 중 사진을 성공적으로 찍은 직후 유령의 형체가 사라지는지 확인", "깜빡임 테스트 — 사냥 중 1~2초 수준의 긴 비가시 구간이 반복되는지 확인", "정신력 테스트 — 10m 안에서 직시할 때 예상보다 빠르게 정신력이 감소하는지 확인"],
            confuse: "팬텀과 레이스를 속도로 구분하려 하지 마세요. 팬텀은 사진·깜빡임·정신력 감소를 묶어서 보는 것이 좋습니다."
        },
        "Poltergeist": {
            ability: "상호작용 범위의 물건을 동시에 던지는 특수 능력을 사용하며, 사냥 중에도 0.5초마다 물건 투척을 시도할 수 있습니다.",
            strength: "물건이 많은 방에서는 능력이 매우 눈에 띄고, 다중 투척은 강력한 판별 포인트입니다.",
            weakness: "던질 물건이 없으면 특수 투척을 시각적으로 확인하기 어렵습니다.",
            tests: ["다중 투척 테스트 — 작은 물건 여러 개를 모아 한 번의 상호작용에서 여러 개가 동시에 날아가는지 확인", "사냥 테스트 — 사냥 중 주변 물건이 매우 빠른 간격으로 연속 투척되는지 확인", "정신력 테스트 — 특수 투척으로 여러 물건이 날아올 때 방 안 플레이어 정신력이 추가로 감소하는지 확인"],
            confuse: "‘빈 방에서 능력이 안 나왔다’는 이유만으로 폴터가이스트를 배제할 수 없습니다. 던질 물건이 있어야 관찰 가능한 특성이 많습니다."
        },
        "Banshee": {
            ability: "계약 중 한 명을 타겟으로 선택하며, 사냥 중에는 타겟을 우선 추적합니다. 파라볼릭 마이크로 고유 비명(Wail)을 들을 수 있습니다.",
            strength: "타겟 추적과 Wail은 매우 강한 식별 단서입니다.",
            weakness: "타겟이 조사 구역 밖에 있거나 여러 플레이어가 함께 움직이면 타겟 시스템을 잘못 해석하기 쉽습니다.",
            tests: ["Wail 테스트 — 파라볼릭 마이크로폰으로 특수 비명 패턴을 여러 번 확인", "타겟 테스트 — 사냥 중 특정 플레이어에게만 추적 경향이 나타나는지 확인", "동선 테스트 — 타겟이 구역 밖에 있을 때 다른 플레이어를 어떻게 추적하는지 관찰"],
            confuse: "밴시는 ‘타겟이 아니면 절대 공격하지 않는다’로 단순화하면 안 됩니다. 타겟의 위치와 조사 구역 조건을 함께 봐야 합니다."
        },
        "Deildegast": {
            ability: "사냥 사이에 플레이어가 유령과 상호작용한 고유 비장비 물건의 종류를 기준으로 다음 사냥의 속도가 감소합니다. 고유 물건 하나당 0.1m/s씩 감소하며 최저 0.4m/s까지 내려갑니다.",
            strength: "사냥이 반복될수록 속도가 뚜렷하게 달라지는 독특한 패턴을 가집니다.",
            weakness: "같은 물건을 반복해서 사용해도 새로운 종류로 계산되지 않으므로 테스트 설계가 중요합니다.",
            tests: ["속도 단계 테스트 — 첫 사냥과 여러 사냥 후 속도를 비교", "물건 종류 테스트 — 서로 다른 고유 물건을 플레이어가 직접 상호작용한 뒤 다음 사냥 속도 변화를 비교", "소거 테스트 — 유령이 직접 던진 물건은 플레이어 상호작용 감소량에 포함하지 않는지 확인"],
            confuse: "‘사냥 중 물건을 던질 때마다 즉시 느려진다’가 아닙니다. 핵심은 사냥과 사냥 사이 플레이어가 상호작용한 고유 물건 종류가 다음 사냥 속도에 영향을 주는 것입니다."
        },
        "Deogen": {
            ability: "플레이어를 숨은 상태에서도 감지하며, 거리가 가까워질수록 속도가 급격하게 낮아집니다. 6m 초과에서는 3.0m/s, 2.5m 이내에서는 0.4m/s까지 내려갑니다.",
            strength: "정상적인 은신처를 무시하고 추적하며 근접 시 극도로 느려집니다.",
            weakness: "근접 루프에서는 매우 느려지므로 안전한 공간만 확보하면 오히려 상대하기 쉬워집니다.",
            tests: ["은신처 테스트 — 사냥 중 공식 은신처에 숨어도 유령이 정확히 찾아오는지 확인", "근접 감속 테스트 — 유령과 2.5m 이내로 접근했을 때 속도가 극단적으로 낮아지는지 확인", "거리 테스트 — 6m 밖의 빠른 속도와 근접 0.4m/s를 한 사냥에서 비교"],
            confuse: "데오겐의 느린 속도는 항상 유지되는 것이 아닙니다. 멀리 있을 때는 오히려 매우 빠른 3.0m/s이므로 사냥 초반에 위험합니다."
        },
        "Demon": {
            ability: "일반 사냥은 70%에서 가능하며, 특수 능력으로 정신력과 무관하게 사냥할 수 있습니다. 능력 재사용 대기시간은 20초, 향초의 사냥 방지 시간은 60초이며 십자가 유효 범위가 티어별 50% 증가합니다.",
            strength: "매우 높은 정신력에서도 사냥할 수 있고 십자가 테스트에도 특성이 드러납니다.",
            weakness: "능력 사냥은 타이밍에 따라 관찰되지 않을 수 있으므로 한 번의 조기 사냥만으로 확정하지 마세요.",
            tests: ["고정 정신력 테스트 — 평균 정신력이 70%보다 높을 때도 사냥이 발생하는지 확인", "향초 테스트 — 정화향초 적용 후 일반 유령보다 짧은 60초 방어 시간이 나타나는지 확인", "십자가 범위 테스트 — 티어 I/II/III에서 각각 4.5/6/7.5m 수준의 확대 범위를 이용해 차이를 확인"],
            confuse: "데몬은 ‘항상 100% 사냥’이 아닙니다. 70%는 일반 임계값이고, 정신력 무관 사냥은 특수 능력입니다."
        },
        "Gallu": {
            ability: "기본·분노·약화의 세 상태를 오가며 상태에 따라 속도와 사냥 임계값이 달라집니다. 분노 1.955m/s·60%, 기본 1.7m/s·50%, 약화 1.36m/s·40%입니다.",
            strength: "상태 변화가 실제 속도와 사냥 임계값을 동시에 바꿉니다.",
            weakness: "상태가 언제 바뀌었는지 기록하지 않으면 다른 속도형 유령으로 오인하기 쉽습니다.",
            tests: ["상태 기록 테스트 — 소금·향초·십자가 등 상태에 영향을 줄 수 있는 행동 전후 속도를 비교", "소금 테스트 — 분노 상태에서 소금을 무시하는지 확인", "사냥 임계값 테스트 — 상태에 따라 40/50/60% 부근에서 행동이 달라지는지 관찰"],
            confuse: "분노 갈루는 레이스처럼 소금을 무시할 수 있습니다. 따라서 소금 면역만으로 레이스를 확정하지 마세요."
        },
        "Goryo": {
            ability: "도트 프로젝터의 특수 상태가 핵심입니다. 플레이어가 같은 방에 있을 때는 일반적으로 DOTS를 볼 수 없고, 비디오 카메라를 통해서만 관찰하기 쉬운 형태로 나타납니다.",
            strength: "DOTS 관찰 조건이 매우 명확합니다.",
            weakness: "플레이어가 방 안에 있으면 DOTS 테스트가 실패하기 쉬워 초보자가 쉽게 놓칩니다.",
            tests: ["카메라 테스트 — 방 밖에서 비디오 카메라로 DOTS를 관찰", "사람 유무 테스트 — 같은 방에 사람이 있을 때와 없을 때 DOTS 관찰 차이를 비교", "로밍 테스트 — 다른 유령처럼 자유롭게 DOTS 상태를 찾으려 하지 말고 원래 유령방을 중심으로 확인"],
            confuse: "고료의 DOTS는 ‘사냥 중 보이는 유령’과 같은 개념이 아닙니다. 증거 상태를 확인하는 테스트 조건이 핵심입니다."
        },
        "Hantu": {
            ability: "온도가 낮을수록 빠르며 0°C 부근에서 최대 2.7m/s, 15°C 초과에서는 1.4m/s까지 낮아집니다. 사냥 중 두꺼비집이 내려가 있으면 차가운 입김이 보이며 LOS 가속은 없습니다.",
            strength: "온도와 속도의 상관관계가 매우 뚜렷합니다.",
            weakness: "방 온도가 안정되기 전 속도만 보고 판단하면 오판할 수 있습니다.",
            tests: ["온도-속도 테스트 — 같은 사냥에서 따뜻한 방과 차가운 방의 속도 차이를 비교", "입김 테스트 — 차단기 OFF 사냥에서 냉기 입김이 지속적으로 보이는지 확인", "차단기 테스트 — 한투는 차단기를 켤 수 없으므로 전원 상태 변화를 함께 기록"],
            confuse: "한투는 차단기가 꺼진다고 해서 무조건 한투가 아닙니다. 차단기 상태와 실제 온도에 따른 속도 변화를 함께 봐야 합니다."
        },
        "Jinn": {
            ability: "두꺼비집이 켜져 있고, 플레이어가 3m보다 멀리 있으며, 유령이 플레이어를 시야에 두는 세 조건이 동시에 충족되면 2.5m/s의 고정 속도를 사용합니다. 이 속도는 표준 LOS 가속을 받지 않습니다.",
            strength: "멀리서 시야를 잡을 때 2.5m/s의 일정한 속도로 빠르게 접근하는 패턴이 강력합니다.",
            weakness: "두꺼비집이 꺼지면 특수 속도를 사용할 수 없습니다.",
            tests: ["3조건 테스트 — 차단기 ON + 3m 이상 거리 + LOS를 동시에 만들고 속도를 확인", "거리 테스트 — 3m 이내로 들어가면 특수 2.5m/s가 사라지는지 확인", "정신력 능력 테스트 — 가까운 플레이어의 정신력을 한 번에 25% 감소시키는 능력이 있는지 관찰"],
            confuse: "진은 ‘멀리 있을수록 빠른 유령’이 아니라 세 조건이 동시에 맞을 때만 2.5m/s가 적용됩니다."
        },
        "Mare": {
            ability: "현재 방의 조명 상태에 따라 사냥 임계값이 60% 또는 40%로 달라지며, 가까운 조명을 즉시 끄는 능력을 사용할 수 있습니다.",
            strength: "빛이 켜진 방과 꺼진 방의 사냥 임계값 차이가 명확합니다.",
            weakness: "두꺼비집을 특별히 선호하거나 끄는 고유 능력이 있는 것은 아닙니다.",
            tests: ["조명 테스트 — 같은 방에서 불을 켠 상태와 끈 상태의 사냥 가능 정신력을 비교", "즉시 소등 테스트 — 가까운 전등을 켜둔 뒤 유령이 즉시 끄는 능력을 반복하는지 확인", "사냥 위치 테스트 — 불이 켜진 방에서 40% 이하가 아니면 사냥이 가능한지 확인"],
            confuse: "메어에게 두꺼비집 ‘선호’가 있다고 단정하지 마세요. 핵심은 현재 방의 조명과 60/40% 사냥 임계값입니다."
        },
        "Myling": {
            ability: "사냥 중 발소리와 유령의 음성이 최대 12m에서 들리며, 전자기기 교란은 10m에서 발생합니다.",
            strength: "전자기기 교란보다 발소리가 먼저 들리는 거리 차이를 이용할 수 있습니다.",
            weakness: "발소리 자체는 다른 유령과 같아서 거리 측정을 제대로 하지 않으면 놓칩니다.",
            tests: ["거리 테스트 — 사냥 중 발소리가 들리는 순간의 거리와 전자기기 교란 시작 거리를 비교", "전자기기 테스트 — 10m 부근에서 전자기기 교란이 시작되는지 확인", "파라볼릭 테스트 — 상호작용 음성이 비교적 자주 잡히는지 참고"],
            confuse: "‘마일링은 발소리가 완전히 없다’가 아니라 최대 청취 거리가 짧은 것입니다. 12m/10m의 차이를 측정하세요."
        },
        "Moroi": {
            ability: "저주가 걸리면 수동 정신력 감소 속도가 2배가 되며, 평균 정신력이 낮을수록 기본 속도가 증가합니다. 속도는 약 1.5~2.25m/s 범위이며 LOS 가속이 추가될 수 있습니다. 향초 실명은 7초입니다.",
            strength: "정신력이 낮아질수록 실제 이동 속도가 빨라지는 패턴이 뚜렷합니다.",
            weakness: "속도가 정신력과 함께 변하므로 한 번의 사냥 속도만으로는 확정하기 어렵습니다.",
            tests: ["저주 테스트 — 주파수 측정기 응답, 파라볼릭 마이크 소리, 사운드 레코더 소리로 저주가 시작되는지 확인", "정신력-속도 테스트 — 정신력을 크게 낮춘 뒤 다음 사냥 속도가 증가하는지 비교", "향초 테스트 — 정화향초 후 시야 상실이 일반 유령보다 긴 7초인지 확인"],
            confuse: "모로이는 ‘항상 2.25m/s’가 아닙니다. 평균 정신력에 따라 기본 속도가 바뀌고 LOS 가속이 추가됩니다."
        },
        "Obake": {
            ability: "UV 증거와 특수 지문이 핵심이며, 사냥 중 특정 깜빡임에서 모델 변신이 일어날 수 있습니다. 변신은 임의의 6.6% 단일 확률로 단순화해서 이해하면 안 됩니다.",
            strength: "6손가락 지문, 빠르게 사라지는 지문, 사냥 중 모델 변신 등 독특한 시각 단서가 많습니다.",
            weakness: "특수 지문은 모든 상호작용에서 항상 발생하지 않으므로 반복 관찰이 필요합니다.",
            tests: ["6손가락 테스트 — 손자국이 나오는 문/창문/키보드 등을 여러 번 확인", "UV 지속시간 테스트 — 일반 지문보다 빠르게 사라지는 특수 지문이 있는지 확인", "사냥 모델 테스트 — 사냥 중 깜빡임 사이에서 다른 모델로 바뀌는지 관찰"],
            confuse: "오바케의 모델 변신을 ‘6.6%마다 한 번’ 같은 단순 확률로 외우지 말고 현재 깜빡임 기반의 변신 조건으로 이해하세요."
        },
        "Obambo": {
            ability: "차분 상태와 공격적 상태를 오가며, 차분 1.445m/s·10%, 공격적 1.955m/s·65%를 사용합니다. 첫 출구 개방 후 약 1분 뒤 첫 전환, 이후 약 2분 간격으로 상태를 바꿀 수 있습니다.",
            strength: "속도와 사냥 임계값이 동시에 크게 변해 상태를 잡으면 판별하기 쉽습니다.",
            weakness: "상태가 사냥 중에도 바뀔 수 있어 한 번의 사냥만 보면 혼란스럽습니다.",
            tests: ["시간 테스트 — 출구 개방 후 1분 전후와 이후 2분 간격의 행동 변화를 기록", "속도 테스트 — 1.445와 1.955m/s에 가까운 상태 변화를 여러 사냥에서 비교", "사냥 길이 테스트 — 공격적 상태로 시작한 사냥이 평균보다 약 20% 짧은지 참고"],
            confuse: "오밤보를 단순히 ‘빠른 유령’으로 기록하지 마세요. 차분/공격 상태와 그 상태의 사냥 임계값이 함께 움직입니다."
        },
        "Oni": {
            ability: "고스트 이벤트에서 정신력을 더 크게 감소시키며, 안개 형태 이벤트를 발생시키지 않습니다. 사냥 중 깜빡임에서 실체가 보이는 시간이 길어 다른 유령보다 더 자주 모습을 드러냅니다.",
            strength: "사냥 깜빡임과 이벤트 종류가 강한 식별 단서입니다.",
            weakness: "정신력 감소는 여러 이벤트가 누적되어야 체감하기 쉽습니다.",
            tests: ["이벤트 테스트 — 같은 정신력에서 이벤트 후 정신력 감소량을 반복 기록", "안개 이벤트 테스트 — 연속 이벤트에서 안개 형태가 나오는지 확인", "깜빡임 테스트 — 사냥 중 실체가 보이는 시간이 유독 긴지 관찰"],
            confuse: "오니는 ‘깜빡이지 않는다’가 아닙니다. 깜빡임은 하지만 일반 유령보다 실체가 보이는 비율이 높습니다."
        },
        "Onryo": {
            ability: "불꽃은 약 4m 안에서 사냥을 막으며 십자가보다 우선합니다. 불꽃을 세 번 소화하면 능력 사냥이 준비되지만 세 번째 소화 순간에 즉시 발동하는 것은 아니며, idle 종료·사냥 쿨타임·향초 등의 조건에 따라 지연될 수 있습니다.",
            strength: "불꽃과 사냥의 상관관계가 매우 강합니다.",
            weakness: "불꽃이 계속 유지되면 특수 사냥을 관찰하기 어렵습니다.",
            tests: ["3회 불꽃 테스트 — 같은 불꽃을 3회 소화한 뒤 사냥 능력이 준비되는지 관찰", "불꽃-십자가 우선순위 테스트 — 불꽃이 4m 안에 있을 때 십자가보다 먼저 사냥을 차단하는지 확인", "정신력 테스트 — 기본 60%, 불꽃 근처 40%의 임계값 차이를 고려"],
            confuse: "‘세 번째 불이 꺼지는 순간 즉시 사냥’은 정확하지 않습니다. 세 번째 소화는 능력을 준비시키는 카운터 역할입니다."
        },
        "Raiju": {
            ability: "활성 전자기기 근처에서 사냥 임계값이 65%로 상승하고 이동 속도가 2.5m/s로 고정됩니다. 전자기기 교란 범위도 사냥 중 15m로 확대됩니다.",
            strength: "전자기기를 한곳에 모으면 속도 변화가 매우 뚜렷합니다.",
            weakness: "전자기기를 모두 끄면 일반 1.7m/s에 가까워집니다.",
            tests: ["전자기기 테스트 — 사냥 중 활성 전자기기 근처에서 2.5m/s가 고정되는지 확인", "정신력 테스트 — 전자기기 근처에서 65% 조기 사냥이 가능한지 관찰", "거리 테스트 — 전자기기를 멀리 두었을 때 속도가 일반 유령으로 돌아가는지 비교"],
            confuse: "라이주는 전자기기 근처에서 LOS 가속보다 2.5m/s 고정 속도가 우선합니다. 단순히 ‘전자기기 때문에 빨라진다’보다 이 점을 기억하세요."
        },
        "Revenant": {
            ability: "플레이어를 발견하지 못한 동안 1.0m/s로 이동하지만, 플레이어의 위치를 확인하면 즉시 3.0m/s로 가속합니다. LOS 가속을 사용하지 않습니다.",
            strength: "발견 전과 발견 후의 속도 차이가 게임 내에서 가장 큽니다.",
            weakness: "일단 발견되면 탈출이 매우 어렵습니다.",
            tests: ["발견 전 테스트 — 시야 밖에서 유령이 매우 느린 1.0m/s로 이동하는지 확인", "발견 후 테스트 — 플레이어를 보자마자 3.0m/s로 폭발적으로 빨라지는지 확인", "시야 차단 테스트 — 시야를 끊은 뒤 다시 1.0m/s로 느려지는지 확인"],
            confuse: "레버넌트는 일반적인 LOS 가속으로 조금씩 빨라지는 유령이 아닙니다. ‘발견 여부’가 속도를 결정합니다."
        },
        "Shade": {
            ability: "플레이어와 같은 방에 있으면 상호작용·고스트 이벤트·사냥을 시작할 수 없습니다. 일반 사냥 임계값도 35%로 낮습니다.",
            strength: "사람이 방 안에 있을 때의 극단적인 비활동성이 강력한 단서입니다.",
            weakness: "유령방 안에 사람이 계속 있으면 단서를 얻기까지 시간이 오래 걸립니다.",
            tests: ["방 안 테스트 — 플레이어 한 명이 유령방 안에 계속 머물며 활동이 거의 없는지 확인", "방 밖 테스트 — 모두 방 밖으로 나갔을 때 상호작용이 살아나는지 확인", "사냥 테스트 — 35% 이하에서도 같은 방에 사람이 있으면 사냥하지 않는지 확인"],
            confuse: "셰이드는 ‘상호작용이 적은 유령’이 아니라 같은 방의 플레이어가 있을 때 특정 행동을 하지 못하는 유령입니다."
        },
        "Thaye": {
            ability: "플레이어가 가까이 있는 동안 나이를 먹으며 총 10단계에 걸쳐 사냥 임계값 75%→15%, 속도 2.75→1.0m/s로 감소합니다. 사냥 중에는 나이가 증가하지 않습니다.",
            strength: "초반과 후반의 속도·사냥 임계값 차이가 극단적입니다.",
            weakness: "초기에는 매우 빠르고 일찍 사냥할 수 있어 첫 사냥이 위험합니다.",
            tests: ["초기 속도 테스트 — 계약 초반 2.75m/s에 가까운 빠른 속도가 나오는지 확인", "노화 테스트 — 시간이 지나며 속도와 사냥 임계값이 함께 감소하는지 확인", "거리 테스트 — 플레이어가 가까이 있을 때 나이가 진행되는지 관찰"],
            confuse: "타예는 ‘한 번 늙으면 영구적으로 고정’되는 단순 유령이 아닙니다. 나이 단계와 주변 플레이어 조건을 함께 기록해야 합니다."
        },
        "The_Mimic": {
            ability: "다른 유령의 능력·속도·사냥 임계값·행동을 모방합니다. 증거는 모방하지 않으며, 실제 증거 3개 외에 가짜 고스트 오브가 항상 나타납니다.",
            strength: "다른 유령의 고유 행동을 거의 모두 보여줄 수 있습니다.",
            weakness: "한 시점의 행동만 보고 본체를 특정할 수 없다는 점이 가장 큰 함정입니다.",
            tests: ["오브 테스트 — 고스트 오브를 항상 보조 단서로 확인", "증거 테스트 — 주파수 측정기·UV·서늘함의 실제 조합을 확인", "행동 변화 테스트 — 시간에 따라 다른 유령처럼 행동이 바뀌는지 관찰"],
            confuse: "미믹은 행동은 복사하지만 증거는 복사하지 않습니다. 오브를 실제 증거로 넣어버리면 잘못된 유령을 쉽게 확정하게 됩니다."
        },
        "The_Twins": {
            ability: "하나의 유령이 두 개의 상호작용 범위를 사용합니다. 사냥 시작 시 1.5m/s 또는 1.9m/s를 50% 확률로 선택하며 빠른 사냥은 큰 상호작용 위치 근처에서 시작할 수 있습니다.",
            strength: "멀리 떨어진 연속 상호작용과 두 가지 기본 사냥 속도가 특징입니다.",
            weakness: "LOS 가속이 추가되어 1.5/1.9가 정확히 유지되지 않을 수 있습니다.",
            tests: ["연속 상호작용 테스트 — 1~2초 안에 서로 다른 위치에서 상호작용이 이어지는지 확인", "속도 테스트 — 여러 사냥에서 1.5/1.9m/s 계열이 반복되는지 비교", "시작 위치 테스트 — 마지막 큰 범위 상호작용 위치 근처에서 사냥이 시작되는지 관찰"],
            confuse: "트윈스는 두 마리의 유령이 아닙니다. 한 유령의 상호작용 범위가 두 개라는 것이 핵심입니다."
        },
        "Yokai": {
            ability: "같은 방에서 음성 채팅을 사용하면 사냥 임계값이 80%까지 올라갈 수 있습니다. 사냥 중 음성과 손에 든 활성 전자기기 감지 범위는 2.5m입니다.",
            strength: "높은 정신력에서 음성 사용으로 사냥을 유도할 수 있는 강력한 특성이 있습니다.",
            weakness: "80% 테스트는 위험하고 실제 사냥 타이밍이 상황에 따라 달라질 수 있습니다.",
            tests: ["음성 테스트 — 같은 방에서 말할 때 사냥 임계값이 상승하는지 확인", "2.5m 테스트 — 사냥 중 시야 밖에서 2.5m 밖의 음성·활성 전자기기에 반응하지 않는지 확인", "기본 속도 테스트 — 속도 자체는 일반 1.7m/s 계열인지 확인"],
            confuse: "요괴의 감지 제한은 시야까지 2.5m로 줄이는 것이 아닙니다. 음성과 손에 든 활성 전자기기 감지 범위가 2.5m입니다."
        },
        "Yurei": {
            ability: "열린 문을 완전히 부드럽게 닫으며 7.5m 안의 플레이어 정신력을 15% 감소시킵니다. 향초 적용 후 90초 동안 favourite room 상태가 유지됩니다.",
            strength: "문 닫기 + 정신력 감소가 동시에 발생하는 특수 능력이 강력합니다.",
            weakness: "열린 문과 7.5m 조건이 맞지 않으면 능력을 관찰하기 어렵습니다.",
            tests: ["문 능력 테스트 — 열린 문을 만들어 완전히 닫히는지 관찰", "EMF 테스트 — 능력 직후 문 위치에서 EMF 2가 발생하는지 확인", "정신력 테스트 — 7.5m 안 플레이어의 정신력이 15% 감소하는지 기록"],
            confuse: "유레이의 특수 문 닫기와 일반 문 상호작용을 구분해야 합니다. 핵심은 ‘완전히 부드럽게 닫힘 + 15% 정신력 감소’입니다."
        },
        "Aswang": {
            ability: "기본 1.53m/s에서 빠른 LOS 가속으로 8.67초 후 2.53m/s까지 올라갑니다. 공식 은신처의 플레이어를 죽이지 못합니다.",
            strength: "초반에는 느리지만 시야가 유지되면 매우 빠르게 위협 수준이 올라갑니다.",
            weakness: "시야를 짧게 끊으면 최대 속도 도달을 늦출 수 있습니다.",
            tests: ["가속 시간 테스트 — 사냥 시작부터 8~9초 동안 속도가 얼마나 빨라지는지 관찰", "최대 속도 테스트 — 약 2.53m/s까지 도달하는지 확인", "은신처 테스트 — 공식 은신처에서 플레이어를 죽이지 못하는 특성을 확인"],
            confuse: "아스왕은 레버넌트처럼 발견 즉시 3.0m/s가 되는 것이 아닙니다. 1.53m/s에서 연속적으로 가속합니다."
        },
        "Kormos": {
            ability: "소리를 따라 감지합니다. 질주 30m, 일반 보행 15m, 웅크린 보행 10m에서 발소리를 감지하며 감지한 위치로 이동할 때 약 2.21m/s가 될 수 있습니다.",
            strength: "소리 기반 추적과 일반 유령보다 제한적인 시야가 독특합니다.",
            weakness: "정지·무음 플레이로 탐색을 지연시킬 수 있습니다.",
            tests: ["소리 거리 테스트 — 질주·보행·웅크림에서 감지 반응 거리를 비교", "정지 테스트 — 사냥 중 완전히 정지했을 때 탐색이 둔해지는지 확인", "5m LOS 테스트 — 5m 안에서 장애물 없이 움직일 때만 제한적인 시야 추적이 발생하는지 확인"],
            confuse: "코르모스는 완전한 시야 면역 유령이 아닙니다. 5m 이내의 제한적인 LOS는 존재합니다."
        }
    };

    const SIGNATURES = {
        "Spirit": {
            kicker:"SPIRIT · 향초 지연형 유령", headline:"향초를 사용한 뒤 사냥까지의 공백이\n다른 유령보다 훨씬 깁니다.", desc:"사냥 자체보다 향초 후 재사냥 가능 시점이 핵심 판별 포인트입니다.", cards:[["180초","향초 사냥 방지","일반 유령보다 긴 사냥 방지 시간"],["90초","일반 기준","일반 유령의 향초 방지 시간"],["3분","판별 핵심","두 번째 사냥 가능 시점을 비교"]], tipTitle:"향초 후 시간을 재보세요.", tipText:"사냥이 끝난 뒤 향초를 사용하고 다시 사냥이 가능한 시점을 정확히 재면 스피릿 판별에 큰 도움이 됩니다.", tipRow:[["향초","180초"],["일반","90초"]]
        },
        "Wraith": {
            kicker:"WRAITH · 소금 판별형 유령", headline:"소금 더미를 절대 건드리지 않으며\n플레이어에게 순간이동할 수 있습니다.", desc:"소금과 순간이동 EMF가 레이스의 가장 강력한 실전 판별 포인트입니다.", cards:[["소금","미교란","직접 통과해도 소금이 움직이지 않음"],["EMF 2","텔레포트","순간이동 위치에서 발생"],["33%","EMF 5","순간이동 EMF의 5단계 확률"]], tipTitle:"레이스는 “소금”부터 확인하세요.", tipText:"유령이 소금 더미를 정면으로 통과하도록 만들었는데도 교란하지 않는다면 강력한 레이스 판별 포인트입니다.", tipRow:[["소금","건드리지 않음"],["텔레포트","EMF 2/5"]]
        },
        "Phantom": {
            kicker:"PHANTOM · 모습 은폐형 유령", headline:"사진과 깜빡임을 이용하면\n팬텀의 모습을 잡아낼 수 있습니다.", desc:"사진 촬영 후 유령이 사라지는 현상과 짧은 모습 노출이 핵심입니다.", cards:[["0.5%","능력 단서","특수 능력으로 정신력 감소"],["사진","소멸","사진 촬영 후 모습이 사라질 수 있음"],["깜빡임","짧은 노출","사냥 중 모습 노출 비율이 낮음"]], tipTitle:"팬텀은 “사진”으로 확인하세요.", tipText:"사냥이나 이벤트에서 모습을 확인한 뒤 사진을 찍고 유령이 사라지는지 관찰하세요. 사진 자체의 성공 여부와 유령 소멸을 함께 기록하는 것이 중요합니다.", tipRow:[["사진","촬영"],["결과","모습 소멸"]]
        },
        "Poltergeist": {
            kicker:"POLTERGEIST · 물체 투척형 유령", headline:"주변 물체를 한꺼번에 움직이며\n투척 패턴이 유난히 강하게 나타납니다.", desc:"주변 물체의 위치와 투척 빈도를 이용하면 다른 유령과 차이를 만들 수 있습니다.", cards:[["다중","투척","여러 물체를 빠르게 움직이는 능력"],["물체","핵심 자원","주변에 던질 물건이 많을수록 관찰하기 쉬움"],["사냥","투척","사냥 중에도 물체 행동을 관찰 가능"]], tipTitle:"폴터가이스트는 “물건”을 모아보세요.", tipText:"작은 물건을 한곳에 모아두고 활동을 유도하면 다중 투척 여부를 훨씬 쉽게 확인할 수 있습니다.", tipRow:[["물체","모으기"],["행동","다중 투척"]]
        },
        "Banshee": {
            kicker:"BANSHEE · 타겟 집중형 유령", headline:"한 명을 지정해 추적하며\n그 플레이어를 중심으로 행동합니다.", desc:"특정 플레이어를 계속 추적하는지 확인하는 것이 가장 강력한 판별법입니다.", cards:[["1명","고정 타겟","사냥 타겟을 지정"],["33%","고유 비명","지향성 마이크/사운드 레코더"],["여성","성별","여성 전용 유령"]], tipTitle:"밴시는 “누구를 쫓는지” 보세요.", tipText:"사냥 때 특정 플레이어만 지속적으로 추적하는지 확인하고, 지향성 마이크의 고유 비명까지 함께 확인하면 판별력이 높아집니다.", tipRow:[["타겟","1명"],["비명","고유 소리"]]
        },
        "Deildegast": {
            kicker:"DEILDEGAST · 오브젝트 카운터형 유령", headline:"플레이어가 사냥 사이에 상호작용한\n고유 오브젝트 수에 따라 속도가 내려갑니다.", desc:"다음 사냥의 속도를 이전 상호작용 기록과 연결해서 봐야 합니다.", cards:[["3.0","초기 속도","카운터 초기화 후 시작"],["0.1","감소량","고유 오브젝트마다 감소"],["0.4","최저 속도","감속 하한"]], tipTitle:"데일드가스트는 “사냥 전 기록”을 남기세요.", tipText:"사냥과 사냥 사이에 어떤 고유 오브젝트를 만졌는지 기록하고 다음 사냥 속도와 비교하세요.", tipRow:[["상호작용","누적"],["다음 사냥","속도 감소"]]
        },
        "Deogen": {
            kicker:"DEOGEN · 거리 감속형 유령", headline:"멀리 있을 때는 매우 빠르지만\n가까워질수록 극단적으로 느려집니다.", desc:"LOS 가속이 아니라 플레이어와의 경로 거리가 속도를 결정합니다.", cards:[["3.0 m/s","6m 초과","먼 거리의 기본 속도"],["0.4 m/s","최저","2.5m 이내 최소 속도"],["40%","사냥","일반보다 낮은 사냥 정신력"]], tipTitle:"데오겐은 “가까이 붙어보세요.”", tipText:"데오겐은 숨은 플레이어도 찾아오기 때문에 일반적인 은신처 테스트보다 거리별 속도 변화를 확인하는 것이 훨씬 중요합니다.", tipRow:[["멀리","3.0 m/s"],["가까이","0.4 m/s"]]
        },
        "Demon": {
            kicker:"DEMON · 조기 사냥형 유령", headline:"높은 정신력에서도 사냥할 수 있고\n사냥 사이의 공백도 짧습니다.", desc:"사냥 정신력, 능력 사냥, 향초 방어, 십자가 범위를 함께 봐야 합니다.", cards:[["70%","일반 사냥","일반 사냥 정신력"],["20초","최소 쿨타임","사냥 사이 최소 공백"],["60초","향초 방어","향초의 사냥 방지 시간"]], tipTitle:"데몬은 “정신력보다 사냥 간격”을 보세요.", tipText:"높은 정신력에서의 조기 사냥과 20초 최소 쿨타임, 짧은 향초 방어 시간이 함께 나타나는지 확인하세요.", tipRow:[["일반","70%"],["쿨타임","20초"]]
        },
        "Gallu": {
            kicker:"GALLU · 상태 변화형 유령", headline:"보호 장비를 사용하면 분노하고\n이후 약화될 수 있습니다.", desc:"정상·분노·약화 상태에 따라 사냥 정신력과 속도가 달라집니다.", cards:[["60%","분노","사냥 정신력"],["1.955","분노 속도","m/s"],["1.36","약화 속도","m/s"]], tipTitle:"갈루는 “상태 변화”를 기록하세요.", tipText:"십자가·향초·소금 등의 보호 장비 사용 전후로 속도와 사냥 정신력이 어떻게 바뀌는지 비교하세요.", tipRow:[["분노","1.955 m/s"],["약화","1.36 m/s"]]
        },
        "Goryo": {
            kicker:"GORYO · 카메라 DOTS형 유령", headline:"플레이어가 같은 방에 있으면 DOTS를 피하고\n카메라에서만 실루엣이 보입니다.", desc:"DOTS를 맨눈과 카메라로 비교하는 것이 가장 강력한 판별 포인트입니다.", cards:[["카메라","DOTS","비디오 화면에서만 확인"],["2/3","DOTS 상태","로밍에서 DOTS 상태 진입 확률"],["고정","선호 방","선호 방을 바꾸지 않음"]], tipTitle:"고료는 “카메라 DOTS”를 확인하세요.", tipText:"플레이어가 유령방에서 빠진 뒤 카메라로 DOTS를 확인하고, 맨눈에서는 보이지 않는 실루엣인지 비교하세요.", tipRow:[["맨눈","안 보임"],["카메라","보임"]]
        },
        "Hantu": {
            kicker:"HANTU · 온도 연동형 유령", headline:"방이 차가워질수록 사냥 속도가\n단계적으로 빨라집니다.", desc:"차단기 상태와 방 온도를 함께 봐야 한투의 속도를 정확히 읽을 수 있습니다.", cards:[["1.4","따뜻함","m/s"],["2.7","0°C 미만","m/s"],["X","LOS","표준 LOS 가속 없음"]], tipTitle:"한투는 “온도와 속도”를 같이 보세요.", tipText:"차단기를 끄면 냉기 입김이 보일 수 있지만, 진짜 판별 핵심은 같은 조건에서 차가운 구간일수록 빨라지는 속도 변화입니다.", tipRow:[["따뜻함","느림"],["추움","빠름"]]
        },
        "Jinn": {
            kicker:"JINN · 차단기 가속형 유령", headline:"차단기가 켜져 있고 거리가 벌어지면\n빠른 고정 속도로 접근합니다.", desc:"차단기 ON, 시야, 거리 조건을 동시에 맞춰야 특수 속도가 나타납니다.", cards:[["2.5 m/s","특수 속도","조건 충족 시"],["3m","거리","3m 초과"],["ON","차단기","특수 능력 활성 조건"]], tipTitle:"진은 “차단기 ON + 거리”를 보세요.", tipText:"차단기를 켜고 유령과 충분한 거리를 둔 채 시야를 확보했을 때 특수 속도가 나타나는지 확인하세요.", tipRow:[["차단기","ON"],["거리","3m 초과"]]
        },
        "Mare": {
            kicker:"MARE · 빛 반응형 유령", headline:"유령방의 전등이 켜져 있느냐에 따라\n사냥 정신력이 달라집니다.", desc:"휴대 조명이 아니라 유령이 있는 방의 전등 상태가 핵심입니다.", cards:[["60%","불 꺼짐","사냥 정신력"],["40%","불 켜짐","사냥 정신력"],["X","전등 ON","메어는 전등을 켤 수 없음"]], tipTitle:"메어는 “방의 전등”을 확인하세요.", tipText:"손전등이나 양초가 아니라 유령이 있는 방의 전등을 켜고 끄면서 사냥 가능 정신력과 상호작용 패턴을 비교하세요.", tipRow:[["꺼짐","60%"],["켜짐","40%"]]
        },
        "Myling": {
            kicker:"MYLING · 소리 거리형 유령", headline:"사냥 소리는 짧게 들리지만\n전자기기 교란은 조금 더 먼 거리에서 시작됩니다.", desc:"10~12m 구간의 거리 차이가 핵심 테스트 구간입니다.", cards:[["12m","발소리","사냥 소리 가청 범위"],["10m","전자기기","사냥 중 교란 범위"],["2m","차이","테스트에 활용할 거리 여유"]], tipTitle:"마일링은 “10~12m”를 이용하세요.", tipText:"안전한 위치에서 전자기기 교란과 발소리가 들리기 시작하는 순간을 비교하면 마일링의 소리 특성을 확인하기 쉽습니다.", tipRow:[["전자기기","10m"],["발소리","12m"]]
        },
        "Moroi": {
            kicker:"MOROI · 정신력 연동 속도형 유령", headline:"평균 정신력이 낮아질수록\n사냥 속도가 점점 빨라집니다.", desc:"저주로 정신력이 빠르게 내려가며, 낮은 정신력에서 매우 빠른 사냥 속도를 얻습니다.", cards:[["1.5","높은 정신력","기본 속도 m/s"],["2.25","낮은 정신력","기본 속도 m/s"],["3.71","극저 정신력","최대 기본 속도"]], tipTitle:"모로이는 “정신력과 속도”를 함께 기록하세요.", tipText:"같은 유령을 여러 사냥에서 비교하면서 평균 정신력이 내려갈수록 속도가 빨라지는지 확인하세요.", tipRow:[["정신력","낮아짐"],["속도","빨라짐"]]
        },
        "Obake": {
            kicker:"OBAKE · 지문 변형형 유령", headline:"지문을 남기지 않기도 하고\n특수한 지문 모양을 만들기도 합니다.", desc:"지문 발생 확률과 특수 패턴, 지문 수명 감소를 함께 확인합니다.", cards:[["75%","지문","상호작용 후 지문 확률"],["1/6","특수 패턴","6손가락 등"],["½","수명","기존 지문 남은 시간 감소"]], tipTitle:"오바케는 “지문을 반복해서” 보세요.", tipText:"한 번의 UV 결과만 보지 말고 여러 상호작용에서 지문이 남았다가 빠지는 패턴과 특수 모양을 함께 기록하세요.", tipRow:[["일반","75%"],["특수","1/6"]]
        },
        "Obambo": {
            kicker:"OBAMBO · 상태 전환형 유령", headline:"차분한 상태와 공격적인 상태를 오가며\n속도와 사냥 정신력이 함께 바뀝니다.", desc:"한 번의 사냥보다 상태 전환 주기를 기록하는 것이 핵심입니다.", cards:[["10%","차분","사냥 정신력"],["65%","공격적","사냥 정신력"],["2분","주기","상태 전환 기준"]], tipTitle:"오밤보는 “현재 상태”를 먼저 확인하세요.", tipText:"같은 유령도 사냥마다 속도가 달라질 수 있으므로 계약 시간과 상태 전환 시점을 기록해 비교하세요.", tipRow:[["차분","10%"],["공격적","65%"]]
        },
        "Oni": {
            kicker:"ONI · 높은 가시성형 유령", headline:"이벤트와 사냥에서 실체가 더 오래 보여\n행동을 관찰하기 쉽습니다.", desc:"안개 공 이벤트가 없고 이벤트 정신력 감소량도 큰 편입니다.", cards:[["20%","이벤트","플레이어에게 충돌 시 정신력 감소"],["X","안개 공","해당 이벤트 불가"],["높음","가시성","사냥 중 실체 노출 비율"]], tipTitle:"오니는 “보이는 시간”을 확인하세요.", tipText:"사냥 중 깜빡임과 이벤트에서 유령의 실체가 유난히 자주 보이는지 관찰하고, 안개 공 이벤트 여부를 함께 기록하세요.", tipRow:[["안개 공","없음"],["실체","자주 보임"]]
        },
        "Onryo": {
            kicker:"ONRYO · 불꽃 사냥형 유령", headline:"불꽃이 꺼지는 패턴과 사냥 시도를\n함께 관찰해야 합니다.", desc:"불꽃과 십자가의 우선순위, 3회 소화 카운터가 핵심입니다.", cards:[["60%","기본","사냥 정신력"],["40%","불꽃 근처","사냥 정신력"],["3회","불꽃","능력 사냥 준비 카운터"]], tipTitle:"원령은 “불꽃을 세어보세요.”", tipText:"같은 불꽃이 세 번 꺼진 뒤 능력 사냥이 준비되는지 관찰하되, 세 번째 소화 순간에 반드시 즉시 사냥하는 것은 아니라는 점을 기억하세요.", tipRow:[["불꽃","3회"],["사냥","준비"]]
        },
        "Raiju": {
            kicker:"RAIJU · 전자기기 가속형 유령", headline:"활성 전자기기 근처에서\n더 높은 정신력으로 빠르게 사냥합니다.", desc:"전자기기를 켜고 끄면서 사냥 속도와 임계값을 비교하세요.", cards:[["65%","사냥","전자기기 근처"],["2.5 m/s","속도","전자기기 근처"],["15m","교란","사냥 중 전자기기 범위"]], tipTitle:"라이주는 “전자기기를 켜보세요.”", tipText:"사냥 중 활성 전자기기 근처에서 속도가 고정적으로 빨라지는지 확인하고, 전자기기를 치웠을 때 일반 속도로 돌아오는지 비교하세요.", tipRow:[["전자기기","ON"],["속도","2.5 m/s"]]
        },
        "Revenant": {
            kicker:"REVENANT · 발견 여부형 유령", headline:"플레이어를 못 찾을 때는 느리지만\n발견하는 순간 매우 빠르게 가속합니다.", desc:"일반 LOS 가속과 달리 ‘발견 여부’가 속도를 결정합니다.", cards:[["1.0 m/s","미발견","플레이어를 찾지 못한 상태"],["3.0 m/s","발견","플레이어를 확인한 상태"],["X","LOS 가속","표준 LOS 가속 없음"]], tipTitle:"레버넌트는 “발견 전·후”를 비교하세요.", tipText:"사냥 초반 유령을 찾지 못하게 한 뒤 느린 속도를 확인하고, 플레이어를 발견하는 순간 급격히 빨라지는지 관찰하세요.", tipRow:[["미발견","1.0 m/s"],["발견","3.0 m/s"]]
        },
        "Shade": {
            kicker:"SHADE · 비활동형 유령", headline:"플레이어가 같은 방에 있으면\n특정 행동을 시작할 수 없습니다.", desc:"유령방 안에 사람이 있을 때와 비어 있을 때를 비교하는 것이 핵심입니다.", cards:[["35%","사냥","일반 사냥 정신력"],["같은 방","활동 제한","사냥·이벤트 등 제한"],["낮음","활동성","플레이어가 가까울수록 관찰 어려움"]], tipTitle:"셰이드는 “방에서 나와보세요.”", tipText:"유령방 안에 사람이 계속 있을 때와 모두 밖으로 나갔을 때 상호작용과 이벤트가 살아나는지 비교하세요.", tipRow:[["같은 방","제한"],["방 밖","활동"]]
        },
        "Thaye": {
            kicker:"THAYE · 노화형 유령", headline:"시간과 주변 플레이어에 따라 늙으며\n속도와 사냥 정신력이 내려갑니다.", desc:"초반과 후반의 차이를 비교하는 것이 가장 강력한 판별법입니다.", cards:[["75%","초기","사냥 정신력"],["15%","노화 후","사냥 정신력"],["2.75 → 1.0","속도","나이에 따른 변화"]], tipTitle:"타예는 “처음과 나중”을 비교하세요.", tipText:"계약 초반의 빠른 속도와 높은 사냥 정신력을 기록한 뒤 플레이어가 가까이 머문 후 얼마나 느려졌는지 비교하세요.", tipRow:[["초기","2.75 m/s"],["노화","1.0 m/s"]]
        },
        "The_Mimic": {
            kicker:"THE MIMIC · 모방형 유령", headline:"다른 유령의 행동을 따라 하지만\n가짜 고스트 오브는 따로 남깁니다.", desc:"행동만으로 본체를 확정하지 말고 증거 조합과 오브를 함께 확인해야 합니다.", cards:[["가짜","고스트 오브","항상 나타나는 보조 단서"],["3개","실제 증거","실제 유령 증거 조합"],["변화","행동","다른 유령처럼 바뀔 수 있음"]], tipTitle:"미믹은 “오브를 의심하세요.”", tipText:"고스트 오브가 실제 증거 조합과 맞지 않거나 다른 유령의 행동을 번갈아 보여준다면 미믹 가능성을 끝까지 열어두세요.", tipRow:[["오브","가짜"],["행동","모방"]]
        },
        "The_Twins": {
            kicker:"THE TWINS · 이중 범위형 유령", headline:"한 유령이 서로 다른 위치에서\n두 개의 상호작용 범위를 사용할 수 있습니다.", desc:"연속적인 원거리 상호작용과 두 종류의 사냥 속도를 함께 봅니다.", cards:[["1.5 m/s","느린 사냥","사냥 기본 속도"],["1.9 m/s","빠른 사냥","사냥 기본 속도"],["2개","범위","상호작용 범위가 서로 다름"]], tipTitle:"트윈스는 “멀리서 두 번”을 확인하세요.", tipText:"서로 떨어진 위치에서 짧은 시간 안에 상호작용이 연속으로 발생하는지 확인하고, 여러 사냥에서 속도 차이도 함께 비교하세요.", tipRow:[["느린 사냥","1.5 m/s"],["빠른 사냥","1.9 m/s"]]
        },
        "Yokai": {
            kicker:"YOKAI · 음성 반응형 유령", headline:"같은 방에서 말하면 높은 정신력에서도\n사냥을 시작할 수 있습니다.", desc:"사냥 중 음성과 활성 전자기기 감지 범위가 매우 짧습니다.", cards:[["80%","사냥","음성 조건 충족 시"],["2.5m","감지","음성·활성 전자기기"],["1.7 m/s","기본","특수 속도 없음"]], tipTitle:"요괴는 “말하면서 거리”를 보세요.", tipText:"같은 방에서 음성을 사용해 조기 사냥 여부를 확인한 뒤, 사냥 중 2.5m 밖의 음성과 활성 전자기기를 무시하는지 비교하세요.", tipRow:[["조기 사냥","80%"],["감지","2.5m"]]
        },
        "Yurei": {
            kicker:"YUREI · 문 닫기형 유령", headline:"특수 능력으로 열린 문을 완전히 닫으며\n주변 플레이어의 정신력을 크게 낮춥니다.", desc:"문 능력과 그 직후의 정신력 변화를 함께 확인하세요.", cards:[["7.5m","범위","특수 능력 정신력 효과"],["15%","감소","주변 플레이어 정신력"],["90초","향초","선호 방 유지 관련 효과"]], tipTitle:"유레이는 “문 + 정신력”을 같이 보세요.", tipText:"열린 문이 특수하게 완전히 닫히는 상황을 만들고, 그 순간 주변 플레이어의 정신력이 함께 크게 떨어지는지 확인하세요.", tipRow:[["문","완전히 닫힘"],["정신력","15% 감소"]]
        },
        "Aswang": {
            kicker:"ASWANG · 지속 가속형 유령", headline:"처음에는 느리지만 시야가 이어질수록\n점점 빨라집니다.", desc:"발견 즉시 급가속하는 레버넌트와 달리 지속적인 가속을 봐야 합니다.", cards:[["1.53 m/s","초기","기본 속도"],["2.53 m/s","가속 후","최대 기본 속도"],["8.67초","가속","최대 속도 도달 기준"]], tipTitle:"아스왕은 “시간에 따른 가속”을 보세요.", tipText:"사냥 시작 직후의 속도와 시야가 이어진 뒤의 속도를 비교하세요. 순간적으로 빨라지는 것이 아니라 지속적으로 가속하는지가 핵심입니다.", tipRow:[["초기","1.53 m/s"],["후반","2.53 m/s"]]
        },
        "Kormos": {
            kicker:"KORMOS · 소리 추적형 유령", headline:"플레이어가 내는 소리를 따라가며\n소리의 종류에 따라 감지 거리가 달라집니다.", desc:"질주·보행·웅크림의 소리 거리를 구분해 움직임을 통제할 수 있습니다.", cards:[["30m","질주","발소리 감지"],["15m","보행","발소리 감지"],["10m","웅크림","발소리 감지"]], tipTitle:"코르모스는 “소리를 줄여보세요.”", tipText:"같은 사냥에서 질주·보행·웅크림을 바꿔가며 유령의 반응 거리가 달라지는지 확인하세요.", tipRow:[["질주","30m"],["웅크림","10m"]]
        }
    };

    const evidenceHtml = g => `<div class="deep-evidence"><strong>증거</strong><span>${g.evidences.join(" · ")}</span></div>`;
    // Signature hero: reuse the proven Dayan visual system for every other ghost.
    // IMPORTANT: Dayan itself is excluded below and its original markup is untouched.
    // This keeps the visual language identical while allowing each ghost to have its own content.
    const makeSignature = (g, s) => {
        if (!s) return '';
        return `<section class="dayan-hero-callout ghost-signature-hero">
            <div class="dayan-kicker ghost-signature-kicker">${s.kicker}</div>
            <h2>${s.headline.replace(/\n/g,'<br>')}</h2>
            <p>${s.desc}</p>
            <div class="dayan-stat-grid ghost-signature-stats">${s.cards.map((c,i)=>`<div class="dayan-stat ghost-signature-stat ghost-signature-stat-${i+1}"><span>${c[0]}</span><strong>${c[1]}</strong><small>${c[2]}</small></div>`).join('')}</div>
        </section>`;
    };
    const make = (g, old, x) => {
        const s = SIGNATURES[g.engName];
        return `
        <div class="deep-ghost-detail">
            ${makeSignature(g, s)}
            <section class="dayan-section"><div class="dayan-section-head"><span>01</span><div><h3>헌팅 메커니즘</h3><p>${s?.desc || '사냥 정신력과 이동 속도부터 확인하세요.'}</p></div></div>
                ${evidenceHtml(g)}
                <div class="dayan-table-wrap"><table class="dayan-table"><thead><tr><th>항목</th><th>현재 기준</th></tr></thead><tbody>
                <tr><td><strong>사냥 정신력</strong></td><td><b>${g.huntSanity || g.sanity}</b></td></tr>
                <tr><td><strong>이동 속도</strong></td><td><b>${g.speed}</b></td></tr>
                <tr><td><strong>LOS 가속</strong></td><td>${g.hasAccel ? "표준 LOS 가속 적용" : "특수 규칙 / 표준 LOS 가속 제한"}</td></tr>
                </tbody></table></div>
                <div class="dayan-note"><strong>핵심</strong><p>${x.ability}</p></div>
            </section>
            <section class="dayan-section"><div class="dayan-section-head"><span>02</span><div><h3>고유 능력 & 세부 메커니즘</h3><p>이 유령의 대표 행동이 실제로 언제, 어떻게 발동하는지 확인합니다.</p></div></div>
                ${old || `<p class="dict-text">${x.ability}</p>`}
            </section>
            <section class="dayan-section"><div class="dayan-section-head"><span>03</span><div><h3>고유 특성</h3><p>다른 유령과 비교했을 때 바로 구분할 수 있는 핵심 특징입니다.</p></div></div>
                <div class="dayan-feature-grid"><article><b>01</b><h4>대표 특징</h4><p>${s?.desc || x.ability}</p></article><article><b>02</b><h4>판별 기준</h4><p>${x.strength}</p></article><article><b>03</b><h4>주의할 조건</h4><p>${x.weakness}</p></article></div>
            </section>
            <section class="dayan-section"><div class="dayan-section-head"><span>04</span><div><h3>강점 & 약점</h3><p>실전에서 위험한 상황과 역으로 이용할 수 있는 요소입니다.</p></div></div>
                <div class="dayan-sw-grid"><div class="dayan-strength"><h4>＋ 강점</h4><ul><li>${x.strength}</li><li>${g.specialTrait}</li></ul></div><div class="dayan-weakness"><h4>− 약점</h4><ul><li>${x.weakness}</li><li>${g.tip}</li></ul></div></div>
            </section>
            <section class="dayan-section"><div class="dayan-section-head"><span>05</span><div><h3>판별 테스트</h3><p>한 가지 행동만 보고 확정하지 말고 여러 테스트를 교차 확인하세요.</p></div></div>
                <div class="dayan-tests">${x.tests.map((t,i)=>{let [a,b]=t.split(" — ");return `<article><span>TEST ${String(i+1).padStart(2,"0")}</span><h4>${a}</h4><p>${b||t}</p><b>관찰 포인트 · ${g.name}의 고유 조건과 일치하는지 확인</b></article>`}).join("")}</div>
            </section>
            <section class="dayan-section"><div class="dayan-section-head"><span>06</span><div><h3>자주 헷갈리는 부분</h3><p>잘못된 한 줄 요약을 피하세요.</p></div></div>
                <div class="dayan-mistakes"><div><b>01</b><strong>단일 행동만으로 확정하지 않기</strong><p>${x.confuse}</p></div><div><b>02</b><strong>수치의 조건을 함께 보기</strong><p>${g.sanity} · ${g.speed}</p></div><div><b>03</b><strong>증거와 행동을 함께 교차검증</strong><p>${g.evidences.join(" / ")}</p></div></div>
            </section>
            <section class="dayan-tip-box ghost-custom-tip"><span>NYONGSUMO TIP</span><h3>${s?.tipTitle || `${g.name}은 <strong>대표 특징</strong>부터 확인하세요.`}</h3><p>${s?.tipText || g.tip}</p><div>${(s?.tipRow || [["정신력",g.huntSanity || g.sanity],["속도",g.speed]]).map((r,i)=>`${i?'<i>→</i>':''}<b>${r[0]}</b><strong>${r[1]}</strong>`).join('')}</div></section>
        </div>`;
    };

    for (const g of GHOST_DATA) {
        if (g.engName === "Dayan") continue; // preserve the full Dayan reference layout exactly
        const x = X[g.engName];
        if (!x) continue;
        // Keep the source-specific rich mechanism, then add the full common framework.
        const old = g.detailedHtml;
        g.detailedHtml = make(g, old, x);
        g.isCustomDetailed = true;
    }
})();
