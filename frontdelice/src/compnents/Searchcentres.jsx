import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { SearchCentre } from '../features/Centre/CentreSlice'

function Searchcentres() {
    const [SearshCentre, setsecentre] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {

        let dat = {
            keyword:SearshCentre
        }
        dispatch(SearchCentre(dat))

    }, [SearshCentre])


    return (
        <div>

<div className="inbox-head" style={{backgroundColor:"white" }}>

<form action="#" className="position search_inbox" style={{marginLeft:"-20px" }}  >
<div className="input-append">
<input value={SearshCentre} onChange={(e) => setsecentre(e.target.value)} type="text" className="sr-input" placeholder="Chercher centre" style={{backgroundColor:"#f6f6f6" }} />px
<button className="btn sr-btn" type="button" style={{backgroundColor:"#87CEEB"}}><i className="fa fa-search" /></button>
</div>
</form>
</div>


        </div>
    )
}

export default Searchcentres