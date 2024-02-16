// added helpers from mini project to format date.
module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
};
