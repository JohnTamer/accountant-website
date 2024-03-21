import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import AboutUs from "./components/aboutUs/aboutUs";
import BookInfo from "./components/bookInfo/bookInfo";
import Cto from "./components/cto/cto";
import Hero from "./components/hero/hero";
import Interested from "./components/interested/interested";
import Quote from "./components/quote/quote";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <Quote />
      <BookInfo />
      <Cto />
      <Interested />
    </main>
  );
}
