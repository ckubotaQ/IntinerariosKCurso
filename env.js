import Constants from 'expo-constants';
const PRODUCTION =  'production';
const STAGNING = 'stagning';

const ENV = {
    dev:{
        iosClientId: '323803696262-62ese0hsrd7tg8jabd7nemf19ev2ljj1.apps.googleusercontent.com',
        androidClientId: '323803696262-f60j29ljivbsv1hm05uv5pfpegb4m3vl.apps.googleusercontent.com',
        iosStandaloneAppClientId: '323803696262-62ese0hsrd7tg8jabd7nemf19ev2ljj1.apps.googleusercontent.com',
        androidStandaloneAppClientId: '323803696262-f60j29ljivbsv1hm05uv5pfpegb4m3vl.apps.googleusercontent.com'
    },
    staging : {  iosClientId: null,
    androidClientId: null,
    iosStandaloneAppClientId: null,
    androidStandaloneAppClientId: null},
    production:{ iosClientId: null,
        androidClientId: null,
        iosStandaloneAppClientId: null,
        androidStandaloneAppClientId: null}
};
export default (env=Constants.manifest.releaseChannel)=>{
if(__DEV__){
    return ENV.dev;
}else if(env===STAGNING){
    return ENV.staging;
}else if (env===PRODUCTION){
return ENV.production;
}
}