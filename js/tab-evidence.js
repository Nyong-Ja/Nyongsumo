// ==========================================
// 🔍 1. 증거 분석 & 유령 계산기 전용 스크립트 (4열 독립 고정 분배 방식)
// ==========================================

let includedEvidences = [];
let excludedEvidences = [];
let activeFilters = {
    hasAccel: false,
    hasSpecialSpeed: false,
    hasForcedEv: false,
    hasTargetRoam: false
};

// 👻 1줄 극초압축 핵심 필살기 매핑 (한글/영문 완벽 대응)
const GHOST_SIGNATURE_SKILLS = {
    "스피릿": "향초 적용 후 180초 동안 일반 사냥 불가",
    "Spirit": "향초 적용 후 180초 동안 일반 사냥 불가",
    "레이스": "소금 미교란 + 플레이어 위치로 순간이동 EMF",
    "Wraith": "소금 미교란 + 플레이어 위치로 순간이동 EMF",
    "팬텀": "10m 직시 0.5%/s 감소 + 사진 시 소멸",
    "Phantom": "10m 직시 0.5%/s 감소 + 사진 시 소멸",
    "폴터가이스트": "다중 투척 + 사냥 중 0.5초마다 투척",
    "Poltergeist": "다중 투척 + 사냥 중 0.5초마다 투척",
    "밴시": "타겟 정신력 50% + 33% 고유 비명",
    "Banshee": "타겟 정신력 50% + 33% 고유 비명",
    "다얀": "10m 안 가장 가까운 이동 상태가 45/65%·1.2/2.25m/s 결정",
    "Dayan": "10m 안 가장 가까운 이동 상태가 45/65%·1.2/2.25m/s 결정",
    "데일드가스트": "고유 오브젝트마다 다음 사냥 0.1m/s 감속, 최대 0.4",
    "Deildegast": "고유 오브젝트마다 다음 사냥 0.1m/s 감속, 최대 0.4",
    "데오겐": "6m 밖 3.0m/s → 2.5m 안 최저 0.4m/s",
    "Deogen": "6m 밖 3.0m/s → 2.5m 안 최저 0.4m/s",
    "데몬": "70% + 정신력 무관 능력 사냥 / 향초 60초",
    "Demon": "70% + 정신력 무관 능력 사냥 / 향초 60초",
    "갈루": "일반·분노·약화 50/60/40% · 1.7/1.955/1.36m/s",
    "Gallu": "일반·분노·약화 50/60/40% · 1.7/1.955/1.36m/s",
    "고료": "플레이어 없는 방에서만 카메라 도트 + 선호방 고정",
    "Goryo": "플레이어 없는 방에서만 카메라 도트 + 선호방 고정",
    "한투": "온도별 1.4~2.7m/s + 차단기 OFF 냉기 입김",
    "Hantu": "온도별 1.4~2.7m/s + 차단기 OFF 냉기 입김",
    "진": "차단기 ON·LOS·3m 초과에서 2.5m/s 고정",
    "Jinn": "차단기 ON·LOS·3m 초과에서 2.5m/s 고정",
    "메어": "방 전등 OFF 60% / ON 40% + 즉시 소등 능력",
    "Mare": "방 전등 OFF 60% / ON 40% + 즉시 소등 능력",
    "모로이": "저주 시 수동 정신력 2배 감소 + 1.5→2.25m/s",
    "Moroi": "저주 시 수동 정신력 2배 감소 + 1.5→2.25m/s",
    "마일링": "발소리/음성 12m · 전자기기 10m",
    "Myling": "발소리/음성 12m · 전자기기 10m",
    "오바케": "75% UV + 6손가락/지문 단축 + 사냥 변신",
    "Obake": "75% UV + 6손가락/지문 단축 + 사냥 변신",
    "오밤보": "차분 10%·1.445 ↔ 공격적 65%·1.955, 1/2분 주기",
    "Obambo": "차분 10%·1.445 ↔ 공격적 65%·1.955, 1/2분 주기",
    "오니": "6m/같은 방 활동 증가 + 안개 이벤트 불가",
    "Oni": "6m/같은 방 활동 증가 + 안개 이벤트 불가",
    "원령": "60/40% + 불꽃 3회 카운터 능력 사냥",
    "Onryo": "60/40% + 불꽃 3회 카운터 능력 사냥",
    "라이주": "전자기기 근처 65%·2.5m/s 고정 + 15m 교란",
    "Raiju": "전자기기 근처 65%·2.5m/s 고정 + 15m 교란",
    "레버넌트": "미감지 1.0m/s → 감지 3.0m/s",
    "Revenant": "미감지 1.0m/s → 감지 3.0m/s",
    "셰이드": "같은 방 플레이어가 있으면 상호작용·이벤트·사냥 불가",
    "Shade": "같은 방 플레이어가 있으면 상호작용·이벤트·사냥 불가",
    "타예": "나이 0의 75%·2.75m/s → 나이 10+ 15%·1.0m/s",
    "Thaye": "나이 0의 75%·2.75m/s → 나이 10+ 15%·1.0m/s",
    "미믹": "행동·능력 모방 + 항상 가짜 고스트 오브",
    "The Mimic": "행동·능력 모방 + 항상 가짜 고스트 오브",
    "트윈스": "두 상호작용 범위 + 사냥 1.5/1.9m/s",
    "The Twins": "두 상호작용 범위 + 사냥 1.5/1.9m/s",
    "요괴": "같은 방 대화 시 80% · 사냥 감지 2.5m",
    "Yokai": "같은 방 대화 시 80% · 사냥 감지 2.5m",
    "유레이": "문 완전 닫기 + 7.5m 내 정신력 -15%",
    "Yurei": "문 완전 닫기 + 7.5m 내 정신력 -15%",
    "아스왕": "1.53→2.53m/s, 8.67초 LOS 가속 + 은신처 살해 불가",
    "Aswang": "1.53→2.53m/s, 8.67초 LOS 가속 + 은신처 살해 불가",
    "코르모스": "질주 30m 감지·보행 15m·웅크림 10m + 제한 LOS",
    "Kormos": "질주 30m 감지·보행 15m·웅크림 10m + 제한 LOS",
};

