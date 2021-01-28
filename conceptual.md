### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
RESTful routing is referring to the standard pattern and practices for creating and showing them.

- What is a resource?
A resource is an object type with associated relationship to data.  A resource that is returned from a http request that is usually JSON the developer can work with. 

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
You do not need to render a template for that render a new user form because info from the route to JSON using postgreSQL post request.

- What does idempotent mean? Which HTTP verbs are idempotent?
  Idempotent means multiple requests can be made with the same data that will create the same results, no side effects on the server.  

- What is the difference between PUT and PATCH?
  PUT and PATCH differ in PUT is updating an entire resource with something new.  Patch is just updating part of an existing resource

- What is one way encryption?
  One way encryption is a means of hasing a password.  It is a one way encription and the same input will always equal the same output

- What is the purpose of a `salt` when hashing a password?
  The purpose of using a salt when hashing a password is to create a more secure password hash.  Salting adds numbers and letters before a password when hashing that will be removed when trying to authenticate.

- What is the purpose of the Bcrypt module?
  Bcrypt modul is slow way of hashing passwords where the developer can pick how many rounds of hashing will be done to a password.

- What is the difference between authorization and authentication?
Authorization determins how much access a user has once logged in.  Authentication determins if the user trying to sign in is indeed who they say are usually using a login password.
