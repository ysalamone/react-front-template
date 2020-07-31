import React from 'react';

interface IProps {
    type?: string
}

const IconStar = ({ type }: IProps): JSX.Element => {
    const translation = type === 'empty' ? -110 : type === 'half' ? -50 : 0;
    return (
        <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">

            <clipPath id="myClip">
                <path d="M20.9492 31.3004L33.3092 38.8471L30.0292 24.6236L40.9492 15.0536L26.5692 13.8195L20.9492 0.405273L15.3292 13.8195L0.949158 15.0536L11.8692 24.6236L8.58916 38.8471L20.9492 31.3004Z"
                    fill="#ededed" />
            </clipPath>
            <g
                d="M20.9492 31.3004L33.3092 38.8471L30.0292 24.6236L40.9492 15.0536L26.5692 13.8195L20.9492 0.405273L15.3292 13.8195L0.949158 15.0536L11.8692 24.6236L8.58916 38.8471L20.9492 31.3004Z"
                width="41"
                height="39"
                style={{ overflow: 'hidden' }}
                clipPath="url(#myClip)"
            >
                <path d="M20.9492 31.3004L33.3092 38.8471L30.0292 24.6236L40.9492 15.0536L26.5692 13.8195L20.9492 0.405273L15.3292 13.8195L0.949158 15.0536L11.8692 24.6236L8.58916 38.8471L20.9492 31.3004Z"
                    fill="#ededed" />
                <rect
                    x='0'
                    y='0'
                    width='41'
                    height='39'
                    fill='#BB8F29'
                    style={{
                        transform: `translateX(${translation}%)`
                    }}
                />
            </g>
        </svg >
    );
};

export default IconStar;