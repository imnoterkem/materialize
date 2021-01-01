import React from 'react'

export default function Color() {

    let color=['red-text text-darken-2', 'blue-text', 'orange-text', 'green-text', 'yellow-text', 'purple-text', 
'pink-text', 'gray-text', 'brown-text']

    return (
        <div>
            <>
            {
                color.map(item=><div className={item}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>)
            }
            </>
        </div>
    )
}
