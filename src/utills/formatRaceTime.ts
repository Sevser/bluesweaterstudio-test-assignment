export const formatRaceTime = (num: number): string => {
    const min = (Math.floor(num / 1000 / 60)).toString().padStart(2, '0');
    const sec = (Math.floor(num / 1000)).toString().padStart(2, '0');
    const msec = Math.floor(num%1000);
    return `${min}:${sec}.${msec}`;
};