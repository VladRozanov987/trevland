//Components
import Main from "./components/main/Main.component";
import Location from "./components/location/Location.component";
import Offers from "./components/offers/Offers.component";
import Blog from "./components/blog/Blog.component";
import Footer from "./components/footer/Footer.component";
//Global styles
import GlobalStyle from "./components/GlobalStyle.component";

function App() {
  return (
    <>
      <div>
        <GlobalStyle />
        <Main />
        <Location />
        <Offers />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
