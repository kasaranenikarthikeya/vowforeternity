import Hero from "../components/Hero";
import About from "../components/About";
import Membership from "../components/Membership";
import Wellness from "../components/Wellness";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <section style={{ margin: '2rem 0', textAlign: 'center' }}>
        <h2>Discover Your Perfect Match</h2>
        <p>
          At Vows for Eternity, we believe in the power of meaningful connections. Our global matchmaking service is designed for discerning individuals who value privacy, authenticity, and a personalized approach to finding love.
        </p>
        <p>
          Join our exclusive community and experience a journey that goes beyond algorithms—where real people, expert guidance, and genuine introductions lead to lasting relationships.
        </p>
      </section>
      <About />
      <Membership />
      <Wellness />
      <Testimonials />
    </>
  );
}
