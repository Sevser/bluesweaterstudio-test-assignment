import { Color } from "./color";

export interface User {
    // Любимый цвет
    color: Color;
    // Полное имя
    name: string;
    // Скорость выполнения заезда
    speed: number;
    // Время заезда. Выражено в миллисекундах
    time: number;
}