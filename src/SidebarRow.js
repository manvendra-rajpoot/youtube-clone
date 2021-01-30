import React from 'react';
import './SidebarRow.css';

function SidebarRow({selected, Icon, title}) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className='sidebarRow__icon' />
            <h6 className='sidebarRow__title'>{title}</h6>
        </div>
    )
}

export default SidebarRow;
