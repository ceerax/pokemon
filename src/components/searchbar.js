import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'




const Searchbar = (props) => {
    const { onSearch } = props
    const [search, setSearch] = useState("")



    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
            onSearch(null);
        }
    }

    const onClick = async (e) => {
        onSearch(search)
    }

    return (
        <div className='search-container row d-flex justify-content-end'>
            <div className='searchbar'>
                <div class="input-group mb-3">
                    <input type="text" class="form-control"
                        placeholder="Buscar pokemon..."
                        onChange={onChange}
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onClick={onClick} ><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Searchbar