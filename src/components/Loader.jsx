import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "auto"
}

const Loader = () => {
  return (
    <ClipLoader 
        cssOverride={override}
    />
  )
}

export default Loader