/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_susi",
    editProfile: "B2C_1_edit_profile",
  },
  authorities: {
    signUpSignIn: {
      authority:
        "https://nemopi.b2clogin.com/nemopi.onmicrosoft.com/B2C_1_susi",
    },
    editProfile: {
      authority:
        "https://nemopi.b2clogin.com/nemopi.onmicrosoft.com/B2C_1_edit_profile",
    },
  },
  authorityDomain: "nemopi.b2clogin.com",
};
/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
  auth: {
    clientId: "93f423c8-3e7f-4458-87ca-069cb4a62049", // This is the ONLY mandatory field; everything else is optional.
    authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose sign-up/sign-in user-flow as your default.
    knownAuthorities: [b2cPolicies.authorityDomain], // You must identify your tenant's domain as a known authority.
    redirectUri:
      "https://olafwrieden-ms-identity-javascript-react-spa-3952-3000.githubpreview.dev",
  },
  //   auth: {
  //     clientId: "2fdd06f3-7b34-49a3-a78b-0cf1dd87878e", // This is the ONLY mandatory field; everything else is optional.
  //     authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose sign-up/sign-in user-flow as your default.
  //     knownAuthorities: [b2cPolicies.authorityDomain], // You must identify your tenant's domain as a known authority.
  //     redirectUri: "http://localhost:6420", // You must register this URI on Azure Portal/App Registration. Defaults to "window.location.href".
  //   },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: [
    "https://nemopi.onmicrosoft.com/nemocloud/users.read",
    "https://nemopi.onmicrosoft.com/nemocloud/demo.read",
  ],
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
  graphMeEndpoint: "https://olafwrieden-active-directory-b2c-javascript-nodejs-webapi-7c5c-5000.githubpreview.dev/me",
};
