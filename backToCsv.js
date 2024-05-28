//Convert back to Csv
let finalArray=
[
  { ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' },
  { ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' },
  { ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' },
  {
    ID: '98',
    Name: 'Bill',
    Occupation: 'Doctor’s Assistant',
    Age: '26'
  }
];
console.log(finalArray);
const csvString = [
    [
      "ID",
      "Name",
      "Occupation",
      "Age"
    ],
    ...finalArray.map(item => [
      item.ID,
      item.Name,
      item.Occupation,
      item.Age
    ])
  ];

console.log(csvString);
