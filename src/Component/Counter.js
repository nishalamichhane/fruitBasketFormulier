function Counter({fruitName, type, decrement, className,increment, fruitValue, isDisabled}) {
    return (
        <div >
            <h2>{fruitName}</h2>
            <button
            type={type}
            className={className}
            onClick= {decrement}
            disabled={isDisabled}
        >-</button>{fruitValue}
            <button
                type={type}
                className={className}
                onClick={increment}
            >+</button>
        </div>
    );
}
export default Counter;