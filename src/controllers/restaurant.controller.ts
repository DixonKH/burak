import express, { NextFunction, Request, Response } from 'express';
import {T} from '../libs/types/common';
import MemberService from '../models/Member.service';
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import Errors, { HttpCode, Message } from '../libs/Erorrs';


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
    const file = req.file;
    if(!file) 
    throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

    const newMember:MemberInput = req.body;
    newMember.memberImage = file?.path.replace(/\\/g, "/");
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    
    // TODO: SESSIONS AUTHENTICAION
    req.session.member = result;
    req.session.save(function() {
      res.redirect("/admin/product/all");
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
        res.redirect("/admin/product/all");
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

restaurantController.getUsers = async (req: Request, res: Response) => {
  try{
    console.log("getUsers");
    const result = await memberService.getUsers();
    console.log("result: ", result);
    
    res.render("users", {users: result});
  } catch(err) {
    console.log("Error getUsers: ", err); 
    res.redirect("/admin/login");
      
  }
};

restaurantController.updateChosenUsers = async (req: Request, res: Response) => {
  try{
    console.log("updateChosenUsers");
    const result = await memberService.updateChosenUsers(req.body);
      res.status(HttpCode.OK).json({data: result});
  } catch(err) {
    console.log("Error updateChosenUsers: ", err); 
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
      
  }
};

restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
  try {
      console.log("checkAuthSession");
      if(req.session?.member) 
       res.send(`<script> alert("Hi ${req.session.member.memberNick}") </script>`);
      else res.send(`<script> alert(" ${Message.NOT_AUTHENTICATED}") </script>`);
    }
   catch(err) {
    console.log("Error, checkAuthSession: ", err); 
    res.send(err);
  }
};

restaurantController.verifyRestaurant = (req: AdminRequest, res: Response, next: NextFunction) => {

    if(req.session?.member?.memberType === MemberType.RESTAURANT) {
      req.member = req.session.member;
      next(); 
    } else{
        const message = Message.NOT_AUTHENTICATED;
        res.send(`<script> alert(" ${message}"); window.location.replace('/admin/login'); </script>`);
      }
}


export default restaurantController;