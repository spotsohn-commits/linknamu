// 보여 주기용 더미 데이터입니다. 실제 내용으로 교체하세요.

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "손성훈",
  bio: "풀스택 조향사/산업안전산업기사(필기합격) | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "📝 Blog", url: "https://blog.naver.com/spot_korea" },
];
