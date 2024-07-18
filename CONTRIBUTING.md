## Test standards and conventions

- Use the AAA pattern.
- Naming conventions for tests are Given When Then.
- Single responsibility - when a test fails it should fail for one reason and one reason only.
- Use the POM pattern.
- Prefix private class members with an underscore as a standard.
- To keep the object repositories (page object classes) compact, use arrow functions with implicit returns. 
- Selectors should live in the object repository and nowhere else
- Pages should serve as a passthrough for objects, dont interact with objects or elements directly from within the tests