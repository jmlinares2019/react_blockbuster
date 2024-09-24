import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white"
}

const Loader = () => {
  return (
    <ClipLoader 
        cssOverride={override}
    />
  )
}

export default Loader