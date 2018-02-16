import path from 'path';



export default {
    devtool : 'eval-source-map',
    entry : [
        path.join(__dirname , '/view/index.js')
        ],
    output : {
        path : __dirname,
        filename : 'bundle.js',
        publicPath : '/'
    },

    module : {
        loaders : [
            {
                test : /\.js$/,
                include : path.join(__dirname , 'view'),
                loaders: [ 'babel-loader'],
            }
        ]
    },
    resolve : {
        extensions : ['.js']
    }
}