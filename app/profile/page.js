'use client'
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

export default function Profile() {
    const { user } = UserAuth();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkAuthentification = async () => {
            await new Promise(resolve => setTimeout(resolve, 500))
            setLoading(false)
        }
        checkAuthentification()
    }, [user])

    return (
        <div className="p-4">
            {loading ? (<p>Loading...</p>) : user ? (
                <div>
                    <p>Welcome! {user.displayName}</p>
                </div>
            ) : (
                <div>
                    <p>You must be logged in to view this page - protected route!</p>
                </div>
            )}

        </div>
    )
}
