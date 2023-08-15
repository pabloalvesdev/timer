export const friendlyHour = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    let formattedTime = '';
    if (hours > 0) formattedTime += `${hours}h ${minutes}min`;
    if (minutes > 0) formattedTime += `${minutes}min`;
    if (seconds > 0) formattedTime += ` ${seconds}seg`;
    return formattedTime;
}