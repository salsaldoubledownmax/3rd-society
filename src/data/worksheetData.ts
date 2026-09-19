import { VehicleItem, QuizQuestion, RiddleQuestion, EvaluationItem } from '../types';

export const VEHICLE_ITEMS: VehicleItem[] = [
  {
    id: 'p1',
    name: '가마',
    era: 'past',
    place: 'land',
    powerSource: '사람의 힘',
    description: '여러 사람이 앞뒤에서 어깨에 메고 가는 탈것입니다.',
    features: ['사람 2~4명이 메고 이동함', '귀한 양반이나 신부가 주로 이용함', '울퉁불퉁한 산길도 갈 수 있지만 사람이 많이 힘듦'],
    iconType: 'gama'
  },
  {
    id: 'p2',
    name: '소달구지',
    era: 'past',
    place: 'land',
    powerSource: '동물의 힘(소)',
    description: '소가 큰 수레를 끌어 무거운 곡식이나 짐을 나르는 교통수단입니다.',
    features: ['소가 앞에서 수레를 끎', '많은 농산물과 짐을 실을 수 있음', '속도가 느려 먼 길을 가려면 며칠이 걸림'],
    iconType: 'ox-cart'
  },
  {
    id: 'p3',
    name: '말 / 나귀',
    era: 'past',
    place: 'land',
    powerSource: '동물의 힘(말/나귀)',
    description: '옛날에 가장 빠르게 먼 거리를 가거나 급한 소식을 전할 때 탔습니다.',
    features: ['달리는 속도가 빠름', '급한 서신(편지)이나 공무를 처리할 때 이용', '한 번에 많은 사람이 탈 수는 없음'],
    iconType: 'horse'
  },
  {
    id: 'p4',
    name: '뗏목',
    era: 'past',
    place: 'water',
    powerSource: '물의 흐름과 사람의 힘',
    description: '통나무를 나란히 엮어 물 위에 띄우고 장대로 밀어 움직이는 원시 배입니다.',
    features: ['통나무를 칡넝쿨이나 밧줄로 묶어 만듦', '강이나 얕은 냇가에서 사람과 짐을 건넴', '물살이 세면 뒤집힐 위험이 있음'],
    iconType: 'raft'
  },
  {
    id: 'p5',
    name: '돛단배 (황포돛배)',
    era: 'past',
    place: 'water',
    powerSource: '자연의 힘(바람)과 노',
    description: '바람의 힘을 돛으로 받아 강이나 바다를 건너던 배입니다.',
    features: ['바람을 이용해 먼 바다나 한강을 이동', '바람이 불지 않거나 태풍이 오면 움직이기 어려움', '어업이나 소금, 쌀 운반에 쓰임'],
    iconType: 'sailboat'
  },
  {
    id: 'p6',
    name: '짚신 / 봇짐과 지게',
    era: 'past',
    place: 'land',
    powerSource: '사람의 발과 다리 힘',
    description: '특별한 탈것이 없을 때 대부분의 일반 백성들이 걸어서 짐을 나르고 이동했습니다.',
    features: ['짚으로 삼은 짚신을 신고 걸어 다님', '등에 지게나 봇짐을 지고 산과 고개를 넘음', '한양까지 가려면 몇 주에서 한 달 이상 걸림'],
    iconType: 'walking'
  },
  {
    id: 'n1',
    name: '고속열차 (KTX/SRT)',
    era: 'present',
    place: 'land',
    powerSource: '전기 에너지 (모터)',
    description: '철길 위를 시속 300km가 넘는 속도로 달리는 첨단 열차입니다.',
    features: ['서울에서 부산까지 약 2시간 15분 만에 도착', '날씨의 영향을 적게 받으며 수백 명을 안전하게 수송', '전국을 반나절 생활권으로 연결해 줌'],
    iconType: 'train'
  },
  {
    id: 'n2',
    name: '전기 승용차',
    era: 'present',
    place: 'land',
    powerSource: '배터리 전기 모터',
    description: '매연 없이 배터리로 모터를 돌려 원하는 곳으로 달리는 현대식 자동차입니다.',
    features: ['원하는 시간과 목적지로 자유롭게 이동', '가족 단위 이동과 장보기에 매우 편리', '친환경 전기를 사용하여 공기 오염을 줄임'],
    iconType: 'car'
  },
  {
    id: 'n3',
    name: '지하철 (도시 철도)',
    era: 'present',
    place: 'land',
    powerSource: '전기 에너지',
    description: '땅속이나 지상 철로를 통해 복잡한 도시 안을 빠르게 연결해 주는 대중교통입니다.',
    features: ['도로 교통 체증(막힘)에 영향받지 않음', '정해진 시간에 정확하게 목적지에 도착', '많은 사람이 저렴한 요금으로 이용 가능'],
    iconType: 'subway'
  },
  {
    id: 'n4',
    name: '대형 여객선 / 크루즈선',
    era: 'present',
    place: 'water',
    powerSource: '디젤 엔진 / 하이브리드 동력',
    description: '엔진의 강력한 힘으로 섬과 육지, 다른 나라를 바다로 오가는 거대한 배입니다.',
    features: ['수천 명의 승객과 많은 자동차, 화물을 실을 수 있음', '침실, 식당, 수영장 등 편의시설이 갖추어짐', '제주도나 해외 여행 시 널리 이용'],
    iconType: 'ship'
  },
  {
    id: 'n5',
    name: '여객기 (비행기)',
    era: 'present',
    place: 'air',
    powerSource: '제트 제트엔진(항공유)',
    description: '하늘 높이 날아 바다와 대륙을 넘어 가장 빠르게 이동하는 교통수단입니다.',
    features: ['시속 약 800~900km로 매우 빠르게 비행', '지구 반대편 외국도 하루 만에 이동 가능', '신선한 과일, 급한 의약품을 세계 각국으로 신속 배송'],
    iconType: 'plane'
  },
  {
    id: 'n6',
    name: '도심 항공 교통 (UAM / 에어택시)',
    era: 'present',
    place: 'air',
    powerSource: '전기 수직이착륙(eVTOL) 배터리',
    description: '도시의 하늘길을 날아다니는 미래형 첨단 친환경 비행 교통수단입니다.',
    features: ['활주로 없이 수직으로 뜨고 내림', '도시의 꽉 막힌 도로 위를 날아서 10분 만에 이동', '소음과 탄소 배출이 적은 미래형 교통수단'],
    iconType: 'uam'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '옛날의 교통수단은 주로 ( 　　 )이나 동물의 힘, 자연(바람, 물)의 힘을 이용하여 움직였습니다.',
    type: 'blank',
    options: ['사람', '석유', '전기', '원자력'],
    correctAnswer: '사람',
    explanation: '옛날에는 가마나 지게처럼 사람의 힘이나 소, 말 등 동물의 힘을 이용했습니다.',
    hint: '가마를 메거나 지게를 질 때 누구의 힘을 쓸까요?'
  },
  {
    id: 2,
    question: '오늘날의 교통수단은 옛날에 비해 이동하는 데 걸리는 시간이 훨씬 ( 　　 ).',
    type: 'choice',
    options: ['길어졌다', '짧아졌다', '변함없다'],
    correctAnswer: '짧아졌다',
    explanation: '고속열차와 비행기 등 빠른 교통수단 덕분에 이동 시간이 획기적으로 줄어들었습니다.',
    hint: '서울에서 부산까지 옛날엔 보름 넘게 걸렸지만, 지금은 2시간대에 갑니다!'
  },
  {
    id: 3,
    question: '오늘날에는 아침에 출발하여 전국 어디든 일을 보고 저녁에 집으로 돌아올 수 있는 ( 　　 )권이 되었습니다.',
    type: 'blank',
    options: ['일일 생활', '일년 생활', '한달 생활', '주말 생활'],
    correctAnswer: '일일 생활',
    explanation: '하루(일일) 만에 어디든 다녀올 수 있게 된 생활 범위를 ‘일일 생활권’이라고 부릅니다.',
    hint: '‘하루’를 한자어로 나타내면 무엇일까요?'
  },
  {
    id: 4,
    question: '[O/X] 교통수단이 발달하면서 한 번에 더 많은 짐을 안전하고 빠르게 실어 나를 수 있게 되었다.',
    type: 'ox',
    options: ['O', 'X'],
    correctAnswer: 'O',
    explanation: '컨테이너선, 화물 열차, 대형 화물차 덕분에 엄청난 양의 물건을 안전하게 나릅니다.',
    hint: '소달구지와 대형 화물 트럭 중 어떤 것이 더 많은 짐을 나를 수 있을까요?'
  },
  {
    id: 5,
    question: '[O/X] 옛날에는 계절이나 날씨(비, 눈, 태풍, 가뭄)에 상관없이 언제나 자유롭게 교통수단을 이용할 수 있었다.',
    type: 'ox',
    options: ['O', 'X'],
    correctAnswer: 'X',
    explanation: '옛날의 돛단배나 뗏목은 바람이 불지 않거나 큰 비가 오면 강과 바다를 건널 수 없었습니다.',
    hint: '바람이 불지 않으면 돛단배는 어떻게 될까요?'
  },
  {
    id: 6,
    question: '[O/X] 교통수단의 발달로 멀리 떨어진 다른 지역이나 외국과의 문화 교류가 훨씬 활발해졌다.',
    type: 'ox',
    options: ['O', 'X'],
    correctAnswer: 'O',
    explanation: '비행기와 고속철도 덕분에 전 세계 사람들과 쉽게 만나고 문화를 나눌 수 있게 되었습니다.',
    hint: '외국 여행이나 다른 지역 친척 방문이 쉬워졌는지 생각해 보세요.'
  }
];

