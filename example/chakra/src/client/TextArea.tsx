import Head from '../components/Head'
import { Button } from "@chakra-ui/react";
import { Textarea } from '@chakra-ui/react'
//
function Page() {
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <h1 className="text-4xl font-bold"
    >TextArea</h1>
    <hr className="my-2" />
    <Textarea placeholder='Here is a sample placeholder' />
  </div>
  )
}

export default Page;