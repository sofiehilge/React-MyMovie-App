import  {useState} from "react"
import ReactSwitch from "react-switch";

const Switch = () => {
    const [checked, setChecked] = useState(false)/* darkmode er ikke tændt */
    const handleChange = () => { /* Som en eventlistener, der her skal ske på onChange */
        setChecked(!checked)
    }
    return ( <ReactSwitch checked={checked} onChange={handleChange}  />);/* onChange definere hvad der skal ske når usedState bliver true */
}
 
export default Switch;