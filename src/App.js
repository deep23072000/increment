import { increment,decrement,cube,theme } from "./toolkit/couterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function App() {
   const dispatch = useDispatch()
   const show = useSelector((state)=>state.counter.value)
   const show1 = useSelector((state)=>state.counter.cube)
   const show2 = useSelector((state)=>state.counter.color)
   const cubeval = 5;
  const inc = ()=>{
        dispatch(increment())
  }
  const dec = ()=>{
    dispatch(decrement())
  }
  const cub = ()=>{
    dispatch(cube(cubeval))
  }
  const thememode = ()=>{
    dispatch(theme("red"))
  }
  return (
    <>
    {show}<br></br>{show1}
      <button onClick={inc}>
        increment
      </button>
      <button onClick={dec}>
        decrement
      </button>
      <button onClick={cub}>
        cube
      </button>
      <button onClick={thememode}>
        color
      </button>

      <div style={{backgroundColor:show2,width:"100%",height:"20px"}}></div>
    </>
  );
}

export default App;
