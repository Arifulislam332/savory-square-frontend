"use client";

import { useAuth0 } from "@auth0/auth0-react";
import UserProfileForm, { UserFormDataType } from "./UserProfileForm";
import { usePathname } from "next/navigation";
import { useGetUser } from "@/hooks/useGetUser";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Props {
  onCheckOut: (userFormData: UserFormDataType) => void;
  disabled: boolean;
  isLoading: boolean;
}

const CheckOutButton = ({ disabled, onCheckOut, isLoading }: Props) => {
  const {
    isLoading: isAuthLoading,
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  const pathname = usePathname();

  const { currentUser, isLoading: isGetUserLoading } = useGetUser();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button className="bg-pink-500 flex-1" onClick={handleLogin}>
        Log in to checkout
      </Button>
    );
  }

  if (!currentUser || isAuthLoading || isLoading) {
    return (
      <Button disabled className="flex-1 flex items-center gap-2">
        <Loader2 className="animate-spin" size={18} />
        <span>Loading</span>
      </Button>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="bg-pink-500 flex-1">
          Proceed to checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[450px] md:max-w-[750px] bg-gray-50">
        <UserProfileForm
          currentUser={currentUser}
          isLoading={isGetUserLoading}
          onSave={onCheckOut}
          noMargin
          title="Confirm Delivery Details"
          buttonText="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckOutButton;
