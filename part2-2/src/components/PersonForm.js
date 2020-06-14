import React from 'react'

const PersonFrom = ({ onEventsHadlers, values }) => {
    return (
        <form onSubmit={onEventsHadlers.addNameAndNumber}>
            <div>
                name: <input value={values.newName} onChange={onEventsHadlers.handleNameChange}/>
            </div>
            <div>
                number: <input value={values.newNumber} onChange={onEventsHadlers.handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonFrom