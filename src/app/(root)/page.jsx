import Home from '@/components/Home'
import React from 'react'

function ProtectedPage() {
    return (
        <div className='flex flex-1'>
            <Home/>
        </div>
    )
}

export default ProtectedPage