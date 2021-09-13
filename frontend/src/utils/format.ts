<<<<<<< HEAD
import { format } from 'date-fns';

=======
>>>>>>> d083155cd1fa8488ad8927d16f9e223e60b277e7
export const round = (value: number, precision: number) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
<<<<<<< HEAD

export const formatLocalDate = (date: string, pattern: string) => {
    const dt = new Date(date);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    return format(dtDateOnly, pattern);
}

=======
>>>>>>> d083155cd1fa8488ad8927d16f9e223e60b277e7
