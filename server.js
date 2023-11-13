const express=require("express");
const app=express();
require("./config/connection");
const userRoutes=require('./routes/users');
const reservationsRoutes=require('./routes/reservations');
const eventsRoutes=require('./routes/events');
const venuesRoutes=require('./routes/venues');
const cors=require("cors");
const creatingTables=require('./setup');
const Port=5000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
creatingTables();
app.listen(Port,()=>{
    console.log(`You are listening to port ${Port}`);
})
app.use('/users',userRoutes);
app.use('/reservations',reservationsRoutes);
app.use('/events',eventsRoutes);
app.use('/venues',venuesRoutes);