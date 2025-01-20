const handlebars = require('handlebars');
module.exports = {

        sum: (a, b) => a + b,
        sortable : (field,sort) =>{
            const sortType = field === sort.column ? sort.type : 'default';

            const icons = {
                default: 'bi bi-filter-left',
                asc: 'bi bi-sort-alpha-up',
                desc: 'bi bi-sort-alpha-down',
            }; 
            const types = {
                default: 'asc',
                asc: 'desc',
                desc: 'asc',
            }
            const icon = icons[sortType];
            const type = types[sortType];
            const address = handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);
            const output=  `<a href="${address}"> <i class="${icon}"></i></a>`;
            return new handlebars.SafeString(output);
          }
}