import { FieldError, Input, Label, TextField, Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const isPending = {};
  return (
    <>
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-5xl font-bold text-center">Register Now</h1>
        <form className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="name" isRequired>
                <Label>Full Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* email */}
            <div className="md:col-span-2">
              <TextField name="email" isRequired>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>
            {/* password */}
            <div className="md:col-span-2">
              <TextField name="password" isRequired>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Buttons */}

          <button
            type="submit"
            className="text-xl bg-cyan-500 text-white py-2 px-4 cursor-pointer rounded-lg w-full border border-gray-300 flex items-center justify-center gap-3 mb-3"
          >
            Regiter
          </button>

          <button
            type="submit"
            variant="outline"
            className="text-xl py-2 px-4 cursor-pointer rounded-lg w-full border border-gray-300 flex items-center justify-center gap-3"
          >
            <FcGoogle size={35} />
            Continue with google
          </button>
        </form>
      </div>
    </>
  );
}
