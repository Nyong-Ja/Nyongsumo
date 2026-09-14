// ==========================================
// 📖 2. 유령 도감
// PC: 좌측 목록 + 우측 상세 패널
// Mobile: 목록을 누르면 해당 항목 아래로 상세 정보가 펼쳐지는 아코디언
// ==========================================

let currentSelectedGhostName = null;

function getGhostDetailHtml(ghost) {
    let detailBodyHtml = ghost.isCustomDetailed && ghost.detailedHtml ? ghost.detailedHtml : `
        <section class="dict-generic-section">
            <div class="dict-section-title">고유 특성 & 대응법</div>
            <p class="dict-text">${ghost.specialTrait || '등록된 상세 정보가 없습니다.'}</p>
        </section>
    `;

    // 상세 본문에 이미 들어 있는 증거 섹션은 상단 증거 영역과 중복되므로 제거합니다.
    detailBodyHtml = detailBodyHtml.replace(
        /<div class="dict-section-title">[^<]*증거[^<]*<\/div>\s*<p class="dict-text">[\s\S]*?<\/p>/gi,
        ''
    );

    return `
        <div class="dict-detail-card">
            <div class="dict-detail-head">
                <div>
                    <div class="dict-detail-kicker">GHOST DICTIONARY</div>
                    <h2>${ghost.name}</h2>
                    <div class="dict-detail-eng">${ghost.engName}</div>
                </div>
                <div class="dict-detail-tags">
                    ${ghost.hasSpecialSpeed ? '<span>속도 변화형</span>' : ''}
                    ${ghost.hasTargetRoam ? '<span>특수 이동</span>' : ''}
                    ${ghost.hasForcedEv ? '<span>고정 증거</span>' : ''}
                    ${ghost.engName === 'Dayan' ? '<span>여성 전용</span>' : ''}
                </div>
            </div>

            <div class="dict-evidence-feature">
                <div class="dict-evidence-feature-label">증거</div>
                <div class="dict-evidence-feature-chips">
                    ${ghost.evidences.map(ev => `<span>${ev}</span>`).join('')}
                </div>
            </div>

            <div class="dict-spec-feature">
                <div class="dict-spec-feature-item">
                    <span>헌팅 정신력</span>
                    <strong>${ghost.huntSanity || ghost.sanity || '-'}</strong>
                </div>
                <div class="dict-spec-feature-item">
                    <span>이동 속도</span>
                    <strong>${ghost.speed || '-'}</strong>
                </div>
                <div class="dict-spec-feature-item">
                    <span>고정 증거</span>
                    <strong>${ghost.forcedEvidence || '없음'}</strong>
                </div>
            </div>

            <div class="dict-detail-content">
                ${detailBodyHtml}
            </div>
        </div>
    `;
}

function renderGhostDictionary() {
    const container = document.getElementById('ghost-dictionary-container');
    if (!container || typeof GHOST_DATA === 'undefined') return;
    container.innerHTML = '';

    if (!GHOST_DATA.length) return;

    currentSelectedGhostName = GHOST_DATA[0].name;

    const wrapper = document.createElement('div');
    wrapper.className = 'dict-split-layout';

    const leftPane = document.createElement('div');
    leftPane.className = 'dict-left-pane';
    leftPane.innerHTML = `
        <div class="dict-intro-card">
            <div class="dict-intro-kicker">PHASMOPHOBIA · ENCYCLOPEDIA</div>
            <h1>👻 유령 도감</h1>
            <p>유령을 선택하면 특징, 증거, 헌팅 메커니즘과 실전 판별법을 자세히 확인할 수 있습니다.</p>
        </div>
        <div class="dict-list-heading">
            <span>유령 목록</span>
            <small>${GHOST_DATA.length}종 · 클릭하여 상세 보기</small>
        </div>
        <div class="dict-scroll-list" id="dict-scroll-list"></div>
    `;

    const list = leftPane.querySelector('#dict-scroll-list');
    const rightPane = document.createElement('div');
    rightPane.className = 'dict-right-pane';
    rightPane.id = 'dict-detail-pane';

    GHOST_DATA.forEach((ghost, index) => {
        const itemWrap = document.createElement('div');
        itemWrap.className = 'dict-mobile-item';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = `dict-list-item ${index === 0 ? 'active' : ''}`;
        button.dataset.ghostName = ghost.name;
        button.innerHTML = `
            <span class="dict-list-number">${String(index + 1).padStart(2, '0')}</span>
            <span class="dict-list-icon-wrap">
                <img src="images/ghosts/${ghost.engName}.webp"
                     onerror="this.onerror=null; this.src='images/ghosts/Spirit.webp'"
                     class="dict-list-icon"
                     alt="${ghost.name}">
            </span>
            <span class="dict-list-name">
                <strong>${ghost.name}</strong>
                <small>${ghost.engName}</small>
            </span>
            <span class="dict-list-arrow">›</span>
        `;

        const mobileDetail = document.createElement('div');
        mobileDetail.className = 'dict-mobile-detail';
        mobileDetail.innerHTML = index === 0 ? getGhostDetailHtml(ghost) : '';

        button.addEventListener('click', () => selectGhostDictionary(ghost.name));
        itemWrap.appendChild(button);
        itemWrap.appendChild(mobileDetail);
        list.appendChild(itemWrap);
    });

    wrapper.appendChild(leftPane);
    wrapper.appendChild(rightPane);
    container.appendChild(wrapper);

    updateGhostDictionaryDetail(GHOST_DATA[0].name);
}

function selectGhostDictionary(name) {
    if (currentSelectedGhostName === name) {
        // 모바일에서는 같은 항목을 다시 누르면 접습니다.
        const activeWrap = document.querySelector('.dict-mobile-item.is-open');
        if (activeWrap) {
            activeWrap.classList.remove('is-open');
            const detail = activeWrap.querySelector('.dict-mobile-detail');
            if (detail) detail.innerHTML = '';
        }
        currentSelectedGhostName = null;
        return;
    }

    currentSelectedGhostName = name;
    updateGhostDictionaryDetail(name);
}

function updateGhostDictionaryDetail(name) {
    const ghost = GHOST_DATA.find(g => g.name === name);
    if (!ghost) return;

    document.querySelectorAll('#dict-scroll-list .dict-list-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.ghostName === name);
    });

    const rightPane = document.getElementById('dict-detail-pane');
    if (rightPane) {
        rightPane.innerHTML = getGhostDetailHtml(ghost);
    }

    document.querySelectorAll('.dict-mobile-item').forEach(item => {
        const btn = item.querySelector('.dict-list-item');
        const detail = item.querySelector('.dict-mobile-detail');
        const isActive = btn && btn.dataset.ghostName === name;
        item.classList.toggle('is-open', isActive);
        if (detail) detail.innerHTML = isActive ? getGhostDetailHtml(ghost) : '';
    });
}
