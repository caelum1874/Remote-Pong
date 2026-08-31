# Remote-Pong
Use your phone as a controller to play Pong. A simple realisation which is build with the following: 

-Node.js  
-Express.js   
-EJS / to generate pages with unique ID  
-Socket.io / communication    
-DeviceOrientationApi / for controller  
-Pixi.js / for graphics  

If you want to run the project change the IP address in the room.ejs at the 36 line.

Sources and materials used:  
-Collision detection and bounce angle of the ball  
https://github.com/joshuadjacoby/pixi-pong/blob/master/js/app.js   

-How to create rooms with unique ID  
https://www.youtube.com/watch?v=DvlyzDZDEq4  

-Bouncing at the border  
https://www.pathuku.com/blog/simple-hit-detection-with-pixijs/

As I encountered a problem with importing Pixi.js in a separate file the scripts are in the ejs files. 

Other problems and shortcomings:  
-The player movement is not smooth  
-I restricted the number of clients to two for one room, but right now it doesn't check if one of the clients is truly a controller/phone.  
-Primitive AI for the bot  
-Primitive UI/UX
