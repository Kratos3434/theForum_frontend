export const BASE_URL = "http://localhost:8080";



const monthToString = (month: number) => {
    switch (month) {
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
        default: return "";
    }
}

export const setJoinedDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${monthToString(month)} ${year}`;
}