import passport, { use } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy } from "passport-jwt";

import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();

export interface user {
  email: string;
  password: string;
}

const cookieExtractor = function (req: NextApiRequest) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access-token"];
  }
  return token;
};

// const opts.jwtFromRequest = cookieExtractor;

// passport.use(
//   new JwtStrategy(opts, function (jwt_payload, done) {
//     prisma.user.findUnique({ id: jwt_payload.sub }, function (err, user) {
//       if (err) {
//         return done(err, false);
//       }
//       if (user) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//         // or you could create a new account
//       }
//     });
//   })
// );

passport.use(
  new LocalStrategy(async (email: string, password: string, done: any) => {
    try {
      const user = await prisma.user.findFirst({ where: { email } });
      if (!user) return done(null, false, { message: "Incorrect username" });
      if (user.email !== password)
        return done(null, false, { message: "Incorrect password" });
      // if (error) return done(err);

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);
