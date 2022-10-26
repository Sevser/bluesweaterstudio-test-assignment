import React from "react";
import { IUser } from "../../types/User";

const User = ({ user }: { user: IUser }) => (<div>
    {JSON.stringify(user)}
</div>);

export default User;