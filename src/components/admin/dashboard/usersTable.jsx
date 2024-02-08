
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Card
} from "@tremor/react";

async function getUsers() {
    const res = await fetch('https://apigenerator.dronahq.com/api/92T9eIIy/users')
     
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function UsersTable() {
    const users= await getUsers();
  return (
    <Card className="mt-8">
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Avatar</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users && users.map((user) => (
          <TableRow key={user.id}>
            <TableCell><img src={user.avatar} width="40" height="40" style={{borderRadius: "50%"}}/></TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Card>
  );
}