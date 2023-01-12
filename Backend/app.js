import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import multer from "multer";


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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


//st0rage disk
// var Storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });
//

//Mutler
// var upload = multer({
//     storage: Storage
// }).single('testImage');


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

// User Login Post

app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
})




// User login get Api

app.get("/login", (req, res) => {
    const { email } = req.body;
    User.findOne({ email: email }, (err, User) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "An error occurred while trying to find the user." });
        } else if (User) {
            res.send({ message: "User Info", User });
        } else {
            res.status(404).send({ message: "User not found" });
        }
    });
});


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





////////////////////////////////////////////////////////////////////////////////////////
// Get APIs FOR COURSES CATEGORY WISE
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





// Get Register User Table Information
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







app.listen(9002, () => {
    console.log("BE started at port 9002")
})