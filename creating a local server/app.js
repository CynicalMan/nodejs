const exp = require('express'); 
const morgan = require('morgan'); 

// express app 
const app = exp();

// register view engine
app.set('view engine','ejs');
app.set('views','views-ejs');//important

// listen for requests
app.listen(3000);

//middleware & static files 

app.use(exp.static('public'));


// app.use((res,req, next) => {
//     console.log('new request made :');
//     console.log('host: ', res.hostname);
//     console.log('path: ', res.path);
//     console.log('method: ', res.method);
//     next();
// });

// app.use((res,req, next) => {
//     console.log('in the next middleware');
//     next();
// });

//morgan

app.use(morgan('dev'));

app.get('/',(req,res) => {

    const Blogs = [
        { title: 'nigga in the land of peng' , snippet: 'lorem serg easgaes r gearge' },
        { title: 'nigga in the land of peng' , snippet: 'lorem serg easgaes r gearge' },
        { title: 'nigga in the land of peng' , snippet: 'lorem serg easgaes r gearge' },
    ];

    res.render('index', { title: 'index' , Blogs});
})

app.get('/about',(req,res) => {
    res.render('about', { title: 'about' });
})

//redirect
// app.get('/about-us',(req,res) => {
//     res.redirect('/about');
// })

app.get('/blogs/create', (req,res) => {
    res.render('create', { title: 'user name' });
})

app.use((req,res) => {
    res.status(404).render('404', { title: '404' });
})