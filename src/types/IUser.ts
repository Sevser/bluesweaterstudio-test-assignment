import { Color } from "./color";

export interface IUser {
    // Любимый цвет
    color: Color;
    // Полное имя
    name: string;
    // Скорость выполнения заезда
    speed: number;
    // Время заезда. Выражено в миллисекундах
    time: number;
}