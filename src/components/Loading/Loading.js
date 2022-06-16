import React from 'react';
import './Loading.css'
import gif from '../../assets/loading.gif'
import { BeatLoader, BounceLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='loading-container'>
            <BeatLoader size={50} color='orange'></BeatLoader>
        </div>
    );
};

export default Loading;