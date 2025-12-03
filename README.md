# Herbtime Dogtime - coffee & puppy

서울 근교에 위치한 반려견과 함께하는 힐링 카페 웹사이트

## 프로젝트 소개

허브타임 독타임은 반려견과 함께 즐길 수 있는 카페 웹사이트입니다. 사계절의 향기를 느낄 수 있는 공간에서 행복을 나눌 수 있습니다.

## 기술 스택

- React 18.2.0
- React Scripts 5.0.1
- 카카오 맵 API
- CSS3

## 설치 및 실행

### 필수 요구사항

- Node.js (v14 이상)
- npm 또는 yarn

### 설치

```bash
npm install
```

### 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```
REACT_APP_KAKAO_MAP_API_KEY=여기에_카카오_맵_API_키_입력
```

카카오 맵 API 키는 [카카오 개발자 콘솔](https://developers.kakao.com/)에서 발급받을 수 있습니다.

### 개발 서버 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)로 접속하세요.

### 빌드

```bash
npm run build
```

빌드 결과물은 `build` 폴더에 생성됩니다.

## 배포

### Vercel 배포

1. GitHub에 프로젝트를 푸시합니다.
2. [Vercel](https://vercel.com)에 로그인합니다.
3. "New Project"를 클릭합니다.
4. GitHub 저장소를 선택합니다.
5. 환경 변수에 `REACT_APP_KAKAO_MAP_API_KEY`를 추가합니다.
6. "Deploy"를 클릭합니다.

## 주요 기능

- 반려견 카페 소개
- 이용 요금 안내
- 예약 및 스토어
- 이용 안내 및 연락처
- 이용 주의사항

## 라이선스

이 프로젝트는 비공개 프로젝트입니다.

