import React, { useEffect, useState } from "react";
import { IUser } from "../../types/IUser";
import { generate50Users } from "../../utills/userGenerator";
import User from "../User/User";

const UserList = () => {
    const [userList, setUserList] = useState<IUser[]>([]);

    useEffect(() => {
        generate50Users()
            .then((users) => {
                setUserList((ul: IUser[]) => ul.concat(users));
            });
    }, []);

    return (<div className="user-list">
        {userList && userList.map((user, index) => <div key={user.name} className="user-list-item">
            <div className="user-index">
                {index}
            </div>
            <User user={user} />
        </div>)}
    </div>);
};

export default UserList;