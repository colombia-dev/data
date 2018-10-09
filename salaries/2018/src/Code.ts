const percentages = [
  "0 - 10%",
  "10 - 20%",
  "20 - 30%",
  "30 - 40%",
  "40 - 50%",
  "50 - 60%",
  "60 - 70%",
  "70 - 80%",
  "80 - 90%",
  "90 - 100%",
]

const years = [
  "menos de 1 año",
  "1 año",
  "2 años",
  "3 - 5 años",
  "5 - 10 años",
  "10 - 15 años",
  "más de 15 años",
]

const yesNo = ["Sí", "No"]

const langs = [
  ".net",
  "Abap",
  "ABAP",
  "Android y swift",
  "Android",
  "Apex (Salesforce.com)",
  "Apex (Salesforce)",
  "APEX, VisualForce",
  "Asp.net",
  "Asp",
  "C",
  "C#",
  "C++",
  "Clojure",
  "Cobol",
  "CoffeeScript",
  "Delphi",
  "Depende del proyecto, puede variar el lenguaje de programación.",
  "Elixir",
  "Erlang",
  "ESQL",
  "Flex",
  "FoxPro",
  "G",
  "Genexus",
  "Go",
  "Groovy",
  "HTML/CSS",
  "Java",
  "JavaScript",
  "Ladder, grafcet",
  "Ninguna",
  "Ninguno",
  "No programo.",
  "Objective-C",
  "Objetive Pascal",
  "Oracle BI",
  "oracle pl",
  "Oracle pl/sql y Forms",
  "Oracle",
  "Pascal Delphi",
  "Pascal",
  "Peoplesoft",
  "Perl",
  "PHP, Javascript, HTML/CSS",
  "PHP",
  "pl sql",
  "PL SQL",
  "PL-SQL, Oracle Forms",
  "PL/SQL",
  "Pl/SQL",
  "PLSQL  -  Java",
  "plsql",
  "PLSQL",
  "PowerBuilder",
  "Powerbuilder",
  "Python",
  "RPG",
  "Ruby",
  "SAP",
  "Scala",
  "Shell",
  "Siebel",
  "sql server",
  "SQL",
  "Swift (Apple programming language)",
  "swift",
  "Swift",
  "T SQL",
  "T-SQL",
  "Transact SQL",
  "tsql",
  "Vb 6",
  "VB.Net",
  "VB.NET",
  "VB6 - VB.NET",
  "VBA",
  "VFP",
  "Visual Basic .NET",
  "Visual Basic .Net",
  "Visual Basic 6.0",
  "Visual Basic.Net",
  "visual basic",
  "Visual basic",
  "Visual Basic",
  "Visual Fox Pro",
  "Visual FoxPro",
  "X++ de Microsoft",
  "X++",
]

function addListQuestion(form: GoogleAppsScript.Forms.Form, title: string, choices: string[]) {
  let item = form.addListItem()
  item.setTitle(title)
      .setChoices(choices.map((choice) => item.createChoice(choice)))
  return form
}

function addNumberQuestion(form: GoogleAppsScript.Forms.Form, title: string) {
  //TODO: add number validation
  let item = form.addTextItem().setTitle(title)
  return form
}

function addOpenQuestion(form: GoogleAppsScript.Forms.Form, title: string) {
  let item = form.addTextItem().setTitle(title)
  return form
}

function addMultipleChoiceQuesiton(form, title: string, choices: string[], showOther = false) {
  let item = form.addMultipleChoiceItem();
  item.setTitle(title)
      .setChoices(choices.map((choice) => item.createChoice(choice)))
      .showOtherOption(showOther)
  return form;
}

