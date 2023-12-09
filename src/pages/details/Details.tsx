import { useParams } from "react-router-dom";

function Details() {
  const { currency } = useParams();
  return <div>{currency}</div>;
}

export default Details;
