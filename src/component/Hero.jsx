import { useRef } from 'react';

function Hero({ pushTodos }) {
    const inputTodo = useRef(null);

    function handlerSubmit(e) {
        e.preventDefault();

        pushTodos(inputTodo.current.value);
        inputTodo.current.value = '';
    }

    return (
        <div className="hero py-10">
            <div className="w-full hero-content text-center">
                <div className="w-full">
                    <h1 className="text-3xl font-bold">TODO APP</h1>
                    <form onSubmit={(e) => handlerSubmit(e)} className="py-10 flex justify-center">
                        <input ref={inputTodo} type="text" placeholder="Type todo..." className="input input-bordered w-full max-w-xs" />
                        <button className="btn ml-5">Start</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero