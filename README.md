# 📖 독후감 기록 사이트 Inkspire

- **배포 URL : [https://ink-spire.netlify.app/](https://ink-spire.netlify.app)**

<img width="1512" alt="스크린샷 2024-10-16 오후 10 13 00" src="https://github.com/user-attachments/assets/b8954023-625e-4aed-998d-479fa3e74fe4">

<br>

## 프로젝트 소개

- Inkspire는 내가 읽은 책을 기록하고, 저장하는 독후감 사이트입니다.
- 누구나 자신이 읽은 책의 독후감을 쓰면서 생각을 다시 한번 정리하고, 언제든 자신이 썼던 독후감을 보면서 내용을 떠올릴 수 있으면 좋겠다는 생각에 프로젝트를 만들었습니다.

<br>

## 1. 개발 환경

- Front : Next.js 14, Tailwind, React Query
- 버전 및 이슈관리 : Github
- 서비스 배포 환경 : Netlify
  <br>

## 2. 채택한 개발 기술

### Next.js 14

- Next.js 14 app router 기반 SSR 개발
- middleware를 사용한 사용자 검증

### Tailwind

- 기본 class style 을 통한 개발 속도 향상
- sm, md, lg등의 반응형 속성을 통한 반응형 웹 서비스 개발
- custom style을 통한 색상 통일 및 코드 최적화

### React Query

- useQuery와 useMutation을 통한 서버와 클라이언트 데이터 동기화
- useInfiniteQuery + intersectionobserver를 사용한 무한 스크롤
