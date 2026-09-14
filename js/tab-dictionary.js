// ==========================================
// 📖 2. 유령 도감
// PC: 좌측 목록 + 우측 상세 패널
// Mobile: 목록을 누르면 해당 항목 아래로 상세 정보가 펼쳐지는 아코디언
// ==========================================

let currentSelectedGhostName = null;

function buildDayanStyleGhostDetail(ghost, detailBodyHtml) {
    // Dayan은 기존 전용 마크업을 그대로 사용한다.
    if (ghost.engName === 'Dayan') return detailBodyHtml;

    // 기존 상세 HTML의 내용을 버리지 않고, 각 섹션을 Dayan과 같은 카드형 UI로 재배치한다.
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div class="ghost-rich-source">${detailBodyHtml}</div>`, 'text/html');
    const source = doc.body.firstElementChild;
    const children = Array.from(source.children);
    const sections = [];
    let current = null;

    children.forEach(el => {
        if (el.classList.contains('dict-section-title')) {
            if (current) sections.push(current);
            current = { title: el.textContent.trim(), nodes: [] };
        } else if (current) {
            current.nodes.push(el.outerHTML);
        }
    });
    if (current) sections.push(current);

    const heroTitle = ghost.specialTrait || `${ghost.name}의 핵심 고유 메커니즘을 확인하세요.`;
    const statA = ghost.huntSanity || ghost.sanity || '-';
    const statB = ghost.speed || '1.7 m/s';
    const statC = ghost.forcedEvidence || '없음';

    const sectionHtml = sections.map((sec, i) => `
        <section class="dayan-section ghost-rich-section">
            <div class="dayan-section-head">
                <span>${String(i + 1).padStart(2, '0')}</span>
                <div><h3>${sec.title}</h3><p>${getGhostSectionSubtitle(ghost, sec.title, i)}</p></div>
            </div>
            <div class="ghost-rich-card ghost-rich-tone-${i % 4}">${sec.nodes.join('')}</div>
        </section>
    `).join('');

    return `
        <div class="dayan-detail ghost-rich-detail">
            <section class="dayan-hero-callout ghost-signature-hero">
                <div class="dayan-kicker">${ghost.engName.toUpperCase()} · 유령 시그니처</div>
                <h2>${getGhostSignatureHeadline(ghost)}</h2>
                <p>${heroTitle}</p>
                <div class="dayan-stat-grid ghost-signature-stats">
                    <div class="dayan-stat ghost-stat-blue"><span>헌팅 정신력</span><strong>${statA}</strong><small>사냥 판단 기준</small></div>
                    <div class="dayan-stat ghost-stat-purple"><span>이동 속도</span><strong>${statB}</strong><small>기본·특수 속도</small></div>
                    <div class="dayan-stat ghost-stat-pink"><span>고정 증거</span><strong>${statC}</strong><small>계약 설정 기준</small></div>
                </div>
            </section>
            ${sectionHtml || `
                <section class="dayan-section ghost-rich-section">
                    <div class="dayan-section-head"><span>01</span><div><h3>고유 특성</h3><p>이 유령을 식별할 때 가장 중요한 특징입니다.</p></div></div>
                    <div class="ghost-rich-card ghost-rich-tone-0"><p class="dict-text">${ghost.specialTrait || '등록된 상세 정보가 없습니다.'}</p></div>
                </section>`}
        </div>
    `;
}

function getGhostSignatureHeadline(ghost) {
    const map = {
        'Demon': '이른 사냥과 십자가 반응으로 정체를 드러냅니다.',
        'Wraith': '소금을 무시하고 플레이어에게 순간이동할 수 있습니다.',
        'Phantom': '사진과 긴 깜빡임으로 다른 유령과 구분할 수 있습니다.',
        'Banshee': '특정 플레이어를 집중적으로 추적하는 사냥 특성이 있습니다.',
        'Jinn': '전원이 켜진 전기와 거리에 따라 사냥 특성이 달라집니다.',
        'Revenant': '목표를 발견하면 극단적으로 빠르게 움직입니다.',
        'Shade': '정신력이 낮을수록 활동성이 올라가는 소극적인 유령입니다.',
        'Poltergeist': '주변 물체를 이용해 강력한 연속 투척을 일으킵니다.',
        'Mare': '어둠을 선호하며 불이 꺼진 곳에서 더 위험합니다.',
        'Yurei': '문을 완전히 닫고 주변 플레이어의 정신력을 깎습니다.',
        'Oni': '모습을 자주 드러내며 이벤트와 사냥에서 강한 존재감을 보입니다.',
        'Yokai': '말소리와 전자기기에 반응하지만 사냥 중 감지 범위가 짧습니다.',
        'Hantu': '온도가 낮을수록 사냥 속도가 빨라집니다.',
        'Goryo': '도트와 카메라를 이용해 방에 머무는 특성을 확인할 수 있습니다.',
        'Myling': '사냥 중 발소리와 전자기기 감지 거리가 중요한 단서입니다.',
        'Onryo': '불꽃을 꺼뜨리는 행동과 사냥 조건이 핵심입니다.',
        'The Twins': '두 개의 상호작용 범위와 두 가지 사냥 속도를 사용합니다.',
        'Raiju': '활성 전자기기 주변에서 더 빠르고 위험해집니다.',
        'Obake': 'UV 흔적과 손자국이 비정상적으로 변할 수 있습니다.',
        'The Mimic': '다른 유령의 행동을 흉내 내면서 가짜 오브를 남깁니다.',
        'Moroi': '정신력이 낮을수록 더 빠르고 위험해집니다.',
        'Deogen': '플레이어와 가까워질수록 속도가 크게 느려집니다.',
        'Thaye': '시간이 지나고 나이를 먹을수록 느려지고 사냥 임계값이 내려갑니다.'
    };
    return map[ghost.engName] || `${ghost.name}만의 고유한 행동과 사냥 메커니즘을 확인하세요.`;
}

function getGhostSectionSubtitle(ghost, title, index) {
    if (/사냥|헌팅|hunt/i.test(title)) return '사냥이 시작되는 조건과 실제 행동을 함께 확인하세요.';
    if (/증거|evidence/i.test(title)) return '저널 증거와 특수 행동을 구분해서 확인하세요.';
    if (/속도|movement/i.test(title)) return '기본 속도와 특수 조건에 따른 변화를 확인하세요.';
    if (/능력|고유|특성|특수/i.test(title)) return '이 유령을 다른 유령과 구분하는 핵심 메커니즘입니다.';
    if (/test|테스트|판별|식별|공략/i.test(title)) return '실전에서 안전하게 확인할 수 있는 판별 방법입니다.';
    return `${ghost.name}의 ${title.replace(/\([^)]*\)/g, '').trim()}을 자세히 확인하세요.`;
}

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

    const ghostVideoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`파스모포비아 ${ghost.name} 공략 필살기 뇽자`)}`;

    // Dayan 이외의 모든 유령은 기존 데이터는 유지하면서 Dayan급 컬러/카드 UI로 감싼다.
    detailBodyHtml = buildDayanStyleGhostDetail(ghost, detailBodyHtml);

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

            <a href="${ghostVideoUrl}" target="_blank" rel="noopener noreferrer" class="dict-ghost-video-banner">
                <span class="yt-banner-icon" aria-hidden="true">▶</span>
                <span class="yt-banner-textbox">
                    <span class="yt-banner-title">📺 유튜브에서 '${ghost.name}' 뇽자 공략 영상 보기</span>
                    <span class="yt-banner-sub">클릭 시 증거 분석 페이지와 같은 유령별 공략 검색 결과로 이동합니다.</span>
                </span>
                <span class="yt-banner-arrow">영상 보기 ➜</span>
            </a>

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

