import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Daily from "../Components/Daily/Daily";
import Navbar_Strt from "../Components/Navbar_Start/Navbar_Strt";

const DailyDeals = () => {

  return (
    <div>
        <Navbar_Strt/>
      <Navbar />
      <Daily/>
      <Footer />
    </div>
  );
};

export default DailyDeals;
