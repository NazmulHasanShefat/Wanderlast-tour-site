"use server"

import { headers } from "next/headers";
import { auth } from "../auth";

export async function SocialAction(formData){
    try {
        const action = formData.get("action");
        console.log(formData)
    } catch (error) {
        console.log(error)
    }
}

// resiter user
export async function userRegister(prevState, formData){
    let success =false;
    try {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const imageUrl = formData.get("imageUrl");
        // console.log({name, email, password, imageUrl})
        const response = await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
                  image: imageUrl
            },
             headers: await headers() 
        })
        if(response){
            console.log(response);
            return { success: true, message: "your registerd successfully" };
        }

    } catch (error) {
        console.log("faild to register user",error)
        return { success: false, message: error };
    }
}