import { useEffect, useState } from "react";
import useAuth from "./../hooks/useAuth";
import getUserUtility from "../utilities/getUserUtility";

const useProfile = () => {
  const { user, token } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        setLoading(true);
        const profileData = await getUserUtility(token);
        setUsername(profileData.username);
        setEmail(profileData.email);
        setAvatar(profileData.avatar);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUserProfile();
  }, [token]);

  return { username, email, avatar, loading, errorMessage };
};

export default useProfile;
