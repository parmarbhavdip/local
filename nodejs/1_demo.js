function printDate()
{
    let current = new Date();
    let today = current.getDate() + "/" + (current.getMonth()+ 1) + "/" + current.getFullYear();
    console.log(today);
}
printDate();
