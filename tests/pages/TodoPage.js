import { Selector, t } from 'testcafe';

class TodoPage {
    constructor() {
        this.URL = 'https://todomvc.com/examples/vanillajs/#/';
        this.inputTodo = Selector('input.new-todo');

        this.toggleAll = Selector('#toggle-all');

        this.item = Selector((x) => {
            return document.querySelector('ul.todo-list > li:nth-child(' + x + ')');
        });

        this.selectItem = Selector((x) => {
            return document.querySelector('ul.todo-list > li:nth-child(' + x + ') input.toggle');
        });

        this.deleteItem = Selector((x) => {
            return document.querySelector('ul.todo-list > li:nth-child(' + x + ') button.destroy');
        });

        this.filter = Selector((x) => {
            return document.querySelector('ul.filters > li:nth-child(' + x + ')');
        });

        this.clearCompleted = Selector('button.clear-completed');
        
        // You need to use .count when you summon it
        this.listLength = Selector(() => {
            return document.querySelectorAll('ul.todo-list li');
        });

    }

    // Generates random number
    async getRandomInt(x) {
        return Math.floor(Math.random() * x);
    };

    // Gets a random number    
    async getRandomItemIndex() {
        max = this.listLength.count;
        if (max == 0) {
            return 0;
        };
        x = this.getRandomInt(max) + 1;
        return x;
    };

    // Create new todo
    async newTodo() {
        await t
            .click(this.inputTodo)
            .typeText(this.inputTodo, 'Todo ' + await this.getRandomInt(1000))
            .pressKey('enter');
    };

    // Amend an existing todo
    async amendTodo(x) {
        if (x > 0) {
            await t
                .doubleClick(this.item(x))
                .pressKey('ctrl+a')
                .typeText(this.item(x), 'Amend ' + await this.getRandomInt(1000))
                .pressKey('enter');
        };
    };

    // Create how many todos you want
    async createTodos(x) {
        for (var i = 0; i < x; i++) {
            await this.newTodo();
        };
    };


}

export default new TodoPage();