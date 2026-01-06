import axios from "axios";
import { useEffect, useState } from "react";

const useToys = () => {
  const [toysData, setToysData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //
    const fetchToysData = async () => {
      setLoading(true);
      axios
        .get("/toysData.json")
        .then((response) => {
          console.log(response);
          setToysData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching the local JSON file:", error);
        });
    };
    fetchToysData();
  }, []);

  return { toysData, loading, error };
};

export default useToys;