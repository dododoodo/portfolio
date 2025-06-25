// src/data/projects.js

const projects = [
    {
        id: 'doody',
        title: '두디 - 밸런스 게임 어플리케이션',
        mode: "팀 프로젝트",
        type: 'Flutter Application',
        summary: `
        밸런스 게임을 중심으로 한 사용자 참여형 커뮤니티 앱입니다.
        사용자가 직접 게임을 주최하고, 다른 사용자와 익명으로 결과를 공유할 수 있습니다.
        그린컴퓨터아카데미에서 진행한 팀 프로젝트입니다.
        `,
        duration: '2025-06-09 ~ 2025-06-17 (총 8일)',
        members: 2,
        role: [
        '기획 기반 와이어프레임 디자인 주도',
        '밸런스 게임 기능 구현 (GetX 활용)',
        '데이터 모델 설계 및 로컬 저장소 연동'
        ],
        techStack: ['Flutter', 'Dart', 'PHP', 'MySQL', 'Hive', 'HTTP', 'GetX', 'Figma', 'XAMPP'],
        links: {
        github: 'https://github.com/dododoodo/doody-source',
        figma: 'https://www.figma.com/design/XMwCWzd3pIB1UPIdR7vC40/A%EC%A1%B0-%EB%8F%84%EC%97%B0%EC%A7%80%ED%98%B8?node-id=3311-4&t=FNQWC8bZAJ4Qtcoc-1',
        deploy: 'https://doody-theta.vercel.app/'
        },
        description: `사용자가 밸런스 게임을 통해 서로의 생각을 공유하고 소통할 수 있습니다.
        별도의 회원가입 없이도 게임 생성, 삭제 등 기본 기능을 쉽게 이용할 수 있습니다.
        테마 및 폰트 설정 등 개인 맞춤 기능을 통해 사용자 경험의 만족도를 높였습니다.`,
        features: [
            {
                title: '1. 밸런스 게임 참여 및 결과 확인',
                description: `게임 참여 시 사용자가 A 또는 B를 선택해 vote하면 항수값과 효율들이 서버에 전송됩니다.
            선택 인원 수는 API 요청으로 받아오며, 로컬 저장소인 Hive를 활용하여 중복 투표를 방지합니다.`
            },
            {
                title: '2. 게임 생성 및 비밀번호 기반 삭제',
                description: `사용자가 질문과 A/B 텍스트, 비밀번호를 입력하면, 입력값 데이터가 TextFormField를 통해 수집됩니다.
            입력값은 POST 방식으로 서버로 전송되며, 서버에서는 MySQL DB에 저장합니다.
            게임 삭제 시 AlertDialog를 통해 비밀번호를 검증 후 요청이 실행됩니다.`
            },
            {
                title: '3. 밸런스 게임 검색',
                description: `사용자가 입력한 키워드가 질문에 포함되어 있는지 contains()로 확인해 게임을 필터링합니다.
            선택한 keyword를 서버에 저장하고, filteredGameList가 자동으로 필터된 목록을 업데이트합니다.`
            },
            {
                title: '4. 다크모드 등 앱 커스터마이징',
                description: `사용자가 원하는 설정에 따라 다크/라이트 모드 및 폰트 크기 슬라이더를 조정하면,
            GetX 컨트롤러를 통해 상태가 관리되고 반영됩니다. 설정값은 로컬 저장소인 Hive에 저장됩니다.`
            }
        ],
        thumbnail: '/img/project_doody_thumb.png',
    },

    {
        id: 'melody',
        title: 'Melody - 산리오 잡화 쇼핑몰 웹',
        mode: "팀 프로젝트",
        type: 'React E-commerce Web App',
        summary: `
        산리오 캐릭터 잡화를 구매할 수 있는 모바일 쇼핑몰 Melody 입니다.
        다양한 상품을 검색 또는 캐릭터 카테고리로 찾거나, 로그인을 통해 구매가 가능합니다.
        그린컴퓨터아카데미에서 진행한 팀 프로젝트입니다.
        `,
        duration: '2025-05-14 ~ 2025-05-23 (총 10일)',
        members: 2,
        role: [
        '전반적인 서비스 디자인 제작',
        'UI 프로토타입 제작',
        '프론트엔드 기능 구현 (메인 페이지, 로그인/회원가입 페이지, 장바구니 페이지 및 담당 부분)',
        '발표 및 발표 자료 제작'
        ],
        techStack: ['React', 'Javascript', 'PHP', 'MySQL', 'Axios', 'Zustand', 'React-router-dom', 'Figma', 'XAMPP'],
        links: {
        github: 'https://github.com/dododoodo/melody',
        figma: 'https://www.figma.com/design/XMwCWzd3pIB1UPIdR7vC40/A%EC%A1%B0-%EB%8F%84%EC%97%B0%EC%A7%80%ED%98%B8?node-id=3311-4&t=FNQWC8bZAJ4Qtcoc-1',
        deploy: 'https://melody2-pi.vercel.app/'
        },
        description: `일본의 인기 캐릭터인 산리오 캐릭터들의 잡화 상품을 간편하게 구매할 수 있는 모바일 쇼핑몰 웹사이트입니다.
        회원가입 후 로그인을 통해 장바구니에 상품을 담고, 구매 및 구매 내역 확인이 가능합니다.
        원하는 상품은 검색 기능으로 빠르게 찾을 수 있으며, 마음에 드는 상품은 하트를 눌러 위시리스트에 추가할 수 있습니다.
        `,
        features: [
            {
                title: '1. 자체 회원가입 및 로그인 기능 제공',
                description: `게임 참여 시 사용자가 A 또는 B를 선택해 vote하면 항수값과 효율들이 서버에 전송됩니다.
            선택 인원 수는 API 요청으로 받아오며, 로컬 저장소인 Hive를 활용하여 중복 투표를 방지합니다.`
            },
            {
                title: '2. 다양한 상품 카테고리를 통해 원하는 상품 쉽게 탐색',
                description: `사용자가 질문과 A/B 텍스트, 비밀번호를 입력하면, 입력값 데이터가 TextFormField를 통해 수집됩니다.
            입력값은 POST 방식으로 서버로 전송되며, 서버에서는 MySQL DB에 저장합니다.
            게임 삭제 시 AlertDialog를 통해 비밀번호를 검증 후 요청이 실행됩니다.`
            },
            {
                title: '3. 검색 기능으로 원하는 상품 탐색 가능',
                description: `사용자가 입력한 키워드가 질문에 포함되어 있는지 contains()로 확인해 게임을 필터링합니다.
            선택한 keyword를 서버에 저장하고, filteredGameList가 자동으로 필터된 목록을 업데이트합니다.`
            },
            {
                title: '4. 위시리스트 및 장바구니 기능으로 관심 상품 관리',
                description: `사용자가 원하는 설정에 따라 다크/라이트 모드 및 폰트 크기 슬라이더를 조정하면,
            GetX 컨트롤러를 통해 상태가 관리되고 반영됩니다. 설정값은 로컬 저장소인 Hive에 저장됩니다.`
            },
            {
                title: '5. 상품 구매 및 주문 내역 확인 기능 제공',
                description: `사용자가 원하는 설정에 따라 다크/라이트 모드 및 폰트 크기 슬라이더를 조정하면,
            GetX 컨트롤러를 통해 상태가 관리되고 반영됩니다. 설정값은 로컬 저장소인 Hive에 저장됩니다.`
            }
        ],
        thumbnail: '/img/project_melody_thumb.png',
    },
    {
        id: 'pulmuone',
        title: '풀무원 - 브랜드 웹사이트 리뉴얼',
        mode: "팀 프로젝트",
        type: 'Responsive Web Redesign',
        summary: `기존의 풀무원 사이트를 리디자인 및 재구성한 리뉴얼 프로젝트입니다. `,
        duration: '2025-05-14 ~ 2025-05-23 (총 10일)',
        members: 2,
        role: [
        '전반적인 서비스 디자인 제작',
        'UI 프로토타입 제작',
        '프론트엔드 기능 구현 (메인 페이지, 로그인/회원가입 페이지, 장바구니 페이지 및 담당 부분)',
        '발표 및 발표 자료 제작'
        ],
        techStack: ['React', 'Javascript', 'PHP', 'MySQL', 'Axios', 'Zustand', 'React-router-dom', 'Figma', 'XAMPP'],
        links: {
        github: 'https://github.com/dododoodo/pulmuone',
        figma: 'https://www.figma.com/design/yvRbuH4Q8I5dwRoWZ62oT1/-B%EC%A1%B0-%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C?node-id=2741-4201&t=PpN5XdY3IrgBcVH9-1',
        deploy: 'https://dododoodo.github.io/pulmuone'
        },
        description: `기존 풀무원 웹사이트의 중복 콘텐츠를 정리하고, 전체적인 레이아웃 비율을 재조정하여 사용자 만족도를 높이기 위한 리뉴얼 작업을 진행했습니다.
        메인 페이지는 새로운 구성으로 설계하였고, 브랜드 아이덴티티를 반영한 서브 페이지를 추가하여 사이트 전반의 완성도를 향상시켰습니다.
        그린컴퓨터아카데미에서 진행한 팀 프로젝트입니다.`,
        features: [
            {
                title: '1. 자체 회원가입 및 로그인 기능 제공',
                description: `게임 참여 시 사용자가 A 또는 B를 선택해 vote하면 항수값과 효율들이 서버에 전송됩니다.
            선택 인원 수는 API 요청으로 받아오며, 로컬 저장소인 Hive를 활용하여 중복 투표를 방지합니다.`
            },
            {
                title: '2. 다양한 상품 카테고리를 통해 원하는 상품 쉽게 탐색',
                description: `사용자가 질문과 A/B 텍스트, 비밀번호를 입력하면, 입력값 데이터가 TextFormField를 통해 수집됩니다.
            입력값은 POST 방식으로 서버로 전송되며, 서버에서는 MySQL DB에 저장합니다.
            게임 삭제 시 AlertDialog를 통해 비밀번호를 검증 후 요청이 실행됩니다.`
            },
            {
                title: '3. 검색 기능으로 원하는 상품 탐색 가능',
                description: `사용자가 입력한 키워드가 질문에 포함되어 있는지 contains()로 확인해 게임을 필터링합니다.
            선택한 keyword를 서버에 저장하고, filteredGameList가 자동으로 필터된 목록을 업데이트합니다.`
            },
            {
                title: '4. 위시리스트 및 장바구니 기능으로 관심 상품 관리',
                description: `사용자가 원하는 설정에 따라 다크/라이트 모드 및 폰트 크기 슬라이더를 조정하면,
            GetX 컨트롤러를 통해 상태가 관리되고 반영됩니다. 설정값은 로컬 저장소인 Hive에 저장됩니다.`
            },
            {
                title: '5. 상품 구매 및 주문 내역 확인 기능 제공',
                description: `사용자가 원하는 설정에 따라 다크/라이트 모드 및 폰트 크기 슬라이더를 조정하면,
            GetX 컨트롤러를 통해 상태가 관리되고 반영됩니다. 설정값은 로컬 저장소인 Hive에 저장됩니다.`
            }
        ],
        thumbnail: '/img/project_pulmuone_thumb.png',
    },

];

export default projects;
