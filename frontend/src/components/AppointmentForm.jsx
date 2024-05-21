import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
 
  
const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];
  const doctorsArray = [
      "Dr. Smith", "Dr. Johnson", "Dr. Lee",

      "Dr. Kim", "Dr. Brown", "Dr. Davis",

      "Dr. Martinez", "Dr. Garcia", "Dr. Rodriguez",
     "Dr. Wilson", "Dr. Taylor", "Dr. Anderson",
  "Dr. Thomas", "Dr. White", "Dr. Harris",
    "Dr. Clark", "Dr. Lewis", "Dr. Robinson",
  "Dr. Walker", "Dr. Perez", "Dr. Hall",
   "Dr. Young", "Dr. Allen", "Dr. King",
    "Dr. Wright", "Dr. Scott", "Dr. Adams"
  ];
  const allDoctors = departmentsArray.flatMap(department => department.doctors);
  
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const  response  = await fetch(
        "http://localhost:3000/backend/basic/doctors",
        {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
          }
        } 
      );
      const data = await response.json();
      console.log(data.doctors);
      setDoctors(data.doctors);
      // console.log(data.doctors);
    };
    fetchDoctors();
  }, []);
  const handleAppointment = async (e) => {
    e.preventDefault();
    const doctorFirstName= 'test'
    const doctorLastName= '123'
    const hasVisitedBool = Boolean(hasVisited);
    const values = {
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date: appointmentDate,
      department,
      doctor_firstName: doctorFirstName,
      doctor_lastName: doctorLastName,
      hasVisited: hasVisitedBool,
      address,
    };
    try {
      const response = await fetch(
        "http://localhost:3000/backend/appointment/post",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
      const data = await response.json();
      console.log(data);
      toast.success(data.message);
        setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setNic(""),
        setDob(""),
        setGender(""),
        setAppointmentDate(""),
        setDepartment(""),
        setDoctorFirstName(""),
        setDoctorLastName(""),
        setHasVisited(""),
        setAddress("");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Appointment</h2>
        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div>
            <select
              onChange={(e) => {
                value={department}
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
            }}
            >
              {departmentsArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                    
                  </option>
                );
              })}
            </select>
            <select>
              {doctorsArray.map((doctor, index) => (
                <option key={doctor} value={index}>
                  {doctor}
                </option>
                ))}
      </select>
          </div>
          <textarea
            rows="10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Have you visited before?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
        </form>
      </div>
    </>
  )
}

export default AppointmentForm