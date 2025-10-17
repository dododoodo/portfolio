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
        duration: '2025-01-31 ~ 2025-02-10 (10일)',
        members: 4,
        role: [
        '프로젝트 팀장으로서 일정 관리 및 협업 흐름 조정',
        '리뉴얼 기획 상세 (정보구조도, 서비스 흐름도 제작)',
        '프론트엔드 기능 구현 (메인페이지, 뉴스룸 페이지 및 담당 부분)',
        '프로젝트 발표'
        ],
        techStack: ['Javascript', 'HTML', 'CSS', 'Figma','Canva'],
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
                title: '1. 이미지 슬라이드 및 모달 팝업 창',
                description: `jQuery로 모달 팝업과 슬라이드 기능을 구현하였으며,
                swiper 라이브러리를 활용해 원하는 이미지와 텍스트로 구성된 슬라이드를 제작하였습니다.`
            },
            {
                title: '2. 반응형 웹 제작',
                description: `다양한 디바이스 환경에 대응할 수 있도록 모바일(480px 이하), 태블릿(1024px 이하),
                PC(1024px~1700px) 해상도를 지원하는 반응형 웹으로 제작하였습니다.`
            },
            {
                title: '3. 마우스 호버 등 사용자와 상호작용 가능한 효과 구현',
                description: `마우스 호버 시 버튼이나 이미지에 애니메이션 효과를 적용하여,
                사용자와의 직관적인 상호작용을 유도하였습니다.`
            }
        ],
        thumbnail: '/img/project_pulmuone_thumb.png',
    },
    {
        id: 'nmnm',
        title: '니밈내밈 - 밈 놀이공간 플랫폼 기획 웹사이트',
        mode: "팀 프로젝트",
        type: 'Service Planning & Landing Page',
        summary: `10대 청소년을 위한 밈(Meme) 놀이 및 정보 제공 서비스를 기획하고 소개하는 랜딩 페이지입니다.`,
        duration: '2023-09-27 ~ 2023-11-26 (80일)',
        members: 6,
        role: [
        '프로젝트 네이밍 및 브랜딩 컨셉 주도',
        '랜딩 페이지 퍼블리싱 및 프론트엔드 구축',
        '반응형 웹 디자인 적용 및 UI 애니메이션 구현',
        '팀 소개 및 포트폴리오 페이지 연동'
        ],
        techStack: ['Javascript', 'HTML', 'CSS', 'Figma'],
        links: {
        github: 'https://github.com/dododoodo/nmnm',
        figma: 'https://www.figma.com/design/FcsRQAFr36GPGEgvPheS5Z/%EB%8B%88%EB%B0%88%EB%82%B4%EB%B0%88-%EC%9B%B9-%EC%9E%91%EC%97%85?node-id=0-1&t=QVG32gEQJEIOCMXu-1',
        deploy: 'https://dododoodo.github.io/nmnm/'
        },
        description: `10대 청소년의 밈 활용 문제를 해결하고자 기획된 서비스로, '밈을 이용한 청소년 놀이공간 서비스'를 목표합니다.
                사용자 리서치를 통해 궁금한 밈을 검색하거나 나만의 밈 제작 욕구 등 핵심 문제를 정의했습니다.
                해결책으로 '밈 검색 공간'과 '밈으로 노는 놀이 공간'으로 구분하여, 밈 정보 제공부터 데일리 미션, 숏폼 콘테스트 등 10대들에게 참여형 활동을 제공합니다.
                본 웹사이트는 프로젝트의 핵심 기획 의도와 UI/UX 프로토타입, 디자인 컨셉을 상세히 보여주기 위해 제작된 반응형 포트폴리오 랜딩 페이지입니다.`,
        features: [
            {
                title: '1. 반응형 웹(Responsive Web) 및 레이아웃 구현',
                description: `다양한 디바이스 환경에서 최적화된 콘텐츠를 제공할 수 있도록 반응형 웹으로 설계 및 구현했습니다.
                메인 페이지 전체 레이아웃을 HTML/CSS로 구성하고, 기획 의도가 명확히 전달되도록 섹션별 콘텐츠를 배치했습니다.`
            },
            {
                title: '2. 사용자 인터랙션을 위한 동적 효과 구현',
                description: `AOS(Animate On Scroll), ScrollReveal, jQuery 등의 라이브러리를 활용하여,
                사용자 스크롤 위치에 따라 콘텐츠가 나타나거나 움직이는 다이나믹한 UI/UX 효과를 적용했습니다.`
            },
            {
                title: '3. 메인 콘텐츠 비디오 및 슬라이드 연동',
                description: `서비스의 튜토리얼 및 핵심 기능을 보여주는 비디오 콘텐츠를 페이지에 직접 삽입했습니다.
                또한 Slick Carousel 등의 라이브러리를 사용하여 시각적 정보를 효과적으로 전달하도록 했습니다.`
            },
            {
                title: '4. 모달 팝업을 활용한 상세 정보 제공',
                description: `니밈내밈의 캐릭터 '쥬쥬 6총사' 클릭 시, JavaScript를 이용해 모달 팝업 창을 띄워 상세 이미지를 보여줍니다.
                캐릭터를 확대해서 볼 수 있고, X 버튼을 클릭해 다시 돌아갈 수 있습니다.`
            },
            {
                title: '5. 브랜딩을 위한 특수 효과 적용',
                description: `서비스의 발랄한 분위기를 살리기 위해 jQuery를 활용한 애니메이션 타이틀(animated-title) 및 배경 요소(Sticker, Particle) 등을 적용했습니다.`
            }
        ],
        thumbnail: '/img/project_nmnm_thumb.png',
    },
    {
        id: 'gongyeon',
        title: '공연본당 - 공연 정보 제공 서비스',
        mode: "개인 프로젝트",
        type: 'React Web Service',
        summary: `‘예술의 전당’의 공연 정보를 제공하는 모바일 서비스 웹사이트입니다.`,
        duration: '2025-03-17 ~ 2025-03-31 (총 14일)',
        members: 1,
        role: [
        '프로젝트 기획 및 디자인',
        '프론트엔드 기능 구현',
        '로컬 저장소 활용 및 데이터 처리',
        '발표 및 발표자료 제작'
        ],
        techStack: ['React', 'Javascript', 'React Router','Axios','Figma'],
        links: {
        github: 'https://github.com/dododoodo/gongyeon',
        figma: 'https://www.figma.com/design/XMwCWzd3pIB1UPIdR7vC40/A%EC%A1%B0-%EB%8F%84%EC%97%B0%EC%A7%80%ED%98%B8?node-id=3311-4&t=FNQWC8bZAJ4Qtcoc-1',
        deploy: 'https://gongyeon-38pt.vercel.app'
        },
        description: `서초구에 위치한 ‘예술의 전당’의 공연 정보를 확인할 수 있는 웹사이트입니다.
        예술의 전당에서 제공하는 공공 API를 활용해 공연 데이터를 수집·처리하였으며, 카카오, 네이버, 자체 로그인을 통해 사용자 인증이 가능합니다.
        사용자는 공연을 검색하고, 찜하거나 후기를 남길 수 있는 기능을 이용할 수 있습니다.
        그린컴퓨터아카데미에서 진행한 개인 프로젝트입니다.`,
        features: [
            {
                title: '1. 공연 정보 랜덤 추천 (메인 배너)',
                description: `jQuery 라이브러리를 활용하여 슬라이드 또는 모달 팝업창 제작하였고,
                swiper 라이브러리를 활용하여 원하는 이미지와 텍스트로 변경하였습니다.`
            },
            {
                title: '2. 나만의 공연 별점 기록',
                description: `다양한 디바이스 환경에 대응할 수 있도록 모바일(480px 이하), 태블릿(1024px 이하),
                PC(1024px~1700px) 해상도를 지원하는 반응형 웹으로 제작하였습니다.`
            },
            {
                title: '3. 자체 / 카카오 / 네이버 로그인 지원',
                description: `마우스 호버 시 버튼이나 이미지에 애니메이션 효과를 적용하여,
                사용자와의 직관적인 상호작용을 유도하였습니다.`
            }
        ],
        thumbnail: '/img/project_gongyeon_thumb.png',
    },{
        id: 'monsly',
        title: 'Monsly-일정 관리 어플리케이션 ',
        mode: "개인 프로젝트",
        type: 'Flutter Application',
        summary: `Flutter 기반의 스마트 일정 관리 웹 어플리케이션입니다.`,
        duration: '2025-06-02 ~ 2025-06-06 (총 4일)',
        members: 1,
        role: [
        '프로젝트 기획 및 디자인',
        '프론트엔드 기능 구현',
        ],
        techStack: ['Flutter', 'Dart', 'GetX','Hive','Figma'],
        links: {
        github: 'https://github.com/dododoodo/monsly',
        figma: 'https://www.figma.com/design/54aUkdiCdCmNdZMi2IAnZc/Monsly_%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&t=6qYTm4yAaT0kri1u-1',
        deploy: 'https://monsly.vercel.app/'
        },
        description: `TableCalendar 패키지를 중심으로 구현한 Flutter 기반의 일정 관리 애플리케이션입니다.
        캘린더 UI를 활용해 사용자가 일정을 손쉽게 등록, 수정, 삭제할 수 있으며,
        개인 스케줄을 효율적으로 관리할 수 있도록 작지만 직관적인 인터페이스로 구성했습니다.
        그린컴퓨터아카데미에서 진행한 개인 미니 프로젝트입니다.`,
        features: [
            {
                title: '1. TableCalendar 기반 캘린더 UI',
                description: `Flutter의 TableCalendar 위젯을 사용하여 월 단위의 일정을 보여줍니다.
                특정 날짜를 클릭하면 해당 날짜의 일정만 리스트로 표시되며,
                각 날짜의 일정 유무는 컬러 마커로 캘린더에 표시를 남깁니다.`
            },
            {
                title: '2. 일정 삭제 및 수정 기능',
                description: `일정 항목 우측의 버튼을 통해 일정 수정 및 삭제가 가능하며,
            수정 시 기존 정보를 자동으로 불러오고, bottomSheet를 통해 수정 폼을 띄웁니다.
            삭제 시 해당 DateTime을 기준으로 Hive에서 해당 일정만 제거됩니다.`
            },
            {
                title: '3. Hive를 이용한 로컬 데이터 저장',
                description: `Hive 저장소로 scheduleBox를 생성해 날짜별로 일정을 저장, 조회합니다.
            일정 추가/수정/삭제 시마다 Hive 데이터가 자동으로 갱신되며,
            전체 일정은 allScheduleList로 가져와 사용합니다.`
            }
        ],
        thumbnail: '/img/project_monsly_thumb.png',
    },

];

export default projects;
