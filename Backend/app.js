import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import multer from "multer";
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));


//storage
app.use('/uploads', express.static('uploads'))


mongoose.set('strictQuery', true);

//Connection
mongoose.connect('mongodb://127.0.0.1:27017/E-Learn-API', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });



//User Registration Schema
const userSchema = new mongoose.Schema({
    roll: Number,
    name: String,
    email: String,
    password: String
})

// userSchema.pre('save', function (next) {
//     const user = this;
//     if (user.isModified('password')) {
//         bcrypt.genSalt(10, function (err, salt) {
//             bcrypt.hash(user.password, salt, function (err, hashedPassword) {
//                 user.password = hashedPassword;
//                 console.log(user.password)
//                 next();
//             });
//         });
//     } else {
//         next();
//     }
// });

const User = new mongoose.model("User", userSchema)

// User Counter collection for increasing roll number
const userollcounter = new mongoose.Schema({
    id: String,
    seq: Number

})
const usercounter = new mongoose.model("usercounter", userollcounter)

//admin

const adminSchema = new mongoose.Schema({
    email: String,
    password: String
})
const Admin = new mongoose.model("Admin", adminSchema)


let logedInUsers;
// User Login Post
// app.post("/login", (req, res) => {
//     const { email, password } = req.body
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             if (password === user.password) {
//                 logedInUsers = user.roll
//                 console.log("login User", logedInUsers)
//                 res.send({ message: "Login Successfull", user: user })
//             } else {
//                 res.send({ message: "Password didn't match" })
//             }
//         } else {
//             res.send({ message: "User not registered" })
//         }
//     })
// })
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (isMatch) {
                    logedInUsers = user.roll;
                    console.log("login User", logedInUsers);
                    res.send({ message: "Login Successfull", user });
                } else {
                    res.send({ message: "Password didn't match" });
                }
            });
        } else {
            res.send({ message: "User not registered" });
        }
    });
});

///////////////////////////////////////
// User Registration Post

app.post("/register", (req, res) => {
    let seqid
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        }
        else {
            usercounter.findOneAndUpdate(
                { id: "auto_counter" },
                { "$inc": { "seq": 1 } },
                { upsert: true, new: true },
                (err, cd) => {
                    if (cd == null) {
                        const newval = new counter2({ id: "auto_counter", seq: 1 });
                        newval.save();
                        seqid = 1
                    }
                    else {
                        console.log(cd.seq);
                        seqid = cd.seq
                    }
                    console.log()
                    const user = new User({
                        roll: seqid,
                        name,
                        email,
                        password
                    })
                    user.save(err => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.send({ message: "Successfully Registered, Please login now." })
                        }
                    })

                }
            )
        }
    })
})

// Admin login post
app.post("/admin", (req, res) => {
    const { email, password } = req.body
    Admin.findOne({ email: email }, (err, admin) => {
        if (admin) {
            if (password === admin.password) {
                res.send({ message: "Admin Login Successfull", admin: admin })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "Admin Not Recognized" })
        }
    })
})

// -----------------------------------------
// Course Collectionsss
// -----------------------------------------

