// src/components/ProfileForm.tsx
import { useState } from "react";

const ProfileForm = ({ onClose }: { onClose: () => void }) => {
  const [profileData, setProfileData] = useState({
    photo: "",
    religion: "",
    sex: "",
    occupation: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send profileData to the server
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input type="file" name="photo" onChange={handleChange} />
        <select name="religion" onChange={handleChange}>
          <option value="Christian">Christian</option>
          <option value="Islam">Islam</option>
          <option value="Buddha">Buddha</option>
          <option value="Grail Message">Grail Message</option>
        </select>
        <select name="sex" onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          minLength={10}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
