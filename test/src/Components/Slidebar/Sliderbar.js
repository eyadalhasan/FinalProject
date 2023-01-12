import React from 'react'
import './Slidebar.css'
import { categories } from '../../Utils/constants'
function Sliderbar(props) {

    return (
        <div className='Slidebar'>

            {categories.map((item, idx) => {
                return (
                    <button key={item.name} onClick={() => {
                        props.setSelectedCategory(item.name)
                    }} style={{background:item.name===props.selectedCategory?'red':'transparent'}}>
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </button>
                )
            })}

        </div>
    )
}

export default Sliderbar