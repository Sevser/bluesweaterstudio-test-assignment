import { IUser } from "../types/IUser";
import { faker } from "@faker-js/faker";
import randomEnum from "./randomEnum";
import { Color } from "../types/color";

let generating: Promise<Array<IUser>> | null = null;

export const generate50Users = (length = 50): Promise<Array<IUser>> => {
    if (generating) {
        return generating;
    }
    generating = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Array.apply(null, Array(length)).map((x, i) => ({
                color: randomEnum(Color),
                name: faker.name.fullName().concat(faker.name.fullName()),
                speed: Math.floor(Math.random() * 100),
                time: Math.floor(Math.random() * 100000),
            })));
            generating = null;
        }, 250);
    });
    return generating;
};