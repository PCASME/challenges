import React from 'react';
import Form from './Form/Form';
import * as fetchMock from 'fetch-mock';
import { FormService } from '../../../services/FormServices';

export interface Props {
    onCancel?: (event: any) => void;
    onSave?: (data: any) => Promise<void>;
}

export interface State {
}

export class FormContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
        fetchMock.post(/.*api\/form\/save.*/, this.save);
    }

    save() {
        let result = true;
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                resolve(result);
                // reject("Error!");
            }, 2000);
        });
    }

    async onSave(data: any) {
        FormService.Save(data);
    }

    render() {
        return (
            <Form onSave={this.onSave.bind(this)} />
        );
    }
}