let ghostDictionaryList = [];
let currentDictionarySearch = '';

function normalizeGhostSearch(value) {
    return String(value || '').trim().toLocaleLowerCase('ko-KR').replace(/\s+/g, '');
}

function sortGhostsKorean(ghosts) {
    return [...ghosts].sort((a, b) => {
        const nameCompare = String(a.name || '').localeCompare(String(b.name || ''), 'ko-KR');
        if (nameCompare !== 0) return nameCompare;
        return String(a.engName || '').localeCompare(String(b.engName || ''), 'en');
    });
}

function filterGhosts(searchValue) {
    const keyword = normalizeGhostSearch(searchValue);
    if (!keyword) return ghostDictionaryList;

    return ghostDictionaryList.filter(ghost => {
        const koreanName = normalizeGhostSearch(ghost.name);
        const englishName = normalizeGhostSearch(ghost.engName);
        return koreanName.includes(keyword) || englishName.includes(keyword);
    });
}

function renderGhostDictionaryList(ghosts) {
    const list = document.getElementById('dict-scroll-list');
    if (!list) return;

    list.innerHTML = '';

    if (!ghosts.length) {
        list.innerHTML = `
            <div class="dict-search-empty">
                <strong>검색 결과가 없습니다.</strong>
                <span>한글 또는 영어 유령 이름을 입력해 보세요.</span>
            </div>
        `;
        return;
    }

    ghosts.forEach((ghost, index) => {
        const itemWrap = document.createElement('div');
        itemWrap.className = 'dict-mobile-item';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = `dict-list-item ${index === 0 && currentSelectedGhostName === ghost.name ? 'active' : ''}`;
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

        const isOpen = currentSelectedGhostName === ghost.name;
        if (isOpen) {
            itemWrap.classList.add('is-open');
            mobileDetail.innerHTML = getGhostDetailHtml(ghost);
        }

        button.classList.toggle('active', isOpen);
        button.addEventListener('click', () => selectGhostDictionary(ghost.name));
        itemWrap.appendChild(button);
        itemWrap.appendChild(mobileDetail);
        list.appendChild(itemWrap);
    });
}

