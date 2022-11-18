import { useEffect, useState } from "react";

const useIsAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  console.log(
    "🚀 ~ file: useIsAdmin.js ~ line 6 ~ useIsAdmin ~ adminLoading",
    isAdminLoading
  );

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useIsAdmin;
