import { useContext } from "react"
import ChangeCounter from "../Components/ChangeCounter";
import { CounterContext } from "../context/CounterContext"
const Abaout = () => {
    const {counter} = useContext(CounterContext);

  return (
    <div>
        <h1>Abaout</h1>
        <p>{counter}</p>
        <ChangeCounter />
    </div>
  )
}

export default Abaout