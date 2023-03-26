import { useContext } from "react"
import ChangeCounter from "../Components/ChangeCounter";
import { CounterContext } from "../context/CounterContext"
const Produts = () => {
    const {counter} = useContext(CounterContext);

  return (
    <div>
        <h1>Produts</h1>
        <p>{counter}</p>
        <ChangeCounter />
    </div>
  )
}

export default Produts