import React from 'react'
import { useEffect } from 'react'
import { SearchAchetteur } from '../features/Achetteur/AchetteurSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function Search() {



    const [search, setsearch] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {

        let dat = {
            keyword: search
        }
        dispatch(SearchAchetteur(dat))

    }, [search])


    return (
        <div>

            <div className="inbox-head" style={{ marginRight: "842!px" }}>

                <form action="#" className="pull-right position search_inbox">
                    <div className="input-append">
                        <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" className="sr-input" placeholder="Chercher Acheteur " />
                        <button className="btn sr-btn" type="button"><i className="fa fa-search" /></button>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default Search