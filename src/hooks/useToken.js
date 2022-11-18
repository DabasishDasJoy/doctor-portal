import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem("accessToken", data.token);
            setToken(data.token);
          } else {
            toast.error("token failed");
          }
        });
    }
  }, [email]);

  return [token];
};

export default useToken;
