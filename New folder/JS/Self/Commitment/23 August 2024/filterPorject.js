//Simple Project-2 to understand 
const sectionA=[
    {firstName:"Basit",lastName:"Ali",gender:"Male",registratioNo:"S23BSCS012",DOB:"01 March,2005"},
    {firstName:"Konain",lastName:"Fatima",gender:"Female",registratioNo:"S23BSCS032",DOB:"0 Apirl,2003"},
    {firstName:"Shehzad",lastName:"Ali",gender:"Male",registratioNo:"S23BSCS001",DOB:"03 May,2002"},
    {firstName:"Shahid",lastName:"Hussain",gender:"Male",registratioNo:"S23BSCS018",DOB:"04 June,2003"},
    {firstName:"Teesheen",lastName:"Fatima",gender:"Female",registratioNo:"S23BSCS004",DOB:"05 July,2006"},
    {firstName:"Sugra",lastName:"Batool",gender:"Female",registratioNo:"S23BSCS069",DOB:"06 August,2002"},
    {firstName:"Sana",lastName:"Fatima",gender:"Female",registratioNo:"S23BSCS086",DOB:"07 September,2004"},
    {firstName:"sumaira",lastName:"Batool",gender:"Female",registratioNo:"S23BSCS052",DOB:"08 Octobar,2005"},
    {firstName:"Mubashir",lastName:"Ahmad",gender:"Male",registratioNo:"S23BSCS009",DOB:"09 November,2003"},
    {firstName:"Masooma",lastName:"Batool",gender:"Male",registratioNo:"S23BSCS028",DOB:"10 December,2004"},
    {firstName:"Eman",lastName:"Zahra",gender:"Female",registratioNo:"S23BSCS025",DOB:"11 Junuary,2005"},
    {firstName:"Muhammad ",lastName:"Hanif",gender:"Male",registratioNo:"S23BSCS017",DOB:"12 February,2003"},
    {firstName:"Konain",lastName:"Fatima",gender:"Female",registratioNo:"S23BSCS031",DOB:"13 March,2003"},
    {firstName:"Zeeshan",lastName:"Haider",gender:"Male",registratioNo:"S23BSCS036",DOB:"14 March,2001"},
    {firstName:"Jamil",lastName:"Ahmad",gender:"Male",registratioNo:"S23BSCS002",DOB:"15 Apirl,2005"},
    {firstName:"Ali",lastName:"Kazim",gender:"Male",registratioNo:"S23BSCS027",DOB:"16 May,2003"},
    {firstName:"Shehnaz",lastName:"Fatima",gender:"Female",registratioNo:"S23BSCS021",DOB:"17 June,2003"},
    {firstName:"Shahid",lastName:"Hussain",gender:"Male",registratioNo:"S23BSCS026",DOB:"18 july,2003"},
    {firstName:"Abdul",lastName:"Aziz",gender:"Male",registratioNo:"S23BSCS007",DOB:"19 August,2002"},
    {firstName:"Kumail",lastName:"Abbas",gender:"Male",registratioNo:"S23BSCS088",DOB:"20 September,2004"},
    {firstName:"Nida",lastName:"Fatima",gender:"Female",registratioNo:"S23BSCS019",DOB:"21 October,2006"},
    {firstName:"Mohsin",lastName:"Ejaz",gender:"Male",registratioNo:"S23BSCS077",DOB:"22 November,2003"},
    {firstName:"Ghulam",lastName:"Mustafa",gender:"Male",registratioNo:"S23BSCS039",DOB:"23 December,2002"},
    {firstName:"Shazia",lastName:"Kazim",gender:"Female",registratioNo:"S23BSCS037",DOB:"24 Junuary,2003"},
    {firstName:"Maryam",lastName:"Batool",gender:"Female",registratioNo:"S23BSCS034",DOB:"25 February,2004"},
    {firstName:"Muneer",lastName:"Majeed",gender:"Male",registratioNo:"S23BSCS023",DOB:"26 March,2004"},
    {firstName:"Siraj",lastName:"Ali",gender:"Male",registratioNo:"S23BSCS024",DOB:"27 Apirl,2004"},
    {firstName:"Muhammad",lastName:"Sammer",gender:"Male",registratioNo:"S23BSCS015",DOB:"28 May,2003"},
    {firstName:"Muhammad",lastName:"Ibrahim",gender:"Male",registratioNo:"S23BSCS010",DOB:"29 june,2003"},
    {firstName:"Daniyal",lastName:"Hussain",gender:"Male",registratioNo:"S23BSCS038",DOB:"30 july,2002"},
    {firstName:"Muhammad",lastName:"Jamal",gender:"Male",registratioNo:"S23BSCS035",DOB:"31 August,2004"},
    {firstName:"Mehak",lastName:"Zahra",gender:"Female",registratioNo:"S23BSCS093",DOB:"01 September,2004"},
    {firstName:"Fatima",lastName:"sughra",gender:"Female",registratioNo:"S23BSCS089",DOB:"02 October,2003"},
    {firstName:"Shehneela",lastName:"Taqi",gender:"Female",registratioNo:"S23BSCS078",DOB:"03 November,2003"},
    {firstName:"Yasir",lastName:"Hussain",gender:"Male",registratioNo:"S23BSCS013",DOB:"04 December,2003"}
]


const student=sectionA.filter((val)=>{

    return val.gender==="Female"
})
console.log(student)
