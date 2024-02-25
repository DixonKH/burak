import express, { Request, Response } from 'express';
import {T} from '../libs/types/common';

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
   try{
    res.send("Home Page");
   } catch(err) {
      console.log("Error go home :", err); 
   }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
        res.send("Login page");
    } catch(err) {
      console.log("Error getLogin: ", err); 
        
    }
};

restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
        res.send("Sign up page");
    } catch(err) {
      console.log("Error getSignUp: ", err); 
    }
};

export default restaurantController;