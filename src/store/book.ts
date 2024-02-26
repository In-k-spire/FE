import { BookProps } from "@/type/book.type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const defaultValue: BookProps = {
  title:
    "떨림과 울림(큰글자도서) (물리학자 김상욱이 바라본 우주와 세계 그리고 우리)",
  link: "https://search.shopping.naver.com/book/catalog/32467356596",
  image:
    "https://shopping-phinf.pstatic.net/main_4399273/43992731618.20231207091317.jpg",
  author: "김상욱",
  discount: "27000",
  publisher: "동아시아",
  description:
    "물리학자 김상욱이 바라본 우주와 세계 그리고 우리\n물리라는 언어를 통해 세계와 우리 존재를 바라보는 다른 눈을 뜨게 하다!\n\n‘물리’라는 과학의 언어를 통해 세계를 읽고 생각하는 또 다른 방법을 안내하는 『떨림과 울림』. 빛, 시공간, 원자, 전자부터 최소작용의 원리, 카오스, 엔트로피, 양자역학, 단진동까지 물리에서 다루는 핵심 개념들을 차분히 소개하면서 물리라는 새로운 언어를 통해 우리 존재와 삶, 죽음의 문제부터 타자와의 관계, 세계에 관한 생각까지 새로운 틀에서 바라볼 수 있게 안내한다.\n\n우리의 몸과 마시는 공기, 발을 딛고 서있는 땅과 흙, 그리고 매일 마주하는 노트북 모니터와 휴대전화까지. 세계의 모든 존재들은 모두 ‘원자’라는 아주 작은 단위로 이루어져 있다. 저자는 이 작고도 작은 단위까지 내려가 우리 존재부터 우주라는 커다란 세계까지 들여다보고 질문하고 우리가 생각의 타래를 열 수 있게 해준다.\n저자는 원자의 기준으로는 인간의 탄생과 죽음이 단지 원자들이 모였다가 흩어지는 것과 다르지 않은 일이라고 이야기하면서 나의 존재를 이루는 것들은 어디에서 시작되었는지, 죽음을 어떻게 성찰할 수 있을지, 타자와 나의 차이는 무엇인지까지 엄밀한 과학의 정답을 제시하는 대신 물리학자만이 안내할 수 있는 새로운 시선을 제시해준다.",
};

export const bookAtomState = atom<BookProps>({
  default: defaultValue,
  key: "book",
  effects_UNSTABLE: [persistAtom],
});
