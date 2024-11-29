// // "use client";
// // import { useState } from "react";

// // const RegistrationForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     firstName: "",
// //     phoneNumber: "",
// //     email: "",
// //     userName: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (Object.values(formData).some((field) => field === "")) {
// //       alert("Make sure to fill the form correctly");
// //       return;
// //     }
// //     // Send formData to the server
// //   };

// //   return (
// //     <div className="card">
// //       <form onSubmit={handleSubmit} className="form">
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Name"
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="text"
// //           name="firstName"
// //           placeholder="First Name"
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="text"
// //           name="phoneNumber"
// //           placeholder="Phone Number"
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="text"
// //           name="userName"
// //           placeholder="User Name"
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="password"
// //           name="confirmPassword"
// //           placeholder="Confirm Password"
// //           onChange={handleChange}
// //         />
// //         <button type="submit" className="submitButton">
// //           Register
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default RegistrationForm;
// // "use client";
// // import { useState } from "react";

// // const RegistrationForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     firstName: "",
// //     phoneNumber: "",
// //     email: "",
// //     userName: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (Object.values(formData).some((field) => field === "")) {
// //       alert("Please fill out all fields.");
// //       return;
// //     }
// //     if (formData.password !== formData.confirmPassword) {
// //       alert("Passwords do not match.");
// //       return;
// //     }
// //     alert("Registration Successful!");
// //     // Add your submission logic here
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
// //       <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
// //         Register
// //       </h2>
// //       <form
// //         onSubmit={handleSubmit}
// //         className="grid grid-cols-1 sm:grid-cols-2 gap-4"
// //       >
// //         <div>
// //           <label
// //             htmlFor="name"
// //             className="block text-sm font-medium text-gray-700"
// //           >
// //             Full Name
// //           </label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             placeholder="Enter your full name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label
// //             htmlFor="firstName"
// //             className="block text-sm font-medium text-gray-700"
// //           >
// //             First Name
// //           </label>
// //           <input
// //             type="text"
// //             id="firstName"
// //             name="firstName"
// //             placeholder="Enter your first name"
// //             value={formData.firstName}
// //             onChange={handleChange}
// //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label
// //             htmlFor="phoneNumber"
// //             className="block text-sm font-medium text-gray-700"
// //           >
// //             Phone Number
// //           </label>
// //           <input
// //             type="text"
// //             id="phoneNumber"
// //             name="phoneNumber"
// //             placeholder="Enter your phone number"
// //             value={formData.phoneNumber}
// //             onChange={handleChange}
// //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label
// //             htmlFor="email"
// //             className="block text-sm font-medium text-gray-700"
// //           >
// //             Email Address
// //           </label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             placeholder="Enter your email address"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label
// //             htmlFor="userName"
// //             className="block text-sm font-medium text-gray-700"
// //           >
// //             Username
// //           </label>
// //           <input
// //             type="text"
// //             id="userName"
// //             name="userName"
// //             placeholder="Choose a username"
// //             value={formData.userName}
// //             onChange={handleChange}
// //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label
// //             htmlFor="password"
// //             className="block text-sm font-medium text-gray-700"
// //           >
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             placeholder="Enter your password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label
// //             htmlFor="confirmPassword"
// //             className="block text-sm font-medium text-gray-700"
// //           >
// //             Confirm Password
// //           </label>
// //           <input
// //             type="password"
// //             id="confirmPassword"
// //             name="confirmPassword"
// //             placeholder="Re-enter your password"
// //             value={formData.confirmPassword}
// //             onChange={handleChange}
// //             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //             required
// //           />
// //         </div>

// //         <div className="sm:col-span-2">
// //           <button
// //             type="submit"
// //             className="w-full py-2 px-4 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-blue-500 focus:outline-none rounded-md text-sm font-medium shadow-md"
// //           >
// //             Register
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default RegistrationForm;

"use client";
import { useState } from "react";
import axiosCreate from "../(home)/Utils/axiosClient"; // Adjust the path as needed

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    phonenumber: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    debugger;
    if (Object.values(formData).some((field) => field === "")) {
      alert("Please fill out all fields.");
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lastname: formData.lastname,
          firstname: formData.firstname,
          phonenumber: formData.phonenumber,
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Something went wrong.");
        return;
      }

      const data = await response.json();
      alert("Registration successful!");
      setFormData({
        lastname: "",
        firstname: "",
        phonenumber: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Register
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700"
          >
            last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter your full name"
            value={formData.lastname}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter your first name"
            value={formData.firstname}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="phonenumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            placeholder="Enter your phone number"
            value={formData.phonenumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Choose a username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="confirmpassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Re-enter your password"
            value={formData.confirmpassword}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-blue-500 focus:outline-none rounded-md text-sm font-medium shadow-md"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
// import { NextApiResponse } from "next";
// import axiosCreate from "../(home)/Utils/axiosClient";
