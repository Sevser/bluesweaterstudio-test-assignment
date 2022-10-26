import { IUser } from "../types/IUser";
import { faker } from "@faker-js/faker";
import randomEnum from "./randomEnum";
import { Color } from "../types/color";

export const generate50Users = (length = 50): Promise<Array<IUser>> => new Promise((resolve) => {
    setTimeout(() => {
        resolve(Array.apply(null, Array(length)).map((x, i) => ({
            color: randomEnum(Color),
            name: faker.name.fullName(),
            speed: Math.floor(Math.random() * 100),
            time: Math.floor(Math.random() * 100000),
        })));
    }, 250);
});