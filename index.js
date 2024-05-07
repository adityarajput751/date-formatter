export const dateformatter = (date, formate) => {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const monthIndex = date.getMonth();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[monthIndex];
    const year = date.getFullYear();
    if (formate == 'dd/mm/yyyy') {
        return `${day}/${month}/${year}`
    } else if (formate == 'mm/dd/yyyy') {
        return `${month}/${day}/${year}`
    } else if (formate == 'yyyy/mm/dd') {
        return `${year}/${month}/${day}`
    } else if (formate == 'dd-mm-yyyy') {
        return `${day}-${month}-${year}`
    } else if (formate == 'mm-dd-yyyy') {
        return `${month}-${day}-${year}`
    } else if (formate == 'yyyy-mm-dd') {
        return `${year}-${month}-${day}`
    } else if (formate == 'dd-mmm-yyyy') {
        return `${day}-${monthName}-${year}`
    } else if (formate == 'mmm-dd-yyyy') {
        return `${monthName}-${day}-${year}`
    } else if (formate == 'yyyy-mmm-dd') {
        return `${year}-${monthName}-${day}`
    }
}
