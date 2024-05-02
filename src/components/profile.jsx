import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {GoPerson} from "react-icons/go";

export  default function Profile() {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className={"absolute top-2 left-2 flex flex-row items-center"}>
                <img src={user.picture} alt={user.name} className={"rounded-full w-8"} />
                <div className={"text-xs ml-2"}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            </div>
        )
    );
};