// UI Course Counter collection
const UI_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Ui_Counter = new mongoose.model("Ui_Counter", UI_Course_Counter)
// UI Course collection
const UI_UxCourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 1,
    },
    category_name: {
        type: String,
        default: "UI",

    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_1 = new mongoose.model("UI", UI_UxCourseSchema)

// Art Course Counter collection
const Art_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Art_Counter = new mongoose.model("Art_Counter", Art_Course_Counter)

// Art Course collection
const Art_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 2,
    },
    category_name: {
        type: String,
        default: "Art",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_2 = new mongoose.model("Art", Art_CourseSchema)

//ComputerScience Course collection
const Computer_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 3,
    },
    category_name: {
        type: String,
        default: "Computer_Science",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_3 = new mongoose.model("Computer_Science", Computer_CourseSchema)

// ComputerScience Course Counter collection
const ComputerScience_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const CS_Counter = new mongoose.model("CS_Counter", ComputerScience_Course_Counter)

// History Course collection
const History_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 4,
    },
    category_name: {
        type: String,
        default: "History",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_4 = new mongoose.model("History", History_CourseSchema)

// History Course Counter collection
const History_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const History_Counter = new mongoose.model("History_Counter", History_Course_Counter)

// Software Course collection
const Software_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 5,
    },
    category_name: {
        type: String,
        default: "Software_Enginerring",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_5 = new mongoose.model("Software", Software_CourseSchema)

//Software_Course_Counter collection
const Software_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Software_Counter = new mongoose.model("Software_Counter", Software_Course_Counter)


// Information Security Course collection
const Security_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 6,
    },
    category_name: {
        type: String,
        default: "Information_Security",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_6 = new mongoose.model("Security", Security_CourseSchema)

//Information_Course_Counter collection
const Security_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Security_Counter = new mongoose.model("Security_Counter", Security_Course_Counter)


// Health Course collection 
const Health_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 7,
    },
    category_name: {
        type: String,
        default: "Health",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_7 = new mongoose.model("Health", Health_CourseSchema)

//Health_Course_Counter collection
const Health_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Health_Counter = new mongoose.model("Health_Counter", Health_Course_Counter)

// Marketing Course collection
const Marketing_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 8,
    },
    category_name: {
        type: String,
        default: "Marketing",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_8 = new mongoose.model("Marketing", Marketing_CourseSchema)

//Marketing_Course_Counter collection
const Marketing_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Marketing_Counter = new mongoose.model("Marketing_Counter", Marketing_Course_Counter)


// Graphic Course collection
const Graphic_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 9,
    },
    category_name: {
        type: String,
        default: "Graphic_Designing",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_9 = new mongoose.model("Graphic", Graphic_CourseSchema)
//Graphic_Course_Counter collection
const Graphic_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Graphic_Counter = new mongoose.model("Graphic_Counter", Graphic_Course_Counter)


// Music Course collection
const Music_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 10,
    },
    category_name: {
        type: String,
        default: "Music",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_10 = new mongoose.model("Music", Music_CourseSchema)
//Music_Course_Counter collection
const Music_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Music_Counter = new mongoose.model("Music_Counter", Music_Course_Counter)


// Business Course collection
const Business_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 11,
    },
    category_name: {
        type: String,
        default: "Buisness_Administration",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_11 = new mongoose.model("Buisness", Business_CourseSchema)
//Business_Course_Counter collection
const Business_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Buisness_Counter = new mongoose.model("Buisness_Counter", Business_Course_Counter)

// Web Course Counter collection
const Web_Course_Counter = new mongoose.Schema({
    id: String,
    seq: Number

})
const Web_Counter = new mongoose.model("Web_Counter", Web_Course_Counter)
// Web Course collection
const Web_CourseSchema = new mongoose.Schema({
    course_id: Number,
    category_id: {
        type: Number,
        default: 12,
    },
    category_name: {
        type: String,
        default: "Web_Development",
    },
    course_name: String,
    course_img: {
        type: String,
        // required: true
    },
    course_desc: String,
    course_detail: String,
    course_file: {
        type: String,
        default: "Courseszip"
    }

})
const Course_12 = new mongoose.model("Web", Web_CourseSchema)

/////////////////////////////////////////////////////////////////////////////////////////////////

// UI Feeback collection
const UI_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const UI_Feed = new mongoose.model("UI_Feed", UI_Feedback)

// Art Feeback collection
const Art_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const Art_Feed = new mongoose.model("Art_Feed", Art_Feedback)

// CS Feeback collection
const CS_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const CS_Feed = new mongoose.model("CS_Feed", CS_Feedback)

// History Feeback collection
const History_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const History_Feed = new mongoose.model("History_Feed", History_Feedback)

// SE Feeback collection
const SE_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const SE_Feed = new mongoose.model("SE_Feed", SE_Feedback)

// InfoSecure Feeback collection
const Info_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const Info_Feed = new mongoose.model("Info_Feed", Info_Feedback)

// Health Feeback collection
const Health_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const Health_Feed = new mongoose.model("Health_Feed", Health_Feedback)

// marketing Feeback collection
const Marketing_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const Mark_Feed = new mongoose.model("Mark_Feed", Marketing_Feedback)

// Graphic Feeback collection
const Graphic_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const Graphic_Feed = new mongoose.model("Graphic_Feed", Graphic_Feedback)

// Music Feeback collection
const Music_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const Music_Feed = new mongoose.model("Music_Feed", Music_Feedback)

// Buisness Feeback collection
const Buisness_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const Buisness_Feed = new mongoose.model("Buisness_Feed", Buisness_Feedback)

// Web Feeback collection
const Web_Feedback = new mongoose.Schema({
    course_id: Number,
    user_name: String,//lis user nay login kia hua
    feedback: String//input day ga

})
const Web_Feed = new mongoose.model("Web_Feed", Web_Feedback)

//================================================
//Download Courses Information
const Download_Courses = new mongoose.Schema({
    course_id: Number,
    user_id: Number, //user table 
    user_name: String, //user table
    course_name: String, //course table
    category_name: String //course table

})
const Downloadcourses = new mongoose.model("Downloadcourses", Download_Courses)





//-------------------------------------------------------------------------------------------------------------------------------

////////////////////////////////////////////////////////////////////////////////////////
// POST  APIs FOR ADD COURSES CATEGORY WISE
////////////////////////////////////////////////////////////////////////////////////////
// Add course UI API
app.post("/homeadmin/Addcourse/UI", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Ui_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Ui_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_1 = new Course_1({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_1.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "UI Course Succesfully Added" });
                }
            })

        }


    );
})

