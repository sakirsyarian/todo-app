function Navbar({ searchTodo }) {
    return (
        <div className="navbar bg-base-100 p-5 shadow">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">TODO</a>
            </div>
            <div className="form-control">
                <input onChange={(e) => searchTodo(e.target.value)} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
        </div>
    )
}

export default Navbar