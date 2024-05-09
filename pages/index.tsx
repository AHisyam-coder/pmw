import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/HeaderNavbar";

const Home = () => {
  return (
    <>
    <HeaderNavbar/>
    <main className="flex flex-col items-center justify-center p-6 min-h-screen">
      <p className="font-semibold text-5xl">if it works</p>
      <p className="font-semibold text-3xl">it asd</p>
    </main>
    <Footer/>
    </>
  );
}

export default Home;