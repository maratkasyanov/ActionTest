import { useState, useEffect } from "react";
interface propBtn {
  elem: number;
  setselected8: () => void;
  deletenum: () => void;
  selected8: number[];
  maxnum: number;
}
export default function NumBtn(props: propBtn) {
  useEffect(() => {
    console.log(props.selected8)
    if (props.selected8.includes(props.elem)) {
      setchecked(true)
      setcolor("rgba(255, 210, 5, 1)")
    }
  }, [props])
  function handler() {
    if (props.selected8.length < props.maxnum && !checked) {
      setcolor("rgba(255, 210, 5, 1)")
      props.setselected8()
      setchecked(true)
    } else if (checked) {
      props.deletenum()
      setcolor("rgba(255, 255, 255, 1)")
      setchecked(false)
    }
  }
  const [color, setcolor] = useState("rgba(255, 255, 255, 1)")
  const [checked, setchecked] = useState(false)
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={handler}
      className="btnnum"
    >
      {props.elem}
    </button>
  )
}