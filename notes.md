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


## Domain
- The domain layer is the heart of the application, containing the business logic and rules. It should be independent of any external libraries or frameworks, making it easy to test and modify. The domain layer is the most critical part of the application, and any changes should be made with great care.

In Node.js, the domain layer can be implemented using classes or modules. Classes provide a clear separation of concerns, encapsulation, and reusability. Modules, on the other hand, provide a simpler approach to implement the domain layer.


## Presentation
- The presentation layer is responsible for displaying the output of the application to the user and handling user input. It should be decoupled from the application layer and the infrastructure layer. The presentation layer can be implemented using web frameworks like Express.js or Hapi.js.

In Node.js, the presentation layer can be implemented using web frameworks or modules. Web frameworks provide a powerful and flexible way to implement the presentation layer and host all logic together.

