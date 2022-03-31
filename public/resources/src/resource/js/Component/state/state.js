export default class State {
    state;
    uniqid;

    lock = 'lock';
    unlock = 'unclock';
    none = 'none';

    constructor(uniqid)
    {
        this.uniqid;
        this.state = this.none;
    }

    get()
    {
        return this.state;
    }

    uniqid()
    {
        return this.uniqid;
    }

    lock()
    {
        this.state = this.lock;
    }

    unlock()
    {
        this.state = this.unlock;
    }

    none()
    {
        this.state = this.none;
    }
}