# ProtobufASP.NETCoreReact.Example
Example of comunication between server and client with google protocol buffer format 

Example compare JSON and protopuf formats.

Server => ASP.NET Core and protobuf-net 2.4.0

Client => React and protobufjs 6.8.8

The example is based on ASP.NET Core React template project, which was extended with protobuf media type formatter. Generation on Weather forecast are increased to 10000 for test purposes.

Result:
Using protobuf the response size are decreased about 3.3 times.Receiving time - about 2 times.


