import { useSwipeContext } from "../hooks/useSwipeContext";

// components
import CardSwipe from "../components/CardSwipe";
import Date from "../components/Date";
import StripDate from "../components/StripDate";

const Todos = () => {
  const { isActive } = useSwipeContext();
  return (
    <div>
      {isActive ? <StripDate /> : <Date />}
      <CardSwipe />
    </div>
  );
};
export default Todos;
