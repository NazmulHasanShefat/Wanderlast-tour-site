"use server"
export async function SocialAction(formData){
    try {
        const action = formData.get("action");
        console.log(formData)
    } catch (error) {
        console.log(error)
    }
}
export async function userRegister(formData){
    try {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const imageUrl = formData.get("imageUrl");
        console.log({name, email, password, imageUrl})

        
    } catch (error) {
        console.log("faild to register user",error)
    }
}