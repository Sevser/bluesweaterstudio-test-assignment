import React, { useState, useRef } from "react";
import { Avatar } from "@mui/material";
import { ReactComponent as Hemplet } from '../../assets/helmet.svg';
import { Color } from "../../types/color";
import { IUser } from "../../types/IUser";
import { formatRaceTime } from "../../utills/formatRaceTime";
import './User.css';


const User = ({ user }: { user: IUser }) => {
    const [active, setActive] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setActive(() => false);
            document.removeEventListener('click', handleClickOutside, true);
        }
    };

    const handleClick = () => {
        if (!active) {
            setActive(() => true);
            document.addEventListener('click', handleClickOutside, true);
        }
    };

    return (<div className="user" onClick={handleClick}>
        <Avatar alt="Cindy Baker" className={active ? 'active' : ''} ref={ref}>
            <Hemplet className="svg" color={Color[user.color]} />
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
    </div>)
};

export default User;