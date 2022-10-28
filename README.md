in this version of the application, i have implemented code for abstracting the management for
passing data between components through the use of context, let's navigate to url and read a bit
about context, context provides a way to pass data through the components tree without having to
pass props down manually at every level so by using context we can avoid prop drilling in a typical
react application, data is passed top down parent to child via props but such usage can become 
cumbersome for certian types of props eg local preferences ui theme that are required by many
components within our application. Context provides a way to share values like these between 
components without having to explicitly pass props through every level of the tree.

the application that i have created is small and fairly basic when an application grows it may be
better to use context so that the code used to share values between components is neater and easier
to maintain.
