import React from "react";
import { IUser } from "../../types/User";
import User from "../User/User";

const userList = new Array<IUser>();

const UserList = () => (<div>
    {userList.map(user => <User key={user.name} user={user} />)}
</div>);

export default UserList;