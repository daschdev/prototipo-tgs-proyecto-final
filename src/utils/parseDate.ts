import { format } from 'date-fns';

type Fn = (date: Date) => string;

const parseDate: Fn = (date) => format(date, `dd-MM-yyyy hh:mm:ss a`);

export default parseDate;
