import { Selector, t } from 'testcafe';

class TodoPage {
    constructor() {
        this.URL = 'https://todomvc.com/examples/vanillajs/#/';
        this.inputTodo = Selector('input.new-todo');

        this.toggleAll = Selector('#toggle-all');

        this.selectItem = function (x) {
            Selector('ul.todo-list > li:nth-child(' + x + ') input.toggle');
        };

        this.deleteItem = function (x) {
            Selector('ul.todo-list > li:nth-child(' + x + ') button.destroy');
        };

        this.filter = function (x) {
            Selector('ul.filters > li:nth-child(' + x + ')');
        };

        this.clearCompleted = Selector('button.clear-completed');

    }

    async newTodo() {
        randomNum = Math.floor(Math.random() * 100);
        await t
            .click(this.inputTodo)
            .typeText('Todo ' + randomNum)
            .pressKey('enter');
    };

    getRandomInt(x) {
        return Math.floor(Math.random() * x);
    };

    getRandomItemIndex(x) {
        max = document.querySelectorAll('ul.todo-list li').length;
        if(max == 0) {
            return 0;
        };
        x = this.getRandomInt(max) + 1;
        return x;
    };

    async amendTodo(x) {
        randomNum = Math.floor(Math.random() * 100);
        if(x > 0) {
            await t
                .doubleClick('ul.todo-list li:nth-child(' + x + ')')
                .pressKey('ctrl+a')
                .typeText('Amend ' + randomNum)
                .pressKey('enter');
        };
    };

}

export default new TodoPage();