function updateDictionaryListMeta(resultCount = null) {
    const meta = document.getElementById('dict-list-meta');
    if (!meta) return;
    const total = ghostDictionaryList.length;
    const shown = resultCount === null ? total : resultCount;
    meta.textContent = currentDictionarySearch
        ? `${shown}종 검색됨 · 가나다순`
        : `${total}종 · 가나다순 · 클릭하여 상세 보기`;
}

function renderGhostDictionary() {
    const container = document.getElementById('ghost-dictionary-container');
    if (!container || typeof GHOST_DATA === 'undefined') return;
    container.innerHTML = '';

    if (!GHOST_DATA.length) return;

    ghostDictionaryList = sortGhostsKorean(GHOST_DATA);
    currentDictionarySearch = '';
    currentSelectedGhostName = ghostDictionaryList[0].name;

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
        <div class="dict-search-box">
            <span class="dict-search-icon">⌕</span>
            <input id="dict-ghost-search" type="search" autocomplete="off" spellcheck="false"
                   placeholder="유령 이름 검색..." aria-label="유령 이름 검색">
            <button type="button" class="dict-search-clear" id="dict-search-clear" aria-label="검색어 지우기">×</button>
        </div>
        <div class="dict-list-heading">
            <span>유령 목록</span>
            <small id="dict-list-meta">${GHOST_DATA.length}종 · 가나다순 · 클릭하여 상세 보기</small>
        </div>
        <div class="dict-scroll-list" id="dict-scroll-list"></div>
    `;

    const rightPane = document.createElement('div');
    rightPane.className = 'dict-right-pane';
    rightPane.id = 'dict-detail-pane';

    wrapper.appendChild(leftPane);
    wrapper.appendChild(rightPane);
    container.appendChild(wrapper);

    const searchInput = leftPane.querySelector('#dict-ghost-search');
    const clearButton = leftPane.querySelector('#dict-search-clear');

    function applySearch(value) {
        currentDictionarySearch = value.trim();
        const results = filterGhosts(value);
        clearButton.classList.toggle('is-visible', Boolean(currentDictionarySearch));

        // 검색 결과에서 현재 선택 유령이 사라지면 첫 번째 결과를 자동 선택합니다.
        if (results.length && !results.some(ghost => ghost.name === currentSelectedGhostName)) {
            currentSelectedGhostName = results[0].name;
        }

        renderGhostDictionaryList(results);
        updateDictionaryListMeta(results.length);

        if (results.length) {
            updateGhostDictionaryDetail(currentSelectedGhostName);
        } else {
            const right = document.getElementById('dict-detail-pane');
            if (right) {
                right.innerHTML = `
                    <div class="dict-detail-card dict-detail-empty">
                        <div class="dict-detail-empty-icon">⌕</div>
                        <h2>검색 결과가 없습니다.</h2>
                        <p>한글 또는 영어 유령 이름으로 검색해 보세요.</p>
                    </div>
                `;
            }
        }
    }

    searchInput.addEventListener('input', event => applySearch(event.target.value));
    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        applySearch('');
        searchInput.focus();
    });

    renderGhostDictionaryList(ghostDictionaryList);
    updateGhostDictionaryDetail(currentSelectedGhostName);
}

function selectGhostDictionary(name) {
    const results = filterGhosts(currentDictionarySearch);
    const ghost = results.find(g => g.name === name);
    if (!ghost) return;

    if (currentSelectedGhostName === name) {
        // 모바일에서는 같은 항목을 다시 누르면 접습니다.
        const activeWrap = document.querySelector('.dict-mobile-item.is-open');
        if (activeWrap) {
            activeWrap.classList.remove('is-open');
            const detail = activeWrap.querySelector('.dict-mobile-detail');
            if (detail) detail.innerHTML = '';
        }
        currentSelectedGhostName = null;
        document.querySelectorAll('#dict-scroll-list .dict-list-item').forEach(btn => btn.classList.remove('active'));
        return;
    }

    currentSelectedGhostName = name;
    updateGhostDictionaryDetail(name);
}

function updateGhostDictionaryDetail(name) {
    const ghost = ghostDictionaryList.find(g => g.name === name) || GHOST_DATA.find(g => g.name === name);
    if (!ghost) return;

    currentSelectedGhostName = name;

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
