# uncontrollable
A remote controller to host library. Using a mobile gyroscope control an application on a given host. 
Ideally this application should use webrtc, but because of the current lack of mobile support (web) we have chosen 
to make a proof-of-concept using sockets. The latency though will not make this project applicable for any kind of true 
real time communication. 

## client flow
* open ~/client -> creates a socket connection -> register socket connection on host


## host
* open ~/host -> make a socket connection to server -> writeout connected clients

#todo

## Library
* client
* host
* communication between client and host
* record gyroscope data
* record touch data

## Application
* send data to host
* draw image on host
* drawing tools