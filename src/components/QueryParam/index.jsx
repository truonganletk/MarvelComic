import { useLocation } from "react-router-dom";

const QueryParam = () => {
  const location = useLocation();
  console.log("location: \t", location);
  const id = new URLSearchParams(location.search).get("id");

  return (
    <div>
      <h1>Query Parameter Component</h1>
      <p>ID: {id}</p>
    </div>
  );
};
export default QueryParam;
