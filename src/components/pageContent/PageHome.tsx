import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import { useRouter } from "next/router";
import { memo } from "react";

function PageHome({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageHome mainPage`}>
        <SectionHomeBanner />
      </div>
    </>
  );
}

export default memo(PageHome);
