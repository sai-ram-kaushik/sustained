import { NextResponse } from "next/dist/server/web/spec-extension/response";


export async function POST(req,res){
  try{
   const {name,email,phone,issue} = await req.json();

  

  }
  catch(err){

  }
};

