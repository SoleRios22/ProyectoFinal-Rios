import { PulseLoader } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
        <PulseLoader />
    </div>
  )
}

export default Loading