import "./assets/CSS/index.css";
import Banner from "./Components/Banner";
import Data from "./Components/Data";

import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Navigation
        logo="conduit"
        name={"Home"}
        signin="Sign In"
        signup="Sign Up"
      />
      <Banner
        heading="conduit"
        desc="A place to share your knowledge."
        css="banner"
        headingCss="conduit"
        descCss="conduit-desc"
      />
      <Data />
    </>
  );
}

export default App;
