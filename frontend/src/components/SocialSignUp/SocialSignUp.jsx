import { SocialAction } from "@/lib/actions/SocialAction";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function SocialSignUp() {
  return (
    <form action={SocialAction} method="POST" className="flex flex-col items-center gap-3 mb-5 px-10">
      <button
        type="submit"
        name="action"
        value={`google`}
        variant="outline"
        className="text-xl py-2 px-4 cursor-pointer rounded-lg w-full border border-gray-300 flex items-center justify-center gap-3"
      >
        <FcGoogle size={35} />
        Continue with google
      </button>
      <button
        type="submit"
        name="action"
        value={`github`}
        variant="outline"
        className="text-xl py-2 px-4 cursor-pointer rounded-lg w-full border border-gray-300 flex items-center justify-center gap-3"
      >
        <BsGithub size={35} />
        Continue with Github
      </button>
    </form>
  );
}