// Add course Art API
app.post("/homeadmin/Addcourse/art", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Art_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Art_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_2 = new Course_2({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_2.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Art Course Succesfully Added" });
                }
            })

        }


    );
})

// Add course computer API
app.post("/homeadmin/Addcourse/computer", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    CS_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new CS_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_3 = new Course_3({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_3.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Computer Course Succesfully Added" });
                }
            })

        }


    );
})


// Add course History API
app.post("/homeadmin/Addcourse/history", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    History_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new History_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_4 = new Course_4({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_4.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "History Course Succesfully Added" });
                }
            })

        }


    );
})


// Add course Software API
app.post("/homeadmin/Addcourse/software", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Software_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Software_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_5 = new Course_5({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_5.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Software Course Succesfully Added" });
                }
            })

        }


    );
})


// Add course Security API
app.post("/homeadmin/Addcourse/security", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Security_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Security_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_6 = new Course_6({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_6.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Security Course Succesfully Added" });
                }
            })

        }


    );
})

// Add course Health API
app.post("/homeadmin/Addcourse/health", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Health_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Health_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_7 = new Course_7({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_7.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Health Course Succesfully Added" });
                }
            })

        }


    );
})


// Add course Marketing API
app.post("/homeadmin/Addcourse/market", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Marketing_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Marketing_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_8 = new Course_8({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_8.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Marketing Course Succesfully Added" });
                }
            })

        }


    );
})

// Add course Graphic API
app.post("/homeadmin/Addcourse/graphic", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Graphic_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Graphic_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_9 = new Course_9({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_9.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Graphic Course Succesfully Added" });
                }
            })

        }


    );
})

// Add course Music API
app.post("/homeadmin/Addcourse/music", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Music_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Music_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_10 = new Course_10({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_10.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Music Course Succesfully Added" });
                }
            })

        }


    );
})

// Add course Business API
app.post("/homeadmin/Addcourse/buisness", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Buisness_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Buisness_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_11 = new Course_11({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_11.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Business Course Succesfully Added" });
                }
            })

        }


    );
})


// Add course Web API
app.post("/homeadmin/Addcourse/web", upload.single("testImage"), (req, res) => {
    const { course_name, course_desc, course_detail } = req.body;
    let seqid
    Web_Counter.findOneAndUpdate(
        { id: "auto_counter" },
        { "$inc": { "seq": 1 } },
        { upsert: true, new: true },
        (err, cd) => {
            if (cd == null) {
                const newval = new Web_Counter({ id: "auto_counter", seq: 1 });
                newval.save();
                seqid = 1
            }
            else {
                console.log(cd.seq);
                seqid = cd.seq
            }
            console.log()
            const course_12 = new Course_12({
                course_id: seqid,
                course_name,
                course_desc,
                course_detail,
                course_img: req.file.path
            });
            course_12.save((err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send({ message: "Web Course Succesfully Added" });
                }
            })

        }


    );
})



