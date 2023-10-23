import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with google...!", error);
    }
  };
  return (
    <>
      <p className="flex flex-wrap justify-center items-center p-5">
        <hr className="w-32 h-0.5 bg-gray-950 mr-6" /> OR
        <hr className="w-32 h-0.5 bg-gray-950 ml-6 first-letter" />
      </p>
      <button
        onClick={handleGoogleClick}
        type="button"
        className="flex justify-center items-center p-3 bg-white rounded-lg border border-gray-300 hover:bg-slate-50"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google-icon"
          className="w-6 h-6 mr-4"
        />
        <span>Continue with Google</span>
      </button>
    </>
    // <button
    //   onClick={handleGoogleClick}
    //   type="button"
    //   className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    // >
    //   Continue with google
    // </button>
  );
}
