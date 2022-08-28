// components
import DateChange from "../components/DateChange";
import CloudsRight from "../components/CloudsRight";
import CloudsLeft from "../components/CloudsLeft";
import LeftLeaf from "../components/LeftLeaf";
import RightLeaf from "../components/RightLeaf";
import Calendar from "../components/Calendar";
import Man from "../components/Man";
import Surface from "../components/Surface";
import WelcomeText from "../components/WelcomeText";

const Welcome = () => {
  return (
    <div>
      <DateChange />
      <CloudsRight />
      <CloudsLeft />
      <LeftLeaf />
      <RightLeaf />
      <Calendar />
      <Man />
      <Surface />
      <WelcomeText />
    </div>
  );
};
export default Welcome;
