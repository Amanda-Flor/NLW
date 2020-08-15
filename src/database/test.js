const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //inserir dados 

    proffyValue = {
        name:"Amanda Flor",
        avatar:"https://avatars0.githubusercontent.com/u/44512595?s=460&u=2a3830fe48d59e688d8651825aced7591cb2c24a&v=4" ,
        whatsapp:"11991254822",
        bio:"Professora 20 anos da disciplina de Física.",
    }

    classValue = {
        subject:4,
        cost:"30"
        //o proffy id virá pelo banco de dados 
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrarmos a classe
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos 

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)

    //consultar as classes de um determinado professor e trazer junto os ddados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    //o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    //o time_to precisa ser acima 
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "520"
    `)
    //console.log(selectedClassesSchedules)
    
})