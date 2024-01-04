import { useRouter } from "next/router";
import { memo } from "react";

function SectionHomeBanner({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionHomeBanner secSpacing`}>SectionHomeBanner</div>
    </>
  );
}

export default memo(SectionHomeBanner);
