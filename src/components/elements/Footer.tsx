import { useRouter } from "next/router";
import { memo } from "react";

function Footer({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`Footer`}>Footer</div>
    </>
  );
}

export default memo(Footer);
