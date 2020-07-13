import {TaggedConsole} from '../index';

describe('TaggedConsole', () => {

    let loggerSpy: any;
    loggerSpy = {
        log: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
    };

    describe('Init', () => {
        it('Should instantiate', () => {
            const instance = new TaggedConsole('TEST');
            expect(typeof instance).toBe('object');
            expect(instance.name).toBe('TEST');
            expect(instance.logger).toBe(console);
        });
    });

    describe('Functional', () => {
        it('Should instantiate', () => {
            const instance = new TaggedConsole('TEST', true);
            expect(typeof instance).toBe('object');
            expect(instance.name).toBe('TEST');
        });
    });

    describe('Log message types', () => {

        let instance: TaggedConsole;

        beforeAll( () => {
            instance = new TaggedConsole('TEST', true);

        });

        it('Should send Log', () => {
            instance['log']('test message');
            loggerSpy['log']('test message')
            expect(loggerSpy['log']).toHaveBeenCalledTimes(1)
            expect(loggerSpy['log']).toHaveBeenCalledWith('test message');
        });

        it('Should send Warn', () => {
            instance['warn']('test message');
            loggerSpy['warn']('test message');
            expect(loggerSpy['warn']).toHaveBeenCalledTimes(1)
            expect(loggerSpy['warn']).toHaveBeenCalledWith('test message');
        });

        it('Should send Error', () => {
            instance['error']('test message');
            loggerSpy['error']('test message');
            expect(loggerSpy['error']).toHaveBeenCalledTimes(1)
            expect(loggerSpy['error']).toHaveBeenCalledWith('test message');
        });
    });
});
