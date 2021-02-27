var job_data = [{
        date: "2021",
        company: ["NVTEK", "NVTEK"],
        position: "Video Streaming and Server Engineer",
        discription: "The 'Electronic Hard Dart Machine' developed by NVTEK uses hard darts. After taking images with a camera, the darts are positioned and scored through computer vision, so that traditional hard darts can also compete with other players through the Internet.  Retain the advantages of both soft darts and hard darts. When I was a R&D engineer at NVTEK, my development project was mainly machine screen streaming service ' FidoLive ' , and the development tools used included Raspberry Pi, Winform, GStreamer, and Microsoft System.Net.Sockets services.",
        url: "https://i.imgur.com/UvafQkBm.png",
        moreinfos: ["https://i.imgur.com/DfygBcp.png", "https://i.imgur.com/qksEWuG.png", "https://i.imgur.com/RlgqE7S.png", "https://i.imgur.com/yIDK5mO.png"],
        tools: ["C#", "WinForm", "Unity", "TCP Socket", "Raspberry Pi"]
    }, {
        date: "2020",
        company: ["NTHU Libaray", "NTHU-Library"],
        position: "Front-end Engineer Part Time",
        discription: "I assisted in the creation of a presentation webpage for the exhibition held by the National Tsing Hua University Library. My work included web image design and web page creation. 'Paper Plant' is a project I made, and it took about two weeks from planning to finish. Tools I used include: Vue.js, Swiper.js, Skrollr.js, Bootstrap, etc.",
        url: "https://i.imgur.com/fepoDXZm.png",
        // link: "https://www.lib.nthu.edu.tw/events/2020/PaperPlant/",
        moreinfos: ["https://i.imgur.com/qnrTvJg.png", "https://i.imgur.com/gYBuDCV.png", "https://i.imgur.com/tJDUSlq.png", "https://i.imgur.com/sm3v4M7.png"],
        tools: ["HTML", "CSS", "javaScript", "Vue.js", "Swiper.js", "Skrollr.js", "Bootstrap", "Sass", "Pug"]
    }, {
        date: "2020",
        company: ["Dot2Dot", "Dot2Dot"],
        position: "Storyboarding & Character Design",
        discription: "During the six months of Dot2Dot internship, I participated in three large and small projects. Among them, in the ' Who's Our Sub Today? (tentative)' original animation series, I made three episodes of the storyboard. I was responsible for the character design in the 'Time In A Bottle (tentative)' animated feature film. In 'Can you sing ? ', a 'Fruity Ice Cream' Music MV, I did the story script. In this experience, I learned different details of animation production, the method of storytelling through storyboarding and characters. I get familiar with the operation of the software Storyboarder as well",
        url: "https://i.imgur.com/YQvmpOmm.png",
        moreinfos: ["https://i.imgur.com/i1HfxbZ.png"],
        tools: ["Photoshop", "StoryBoard"]
    },
    {
        date: "2019",
        company: ["SuSu Clothes", "susuclothes"],
        position: "Design Artist",
        discription: "SuSu Clothes is a garment company operated by Tsing Hua University students, whose main business is the production of group garments. During the six months I have been in SuSu Clothes, my job content is to assist clients in making customized t-shirts, hats, flags and other fabrics. The job content includes designing patterns, drawing, fine-tuning, file conversion, conceptual drawing, etc. I worked with more than 20 groups of customers.",
        url: "https://i.imgur.com/rxMMIalm.png",
        moreinfos: ["https://i.imgur.com/pAqWoTG.png"],
        tools: ["Illustrator"]
    },
    {
        date: "2019",
        company: ["NTHU OCW", "NTHU-OCW"],
        position: "Poster and Advertising Design",
        discription: "NTHU OCW is the online course platform of National Tsing Hua University. I worked as an art work student in this unit for two years. I did posters for courses and other propaganda product design. I produced six course poster designs, three sets of propaganda products and several advertising pieces.",
        url: "https://i.imgur.com/ItPO5Rpm.png",
        moreinfos: ["https://i.imgur.com/6BtKFBA.png"],
        tools: ["Photoshop", "Illustrator"]
    },
    {
        date: "2019",
        company: ["NTHU Special Administration", "NTHU-pickup"],
        position: "Logo Design",
        discription: "I Designed the Logo for NTHU Special Administration, which is used in official websites, promotional prints, and various documents。",
        url: "https://i.imgur.com/Sdak11jm.png",
        moreinfos: ["https://i.imgur.com/NefUScP.png"],
        // link: "http://project.isync.tw/",
        tools: ["Illustrator"]
    },
    {
        date: "2019",
        company: ["KOINONIA Student Fellowship", "KOINONIA"],
        position: "Network Advertising Graphic",
        discription: "KOINONIA Student Fellowship is a student club in NTHU. I served as a propaganda editor in the club, responsible for the network propaganda and printed materials of various activities.",
        url: "https://i.imgur.com/f9T7Cf9m.png",
        moreinfos: ["https://i.imgur.com/NE1XP2V.png", "https://i.imgur.com/xS2oQlB.png", "https://i.imgur.com/vpaWaYr.png"],
        tools: ["Photoshop", "Illustrator"]
    },
    {
        date: "2018",
        company: ["Rehoboth Pioneer", "Zhubei"],
        position: "Character Design",
        discription: "I designed characters for a escaped room composed by Rehoboth Pioneer. The seven characters represent seven entrepreneurial factors, and the expedition team is the design concept。",
        url: "https://i.imgur.com/96w6vBZm.png",
        moreinfos: ["https://i.imgur.com/deyy2ti.png"],
        tools: ["Photoshop"]
    },
    {
        date: "2018",
        company: ["ZU Creative Education", "ZU"],
        position: "Textbook Illustrations & Advertising Graphics",
        discription: "I drew illustrations of teaching materials aimed at elementary school students’ science education, as well as publicity pictures and texts for operating fans.",
        url: "https://i.imgur.com/zEyFVYTm.png",
        moreinfos: ["https://i.imgur.com/wGbr8T5.png"],
        tools: ["Photoshop", "Illustrator"]
    }
    // ,{
    //   date: "",
    //   company: "",
    //   position: "",
    //   discription: ""
    // }

];

