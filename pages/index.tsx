import Glass from "@/components/Glass";
import Background from "@/components/background/Background";
import TextSection from "@/components/main/TextSection";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
      <title>سایت</title>
      <meta name="description" content="سایت" />
    </Head>
      <div className="inset-0 overflow-hidden h-screen relative p-20 flex justify-center items-center max-md:p-5">
        <Background />
        <Glass />
      </div>
    </>
  );
};
export default Home;
