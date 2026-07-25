import Hero from "./components/Hero.jsx";
import Countdown from "./components/Countdown.jsx";
import EventDetails from "./components/EventDetails.jsx";
import Venue from "./components/Venue.jsx";
import ReserveDay from "./components/ReserveDay.jsx";
import Gallery from "./components/Gallery.jsx";
import InvitationMessage from "./components/InvitationMessage.jsx";
import Footer from "./components/Footer.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";

export default function App() {
  return (
    <div className="paper-texture min-h-screen w-full">
      <div className="invite-card">
        <a
          href="#details"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-heading focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to event details
        </a>
        <main>
          <Hero />
          <Countdown />
          <EventDetails />
          <Venue />
          <ReserveDay />
          <Gallery />
          <InvitationMessage />
        </main>
        <Footer />
      </div>
      <MusicPlayer />
    </div>
  );
}
