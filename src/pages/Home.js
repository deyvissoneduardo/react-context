import ChangeCounter from "../Components/ChangeCounter";

import { useCounterContext } from "../hooks/useCounterContext";
const Home = () => {
    const {counter} = useCounterContext()

  return (
    <div>
        <h1>Home</h1>
        <p>{counter}</p>
        <ChangeCounter />
    </div>
  )
}

export default Home