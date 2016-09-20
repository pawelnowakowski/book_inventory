module.exports = function() {
    var items = [
        {
            isbn: "12563",
            count: "12"
        },
        {
            isbn: "125463",
            count: "13"
        },
        {
            isbn: "132423",
            count: "14"
        },
        {
            isbn: "18923",
            count: "15"
        },
        {
            isbn: "1623",
            count: "16"
        },
        {
            isbn: "123",
            count: "17"
        },
    ];

    return {
        _items: function(state) {
            items = state;
        },
        stockUp: function (isbn, count) {
            var updated = false;
            items.forEach(function(item) {
                if(item.isbn === isbn) {
                    item.count = count;
                    updated = true;
                }
            });
            if(!updated) {
                items.push({"isbn": isbn, "count": count});
            }
            return Promise.resolve();
        },
        findAll: function () {
            return Promise.resolve(items);
        },
        getCount: function (isbn) {
            var foundItemCount = null;
            items.forEach(function(item) {
                if(item.isbn === isbn) {
                    foundItemCount = item.count;
                }
            });
            return Promise.resolve({count: foundItemCount});
        }
    };
};