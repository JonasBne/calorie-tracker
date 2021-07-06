// Item controller
const ItemCtrl = (function () {
    // Private variables & methods

    // Item constructor
    const _Item = function NewItem (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data structure (state)
    const _data = {
        items: [
            {id: 0, name: "steak Dinner", calories: 1200},
            {id: 0, name: "Cookie", calories: 400},
            {id: 0, name: "Pasta Pesto", calories: 950}
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Public variables & methods

    // Method to return data
    return {
        getItems: function () {
            return _data.items;
        },
        logData: function () {
            return _data;
        }
    }
})();


// UI controller
const UICtrl = (function () {
})();


// App controller
const AppCtrl = (function (ItemCtrl, UICtrl) {

    // Public variables & methods
    return {
        init: function () {
            console.log("Initializing app...");

            // Load different items
            const items = ItemCtrl.getItems();
            console.log(items)
        }
    }
})(ItemCtrl, UICtrl);


// Export modules
export {AppCtrl};