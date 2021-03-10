import '../index.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import PopupEditProfile from "./PopupEditProfile.js";
import PopupAddPlace from "./PopupAddPlace.js"
import PopupFullSizeImage from "./PopupFullSizeImage.js";
import PopupDeleteCard from "./PopupDeleteCard.js";
import PopupEditAvatar from "./PopupEditAvatar.js";

function App() {
  return (
      <div className="body">
        <div className="page">
          <Header />
          <Main />
          <Footer />

          <PopupEditProfile />
          <PopupAddPlace />
          <PopupFullSizeImage />
          <PopupDeleteCard />
          <PopupEditAvatar />
          
        </div>
    </div>
  );
}

export default App;


