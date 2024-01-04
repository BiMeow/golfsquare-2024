import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PageHome = dynamic(() => import("@/components/pageContent/PageHome"));

export default function Home() {
  return (
    <MasterPage pageName={"Trang chủ"}>
      <PageHome />
    </MasterPage>
  );
}
