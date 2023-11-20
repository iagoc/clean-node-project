# Clean Architecture

### Single Resposibility Principle
**Each module or function should have a single responsibility.
This helps in creating a codebase that is easy to understand and maintain.**

### TDD
TDD stands for Test-Driven Development.
It is a software development methodology or approach that emphasizes writing tests before writing the actual code. 

## Dependency Injection - DI
In Clean Architecture, dependencies are injected, which means the higher-level modules should depend on lower-level modules. 
This ensures that the business logic is not coupled with the infrastructure details.

## Hooks and CI


## Validator.js
A lib of string validators and sanitizers.

## Tests 
It's not necessary to test the libs, so we can create a mock file to simulate the return of the lib method, using it in the test.