var vm_job = new Vue({
    el: "#job",
    data: {
        jobs: job_data
    }
});

var program_data = [{
        item: "Html/Pug",
        percentage: "90"
    }, {
        item: "CSS/SASS",
        percentage: "90"
    },
    {
        item: "Javascript/jQuery",
        percentage: "80"
    }, {
        item: "C#",
        percentage: "80"
    }, {
        item: "C/C++",
        percentage: "70"
    }
];

var vm_program = new Vue({
    el: "#program",
    data: {
        skills: program_data
    }
})

var skill_data = [{
        item: "Raspberry Pi",
        percentage: "85"
    }, {
        item: "Linux",
        percentage: "80",
    },
    {
        item: "Unity",
        percentage: "80"
    },
    {
        item: "Winform",
        percentage: "80"
    }, {
        item: "Vue.js",
        percentage: "75"
    }, {
        item: "P5.js",
        percentage: "75"
    }, {
        item: "GStreamer",
        percentage: "75"
    }
    //   {
    //   item: "",
    //   percentage: "",
    //   discription: ""
    // }
]

var vm_skill = new Vue({
    el: "#skill",
    data: {
        skills: skill_data
    }
})

var soft_data = [{
        item: "Photoshop",
        percentage: "95"
    }, {
        item: "Illustrator",
        percentage: "90",
    },
    {
        item: "Story Board",
        percentage: "80"
    }
    //   {
    //   item: "",
    //   percentage: "",
    //   discription: ""
    // }
]

var vm_soft = new Vue({
    el: "#soft",
    data: {
        skills: soft_data
    }
})

var eng_data = [{
        item: "Listening",
        percentage: "95"
    }, {
        item: "Speaking",
        percentage: "90",
    },
    {
        item: "Reading",
        percentage: "90"
    },
    {
        item: "Writing",
        percentage: "85"
    }
    //   {
    //   item: "",
    //   percentage: "",
    //   discription: ""
    // }
]

var vm_eng = new Vue({
    el: "#eng",
    data: {
        skills: eng_data
    }
})


