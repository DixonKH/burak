import express, { Request, Response } from 'express';
import {T} from '../libs/types/common';
import MemberService from '../models/Member.service';
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import Errors, { Message } from '../libs/Erorrs';


const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
   try{
    console.log("goHome");
    res.render("home");
    // send | json | redirect | end | render
   } catch(err) {
      console.log("Error go home :", err); 
      res.redirect("/admin");
   }
};

restaurantController.getSignUp = (req: Request, res: Response) => {
  try {
    console.log("Sign up page");
      res.render("signup");
  } catch(err) {
    console.log("Error getSignUp: ", err); 
    res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try{
      console.log("Login page");
        res.render("login");
    } catch(err) {
      console.log("Error getLogin: ", err); 
      res.redirect("/admin");
        
    }
};

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");

    const newMember:MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    
    // TODO: SESSIONS AUTHENTICAION
    req.session.member = result;
    req.session.save(function() {
      res.send(result);
    });
      
  } catch(err) {
    console.log("Error getSignUp: ", err); 
    const message = 
    err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(`<script> alert("Hi ${message}"); window.location.replace('admin/signup') </script>`);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
      console.log("processLogin");
      const input: LoginInput = req.body;
      const result = await memberService.processLogin(input);
      // TODO: SESSION AUTHENTICAION

      req.session.member = result;
      req.session.save(function() {
        res.send(result);
    });
  } catch(err) {
    console.log("Error processLOgin: ", err); 
    const message = 
    err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(`<script> alert("Hi ${message}"); window.location.replace('admin/login') </script>`);
    res.send(err);
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
     console.log("logout");
     req.session.destroy(function() {
      res.redirect("/admin"); 
     })
     
  } catch(err) {
    console.log("Error logout: ", err); 
    res.redirect("/admin");
  }
};

restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
  try {
      console.log("checkAuthSession");
      if(req.session?.member) 
       res.send(`<script> alert("Hi ${req.session.member.memberNick}") </script>`);
      else res.send(`<script> alert(" ${Message.NOT_AUTHENTICATED}") </script>`)
    }
   catch(err) {
    console.log("Error, checkAuthSession: ", err); 
    res.send(err);
  }
};



export default restaurantController;