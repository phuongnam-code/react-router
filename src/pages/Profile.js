import React from "react";
import { useParams } from "react-router-dom";
import withAuth from "../components/withAuth";

const Profile = () => {
    const { name } = useParams();
    return (
        <div>
            <h2>This is the Profile Page</h2>
            <article>
                <div>
                    <p>{name}</p>
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </article>
        </div>
    );
};

export default withAuth(Profile);
