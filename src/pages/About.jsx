import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/b7bRN2L/pexels-monstera-production-5709009.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Welcome to</h1>
                        <h1 className="mb-5 text-5xl font-bold font-custom">Moment Bazz</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;