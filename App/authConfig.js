/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

require('dotenv').config();

const TENANT_SUBDOMAIN = process.env.TENANT_SUBDOMAIN || 'OMAMembershipDev';
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:3000/auth/redirect';
const POST_LOGOUT_REDIRECT_URI = process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000';

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL Node configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md
 */
const msalConfig = {
    auth: {
        clientId: process.env.CLIENT_ID || '93eb3544-5394-4cbb-bbf7-d0a4c92d5a92', // 'Application (client) ID' of app registration in Microsoft Entra admin center - this value is a GUID
        authority: process.env.AUTHORITY || `https://${TENANT_SUBDOMAIN}.ciamlogin.com/`, // Replace the placeholder with your tenant name
        clientSecret: process.env.CLIENT_SECRET || 'd-w8Q~X7-3qWe0_zXKwDZnQ4vTHrBngA~yVRkbLa', // Client secret generated from the app registration in Microsoft Entra admin center
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: 'Info',
        },
    },
};

module.exports = {
    msalConfig,
    REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI,
    TENANT_SUBDOMAIN,
};
