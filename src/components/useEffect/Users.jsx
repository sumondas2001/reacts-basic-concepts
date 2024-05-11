export default function Post({ user }) {
     const { name, email, username, website } = user;
     // console.log(user)
     return (
          <div className="m-10 ">
               <h1>name: {name}</h1>
               <h1>email: {email}</h1>
               <h1>users name: {username}</h1>
               <h1>website : {website}</h1>
          </div>
     )
}

