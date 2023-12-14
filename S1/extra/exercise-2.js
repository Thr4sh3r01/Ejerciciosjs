const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for(let i = 0; i < fruits.length; i++){
    if (!foodSchedule[i].isVegan) {
        foodSchedule[i] = fruits.filter(fruit => !foodSchedule.some(food => food.name === fruit))[0];   
    }
}