// ---------------------------------------------------------------------------------------------------------------------------------------------------
//UI feedback post request
app.post("/courses/UI/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const ui_Feed = new UI_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    ui_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For UI Course Succesfully Send" });
        }
    });
})

//Art feedback post request
app.post("/courses/art/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const art_Feed = new Art_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    art_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For Art Course Succesfully Send" });
        }
    });
})

//CS feedback post request
app.post("/courses/computer/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const cs_Feed = new CS_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    cs_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For CS course Succesfully Send" });
        }
    });
})

//History feedback post request
app.post("/courses/history/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const history_Feed = new History_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    history_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For History Course Succesfully Send" });
        }
    });
})

//SE feedback post request
app.post("/courses/software/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const se_Feed = new SE_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    se_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For Software Course Succesfully Send" });
        }
    });
})

//Info feedback post request
app.post("/courses/security/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const secure_Feed = new Info_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    secure_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For Security Course Succesfully Send" });
        }
    });
})

//Health feedback post request
app.post("/courses/health/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const health_Feed = new Health_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    health_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For Health Course Succesfully Send" });
        }
    });
})

//Marketing feedback post request
app.post("/courses/market/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const mark_Feed = new Mark_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    mark_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For Marketing Course Succesfully Send" });
        }
    });
})

//Graphic Design feedback post request
app.post("/courses/graphic/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const graphic_Feed = new Graphic_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    graphic_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For Graphic Course Succesfully Send" });
        }
    });
})

//Music feedback post request
app.post("/courses/music/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const music_Feed = new Music_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    music_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For Music Course Succesfully Send" });
        }
    });
})

//Buisness feedback post request
app.post("/courses/buisness/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const buisness_Feed = new Buisness_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    buisness_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For Buisness Course Succesfully Send" });
        }
    });
})

//Web feedback post request
app.post("/courses/web/:id", (req, res) => {
    const { id } = req.params;
    const { fusername, feedback } = req.body;
    const web_Feed = new Web_Feed({
        course_id: id,
        user_name: fusername,
        feedback
    });
    web_Feed.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(req.body)
            res.send({ message: "Feedback For Web Course Succesfully Send" });
        }
    });
})


///////////////////////////////////////////////
//Post Request for download table
app.post("/homeadmin/downloadusers", (req, res) => {
    const { category_name, course_id, course_name, fusername, rollno } = req.body;
    const download_course = new Downloadcourses({
        course_id: course_id, //course table url say id mil jay gi 
        user_id: rollno, //user table 
        user_name: fusername, //user table
        course_name: course_name, //course table
        category_name: category_name, //course table

    });
    download_course.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            // console.log(req.body)
            res.send({ message: "Course Downloaded" });
        }
    });
})







//.-----------------------------------------------------------------------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////
// Get APIs FOR COURSES 
////////////////////////////////////////////////////////////////////////////////////////

// Get All courses Information 
app.get('/homeadmin/coursesinfo', (req, res) => {

    let course1 = Course_1.find().exec();
    let course2 = Course_2.find().exec();
    let course3 = Course_3.find().exec();
    let course4 = Course_4.find().exec();
    let course5 = Course_5.find().exec();
    let course6 = Course_6.find().exec();
    let course7 = Course_7.find().exec();
    let course8 = Course_8.find().exec();
    let course9 = Course_9.find().exec();
    let course10 = Course_10.find().exec();
    let course11 = Course_11.find().exec();
    let course12 = Course_12.find().exec();

    Promise.all([course1, course2, course3, course4, course5, course6, course7, course8, course9, course10, course11, course12])
        .then((data) => {
            // Combine all data into a single response
            let response = {
                course1: data[0],
                course2: data[1],
                course3: data[2],
                course4: data[3],
                course5: data[4],
                course6: data[5],
                course7: data[6],
                course8: data[7],
                course9: data[8],
                course10: data[9],
                course11: data[10],
                course12: data[11],
            };

            // Send response to client
            res.json(response);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Error retrieving data from collections' });
        });
})


