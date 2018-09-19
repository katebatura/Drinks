const drinkStorage = new HashStorage();
function addDrink() {
    let drinkName = prompt('Введите название напитка'),
          hasAlco = confirm('Этот напиток алкогольный?'),
          recipe = prompt('Введите рецепт приготовления');
    hasAlco ? hasAlco = 'да' : hasAlco = 'нет';   
    let value = `алкогольный: ${hasAlco}
рецепт приготовления: ${recipe}`;
    if (drinkStorage.checkValue(drinkName)) {
        if (confirm('Такой напиток уже есть в базе. Заменить его значение?')) {
        drinkStorage.addValue(drinkName,value)
        };
    } else {
            drinkStorage.addValue(drinkName,value)
    }
    
}
function getInfo() {
    let drinkName = prompt('Введите название напитка');
    console.log(`напиток ${drinkName}
${drinkStorage.getValue(drinkName)}`);  
}
    
function deleteDrink() {
    let drinkName = prompt('Введите название напитка');
    if (drinkStorage.deleteValue(drinkName)) {
        console.log(`Информация о напитке ${drinkName} удалена`);
    } else {
        console.log(`нет информации о напитке ${drinkName}`);
    };
}
function listDrinks() {
    drinkStorage.getKeys();
}