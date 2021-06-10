import React,{useState,useEffect} from "react"
import { NavigateStyle } from "../styles/NavigateStyle"

const Navigate = ({callback,data,tab}) => {
  const [active,setActive]=useState(1)
  useEffect(()=>{
    setActive(1)
  },[tab])
  return (
    <NavigateStyle>
      {data.map(item => (
        <button className={`childLink ${item.title===tab && active===1?"active":""}`} onClick={() => {
          callback(item.data);
          setActive(2);
        }}>
          {item.img ? (
            <img src={item.img} className="image" alt=""></img>
          ) : null}
          <p>{item.title}</p>
        </button>
      ))}
    </NavigateStyle>
  )
}

export default Navigate