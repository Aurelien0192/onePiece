import { getBoat } from "./api"

type crew = {
  id : number,
  name : string,
  description : string|null,
  status : string,
  number : string,
  roman_name : string,
  total_prime : string,
  is_yonko: boolean
}

type fruit = {
  filename: string,
  name: string,
  description : string
  technicalFile : string
}

type character_captain = {
  id : number,
  name: string,
  size: string,
  job: string,
  status: string,
  age: string,
  bounty: string,
  crew : crew,
  fruit: fruit,
}

type boat = {
  id : number,
  name : string,
  description : string|null,
  type : string,
  roman_name : string,
  crew : crew,
  character_captain : character_captain
}
class Boat{
  private _id : number
  private _name : string
  private _description : string|null
  private _type : string
  private _roman_name : string
  private _crew : crew
  private _character_captain : character_captain

  constructor(boats : boat){
    this._id = boats.id
    this._name = boats.name
    this._description = boats.description
    this._type = boats.type
    this._roman_name = boats.roman_name
    this._crew = boats.crew
    this._character_captain = boats.character_captain
  }
  getid(){
    return this._id
  }
  getName(){
    return this._name
  }
  getDescribe(){
    return this._description
  }
  gettype(){
    return this._type
  }
  getRoman(){
    return this._roman_name
  }
  getCrew(){
    return this._crew
  }
  getCaptain(){
    return this._character_captain
  }
}
const root: HTMLElement = document.getElementById("app") as HTMLElement
let boats: Array<Boat> = []

getBoat().then((res:Array<boat>) => {
  res.forEach(e => {
    const boat = new Boat(e)
    boats.push(boat)
  });

  console.log(boats)

  boats.forEach((e) => {
    const pName : HTMLParagraphElement = document.createElement("p")
    pName.innerText = e.getName()
    root.appendChild(pName)
  })

})
