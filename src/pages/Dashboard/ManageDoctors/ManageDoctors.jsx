import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const uri = "http://localhost:5000/doctors";

  const handleDeleteDoctor = (doctor) => {
    console.log(doctor);

    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${doctor.name} deleted successfully`);
          setDeleteDoctor(null);
          refetch();
        }
      });
  };

  const handleCloseModal = () => {
    setDeleteDoctor(null);
  };

  //   load data
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => fetch(uri).then((res) => res.json()),
  });

  return (
    <div>
      <h2 className="text-4xl">Manage Doctors </h2>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, idx) => (
              <tr key={doctor._id}>
                <th>{idx + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={doctor.imageUrl} alt="" />
                    </div>
                  </div>
                </th>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>

                <td>
                  <label
                    htmlFor="confirmation-modal"
                    className="btn-error btn"
                    onClick={() => setDeleteDoctor(doctor)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmationModal
          data={deleteDoctor}
          handleCloseModal={handleCloseModal}
          handleDeleteDoctor={handleDeleteDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
