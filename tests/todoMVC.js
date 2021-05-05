import todopage from './pages/TodoPage';


fixture("Todo MVC Fixture")
    .page(todopage.URL);

test("Create Todo Test", async t => {
    await t
    await todopage.newTodo();
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
        for(var i = 10; i > 0; i--){
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
        for(var i = 10; i > 0; i--){
            await todopage.amendTodo(i);
        };

});