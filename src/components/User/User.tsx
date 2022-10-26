import React from "react";
import { ReactComponent as Hemplet } from '../../assets/helmet.svg';
import { IUser } from "../../types/IUser";
import './User.css';

const User = ({ user }: { user: IUser }) => (<div className="user">
    <Hemplet className="svg" />
    <div className="information">
        <div className="name">
            {user.name}
        </div>
        <div className="time-speed">
            <div className="time">
                {user.time}
            </div>
            <div className="time">
                {user.speed}
            </div>
        </div>
    </div>
</div>);

export default User;