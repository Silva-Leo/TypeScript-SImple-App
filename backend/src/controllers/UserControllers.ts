import { Request, Response } from "express";
import EmailService from "../services/EmailServices";

const users = [
  {
    name: "Leonardo",
    email: "Leo@email.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail(
      {
        name: "Leo Silva",
        email: "leo@email.com",
      },
      {
        subject: "BEm vindo",
        body: "Bem vindo*",
      }
    );
    return res.send("teste");
  },
};
