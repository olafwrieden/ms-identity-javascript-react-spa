import React from "react";
import { useMsal } from "@azure/msal-react";
import { b2cPolicies } from "../authConfig";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  };

  const handleEditProfile = () => {
    const editProfileRequest = b2cPolicies.authorities.editProfile;

    instance.loginRedirect(editProfileRequest).catch((e) => {
      console.log(e);
    });
  };

  return (
    <DropdownButton
      variant="secondary"
      className="ml-auto"
      drop="left"
      title="Sign Out"
    >
      <Dropdown.Item as="button" onClick={() => handleLogout("popup")}>
        Sign out using Popup
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleLogout("redirect")}>
        Sign out using Redirect
      </Dropdown.Item>
      <hr />
      <Dropdown.Item as="button" onClick={() => handleEditProfile()}>
        Edit Profile
      </Dropdown.Item>
    </DropdownButton>
  );
};
