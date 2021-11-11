import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    message:
      'Welcome to V1 of the Components API! This project is a huge work in progress, so for the time being there is nothing this API does. However, down the road you will be able to grab component code via URL!',
  })
}
