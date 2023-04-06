const BlogSetting = require('../Models/blogSettingModel');

const isBlog = async(req,res,next) => {
    console.log('Wroks1');
    try{
        const blogSetting = await BlogSetting.find({});
        console.log('Wroks2', blogSetting);
        if(blogSetting.length == 0 && req.originalUrl != '/blogSetup')
        {
            console.log('Works3');
            res.redirect('/blogSetup');
        }
        else
        {
            next();
        }
    }
    catch(error)
    {
        console.log(error.message);
    }
}

module.exports = {
    isBlog
}