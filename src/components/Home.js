import Product from "./Product";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner" className="home__image"/>

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={19.99}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg"
            rating={5}
          />

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://www.costco.co.uk/medias/sys_master/images/h5d/hd2/31246443118622.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1341242"
            title="Samsung Galaxy Watch 4 44mm Smartwatch with ECG Monitor Tracker for Health Fitness Running Sleep Cycles GPS Fall Detection LTE US Version, Black"
            price={289.99}
            image="https://m.media-amazon.com/images/I/61y5+Sq3IqS._AC_SL1500_.jpg"
            rating={3}
          />

          <Product
            id="8934586"
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue"
            price={174.98}
            image="https://m.media-amazon.com/images/I/71yEX4ugtJL._AC_SL1000_.jpg"
            rating={5}
          />

          <Product
            id="8345864"
            title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray"
            price={998.98}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617067383000"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3245323"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={1502.95}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