export const RIDDLE_QUESTIONS: RiddleQuestion[] = [
  {
    id: 1,
    clue: '옛날에 네 사람이 앞뒤에서 어깨에 메고 가던 상자 모양의 탈것이에요. 주로 귀한 벼슬아치나 신부가 탔어요.',
    initialConsonants: 'ㄱ ㅁ',
    answer: '가마',
    hint: '전통 혼례식 때 신부가 타는 탈것',
    iconType: 'gama'
  },
  {
    id: 2,
    clue: '소의 힘을 빌려 무거운 곡식이나 농사 도구를 나르던 두 바퀴 달린 나무 수레예요.',
    initialConsonants: 'ㅅ ㄷ ㄱ ㅈ',
    answer: '소달구지',
    hint: '소가 끄는 달구지',
    iconType: 'ox-cart'
  },
  {
    id: 3,
    clue: '철길 위를 시속 300km 이상으로 쌩쌩 달려 서울에서 부산까지 2시간 조금 넘는 시간에 데려다주는 오늘날의 열차예요.',
    initialConsonants: 'ㄱ ㅅ ㅇ ㅊ',
    answer: '고속열차',
    hint: 'KTX 또는 SRT라고도 불러요',
    iconType: 'train'
  },
  {
    id: 4,
    clue: '통나무를 굵은 밧줄로 나란히 엮어서 강이나 냇물 위에 띄워 사람과 짐을 건네주던 옛날 배예요.',
    initialConsonants: 'ㄸ ㅁ',
    answer: '뗏목',
    hint: '통나무를 엮어 만든 간단한 배',
    iconType: 'raft'
  },
  {
    id: 5,
    clue: '거대한 날개와 제트엔진으로 하늘을 날아 바다 건너 먼 외국까지 하루 만에 갈 수 있게 해주는 현대의 교통수단이에요.',
    initialConsonants: 'ㅂ ㅎ ㄱ',
    answer: '비행기',
    hint: '공항에서 탑승하는 하늘의 탈것',
    iconType: 'plane'
  }
];

export const INITIAL_EVALUATIONS: EvaluationItem[] = [
  {
    id: 1,
    criteria: '옛날과 오늘날 교통수단의 종류와 특징을 바르게 구별할 수 있나요?',
    rating: 3
  },
  {
    id: 2,
    criteria: '교통수단이 발달하면서 사람들의 생활 모습이 어떻게 달라졌는지 이해했나요?',
    rating: 3
  },
  {
    id: 3,
    criteria: '미래에 등장할 새로운 교통수단을 환경과 편리함을 생각하여 창의적으로 표현했나요?',
    rating: 3
  },
  {
    id: 4,
    criteria: '학습지의 모든 활동에 흥미를 갖고 성실하게 참여했나요?',
    rating: 3
  }
];
