import { useContext } from "react"
import ChangeCounter from "../Components/ChangeCounter";
import { CounterContext } from "../context/CounterContext"
const Home = () => {
    const {counter} = useContext(CounterContext);

  return (
    <div>
        <h1>Home</h1>
        <p>{counter}</p>
        <ChangeCounter />
    </div>
  )
}

export default Home