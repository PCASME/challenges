export class FormService {
    public static Save(data: any) {
        return new Promise<any>((resolve, reject) => {
            fetch('http://example.com/api/form/save', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data),
            }).then(async response => {
                if (response.ok) {
                    resolve(await response.json());
                }
            }).catch(error => {
                reject(error);
            });
        });
    }
}
