import produce from 'immer'
import React from 'react'

const UserInfo:React.FC<any> = (props) => {
    const [userInfo, setUserInfo] = React.useState({
        name: "",
        email: "",
        id: ""
    })

   if(props.keycloak) {
       props.keycloak.loadUserInfo()
       .then((info:any) => {
           setUserInfo(produce(userInfo, (draft) => {
               draft.name= info.preferred_username;
               draft.email = info.email_verified;
               draft.id = info.sub
           }))
       })
   } 

  return (
    <div>
        <ul style={{border: "1px solid #eee"}}>
            <li>
                {userInfo.name}
            </li>
            <li>
                {userInfo.email}
            </li>
            <li>
                {userInfo.id}
            </li>
        </ul>
    </div>
  )
}

export default UserInfo