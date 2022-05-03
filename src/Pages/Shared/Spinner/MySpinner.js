import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const MySpinner = () => {
    return (
        <div className='text-center my-5'>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className='me-3'
                />
                Loading...
            </Button>
        </div>
    );
};

export default MySpinner;