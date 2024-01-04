import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

function Header({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`Header`}>Header</div>
    </>
  );
}

export default memo(Header);
