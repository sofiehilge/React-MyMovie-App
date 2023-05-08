import Heading from "../components/Heading";
import PopularCard from "../templates/PopularCard";
import SeeMoreButton from "../components/SeeMoreButton";
import Switch from "../components/Switch";
import Footer from "../templates/footer";
import NowShowing from "../templates/NowShowing";
/* to punktummer for nu er vi i pages mappen og skal hoppe ud af pages mappen og ind i componenet mappen. */

const ListView = () => {
  return (
    <>
      <header className="gridContainer padding">
        <Heading title="MyMovies" size="16" as="h1" />
        {/* Sådan ser et komponent ud når det bruges i React */}
        <Switch />
      </header>
      <main className="padding">
        <section>
          <div className="flexContainer space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <NowShowing />
          </div>
        </section>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Popular" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div>
            <PopularCard />
            <PopularCard />
            <PopularCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ListView;
