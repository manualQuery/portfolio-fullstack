// "use client";
// import { useState } from "react";

// const CreateProfile = () => {
//   const [formData, setFormData] = useState({
//     image: null,
//     occupation: "",
//     gender: "",
//     religion: "",
//     description: "",
//   });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   // Handle form input changes
//   const handleChange = (e:) => {
//     const { name, value, type, files } = e.target;

//     if (type === "file") {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: files[0],
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     const formDataToSend = new FormData();
//     formDataToSend.append("image", formData.image);
//     formDataToSend.append("occupation", formData.occupation);
//     formDataToSend.append("gender", formData.gender);
//     formDataToSend.append("religion", formData.religion);
//     formDataToSend.append("description", formData.description);

//     try {
//       const response = await fetch("http://localhost:5000/profile", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create profile");
//       }

//       setSuccess(true);
//     } catch (err) {
//       setError(err.message || "An error occurred while creating the profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Your Profile</h1>
//       <form onSubmit={handleSubmit}>
//         {error && <div style={{ color: "red" }}>{error}</div>}
//         {success && (
//           <div style={{ color: "green" }}>Profile created successfully!</div>
//         )}

//         <label htmlFor="image">Profile Image</label>
//         <input type="file" id="image" name="image" onChange={handleChange} />

//         <label htmlFor="occupation">Occupation</label>
//         <input
//           type="text"
//           id="occupation"
//           name="occupation"
//           value={formData.occupation}
//           onChange={handleChange}
//         />

//         <label htmlFor="gender">Gender</label>
//         <select
//           id="gender"
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//         >
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Transgender">Transgender</option>
//           <option value="Prefer not to say">Prefer not to say</option>
//         </select>

//         <label htmlFor="religion">Religion</label>
//         <select
//           id="religion"
//           name="religion"
//           value={formData.religion}
//           onChange={handleChange}
//         >
//           <option value="Christianity">Christianity</option>
//           <option value="Islam">Islam</option>
//           <option value="Hinduism">Hinduism</option>
//           <option value="Judaism">Judaism</option>
//           <option value="Others">Others</option>
//         </select>

//         <label htmlFor="description">Description</label>
//         <textarea
//           id="description"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         ></textarea>

//         <button type="submit" disabled={loading}>
//           {loading ? "Creating..." : "Create Profile"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateProfile;
// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";
// import { Gender, Religion } from "../Utils/types"; // Assuming you are importing enums for Gender and Religion
// import axiosCreate from "../Utils/axiosClient";

// interface CreateProfileProps {
//   userId: string; // The userId will be passed as a string from URL params or prop
// }

// const CreateProfile: React.FC<CreateProfileProps> = ({ userId }) => {
//   const [formData, setFormData] = useState({
//     image: null as File | null,
//     occupation: "",
//     gender: "",
//     religion: "",
//     description: "",
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);

//   // Handle form input changes
//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, type, files } = e.target;

//     if (type === "file" && files) {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: files[0],
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     // Simple validation (can be expanded based on requirements)
//     if (
//       !formData.occupation ||
//       !formData.gender ||
//       !formData.religion ||
//       !formData.description ||
//       !formData.image
//     ) {
//       setError("All fields are required.");
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     const formDataToSend = new FormData();
//     formDataToSend.append("image", formData.image as File);
//     formDataToSend.append("occupation", formData.occupation);
//     formDataToSend.append("gender", formData.gender);
//     formDataToSend.append("religion", formData.religion);
//     formDataToSend.append("description", formData.description);
//     debugger;
//     try {
//       const userId = 1;
//       const response = await axiosCreate.post(`http://localhost:5000/profile/${userId}`, {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (response.status !== 200) {
//         throw new Error("Failed to create profile");
//       }

//       setSuccess(true);
//     } catch (err: any) {
//       setError(err.message || "An error occurred while creating the profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Your Profile</h1>
//       <form onSubmit={handleSubmit}>
//         {error && <div style={{ color: "red" }}>{error}</div>}
//         {success && (
//           <div style={{ color: "green" }}>Profile created successfully!</div>
//         )}

//         <label htmlFor="image">Profile Image</label>
//         <input type="file" id="image" name="image" onChange={handleChange} />

//         <label htmlFor="occupation">Occupation</label>
//         <input
//           type="text"
//           id="occupation"
//           name="occupation"
//           value={formData.occupation}
//           onChange={handleChange}
//         />

//         <label htmlFor="gender">Gender</label>
//         <select
//           id="gender"
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//         >
//           <option value={Gender.Male}>Male</option>
//           <option value={Gender.Female}>Female</option>
//           <option value="Transgender">Transgender</option>
//           <option value="Prefer not to say">Prefer not to say</option>
//         </select>

//         <label htmlFor="religion">Religion</label>
//         <select
//           id="religion"
//           name="religion"
//           value={formData.religion}
//           onChange={handleChange}
//         >
//           <option value={Religion.Christian}>Christian</option>
//           <option value="Islam">Islam</option>
//           <option value="Hinduism">Hinduism</option>
//           <option value="Judaism">Judaism</option>
//           <option value="Others">Others</option>
//         </select>

//         <label htmlFor="description">Description</label>
//         <textarea
//           id="description"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         ></textarea>

//         <button type="submit" disabled={loading}>
//           {loading ? "Creating..." : "Create Profile"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateProfile;
