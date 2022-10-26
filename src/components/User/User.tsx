import React from "react";
import { Avatar } from "@mui/material";
import { ReactComponent as Hemplet } from '../../assets/helmet.svg';
import { Color } from "../../types/color";
import { IUser } from "../../types/IUser";
import { formatRaceTime } from "../../utills/formatRaceTime";
import './User.css';

const User = ({ user }: { user: IUser }) => (<div className="user">
    <Avatar alt="Cindy Baker">
        <Hemplet className="svg" color={Color[user.color]}/>
    </Avatar>
    <div className="information">
        <div className="name">
            {user.name}
        </div>
        <div className="time-speed">
            <div className="time">
                {formatRaceTime(user.time)}
            </div>
            <div className="speed">
                {user.speed} km/h
            </div>
        </div>
    </div>
</div>);

export default User;