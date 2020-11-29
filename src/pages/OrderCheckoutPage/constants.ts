import times from 'lodash/times';

const cardMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const currentYear = new Date().getFullYear();
const cardYears = times(10, (i) => i + currentYear);

export { cardMonths, cardYears };
