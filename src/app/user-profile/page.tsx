"use client";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import UserProfileForm from "@/components/UserProfileForm";
import { useGetUser } from "@/hooks/useGetUser";
import { useUpdateUser } from "@/hooks/useUpdateUser";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetUser();
  const { isLoading: isUpdateLoading, updateUser } = useUpdateUser();

  if (isGetLoading) {
    return <Loading />;
  }

  if (!currentUser) {
    return <Error message="Unable to load user profile" />;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      isLoading={isUpdateLoading}
      onSave={updateUser}
    />
  );
};

export default UserProfilePage;
