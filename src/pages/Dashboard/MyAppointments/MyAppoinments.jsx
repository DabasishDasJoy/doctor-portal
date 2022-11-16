import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyAppoinments = () => {
  const { user } = useContext(AuthContext);

  const uri = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: myAppoinments = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () => fetch(uri).then((res) => res.json()),
  });

  return (
    <div>
      <h3 className="text-3xl mb-5"> My Appoinments</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {myAppoinments.map((appoinment, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{appoinment.name}</td>
                <td>{appoinment.treatment}</td>
                <td>{appoinment.appoinmentDate}</td>
                <td>{appoinment.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinments;