function createForm() {
  let form = FormApp.create('Colombia Dev - Encuesta de Salarios 2018')

  addMultipleChoiceQuesiton(form, "¿Para qué tipo de empresa trabaja?", [
    "empresa extranjera",
    "empresa Colombiana con mercado EEUU",
    "soy independiente (freelance)",
    "empresa Colombiana con mercado Colombiano",
    "empresa Colombiana con mercado latinoamericano",
    "empresa Colombiana con mercado global",
  ])

  addMultipleChoiceQuesiton(form, "La empresa para la que usted trabaja se dedica principalmente a", [
    "servicio o producto de tecnología (similar a dropbox, github, stripe, heroku o hardware)",
    "consultoría y servicios de desarrollo de software a la medida",
    "servicio habilitado por tecnologia (similar a domicilios.com, uber, tappsi, bunny inc, etsy, e-commerce)",
    "soy independiente",
    "servicio no tecnológico (banca, seguros, contabilidad, etc)",
    "otro",
  ])

  addMultipleChoiceQuesiton(form, "¿Cuantos años de fundada tiene la empresa para la que trabaja?", [].concat(years).concat("soy independiente"))

  addMultipleChoiceQuesiton(form, "¿Tiene usted título de fundador en la empresa?", yesNo)

  addMultipleChoiceQuesiton(form, "¿Qué porcentaje de su tiempo laboral se ocupa en tareas relacionadas a desarrollo de software?", percentages)

  addMultipleChoiceQuesiton(form, "¿Qué porcentaje de su tiempo laboral se ocupa en gerencia de proyectos?", percentages)

  addMultipleChoiceQuesiton(form, "¿Qué porcentaje de su tiempo laboral se ocupa en liderazgo técnico?", percentages)

  addMultipleChoiceQuesiton(form, "¿Qué porcentaje de su tiempo laboral se ocupa en gerencia de ingenieria?", percentages)
  
  addMultipleChoiceQuesiton(form, "¿Cuánto tiempo lleva en su cargo actual (incluyendo freelance)?", years)

  addMultipleChoiceQuesiton(form, "¿Cuántos años de experiencia en desarrollo de software profesional tiene?", years)

  addListQuestion(form, "¿En cuál de los siguientes lenguajes de programación ocupa la mayoría de su tiempo laboral?", langs)

  addMultipleChoiceQuesiton(form, "Tipo de relación laboral", [
    "contratista",
    "empleado",
    "freelance",
  ])

  addMultipleChoiceQuesiton(form, "¿Tiene titulo universitario o técnico?", yesNo)
  addMultipleChoiceQuesiton(form, "¿Estudió alguna carrera de Pregrado relacionada a ingeniería de sistemas?", yesNo)
  addMultipleChoiceQuesiton(form, "¿Estudió alguna carrera de Posgrado relacionada a ingeniería de sistemas?", yesNo)
  addMultipleChoiceQuesiton(form, "¿Tomó clases de programación o algorítmia en la universidad?", yesNo)
  addMultipleChoiceQuesiton(form, "¿Cuál es su máximo titulo alcanzado (graduado)?", [
    "maestria",
    "pregrado",
    "bachiller",
    "ninguno",
    "post-doctorado",
    "doctorado",
  ])
  addMultipleChoiceQuesiton(form, "¿A usted le pagan en pesos colombianos (COP) o dólares (USD)?", [
    "COP",
    "USD",
  ])

  addNumberQuestion(form, "¿Cuanto es su salario ANUAL?")
  addNumberQuestion(form, "¿Cuanto era el salario ANUAL de su trabajo anterior?")
  addMultipleChoiceQuesiton(form, "¿Quién paga su seguro de salud?", [
    "mi empleador",
    "yo",
    "no tengo",
  ])

  addMultipleChoiceQuesiton(form, "¿Quién paga sus pensiones y cesantias?", [
    "mi empleador",
    "yo",
    "no tengo",
  ])

  addNumberQuestion(form, "Si tiene acciones (opciones) en la empresa, que porcentaje de participación tiene")

  addMultipleChoiceQuesiton(form, "¿Trabaja usted en proyectos freelance a pesar de tener trabajo tiempo completo?", yesNo)
  addNumberQuestion(form, "¿Cuanto fue el total de sus ingresos adicionales de proyectos freelance el año pasado?")
  addMultipleChoiceQuesiton(form, "¿Siente que su salario es justo?", yesNo)
  addNumberQuestion(form, "¿Cuantos años tiene?")
  addMultipleChoiceQuesiton(form, "¿Con cual pronombre prefiere que se refieran a usted?", ["el", "ella"], true)
  addMultipleChoiceQuesiton(form, "¿Cuál es su nivel de inglés para realizar conversaciones técnicas sobre software?", [
    "avanzado",
    "intermedio",
    "nativo",
    "básico",
    "ninguno",
  ])

  addMultipleChoiceQuesiton(form, "¿Se considera usted parte de una minoría racial o étnica?", yesNo)
  addNumberQuestion(form, "¿Cuantos hijos tiene?")
  addOpenQuestion(form, "¿En que ciudad de Colombia vive?")
  
  Logger.log('Published URL: ' + form.getPublishedUrl())
  Logger.log('Editor URL: ' + form.getEditUrl())
}
