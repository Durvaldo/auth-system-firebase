import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { user, googleSignIn, logOut } = UserAuth()
    const [loading, setLoading]  = useState(true)

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.error(error);
        }
    };

    const getFirstName = name => {
        return name.split(" ")[0]
    }

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const checkAuthentification = async () => {
            await new Promise(resolve => setTimeout(resolve, 500))
            setLoading(false)
        }
        checkAuthentification()
    }, [user])

    return (
        <nav className="h-20 w-full border-b-2 flex items-center justify-between p-2">
            <ul className="flex">
                <li className="p-2 cursor-pointer">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-2 cursor-pointer">
                    <Link href="/about">About</Link>
                </li>
                <li className="p-2 cursor-pointer">
                    <Link href="/profile">Profile</Link>
                </li>
            </ul>
            {loading ? null : !user ? (
                <ul className="flex">
                    <li onClick={handleSignIn} className="p-2 cursor-pointer">
                        Login
                    </li>
                    <li onClick={handleSignIn} className="p-2 cursor-pointer">
                        Sign up
                    </li>
                </ul>
            ) : (
                <div>
                    <p>
                        Welcome! {getFirstName(user.displayName)}
                    </p>
                    <p onClick={handleSignOut} className="cursor-pointer text-right">
                        Logout
                    </p>
                </div>
            )}

        </nav>
    );
}
