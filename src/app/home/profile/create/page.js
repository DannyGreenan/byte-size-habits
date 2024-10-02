'use client'

const CreateProfile = () => {

    return (
        <form>
            <label>username</label>
            <input type='text'></input>
            <select className="select w-full max-w-xs m-6">
                <option disabled>Pick your Goal</option>
                <option value="">TypeScript</option>
                <option value="">Next.js</option>
                <option value="">JavaScript</option>
                <option value="">Python</option>
                <option value="">Supabase</option>
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