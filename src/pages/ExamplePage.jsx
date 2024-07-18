import React, { useEffect } from 'react';
import ExampleService from '../services/ExampleService';

const ExamplePage = () => {

    useEffect(() => {
        getData('account');
        createData('account');
    }, []);

    const getData = async (collection) => {
        const exampleService = new ExampleService(collection);
        const data = await exampleService.getExampleWithRefs();
        console.log(data);
    }

    const createData = async (collection) => {
        /*const exampleService = new ExampleService(collection);
        const data = {
            no: 'ACC02',
            user_ref: '/user/z1YPriwxuAQLMAtpTa5Z',
            group_ref: '/group/wAxfGKYrjkUjMPZGZdqB'
        };
        const result = await exampleService.createExampleWithRefs(data);
        console.log(result);*/
    }

    return (
        <div>
            <div>
                <h1>Example</h1>
            </div>
        </div>
    );
};

export default ExamplePage;