// Get Register User  Information
app.get('/homeadmin/registeruser', (req, res) => {

    User.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})

// Get Downloadusercourse  Information
app.get("/homeadmin/usersinfo", (req, res) => {
    Downloadcourses.aggregate([
        {
            $group: {
                _id: "$user_id",
                user_name: { $first: "$user_name" },
                downloads: { $sum: 1 }
            }
        }
    ])
        .exec((err, data) => {
            if (err) {
                res.status(500).json({
                    message: "Error in getting downloads per user",
                    error: err
                });
            } else {
                res.status(200).json({ data });
            }
        });
});



/////////////////////////////////////////////////////////////////////////
// Get Category wise courses here below
////////////////////////////////////////////////////////////////////////

//Get Ui Courses
app.get('/courses/UI', (req, res) => {
    Course_1.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})
//Get art Courses
app.get('/courses/art', (req, res) => {
    Course_2.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})

//Get computer Courses
app.get('/courses/computer', (req, res) => {
    Course_3.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})

//Get history Courses
app.get('/courses/history', (req, res) => {
    Course_4.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})

//Get software Courses
app.get('/courses/software', (req, res) => {
    Course_5.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})
//Get security Courses
app.get('/courses/security', (req, res) => {
    Course_6.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})
//Get health Courses
app.get('/courses/health', (req, res) => {
    Course_7.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})
//Get market Courses
app.get('/courses/market', (req, res) => {
    Course_8.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})
//Get graphic Courses
app.get('/courses/graphic', (req, res) => {
    Course_9.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})
//Get music Courses
app.get('/courses/music', (req, res) => {
    Course_10.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})
//Get buisness Courses
app.get('/courses/buisness', (req, res) => {
    Course_11.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})
//Get web Courses
app.get('/courses/web', (req, res) => {
    Course_12.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})


