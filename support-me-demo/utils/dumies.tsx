import { Employee } from '@/app/dashboard/employees/columns';
import at from '@/public/images/at.jpg'
import rd from '@/public/images/rd.png'
import sw from '@/public/images/sw.jpg'


export const workLocationsData = [
    {
    name: "Jan",
    office: 82,
    wfh: 44,
  },
  {
    name: "Feb",
    office: 80,
    wfh: 40,
  },
  {
    name: "Mar",
    office: 83,
    wfh: 42,
  },
  {
    name: "Apr",
    office: 50,
    wfh: 50,
  },
  {
    name: "May",
    office: 40,
    wfh: 60,
  },
  {
    name: "Jun",
    office: 60,
    wfh: 40,
  },
  {
    name: "Jul",
    office: 55,
    wfh: 55,
  },
  {
    name: "Aug",
    office: 49,
    wfh: 61,
  },
  {
    name: "Sep",
    office: 44,
    wfh: 70,
  },
  {
    name: "Oct",
    office: 40,
    wfh: 40,
  },
  {
    name: "Nov",
    office: 50,
    wfh: 50,
  },
  {
    name: "Dec",
    office: 50,
    wfh: 50,
  },
];

export const teamAvatars = [
  {
    id:1,
    firstName: "Rick",
    lastName: "Deckard",
    avatar: rd,
  },
  {
    id:2,
    firstName: "John",
    lastName: "Doe",
  },
  {
    id:3,
    firstName: "Mariano",
    lastName: "Lopez",
  },
  {
    id:4,
    firstName: "Leo",
    lastName: "Rodriguez",
  },
  {
    id:5,
    firstName: "Alan",
    lastName: "Turin",
    avatar: at,
  },
  {
    id:6,
    firstName: "Jeff",
    lastName: "Albertson",
  },
  {
    id:7,
    firstName: "Mickey",
    lastName: "Mouse",
    avatar: sw,
  },
  {
    id:8,
    firstName: "Ivan",
    lastName: "Perez",
  },

];

export const pieChartData = [
  {name:"Delta",value:55, color:"#84cc16"},
  {name:"Alpha",value:34, color:"#3b82f6"},
  {name:"Canary",value:11, color:"#f97316"}
]

export const lineData = [
  {
    name: "Jan",
    alpha: 40,
    delta: 24,
    canary: 24
  },
  {
    name: "Feb",
    alpha: 30,
    delta: 13,
    canary: 22
  },
  {
    name: "Mar",
    alpha: 20,
    delta: 98,
    canary: 22
  },
  {
    name: "Apr",
    alpha: 27,
    delta: 39,
    canary: 20
  },
  {
    name: "May",
    alpha: 18,
    delta: 48,
    canary: 21
  },
  {
    name: "Jun",
    alpha: 23,
    delta: 38,
    canary: 25
  },
  {
    name: "Jul",
    alpha: 34,
    delta: 43,
    canary: 21
  },
  {
    name: "Aug",
    alpha: 43,
    delta: 34,
    canary: 12
  },
  {
    name: "Sep",
    alpha: 30,
    delta: 13,
    canary: 22
  },
  {
    name: "Oct",
    alpha: 34,
    delta: 43,
    canary: 21
  },
  {
    name: "Nov",
    alpha: 27,
    delta: 39,
    canary: 20
  },
  {
    name: "Dev",
    alpha: 30,
    delta: 13,
    canary: 43
  },
]

export const employeesMockData:Employee[] = [
  { id: 1, firstName: "John", lastName: "Doe", teamName: "alpha", isTeamleader: false, avatar: at },
  { id: 2, firstName: "Maria", lastName: "Gomez", teamName: "beta", isTeamleader: true },
  { id: 3, firstName: "Liam", lastName: "Smith", teamName: "canary", isTeamleader: false },
  { id: 4, firstName: "Sophia", lastName: "Brown", teamName: "alpha", isTeamleader: false },
  { id: 5, firstName: "Ethan", lastName: "Johnson", teamName: "beta", isTeamleader: false },
  { id: 6, firstName: "Olivia", lastName: "Martinez", teamName: "canary", isTeamleader: true, avatar: rd },
  { id: 7, firstName: "Noah", lastName: "Wilson", teamName: "alpha", isTeamleader: true, avatar: sw },
  { id: 8, firstName: "Emma", lastName: "Lopez", teamName: "beta", isTeamleader: false },
  { id: 9, firstName: "Lucas", lastName: "Davis", teamName: "canary", isTeamleader: false },
  { id: 10, firstName: "Ava", lastName: "Garcia", teamName: "alpha", isTeamleader: false },
  { id: 11, firstName: "Mason", lastName: "Rodriguez", teamName: "beta", isTeamleader: false },
  { id: 12, firstName: "Isabella", lastName: "Hernandez", teamName: "canary", isTeamleader: false },
  { id: 13, firstName: "James", lastName: "Clark", teamName: "alpha", isTeamleader: false },
  { id: 14, firstName: "Mia", lastName: "Lewis", teamName: "beta", isTeamleader: false },
  { id: 15, firstName: "Benjamin", lastName: "Walker", teamName: "canary", isTeamleader: false }
]
export const totalEmployees = 100;
export const totalTeams = 8;
export const presentEmployees = 90;

