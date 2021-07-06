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
            {id: 0, name: "Steak Dinner", calories: 1200},
            {id: 1, name: "Cookie", calories: 400},
            {id: 2, name: "Pasta Pesto", calories: 950}
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Public variables & methods

    return {
        addItem: function (name, calories) {
            let id = 0;

            // Create and auto increment id
            if (_data.items.length > 0) {
                const highestId = _data.items.length;
                id = highestId + 1;
          }

            // Calories to number
            calories = parseInt(calories);

            // Create new item
            const newItem = new _Item(id, name, calories)

            // Push item to array
            _data.items.push(newItem);

            return newItem;

        },
        getItems: function () {
            return _data.items;
        },
        logData: function () {
            return _data;
        },
        items: _data
    }
})();


// UI controller
const UICtrl = (function () {
    // Private variables & methods
    const _UISelectors = {
        itemList: document.getElementById("item-list"),
        addBtn: document.querySelector(".add-btn"),
        itemNameInput: document.getElementById("item-name"),
        itemCaloriesInput: document.getElementById("item-calories")

    }

    // Public variables & methods
    return {
        getSelectors: function () {
          return _UISelectors;
        },
        populateItemList: function (items) {
            let html;

            // Dynamically generate & append list items to html variable
            items.forEach(item => {
                html +=
                `<li class="collection-item" id="item-${item.id}">
                    ${item.name}: ${item.calories}
                    <a href="#" class="secondary-content">
                        <i class="fa fa-edit"></i>
                    </a>
                </li>`;
            })

            // Insert into DOM
            _UISelectors.itemList.innerHTML = html;
        },
        getItemInput: function () {
            return {
                name: _UISelectors.itemNameInput.value,
                calories: _UISelectors.itemCaloriesInput.value
            }
        }
    }

})();


// App controller
const AppCtrl = (function (ItemCtrl, UICtrl) {
    // Private variables & methods

    // Load event listeners
    const _loadEventListeners = function () {
        // Get UI Selectors
        const _UISelectors = UICtrl.getSelectors();

        // Add click event
        _UISelectors.addBtn.addEventListener("click", itemAddSubmit);
    }

    // Add item submit
     const itemAddSubmit = function (e) {
        // Get form input from UI controller
         const input = UICtrl.getItemInput();

         // Check for name and calorie input
         if (input.name !== "" && input.calories !== "") {
             // Add item
             const newItem = ItemCtrl.addItem(input.name, input.calories);

         } else {
             alert("Fill in all fields before submitting!")
         }

        // Prevent page reloading
         e.preventDefault();

     }

    // Public variables & methods
    return {
        init: function () {
            console.log("Initializing app...");

            // Fetch different items from data structure
            const items = ItemCtrl.getItems();

            // Populate list with items, pass in public variable items declared in ItemCtrl
            UICtrl.populateItemList(items);

            // Load event listeners
            _loadEventListeners()



        }
    }
})(ItemCtrl, UICtrl);


// Export modules
export {AppCtrl};