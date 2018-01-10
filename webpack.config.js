module.exports = function(env) {
    if (env == undefined) {
        env = 'dev';
    } else {
        console.log(`Building for ${env} environment.`)
    }
    return require(`./config/webpack.${env}.js`);
}