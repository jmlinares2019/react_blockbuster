import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
}

const Loader = () => {
  return (
    <ClipLoader 
        cssOverride={override}
    />
  )
}

export default Loader