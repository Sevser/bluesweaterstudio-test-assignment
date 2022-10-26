import React, { useEffect, useState } from "react";
import { IUser } from "../../types/IUser";
import { generate50Users } from "../../utills/userGenerator";
import User from "../User/User";
import './UserList.css';

const UserList = () => {
    const [userList, setUserList] = useState<IUser[]>([]);

    useEffect(() => {
        generate50Users()
            .then((users) => {
                setUserList((ul: IUser[]) => ul.concat(users));
            });
    }, []);

    return (<div className="user-list">
        {userList && userList.map((user, index) => ([
            <div key={user.name + 'index'} className="user-index">
                {index + 1}
            </div>,
            <User key={user.name + 'user'} user={user}/>
        ]))}
    </div>);
};

export default UserList;