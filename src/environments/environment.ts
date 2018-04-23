// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAMCAQsXThiN7vSYgeFE7rGQ7Faicu8bVM",
    authDomain: "foley-database.firebaseapp.com",
    databaseURL: "https://foley-database.firebaseio.com",
    projectId: "foley-database",
    storageBucket: "foley-database.appspot.com",
    messagingSenderId: "848798280948"
  }
};