var event_data = [{
        date: 2020,
        company: ["Programming Project", "pickColor"],
        position: "Color Generator",
        url: "https://i.imgur.com/pffwuoEl.png",
        link: "https://codepen.io/ycl/full/MWjXPvd"
    }, {
        date: 2020,
        company: ["Programming Project", "minesweeper"],
        position: "Mine Sweeper",
        url: "https://i.imgur.com/NKayWvWl.png",
        link: "https://codepen.io/ycl/full/KKNZxag"
    }, {
        date: 2020,
        company: ["Programming Project", "still"],
        position: "One Page Resume",
        url: "https://i.imgur.com/fi7jZ8Hl.png",
        link: "https://codepen.io/ycl/full/RwrZJJr"
    }, {
        date: 2019,
        company: ["Programming Project", "stack"],
        position: "Stack/Queue Demo",
        url: "https://i.imgur.com/mnLmo9pl.png",
        link: "https://codepen.io/ycl/full/WNQgGBB"
    }, {
        date: 2020,
        company: ["Programming Project", "koweb"],
        position: "Club Demo Website",
        url: "https://i.imgur.com/VnpEZQIl.png",
        link: "https://yun-chien-lo.github.io/demoGPHC/index.html"
    }, {
        date: 2018,
        company: ["2018 China Mission Team Foundraisor", "postCard"],
        position: "Postcard Design & Production",
        discription: "I planned to raise funds for the 2018 Winter China Mission Team of Grace Point Church, Hsin Chu. At that time, our fundraising plan was as follows: We first sent out a pre-order form, stating that we are a group of college students who are about to go to China to preach the gospel. If you donate, we will send postcards made by us. The photos of the postcards were taken when we were in Hunan, Hubei, Guangxi, and Yunnan. I participated in the planning, development and execution, and I was responsible for selecting pictures, retouching pictures, drawing patterns on the back, printing, and collecting and distributing money.",
        url: "https://i.imgur.com/pyjcikLl.png",
        moreinfos: ["https://i.imgur.com/YgOk6eXl.png", "https://i.imgur.com/8h2WMZel.png", "https://i.imgur.com/eqAQ1thl.png", "https://i.imgur.com/A6jsyFel.png", "https://i.imgur.com/Cvr1BQVl.png", "https://i.imgur.com/mTSrS98l.png"],
        tools: []
    }, {
        date: 2019,
        company: ["2019 Solo Art Gallary", "gallary"],
        position: "Try & Error",
        discription: "During my studies at National Tsing Hua University, I participated in the 'Tsinghua Art Collection' and was given the opportunity to hold a solo art gallary. The exhibition is called 'Try & Error', because I think that different things experienced in life are repeated attempts, mistakes, and continued attempts. Works include acrylic works and electric painting works.",
        url: "https://i.imgur.com/ihGPBmAl.png",
        moreinfos: ["https://i.imgur.com/c681Gonl.png", "https://i.imgur.com/NBdCDC0l.png", "https://i.imgur.com/ENMQrS8l.png", "https://i.imgur.com/v2zArFNl.png"],
        tools: []
    }, {
        date: 2018,
        company: ["Game Programming Final Project", "unity"],
        position: "Phah-Piann",
        discription: "This is a game prototype project developed by Unity. It is a game that is close to the life experience of the post-80s generation in Taiwan. It expresses that past choices often affect the circumstances of our lives. The protagonist of the background story is A-min. When he was 15 years old, he was full of dreams and rebellion. Ten years later, the 25-year-old A-min was useless: no money, no ideals, and no future. Maybe the gods who have been enshrined in the house for a long time want to give A-min a chance! The inconspicuous standing mirror in the hall of the gods can even take him back to the past through time and space. Thinking of the mistakes made by the young and frivolous in the past, A-min couldn't help thinking: If I could change the original decision, would I be doing well now? The way the game progresses is that players need to explore the room first to find props and clues. Players don't know the above plot at the beginning of the game, and will be given clues to the plot as the game progresses.",
        url: "https://i.imgur.com/lLBRgKPl.png",
        moreinfos: ["https://i.imgur.com/4rzSbDK.png"],
        tools: []
    },
    {
        date: 2020,
        company: ["2020 NTU Biomedical Electronics Camp", "susuclothes"],
        position: "Poster & Visial Design",
        discription: "",
        url: "https://i.imgur.com/Qfl82kil.png",
        moreinfos: ["https://app.bebi.ntu.edu.tw/camp2020/assets/poster2020.png"],
        tools: []
    },
    // {
    //     date: 2019,
    //     company: ["擺攤", "NTHU-OCW"],
    //     position: "海報與文宣品設計",
    //     discription: "清大ocw是清大的線上課程平台，我在此單位做美術工讀生為期兩年的時間。清大online course website 課程海報繪製以及周邊文宣商品設計，製作過六堂課程宣傳、三組文宣品與數次文宣圖。",
    //     url: "https://i.imgur.com/HI6XA3ul.png",
    //     moreinfos: [],
    //     tools: []
    // },
    {
        date: 2020,
        company: ["Koinonina Graduation Reception", "graduation"],
        position: "Graphic & Visial Design",
        discription: "",
        url: "https://i.imgur.com/lwzMxjgl.png",
        moreinfos: ["https://i.imgur.com/rW4x9UOl.png", "https://i.imgur.com/r14YCN7l.png", "https://i.imgur.com/FcRef2Tl.png", "https://i.imgur.com/48Luobul.png"],
        tools: []
    },
    {
        date: 2020,
        company: ["Previous Work", "shirt"],
        position: "T-shirt Design",
        discription: "",
        url: "https://i.imgur.com/YyD3Rygl.png",
        moreinfos: ["https://i.imgur.com/VXBChpl.jpg", "https://i.imgur.com/89KLzyX.jpg", "https://i.imgur.com/I3R1zme.png", "https://i.imgur.com/x3p7Vtk.png"],
        tools: []
    },
    // {
    //     date: 2018,
    //     company: ["新生手冊", "Zhubei"],
    //     position: "角色設計",
    //     discription: "參與力和博創業工作坊中，密室逃脫角色設計。七個角色分別代表七項創業因素，以探險遠征隊為設計概念。",
    //     url: "https://i.imgur.com/uiJg2E3l.png",
    //     moreinfos: [],
    //     tools: ["Photoshop"]
    // },
    {
        date: 2020,
        company: ["Digital Art", "digitalArt"],
        position: "其他電繪作品",
        discription: "",
        url: "https://i.imgur.com/otgHFFSl.png",
        moreinfos: ["https://i.imgur.com/odqdkJr.png", "https://i.imgur.com/APpqdYM.png", "https://i.imgur.com/hywHqwp.png", "https://i.imgur.com/QLV52UM.png", "https://i.imgur.com/s8m1MPW.png", "https://i.imgur.com/GxNPjJS.png", "https://i.imgur.com/TQjfRUA.png", "https://i.imgur.com/otgHFFSl.png"],
        tools: ["Photoshop", "Illustrator"],
        link: null
    },
    {
        date: 2018,
        company: ["Individual Studies", "smartcampus"],
        position: "Smart Campus",
        discription: "The Smart Campus website is a monitoring platform for the Smart Campus of National Tsinghua University, providing information on sensors such as temperature, humidity, and wind speed. In addition, there are voltage, current, and cameras for smart street lights, which support the display of real-time data and the function of querying historical data. The content of this topic is to rewrite and typeset this existing website, add more design elements, and improve the presentation and intuition of the user experience. The project includes: a new homepage, search page, Chinese-English switching, data presentation, mobile version, as well as Logo Design and source code sorting.",
        url: "https://i.imgur.com/K6T6BWhl.png",
        moreinfos: ["https://i.imgur.com/iOL4BUDl.png", "https://i.imgur.com/Lp7LDMUl.png", "https://i.imgur.com/qLq1d4Al.png", "https://i.imgur.com/EWFzDHKl.png"],
        tools: []
    },
    {
        date: 2018,
        company: ["Help a friend", "claire"],
        position: "Resume Website",
        discription: "",
        url: "https://i.imgur.com/LhRGfZ6l.png",
        moreinfos: [],
        tools: [],
        link: "https://codepen.io/ycl/full/xxGdzqR"
    },
    {
        date: 2019,
        company: ["2019", "reseme"],
        position: "Resume",
        discription: "",
        url: "https://i.imgur.com/YpZS3VPl.png",
        moreinfos: [],
        tools: [],
        link: "https://codepen.io/ycl/full/xxwrrEe"
    },
    {
        date: 2020,
        company: ["Certificate", "ZU"],
        position: "Front-end Online Course",
        discription: "",
        url: "https://i.imgur.com/YX68GHBl.png",
        moreinfos: ["https://i.imgur.com/YX68GHB.png"],
        tools: []
    }, {
        date: 2020,
        company: ["", "other"],
        position: "Graphic Design",
        discription: "",
        url: "https://i.imgur.com/NE1XP2V.png",
        moreinfos: ["https://i.imgur.com/mvIdJyv.png", "https://i.imgur.com/8Epm8eQ.png", "https://i.imgur.com/4YWJw0a.png", "https://i.imgur.com/4sTC2uc.png", "https://i.imgur.com/WLfKNLL.png", "https://i.imgur.com/AP0TdM6.png"]
    }




    // ,{
    //   date: "",
    //   company: "",
    //   position: "",
    //   discription: ""
    // }

];

var vm_event = new Vue({
    el: "#event",
    data: {
        events: event_data
    },
    methods: {
        even: function(arr) {
            // Set slice() to avoid to generate an infinite loop!
            return arr.slice().sort(function(a, b) {
                return (b.date - a.date);
            });
        }
    }
});