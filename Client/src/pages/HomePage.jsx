import Hero from "../components/home/Hero";
import Steps from "../components/home/Steps";
import Events from "../components/home/Events";
import Packages from "../components/home/Packages";
import Services from "../components/home/Services";
import Recent from "../components/home/Recent";
import Reviews from "../components/home/Reviews";
import Faq from "../components/home/Faq";
import CtaBand from "../components/home/CtaBand";

export default function HomePage() {
  return (
    <>
    <section id="home">
        <Hero />
      </section>
      <Steps />

      <section id="events" >
        <Events />
      </section>

      <section id="packages" >
        <Packages />
      </section>

      <section id="services" >
        <Services />
      </section>

      <section id="recent">
        <Recent />
      </section>

      <section id="reviews" >
        <Reviews />
      </section>

      <Faq />
      <CtaBand />
    </>
  );
}