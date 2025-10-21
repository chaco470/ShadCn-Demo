"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table"
import Image, { StaticImageData } from 'next/image'

// Estructura de la columna a mostrar, el tipo debe coincidir con el del objeto a mostrar
export type Employee = {
  id: number, 
  firstName: string, 
  lastName: string, 
  teamName: string, 
  isTeamleader: boolean, 
  avatar?: string | StaticImageData;
}

//La columna toma el type del objeto a mostrar, se usa un objeto por cada campo a mostrar
export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({row}) => {
        const avatar:string = row.getValue("avatar");
        const firstName:string = row.getValue("firstName");
        const lastName:string = row.getValue("lastName");
        return <Avatar>
              {!!avatar && <Image height={40} width={40} src={avatar} alt='employee of the month'/>}
              <AvatarFallback>{firstName[0]}{lastName[0]}</AvatarFallback>
            </Avatar>
    }
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "teamName",
    header: "Team",
  },
  {
    accessorKey: "isTeamleader",
    header: "Is Team Leader",
    cell: ({row}) => {
        const isTeamleader:boolean = row.getValue("isTeamleader");
        return isTeamleader && <Badge className="bg-primary">{isTeamleader? "Team Leader" : ""}</Badge>
    }
  },
]