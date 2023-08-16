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

export const hexToRGBA = (hex: string, alpha: number = 1): string => {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex
        .split('')
        .map(char => char + char)
        .join('');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
  
    const formattedTime = {
      hour: hours < 10 ? `0${hours}` : `${hours}`,
      minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
      seconds: seconds < 10 ? `0${seconds}` : `${seconds}`
    };
  
    return formattedTime;
}