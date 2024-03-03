import express, { Request, Response } from 'express';
import {T} from '../libs/types/common';
import MemberService from '../models/Member.service';
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
   try{
    console.log("goHome");
    res.send("Home Page");
   } catch(err) {
      console.log("Error go home :", err); 
   }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
      console.log("Login page");
        res.send("Login page");
    } catch(err) {
      console.log("Error getLogin: ", err); 
        
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
      console.log("Process Login");
      console.log("log body: ", req.body);
      const input: LoginInput = req.body;

      const memberService = new MemberService();
      const result = await memberService.processLogin(input)

      res.send(result);
  } catch(err) {
    console.log("Error processLOgin: ", err); 
    res.send(err);
  }
};

restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
      console.log("Sign up page");
        res.send("Sign up page");
    } catch(err) {
      console.log("Error getSignUp: ", err); 
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("ProcessSignup");
    console.log("body: ", req.body);

    const newMember:MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

      res.send(result);
      console.log("result: ",result);
      
  } catch(err) {
    console.log("Error getSignUp: ", err); 
    res.send(err);
  }
};


export default restaurantController;