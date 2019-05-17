const moment = require('moment');

const parseDate = (date, showCount = false) => {
    const now = moment();

    const createdAt = moment(date);
    let dateString = 'today';

    const yesterday = moment().subtract(24, 'hours');
    const oneHrAgo = moment().subtract(1, 'hours');
    const weekAgo = moment().subtract(1, 'week');
    const monthAgo = moment().subtract(1, 'month');
    const yearAgo = moment().subtract(1, 'year');

    const isSameHour = createdAt.isBetween(oneHrAgo, now);
    const isToday = createdAt.isSame(now, 'day');
    const isYesterday = createdAt.isSame(yesterday, 'day');
    const isThisWeek = createdAt.isBetween(weekAgo, yesterday);
    const isThisMonth = createdAt.isBetween(monthAgo, weekAgo);
    const isThisYear = createdAt.isBetween(yearAgo, monthAgo);
    const isReallyOld = createdAt.isBefore(yearAgo);

    const makeSingular = (str, num) => (num > 1 ? str : str.slice(0, -1));
    const getDuration = asFunction =>
        Math.floor(moment.duration(now.diff(createdAt))[asFunction]());
    const parseDateIntoStringAs = (str, duration) => {
        return `${duration === 0 ? 1 : duration} ${makeSingular(
            str,
            duration
        )} ago`;
    };

    let msg;

    if (showCount === 'COUNT') {
        if (isToday && isSameHour) {
            const duration = getDuration('asMinutes');

            dateString = parseDateIntoStringAs('minutes', duration);
        } else if (isToday) {
            const duration = getDuration('asHours');

            dateString = dateString = parseDateIntoStringAs('hours', duration);
        } else if (isThisWeek) {
            const duration = getDuration('asDays');

            dateString = parseDateIntoStringAs('days', duration);
        } else if (isThisMonth) {
            const duration = getDuration('asWeeks');

            dateString = parseDateIntoStringAs('weeks', duration);
        } else if (isThisYear) {
            const duration = getDuration('asMonths');

            dateString = parseDateIntoStringAs('months', duration);
        } else if (isReallyOld) {
            const duration = getDuration('asYears');

            dateString = parseDateIntoStringAs('years', duration);
        }
        msg = `Last updated ${dateString}`;
    } else {
        if (isYesterday) {
            dateString = 'yesterday';
        } else if (isThisWeek) {
            dateString = createdAt.format('dddd');
        } else if (isThisMonth || isThisYear) {
            dateString = createdAt.format('MMMM Do');
        } else if (isReallyOld) {
            dateString = createdAt.format('MMMM Do, YYYY');
        }
        msg =
            isToday || isYesterday
                ? `Updated ${dateString}`
                : `Updated on ${dateString}`;
    }

    return msg;
};

module.exports = parseDate;
