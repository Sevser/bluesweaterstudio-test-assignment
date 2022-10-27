import React, { UIEvent, useEffect, useRef, useState } from "react";
import { IUser } from "../../types/IUser";
import { generate50Users } from "../../utills/userGenerator";
import User from "../User/User";
import './UserList.css';

const ANIMATION_TIME = 2000;

const UserList = () => {
    const [userList, setUserList] = useState<IUser[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [baseWidth, setBaseWidth] = useState(40);
    const [percent, setPercent] = useState(0);
    const requestRef = useRef<number>();
    const previousTimeRef = useRef<number>();

    const onScroll = (e: UIEvent<HTMLDivElement>) => {
        if (e && e.target !== null) {
            const target = e.target as HTMLElement;
            const toBottom = target.scrollHeight - (target.scrollTop + target.clientHeight);
            if (toBottom < 400) {
                if (!isFetching) {
                    setIsFetching(true);
                    generate50Users()
                        .then((users) => {
                            setUserList((ul: IUser[]) => {
                                const ret = ul.concat(users);
                                if (Math.floor(Math.log10(ret.length) - Math.floor(Math.log10(ul.length))) === 1) {
                                    setIsAnimating(true);
                                }
                                return ret;
                            });
                            setIsFetching(false);
                        });
                }
            }
        }
    };

    const animate = () => {
        console.log('animate');
        if (previousTimeRef.current !== undefined) {
            const now = (new Date()).getTime();
            const currPercent = (now - previousTimeRef.current) / ANIMATION_TIME;
            if (currPercent < 1) {
                setPercent(Math.floor(currPercent * 100));
                setTimeout(() => {
                    requestRef.current = requestAnimationFrame(animate);
                }, 50);
            } else {
                setPercent(100);
                setIsAnimating(false);
                cancelAnimationFrame(requestRef.current as number);
                setBaseWidth(bw => bw + 10);
            }
        }
    }

    useEffect(() => {
        if (!isFetching) {
            setIsFetching(true);
            generate50Users()
                .then((users) => {
                    setUserList((ul: IUser[]) => ul.concat(users));
                    setIsFetching(false);
                });
        }
    }, []);

    useEffect(() => {
        if (isAnimating) {
            previousTimeRef.current = (new Date()).getTime();
            requestRef.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestRef.current as number);
        }
    }, [isAnimating]);

    return (<div className="user-list" onScroll={onScroll} style={{ gridTemplateColumns: `${isAnimating ?  baseWidth + (percent / 100) * 10 : baseWidth}px calc(240px + 0.5rem)` }}>
        {userList && userList.map((user, index) => ([
            <div key={user.name + 'index'} className="user-index">
                {index + 1}
            </div>,
            <User key={user.name + 'user'} user={user} />
        ]))}
    </div>);
};

export default UserList;