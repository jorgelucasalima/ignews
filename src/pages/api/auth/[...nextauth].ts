import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from "../../../services/fauna"
import { query } from "faunadb"


export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user',
    }),
  ],

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  callbacks: {
    async signIn({user, account, profile}): Promise<boolean> {
      
      const {email} = user
      
      try {

        await fauna.query(
          query.Create(
            query.Collection('users'),
            { data: {email}}
          )
        )
      
        return true
        
      } catch (error) {
        
        return false

      }

      
    
    }
  }

})