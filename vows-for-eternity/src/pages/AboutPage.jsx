import About from "../components/About";
import "../styles/background.css";

export default function AboutPage() {
  return (
    <div className="page-section watercolor-bg">
      <h1>About Vows for Eternity</h1>
      <p>
        Vows for Eternity is a global matchmaking service dedicated to helping individuals find meaningful, lasting relationships. Our approach is highly personalized, focusing on understanding each client’s unique preferences, values, and aspirations.
      </p>
      <p>
        With a team of experienced relationship experts, we offer guidance, support, and introductions to like-minded individuals. Our services include exclusive events, wellness coaching, and ongoing support throughout your journey.
      </p>
      <p>
        Whether you are seeking companionship, love, or a life partner, Vows for Eternity is committed to making your search successful and fulfilling.
      </p>

      {/* Include the About component */}
      <About />
    </div>
  );
}
