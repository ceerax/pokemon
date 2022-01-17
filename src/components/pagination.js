import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;
    return (
        <div className='row'>
            <div className=' d-flex align-items-center'>
                <button onClick={onLeftClick} className='btn  text-light'> <FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
                <div className='text-light'> <strong>{page} de {totalPages}</strong> </div>
                <button onClick={onRightClick} className='btn text-light '><FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
        </div>
    )
}

export default Pagination

