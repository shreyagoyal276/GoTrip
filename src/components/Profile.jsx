import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "./Profile.css";

function Profile() {
  const user = auth.currentUser;

  const [image, setImage] = useState(null);

  //  Load image with priority
  useEffect(() => {
    const localImage = localStorage.getItem("profilePic");

    if (user?.photoURL) {
      setImage(user.photoURL); //  Google image
    } else if (localImage) {
      setImage(localImage); //  Uploaded image
    } else {
      setImage("https://cdn-icons-png.flaticon.com/512/149/149071.png"); //  Default
    }
  }, [user]);

  //  Logout
  const handleLogout = async () => {
    await signOut(auth);
  };

  //  Upload image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      localStorage.setItem("profilePic", reader.result);
    };

    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        <h2>My Profile</h2>

        {/*  PROFILE IMAGE */}
        <img
          src={image}
          alt="profile"
          className="profile-img"
        />

        {/* Upload */}
        <label className="upload-btn">
          Upload Profile Picture
          <input type="file" onChange={handleImageUpload} hidden />
        </label>

        {/*  USER INFO */}
        <p>
          <strong>Name:</strong>{" "}
          {user?.displayName || "No Name Provided"}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {user?.email || "No Email"}
        </p>

        {/*  LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;
