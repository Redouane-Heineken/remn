import React from 'react'

const Filter = ({ handleNameSearch }) => {
    return (
        <form>
			filter shown with <input onKeyUp={handleNameSearch}></input>
		</form>
    )
}

export default Filter