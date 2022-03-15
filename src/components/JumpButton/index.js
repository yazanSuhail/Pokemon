import React from 'react'

export default function JumpButtons({ prevPage, nextPage }) {
    return (
        <>
            {prevPage && <button onClick={prevPage}>previous</button>}
            {nextPage && <button onClick={nextPage}>Next</button>}
        </>
    )
}
