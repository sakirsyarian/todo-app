import { useRef } from 'react';
import Trash from '@assets/Trash'

function Card({ todo, deleteTodo }) {
    const bgRef = useRef(null);
    const checkRef = useRef(null);

    function handlerCheck() {
        bgRef.current.classList.toggle('bg-gray-50');
        checkRef.current.classList.toggle('line-through');
        checkRef.current.classList.toggle('text-gray-400');
    }

    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body rounded-2xl" ref={bgRef}>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <input onClick={() => handlerCheck()} type="checkbox" className="checkbox " />
                        <p ref={checkRef} className='ml-3'>{todo.text}</p>
                    </div>
                    <Trash onClick={() => deleteTodo(todo.id)} />
                </div>
            </div>
        </div>
    )
}

export default Card