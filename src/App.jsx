import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
        <h1>hero</h1>
      </section>
      <section className='padding'>
        <PopularProducts />
        <h1>poluar products</h1>
      </section>
      <section className='padding'>
        <SuperQuality />
        <h1>super SuperQuality</h1>

      </section>
      <section className='padding-x py-10'>
        <h1>Services</h1>
      </section>
      <section className='padding'>
        <SpecialOffer />
        <h1>offers</h1>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
        <h1>reviwes</h1>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
        {/* <h1>subsicrebe</h1> */}
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
