export class TaggedConsole {

    name: string;
    logger: Console;
    displayDateTime = false;

    constructor(name: string, displayDateTime: boolean = true, { logger = console } = {}) {
        this.name = name;
        this.logger = logger;
        this.displayDateTime = displayDateTime;
    }

    dispatchLog(method: keyof Console , msg: string) {
        (this.displayDateTime) ?
            this.logger[method](`${new Date().toLocaleString()} - [${this.name}]: ${msg}`) :
            this.logger[method](`[${this.name}]: ${msg}`)
    }

    log(msg: string) {
        this.dispatchLog('log', msg);
    }

    warn(msg: string) {
        this.dispatchLog('warn', msg);
    }

    error(msg: string) {
        this.dispatchLog('error', msg);
    }
}
