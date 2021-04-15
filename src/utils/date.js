/**
 * Objeto encargado de darle un formato estandar a las fechas
 */
const DateFormatter = {
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],

    /**
     * Retorna la fecha de hoy en formato dd/mm/yyyy hh:mm:ss am|pm
     * Ejemplo tomado de: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
     * @returns Fecha de hoy
     */
    getToday() {
        const today = new Date();

        // Consigue toda la información de la fecha actual
        const day = String(today.getDate()).padStart(2, '0');
        const month = this.months[today.getMonth()];
        const year = today.getFullYear();
        let hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        // Convierte las horas y revisa si es am o pm
        const am = hours < 12 ? 'a.m.': 'p.m.';
        hours = hours % 12;
        if (hours === 0) hours += 12;

        // Formatea la fecha
        const todayDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${am}`;
        return todayDate;
    }
}

module.exports = DateFormatter;

