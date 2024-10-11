import { Metadata } from "next";
const CommonMetadata: Metadata = {
  description: "독후감 기록 사이트",
  openGraph: {
    title: "Inkspire",
    description: "독후감 기록 사이트",
    url: new URL("https://ink-spire.netlify.app/"),
    siteName: "Inkspire",
    locale: "ko_KR",
    type: "website",
  },
  metadataBase: new URL("https://ink-spire.netlify.app/"),
};

export default CommonMetadata;
