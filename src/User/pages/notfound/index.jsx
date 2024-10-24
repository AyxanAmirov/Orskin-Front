import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { Button } from '@chakra-ui/react'
function NotFound() {
    return (
        <div id='notfound'>
            <div>404 NotFound</div>
            <Link to={"/"}>
                <Button   colorPalette="orange">
                    Back to Home
                </Button>
            </Link>
        </div>
    )
}

export default NotFound