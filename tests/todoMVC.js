import todopage from './pages/TodoPage';


fixture("Todo MVC Fixture")
    .page(todopage.URL);

test("Create a todo", async t => {

    await todopage.newTodo();
    await t
        .expect(todopage.listLength.count).eql(1);

});

test('Create a todo and delete it', async t => {

    await todopage.newTodo();
    await t
        .expect(todopage.listLength.count).eql(1)
        .hover(todopage.item(1))
        .click(todopage.deleteItem(1))
        .expect(todopage.listLength.count).eql(0);

});

test('Create a todo and amend it', async t => {

    await todopage.newTodo();
    await t
        .expect(todopage.listLength.count).eql(1);
    await todopage.amendTodo(1);

});

test('Create 10 todos', async t => {

    await todopage.createTodos(10);
    await t
        .expect(todopage.listLength.count).eql(10);

});

test('Create 10 todos and delete one by one', async t => {

    await todopage.createTodos(10);
    await t
        .expect(todopage.listLength.count).eql(10)
    for (var i = 10; i > 0; i--) {
        await t
            .hover(todopage.item(i))
            .click(todopage.deleteItem(i));
    };
    await t
        .expect(todopage.listLength.count).eql(0);

});

test('Create 10 todos and amend then', async t => {

    await todopage.createTodos(10);
    await t
        .expect(todopage.listLength.count).eql(10)
    for (var i = 10; i > 0; i--) {
        await todopage.amendTodo(i);
    };

});