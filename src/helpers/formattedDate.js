import { format } from 'date-fns';

const formattedDate = date => format(date, "yyyy-MM-dd'T'HH:mm:ss");

export default formattedDate
