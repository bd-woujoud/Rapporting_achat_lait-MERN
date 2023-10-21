import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { SearchFerme } from '../features/Ferme/FermeSlice'

function SearshFerme() {
    const [searshferme, setseferm] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {

        let dat = {
            keyword:searshferme
        }
        dispatch(SearchFerme(dat))

    }, [searshferme])


    return (
        <div>

<div className="inbox-head" style={{backgroundColor:"white" }}>

<form action="#" className="position search_inbox" style={{marginLeft:"-20px" }}  >
<div className="input-append">
<input value={searshferme} onChange={(e) => setseferm(e.target.value)} type="text" className="sr-input" placeholder="Chercher ferme" style={{backgroundColor:"#f6f6f6" }} />px
<button className="btn sr-btn" type="button" style={{backgroundColor:"#1abc9c"}}><i className="fa fa-search" /></button>
</div>
</form>
</div>


        </div>
    )
}

export default SearshFerme