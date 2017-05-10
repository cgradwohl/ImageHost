// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// FIREBASE CONFIG
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDdMUGMDC_PtgNytNYgFpuooFo_9vQPuJg',
    authDomain: 'imagehostdb-9f725.firebaseapp.com',
    databaseURL: 'https://imagehostdb-9f725.firebaseio.com',
    projectId: 'imagehostdb-9f725',
    storageBucket: 'imagehostdb-9f725.appspot.com',
    messagingSenderId: '318473746818'
  }
};
