"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { UserFormDataType } from "./UserProfileForm";
import { usePathname } from "next/navigation";
import { useGetUser } from "@/hooks/useGetUser";
import { Button } from "./ui/button";

interface Props {
  onCheckOut: (userFormData: UserFormDataType) => void;
  disabled: boolean;
}

const CheckOutButton = ({ disabled, onCheckOut }: Props) => {
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

  return <div>CheckOutButton</div>;
};

export default CheckOutButton;
