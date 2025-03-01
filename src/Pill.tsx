import React, { ReactNode } from 'react';
import './styles/index.css'

interface PillProperties {
    children: ReactNode;
}

const Pill: React.FC<PillProperties> = ({children}) => {
    return (
        <div className='task-pill'>
            {children}
        </div>
    )
}

export default Pill;