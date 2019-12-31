import React from 'react';
import Female from '../toolbar/Female';


function RenderFemale(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "female" &&
            <Female
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
            />

        )))
}

export default RenderFemale;