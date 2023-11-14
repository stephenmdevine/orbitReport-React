import styles from './styling.css'

const Table = ({ sat }) => {
  let body = sat.map((id, data) => {});
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data) => {
        const row = (
          <tr>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? "active" : "inactive"}</td>
          </tr>
        );
        return row;
      })}
     </tbody>
   </table>
  );
};

export default Table;