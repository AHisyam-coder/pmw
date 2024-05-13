import About from "@/components/About";
import Feature from "@/components/Feature";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Stats from "@/components/Stats";
import Testimony from "@/components/Testimony";

const Home = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Feature/>
      <Stats/>
      <About/>
      <Testimony/>
      <Newsletter/>
    </>
  );
};

export default Home;
