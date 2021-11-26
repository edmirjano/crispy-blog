import mongoose from "mongoose";

export const configDB = (app,conString, port) =>{
    mongoose
    .connect(conString)
    .then(() => {
      app.listen(port, () => {
        console.log(`Connected to db ${conString}`);
        console.log(`Server is listening at http://localhost:${port}/`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}