import React from 'react'
import M from 'materialize-css'

export default function Typography() {
    return (
        <div>
            Typography
            <h1>Heading One</h1>
            <h2>Heading Two</h2>
            <h3>Heading Three</h3>
            <h4>Heading Four</h4>
            <h5>Heading Five</h5>
            <h6>Heading Six</h6>
            <blockquote>
                This is an example quotation that uses the blockquote tag.
            </blockquote>
            <div className='left-align'>Left aligned text</div>
            <div className='right-align'>Rifht aligned text</div>
            <div className='center-align'>Center aligned text</div>
            <div class="valign-wrapper">
                <h5>This should be vertically aligned</h5>
            </div>
        </div>
    )
}