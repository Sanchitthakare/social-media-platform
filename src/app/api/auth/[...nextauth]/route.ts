import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import type { OAuthConfig } from "next-auth/providers/oauth";
import type { LinkedInProfile } from "next-auth/providers/linkedin";
import TokenSetParameters from "next-auth/providers/linkedin";

const LinkedinProvider = (
  config: Partial<OAuthConfig<LinkedInProfile>>
): OAuthConfig<LinkedInProfile> => ({
  id: "linkedin",
  name: "LinkedIn",
  type: "oauth",
  client: { token_endpoint_auth_method: "client_secret_post" },
  issuer: "https://www.linkedin.com",
  profile: (profile: LinkedInProfile, TokenSetParameters) => ({
    id: profile.sub,
    name: profile.name,
    email: profile.email,
    image: profile.picture,
    TokenSetParameters: TokenSetParameters,
  }),
  wellKnown: "https://www.linkedin.com/oauth/.well-known/openid-configuration",
  authorization: {
    params: {
      scope: "openid profile email ",
    },
  },
  ...config,
});

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              EmailId: credentials.email,
              Password: credentials.password,
            }),
          }
        );

        const { success, others, message } = await response.json();

        if (success) {
          return others;
        } else {
          throw new Error(message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/user/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({
      token,
      user,
      account,
    }: {
      token: any;
      user: any;
      account: any;
    }) => {
      if (user) {
        if (
          account?.provider === "google" ||
          account?.provider === "linkedin"
        ) {
          user.profileType = "professional";
        }

        console.log("user", user);
        // name, emailId, profileType, image, loggedInUsing
        // const resp = await fetch(
        //   "http://localhost:4000/api/checkUserFirstTimeLogin",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       name: user.name,
        //       emailId: user.email,
        //       profileType: user.profileType,
        //       image: user.image,
        //       loggedInUsing: account.provider,
        //     }),
        //   }
        // );

        // const { firstTimelogin, success } = await resp.json();

        // if (success) {
        //   user.firstTimeLogin = firstTimelogin;
        // }

        user.firstTimeLogin = false;

        if (
          account?.provider === "google" ||
          account?.provider === "linkedin"
        ) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
          token.profileType = user.profileType;
          token.image = user.image;
          token.loggedInUsing = account.provider;
          token.firstTimeLogin = user.firstTimeLogin;
        } else {
          token.id = user.UserID;
          token.email = user.EmailId;
          token.name = user.Name;
          token.profileType = user.ProfileType;
          token.image = user.Image;
          token.loggedInUsing = account.provider;
          token.firstTimeLogin = user.firstTimeLogin;
        }
      }
      // console.log("user", token);
      return token;
    },

    session: ({ session, token }: { session: any; token: any; user: any }) => {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.profileType = token.profileType;
        session.user.image = token.image;
        session.user.loggedInUsing = token.loggedInUsing;
        session.user.firstTimeLogin = token.firstTimeLogin;
      }
      // console.log("session", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
