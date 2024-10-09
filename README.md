# 📖 독후감 기록 서비스 Inkspire
- **배포 URL : [https://ink-spire.netlify.app](https://ink-spire.netlify.app/)**

<img width="1512" alt="스크린샷 2024-10-09 오후 9 41 40" src="https://github.com/user-attachments/assets/6c845d7e-3625-4d4f-80ff-9f75ed449601">




<br>

## 프로젝트 소개

- Inkspire는 책을 읽은 뒤 독후감을 쓸 수 있는 서비스입니다.
- 누구나 자신이 읽은 책의 독후감을 쓰면서 생각을 다시 한번 정리하고, 언제든 자신이 썼던 독후감을 보면서 내용을 떠올릴 수 있으면 좋겠다는 생각에 프로젝트를 만들었습니다.

<br>

## 팀원 구성

<div align="center">

| **이동훈** | **전수향** |
| :------: |  :------: | 
| [<img src="https://avatars.githubusercontent.com/u/80664851?v=4" height=150 width=150> <br/> @dohi0512](https://github.com/dohi0512) | [<img src="https://avatars.githubusercontent.com/u/62911285?v=4" height=150 width=150> <br/> @soohyang136](https://github.com/soohyang136) |
| **FE** | **BE** |

</div>

<br>

## 1. 개발 환경

- Front : Next.js 14, Tailwind, react-query
- Back-end : 제공된 API 활용
- 버전 및 이슈관리 : Github
- 협업 툴 : Discord
- 서비스 배포 환경 : Netlify
<br>

## 2. 채택한 개발 기술

### Next.js 14
- Next.js 14버전의 app router를 채용하여 Server Component 개발
- SSR과 Metadata를 사용한 SEO최적화
    
### React Query
- React Query를 사용한 서버-클라이언트 사이의 데이터 동기화
- queryClient를 통한 공통 Error 핸들링

### Tailwind
- 기본 class style 을 통한 개발 속도 향상
- sm, md, lg등의 반응형 속성을 통한 반응형 웹 서비스 개발
- custom style을 통한 색상 통일 및 코드 최적화

<br>


## 3. 신경 쓴 부분

- [접근제한 설정](https://github.com/likelion-project-README/README/wiki/README-6.%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84_%EC%A0%91%EA%B7%BC%EC%A0%9C%ED%95%9C-%EC%84%A4%EC%A0%95)

- [Recoil을 통한 상태관리 및 유지](https://github.com/likelion-project-README/README/wiki/README-6.%EC%8B%A0%EA%B2%BD-%EC%93%B4-%EB%B6%80%EB%B6%84_Recoil%EC%9D%84-%ED%86%B5%ED%95%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%B0%8F-%EC%9C%A0%EC%A7%80)

<br>

## 4. 페이지별 기능

### [로그인]
- 로그인 페이지입니다. 모든 서비스는 로그인을 해야 이용 가능합니다.
    - Github, google 중 선택하여 로그인 가능합니다.
   
<img width="1512" alt="로그인" src="https://github.com/user-attachments/assets/d4bbf840-64ed-48fb-8cc5-8a7f42507095">

<br>

### [카테고리]
- 카테고리 페이지입니다. 등록한 책들을 카테고리별로 볼 수 있습니다.
- 카테고리 검색을 통해 카테고리명으로 검색이 가능합니다.
- 카테고리에 있는 책을 최대 5개까지 볼 수 있으며, 더보기 버튼을 눌러 카테고리의 모든 책을 볼 수 있습니다.

| **카테고리 전체** | **카테고리 자세히보기** |
| :------: |  :------: | 
| <img width="1512" alt="카테고리" src="https://github.com/user-attachments/assets/1c626eba-4ab2-4101-b76e-0f20652e2b7d">|  <img width="1512" alt="전체" src="https://github.com/user-attachments/assets/5c90e546-84a3-4434-9df0-2183fbeb61e0">
<br>|



### [책 추가]
- 책 제목을 검색하면 검색 결과가 표시됩니다.
- 책을 선택한 후, 원하는 카테고리를 선택하거나 카테고리를 만들어서 책을 추가할 수 있습니다.
  
| **책 선택 전** | **책 선택 후** |
| :------: |  :------: | 
| <img  alt="선택 전" width="1512" src="https://github.com/user-attachments/assets/32631e0b-9ea5-43a7-93bc-195547acc7aa"> |  <img width="1512" alt="선택 후" src="https://github.com/user-attachments/assets/98c95578-e2a8-44de-9892-8b2e7bcbb6e8">|

<br>


### [독후감 작성]
- 상단에는 작성한 책의 정보가 나옵니다.
- 한줄평, 독후감, 읽은 페이지를 입력하고 독후감을 작성할 수 있습니다.
- 작성한 독후감은 아래에서 볼 수 있으며, 한줄평을 클릭하면 독후감 전체를 볼 수 있습니다.

![독후감](https://github.com/user-attachments/assets/7088d764-e89b-423c-884a-b60322fac84e)



## 5. 개선 목표
- 이미지 로딩 속도 최적화
  - Next/Image 를 사용하여 최적화했지만 Lighthouse 기준 91점 정도로 최적화 여지가 있음
  - Blur 이미지를 사용하여 이미지 로딩 전 보여주는 방식 채택 예정
- SEO 최적화
  - Metadata를 사용하여 Lighthouse 기준 100점을 받았지만 개선 여지가 있음
  - 페이지별 description을 다르게 보여주거나, title을 다르게 보여주는 것으로 개선 가능성 있음
- 디자인
  - 배경색과 컨텐츠 색상이 비슷하여 구분이 힘들 수 있음
  - 디자인을 전체적으로 수정 예정
<br>


