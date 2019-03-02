import React from 'react';

const IFrame = (props={
    allow: ['accelerometer', 'autoplay', 'encrypted-media', 'gyroscope', 'picture-in-picture'].join('; '),
    allowFullScreen: false,
    allowpaymentrequest: false,
    csp: null,
    // src: '',
    // width: 560,
    // height: 315,
    name: 'iframe',
    referrerpolicy: '',
}) => {
    return (
<iframe 
    title={props.name}
    // width={props.width} 
    // height={props.height} 
    src={props.src} 
    allow={props.allow} 
    allowFullScreen={props.allowFullScreen} 
></iframe>
    )
}

export default IFrame;
