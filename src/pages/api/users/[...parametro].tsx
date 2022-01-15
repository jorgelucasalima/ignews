import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {

  console.log(request.query)


  const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jan Doe'},
    {id: 4, name: 'ane Doe'},

  ]

  return response.json(users)


}