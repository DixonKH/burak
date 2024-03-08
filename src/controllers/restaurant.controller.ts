import express, { Request, Response } from 'express';
import {T} from '../libs/types/common';
import MemberService from '../models/Member.service';
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';


const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
   try{
    console.log("goHome");
    res.render("home");
    // send | json | redirect | end | render
   } catch(err) {
      console.log("Error go home :", err); 
   }
};

restaurantController.getSignUp = (req: Request, res: Response) => {
  try {
    console.log("Sign up page");
      res.render("signup");
  } catch(err) {
    console.log("Error getSignUp: ", err); 
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
      console.log("Login page");
        res.render("login");
    } catch(err) {
      console.log("Error getLogin: ", err); 
        
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    const newMember:MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    // TODO: SESSIONS AUTHENTICAION

      res.send(result);
      console.log("result: ",result);
      
  } catch(err) {
    console.log("Error getSignUp: ", err); 
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
      console.log("processLogin");
      const input: LoginInput = req.body;
      const result = await memberService.processLogin(input);
      // TODO: SESSION AUTHENTICAION

      res.send(result);
  } catch(err) {
    console.log("Error processLOgin: ", err); 
    res.send(err);
  }
};




export default restaurantController;