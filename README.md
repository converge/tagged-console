# Tagged Console

## Purpose

This package offers only single class that wraps `console` compliant logger and logs all statements with a given tag.

More documentation will follow. For now, please read example use case:

## Code examples

Examples are at: `src/examples/`

run it: `npx ts-node src/examples/basic.ts`

## Methods

Currently, it offers following methods:  

- log
- warn
- error
- dispatchLog(method, msg) (which evaluates to console[method](taggedMessage))

## Status
This module is production ready.

## Contributing

This is a fork from [Tagged-Console](https://github.com/sznowicki/tagged-console)
