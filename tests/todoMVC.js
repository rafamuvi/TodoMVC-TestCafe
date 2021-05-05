import todopage from './pages/TodoPage';


fixture("Todo MVC Fixture")
    .page(todopage.URL);

test("Create Todo Test", async t => {
    await t
        await todopage.newTodo();
});

test('Create 10 todos', async t => {
    await t
        await todopage.createTodos(10);
        await t
            .expect(todopage.listLength.count).eql(10);
});