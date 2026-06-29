"use client";

import { Input } from "@/components/ui/input";

type Props = {
  closeModal: () => void;
};

export default function ForgetPassword({ closeModal }: Props) {
    
  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      z-50
      "
    >
      <div
        className="
        bg-white
        rounded-xl
        p-6
        w-full
        max-w-md
        "
      >
        <h2 className="text-xl font-bold mb-5">Forget Password</h2>

        <Input placeholder="Please enter your email" />

        <div className="flex gap-3 mt-5">
          <button
            onClick={closeModal}
            className="
            flex-1
            border
            py-2
            rounded-lg
            cursor-pointer
            "
          >
            Cancel
          </button>

          <button
            className="
            flex-1
            bg-black
            text-white
            py-2
            rounded-lg
             cursor-pointer
            "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
