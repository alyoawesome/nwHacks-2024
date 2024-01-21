export default function AddButton(props) {
    async function incrementCounter() {
        const dateKey = props.date;
        console.log(dateKey);

        try {
            const response = await fetch('/increment-water', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date: dateKey, userId: '12345' }),
            });

            const data = await response.json();
            console.log('Water incremented:', data);
        } catch (error) {
            console.error('Error incrementing water:', error);
        }
    }
    
    return (
        <div>
            <button onClick={incrementCounter}>
                I drank a cup of water!
            </button>
        </div>
    );
}