// Get UI courses Detail & Feedback with use params
app.get('/courses/UI/:id', (req, res) => {
    const id = req.params.id;
    Course_1.find({ course_id: id }, (err, course) => {
        if (err) {
            console.log(err);
        }
        else {
            UI_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

// Get art courses Detail & Feedback with use params
app.get('/courses/art/:id', (req, res) => {
    const id = req.params.id;
    Course_2.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            Art_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})
// Get computer courses Detail & Feedback with use params
app.get('/courses/computer/:id', (req, res) => {
    const id = req.params.id;
    Course_3.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            CS_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})
// Get history courses Detail & Feedback with use params
app.get('/courses/history/:id', (req, res) => {
    const id = req.params.id;
    Course_4.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            History_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

// Get software courses Detail & Feedback with use params
app.get('/courses/software/:id', (req, res) => {
    const id = req.params.id;
    Course_5.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            SE_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

// Get security courses Detail & Feedback with use params
app.get('/courses/security/:id', (req, res) => {
    const id = req.params.id;
    Course_6.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            Info_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

// Get health courses Detail & Feedback with use params
app.get('/courses/health/:id', (req, res) => {
    const id = req.params.id;
    Course_7.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            Health_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

// Get market courses Detail & Feedback with use params
app.get('/courses/market/:id', (req, res) => {
    const id = req.params.id;
    Course_8.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            Mark_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

// Get graphic courses Detail & Feedback with use params
app.get('/courses/graphic/:id', (req, res) => {
    const id = req.params.id;
    Course_9.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            Graphic_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

// Get music courses Detail & Feedback with use params
app.get('/courses/music/:id', (req, res) => {
    const id = req.params.id;
    Course_10.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            Music_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

// Get buisness courses Detail & Feedback with use params
app.get('/courses/buisness/:id', (req, res) => {
    const id = req.params.id;
    Course_11.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            Buisness_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

// Get web courses Detail & Feedback with use params
app.get('/courses/web/:id', (req, res) => {
    const id = req.params.id;
    Course_12.find({ course_id: id }, function (err, course) {
        if (err) {
            console.log(err);
        }
        else {
            Web_Feed.find({ course_id: id }, (err, feedback) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send({ course, feedback });
                }
            });
        }
    });
})

//---------------------------------------------------------------------------------
//Get download courses info
app.get("/homeadmin/downloadusers", (req, res) => {
    Downloadcourses.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Download Courses Send");
        }
    });
})

//Get total courses here
app.get('/homeadminss', (req, res) => {
    let totalCourses = 0;
    let course1 = Course_1.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course2 = Course_2.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course3 = Course_3.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course4 = Course_4.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course5 = Course_5.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();;
    let course6 = Course_6.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course7 = Course_7.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course8 = Course_8.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course9 = Course_9.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course10 = Course_10.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course11 = Course_11.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    let course12 = Course_12.aggregate([
        {
            $group: {
                _id: "$category_name",
                totalCourses: { $sum: 1 }
            }
        }
    ]).exec();
    Promise.all([course1, course2, course3, course4, course5, course6, course7, course8, course9, course10, course11, course12])
        .then((data) => {
            let totalCourses = data.reduce((acc, val) => acc + val[0].totalCourses, 0);
            res.json({ totalCourses });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Error retrieving data from collections' });
        });
});

//Get total users 
app.get("/homeusers", (req, res) => {
    let totalUsers = 0;
    User.aggregate([
        {
            $group: {
                _id: "$rollno",
                totalUsers: { $sum: 1 }
            }
        }
    ])
        .exec((err, data) => {
            if (err) {
                res.status(500).json({
                    message: "Error in getting total users",
                    error: err
                });
            } else {
                totalUsers = data[0].totalUsers;
                res.status(200).json({ totalUsers });
            }
        });
});

//Get total downlaod courses
app.get("/homedownloadtotal", (req, res) => {
    let totaldownload = 0;
    Downloadcourses.aggregate([
        {
            $group: {
                _id: "$rollno",
                totaldownload: { $sum: 1 }
            }
        }
    ])
        .exec((err, data) => {
            if (err) {
                res.status(500).json({
                    message: "Error in getting total download",
                    error: err
                });
            } else {
                totaldownload = data[0].totaldownload;
                res.status(200).json({ totaldownload });
            }
        });
});







// Get homeadmin Information
app.get('/homeadmin', (req, res) => {

    User.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Sucessfull");
        }
    })
})
// Add course Get API
app.get('/Addcourse/:id', (req, res) => {
    const id = req.params.id;
    Course_1.find({ course_id: id }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Suceesfull");
        }
    });
})

// Get All data
app.get('/Addcourse', (req, res) => {

    Course_1.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs)
            console.log("Suceesfull");
        }
    });
})

//Get user profile data for specific courses
app.get('/profile', (req, res) => {
    const userId = logedInUsers; // assuming you have the user's ID available through a logged in session
    Downloadcourses.find({ user_id: userId }, (err, downloads) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.json(downloads);
        }
    });
});

//-----------------------------------------------------------------------------
//Delete for UI course
app.delete('/uidlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_1.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});

app.delete('/artdlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_2.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});

app.delete('/csdlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_3.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});

app.delete('/historydlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_4.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});
app.delete('/sedlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_5.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});
app.delete('/infodlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_6.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});

app.delete('/healthdlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_7.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});

app.delete('/markdlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_8.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});

app.delete('/graphicdlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_9.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});

app.delete('/musicdlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_10.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});

app.delete('/buisnessdlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_11.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});
app.delete('/webdlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    Course_12.findOneAndDelete({ course_id: Id }, (err, course) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!course) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send();
        }
    });
});
//-=----------------------------------------------------------------------------

//Dlte register user
app.delete('/userdlte/:id', (req, res) => {
    // Get the user ID from the URL parameters
    const Id = req.params.id;

    // Find and remove the user from the database
    User.findOneAndDelete({ roll: Id }, (err, userss) => {
        if (err) {
            // If an error occurs, send a 500 status code
            res.status(500).send(err);
        } else if (!userss) {
            // If the course is not found, send a 404 status code
            res.status(404).send('Course not found');
        } else {
            // If the course is successfully deleted, send a 204 status code (no content)
            res.status(204).send({ message: "User Deleted...!!!" })
        }
    });
});
app.listen(9002, () => {
    console.log("BE started at port 9002")
})