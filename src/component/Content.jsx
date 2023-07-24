import Card from './Card'

function Content({ todos, deleteTodo }) {
    return (
        <div className="hero bg-gray-50 p-10">
            <div className="w-full hero-content">
                <div className="w-full grid gap-5">
                    {!todos.length ? (
                        <h1 className='uppercase font-medium text-md text-center text-gray-500'>Data not found!</h1>
                    ) : (
                        todos.map(todo => (
                            <Card key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Content