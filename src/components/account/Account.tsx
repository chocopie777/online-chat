import { Button } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Account = () => {
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth();
    const navigate = useNavigate();
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
                navigate('/auth');
            }
        });
        return () => {
            listen();
        }
    }, [user]);

    const userSignOut = () => {
        signOut(auth)
            .then(() => console.log("success"))
            .catch(e => console.log(e));
    }
    return (
        <>
            <div>Account</div>
            <div>
                {user && (
                    <>
                        <p>{user.email}</p>
                        <Button variant="outlined" onClick={userSignOut}>Выйти</Button>
                    </>
                )}
            </div>
        </>
    )
}
