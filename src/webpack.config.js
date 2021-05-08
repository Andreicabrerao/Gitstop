const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
<<<<<<< HEAD
            dangerouslyAddModulePathsToTranspile: ['@react-router-native/NativeRouter']
=======
            dangerouslyAddModulePathsToTranspile: ['react-router-native']
>>>>>>> ddd2fc071bc9a72cea1be8fce6bb8004d8215b3a
        }
    }, argv);
    return config;
};