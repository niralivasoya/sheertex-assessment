import React from 'react';

const InputField = ({ testId, placeholder, value, onChange }) => {
    return (
        <div className='inputWrapContainer'>
            <input data-testid={testId} type='text' placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default InputField;
