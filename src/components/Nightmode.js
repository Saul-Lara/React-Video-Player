import React from 'react';
import StyledNightmode from '../styles/StyledNightmode';

const Nightmode = ({ NightmodeCallback, Nightmode }) => (
    <StyledNightmode>
        <span>Nightmode: </span>
        <label className="switch">
            <input type="checkbox" checked={Nightmode} onChange={NightmodeCallback} />
            <span className="slider round" />
        </label>
    </StyledNightmode>

)

export default Nightmode;