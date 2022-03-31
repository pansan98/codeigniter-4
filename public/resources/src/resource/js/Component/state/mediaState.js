import State from './state';

export default class mediaState extends State {
    uploaded = 'uploaded';
    uploading = 'uploading';
    error = 'error';

    constructor(uniqid)
    {
        super(uniqid);
    }

    uploaded()
    {
        this.state = this.uploaded;
    }

    uploadig()
    {
        this.state = this.uploaded;
    }

    error()
    {
        this.state = 'error';
    }
}