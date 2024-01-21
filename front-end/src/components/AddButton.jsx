export default function AddButton(props) {

    function incrementCounter() {
        console.log(props.date);
    }

    return (
        <div>
            <button onClick={incrementCounter()}>
                {/* <img href="/images/add-button.png" alt="Add button" width={20}></img> */}
                I drank a cup of water!
            </button>
            
        </div>
    )
} 