// 증거 버튼 클릭 상태 토글 초기화
function initEvidenceButtons() {
    const buttons = document.querySelectorAll('.evidence-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const ev = btn.getAttribute('data-evidence');
            if (!includedEvidences.includes(ev) && !excludedEvidences.includes(ev)) {
                includedEvidences.push(ev);
                btn.classList.add('included');
            } else if (includedEvidences.includes(ev)) {
                includedEvidences = includedEvidences.filter(e => e !== ev);
                btn.classList.remove('included');
                excludedEvidences.push(ev);
                btn.classList.add('excluded');
            } else {
                excludedEvidences = excludedEvidences.filter(e => e !== ev);
                btn.classList.remove('excluded');
            }
            renderGhostList();
        });
    });

    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            includedEvidences = [];
            excludedEvidences = [];
            buttons.forEach(btn => {
                btn.classList.remove('included', 'excluded');
            });
            activeFilters = { hasAccel: false, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false };
            document.querySelectorAll('.filter-chip input').forEach(input => input.checked = false);
            renderGhostList();
        });
    }
}

// 특수 필터 토글
function toggleFilter(filterKey) {
    activeFilters[filterKey] = !activeFilters[filterKey];
    renderGhostList();
}

// 증거 분석 유령 카드 렌더링 (독립 4열 Flex 분배)
function renderGhostList() {
    const container = document.getElementById('ghost-list-container');
    const countEl = document.getElementById('ghost-count');
    if (!container || typeof GHOST_DATA === 'undefined') return;

    container.innerHTML = '';

    const filtered = GHOST_DATA.filter(ghost => {
        for (let ev of includedEvidences) {
            if (!ghost.evidences.includes(ev)) return false;
        }
        for (let ev of excludedEvidences) {
            if (ghost.evidences.includes(ev)) return false;
        }
        if (activeFilters.hasAccel && !ghost.hasAccel) return false;
        if (activeFilters.hasSpecialSpeed && !ghost.hasSpecialSpeed) return false;
        if (activeFilters.hasForcedEv && !ghost.hasForcedEv) return false;
        if (activeFilters.hasTargetRoam && !ghost.hasTargetRoam) return false;

        return true;
    });

    if (countEl) countEl.innerText = filtered.length;

    // 4열을 감싸는 메인 래퍼
    const columnsWrapper = document.createElement('div');
    columnsWrapper.className = 'ghost-columns-container';

    // 4개의 독립 컬럼 생성 (1열, 2열, 3열, 4열)
    const colElements = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div')
    ];

    colElements.forEach(col => {
        col.className = 'ghost-col';
        columnsWrapper.appendChild(col);
    });

    filtered.forEach((ghost, index) => {
        const card = document.createElement('div');
        card.className = 'ghost-card';

        const evidencesHtml = ghost.evidences.map(ev => {
            const isMatched = includedEvidences.includes(ev) ? 'matched' : '';
            return `<span class="ev-tag ${isMatched}">${ev}</span>`;
        }).join(' ');

        // 1줄 확정 필살기 매핑 (공백 제거 후 검색 + engName 교차 검색)
        const cleanName = ghost.name ? ghost.name.trim() : '';
        const cleanEng = ghost.engName ? ghost.engName.trim() : '';
        const signatureSkill = GHOST_SIGNATURE_SKILLS[cleanName] || GHOST_SIGNATURE_SKILLS[cleanEng] || "고유 특수 패턴 보유";

        // 유튜브 검색 쿼리: 파스모포비아 (유령이름) 공략 필살기 뇽자
        const ytQuery = encodeURIComponent(`파스모포비아 ${ghost.name} 공략 필살기 뇽자`);

        card.innerHTML = `
            <div class="ghost-card-header">
                <img src="images/ghosts/${ghost.engName}.webp"
                     onerror="this.onerror=null; this.src='images/ghosts/Spirit.webp'"
                     class="ghost-icon"
                     alt="${ghost.name}">
                <div class="ghost-name">${ghost.name}</div>
                <div class="ghost-badge-group">
                    <span class="ghost-speed">속도: ${ghost.speed}</span>
                    <span class="ghost-sanity">정신력: ${ghost.sanity}</span>
                </div>
            </div>
            <div class="ghost-evidences">${evidencesHtml}</div>

            <!-- 🔥 에메랄드/민트 1줄 필살기 박스 -->
            <div class="ghost-signature-box">
                <span class="ghost-signature-tag">필살기</span>
                <span class="ghost-signature-track">
                    <span class="ghost-signature-desc">${signatureSkill}</span>
                </span>
            </div>

            <!-- 📺 유튜브 배너 버튼 -->
            <div class="main-youtube-wrapper" style="margin: 8px 0 10px 0;">
                <a href="https://www.youtube.com/results?search_query=${ytQuery}" target="_blank" class="ghost-yt-banner-btn">
                    <span class="ghost-yt-title">${ghost.name} 공략 및 필살기 보러가기 ➔</span>
                </a>
            </div>

            <details class="ghost-details">
                <summary class="ghost-summary">
                    <span>💡 상세 정보 및 특징</span>
                    <span class="more-btn">더보기 ▾</span>
                </summary>
                <div class="ghost-tip-content" style="font-size:0.95rem; line-height:1.6; margin-top:8px;">${ghost.tip}</div>
            </details>
        `;

        // 4개 열에 순환 배분 (0 -> 1열, 1 -> 2열, 2 -> 3열, 3 -> 4열)
        const targetCol = colElements[index % 4];
        targetCol.appendChild(card);
    });

    container.appendChild(columnsWrapper);

    // 긴 필살기 문구는 기본적으로 한 줄로 유지하고, 넘칠 때만 마우스를 올리면
    // 좌→우 전체 문구가 천천히 반복 이동하도록 처리합니다.
    requestAnimationFrame(() => {
        container.querySelectorAll('.ghost-signature-track').forEach(track => {
            const desc = track.querySelector('.ghost-signature-desc');
            if (!desc) return;
            const overflow = desc.scrollWidth - track.clientWidth;
            if (overflow > 2) {
                track.classList.add('is-overflow');
                track.style.setProperty('--signature-shift', `${overflow}px`);
                track.setAttribute('title', desc.textContent.trim());
            } else {
                track.classList.remove('is-overflow');
                track.style.removeProperty('--signature-shift');
                track.removeAttribute('title');
            }
        });
    });
}
