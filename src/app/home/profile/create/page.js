'use client'

const CreateProfile = () => {

function handleChange(event) {
console.log(event.target.value)
}

function handleSubmit() {

}

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='create_username'>username</label>
            <input id='create_username'type='text'></input>
            <select onChange={handleChange} className="select w-full max-w-xs m-6">
                <option disabled>Pick your Goal</option>
                <option value="Typescript">TypeScript</option>
                <option value="Next.js">Next.js</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Supabase">Supabase</option>
            </select>
            <label>difficulty</label>
            <input type='text'></input>
            <button
                className="bg-byteDarkBlue active:bg-byteLightBlue uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                type="button"
                style={{ transition: "all 0.15s ease 0s" }}>
                easy (30 minutes)
            </button>
            <button
                className="bg-byteDarkBlue active:bg-byteLightBlue uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                type="button"
                style={{ transition: "all 0.15s ease 0s" }}>
                medium (45 minutes)
            </button>
            <button
                className="bg-byteDarkBlue active:bg-byteLightBlue uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                type="button"
                style={{ transition: "all 0.15s ease 0s" }}>
                hard (1 hour)
            </button>
        </form>
    )
}

export default CreateProfile;