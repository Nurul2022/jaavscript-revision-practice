// let animal = {
//     name: "dog",
//     color: "brown",
//     age: 7,
//   };

// // let animal = undefined  
// // const {age, ...rest} = animal || {};
// // console.log(rest)


// //   let { age, ..rest } = animal;

// const sum =(info) => {
//     console.log(info?.name);
// }

// sun(animal);



const dreamGirl = [
    {
      dream1: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [
                { name: "rofik" },
                { name: "jobbar" },
                { name: "salam" },
                { name: "borkot" },
                undefined,
              ],
            },
          },
          { instagram: "https://www.instagram.com/" },
          { twitter: "https://twitter.com/" },
          { github: "https://github.com/" },
          { phone: ["01254823212", "02152457"] },
        ],
      },
    },
  ];
  
 // console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList);
  console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList)
  