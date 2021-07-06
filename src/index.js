// Import Materialize
import "materialize-css/dist/css/materialize.min.css";

// Import icons
import "@fortawesome/fontawesome-free/css/all.css";

// Import custom css
import "./css/custom.scss";

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
         logData: function () {
             return _data;
        }
    }

    // Method to return data
})();

// UI controller
const UICtrl = (function () {
})();

// App controller
const AppCtrl = (function (ItemCtrl, UICtrl) {
})(ItemCtrl, UICtrl);


